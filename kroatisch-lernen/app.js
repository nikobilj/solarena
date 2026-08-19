// Lern-Engine (vanilla JS, kein Build-Schritt nötig)

const STORAGE_KEY = "hr_course_state_v1";
const MAX_HEARTS = 5;

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { completedLessons: [], xp: 0, streak: 0, lastActiveDate: null };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

// ---------- Lesson lookup helpers ----------

function allLessonsFlat() {
  const flat = [];
  COURSE.units.forEach((unit, uIdx) => {
    unit.lessons.forEach((lesson, lIdx) => {
      flat.push({ unit, lesson, uIdx, lIdx });
    });
  });
  return flat;
}

function isLessonUnlocked(lessonId) {
  const flat = allLessonsFlat();
  const idx = flat.findIndex((f) => f.lesson.id === lessonId);
  if (idx === 0) return true;
  if (idx < 0) return false;
  const prev = flat[idx - 1];
  return state.completedLessons.includes(prev.lesson.id);
}

function isLessonCompleted(lessonId) {
  return state.completedLessons.includes(lessonId);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- Runtime lesson state ----------

let currentLesson = null;
let currentExerciseIdx = 0;
let hearts = MAX_HEARTS;
let correctCount = 0;
let xpEarnedThisLesson = 0;
let awaitingContinue = false;
let currentExerciseState = null; // per-exercise interaction state

// ---------- DOM refs ----------

const el = (id) => document.getElementById(id);

// ---------- Top bar ----------

function renderTopbar() {
  el("xp-count").textContent = state.xp;
  el("streak-count").textContent = state.streak;
}

// ---------- Path screen ----------

function renderPath() {
  const container = el("path-screen");
  container.innerHTML = "";

  COURSE.units.forEach((unit) => {
    const banner = document.createElement("div");
    banner.className = "unit-banner";
    banner.style.background = unit.color;
    banner.innerHTML = `<h2>${unit.title}</h2><p>${unit.subtitle}</p>`;
    container.appendChild(banner);

    const path = document.createElement("div");
    path.className = "lesson-path";

    unit.lessons.forEach((lesson) => {
      const unlocked = isLessonUnlocked(lesson.id);
      const completed = isLessonCompleted(lesson.id);

      const wrap = document.createElement("div");
      wrap.className = "lesson-node-wrap";

      const btn = document.createElement("button");
      btn.className = "lesson-node " + (completed ? "completed" : unlocked ? "" : "locked");
      if (!completed) btn.style.background = unlocked ? unit.color : "";
      btn.textContent = completed ? "★" : unlocked ? "▶" : "🔒";
      btn.disabled = !unlocked;
      btn.addEventListener("click", () => startLesson(lesson.id));

      const label = document.createElement("div");
      label.className = "lesson-label";
      label.textContent = lesson.title;

      wrap.appendChild(btn);
      wrap.appendChild(label);
      path.appendChild(wrap);
    });

    container.appendChild(path);
  });
}

// ---------- Lesson flow ----------

function findLessonById(lessonId) {
  for (const unit of COURSE.units) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) return lesson;
    }
  }
  return null;
}

function startLesson(lessonId) {
  currentLesson = findLessonById(lessonId);
  currentExerciseIdx = 0;
  hearts = MAX_HEARTS;
  correctCount = 0;
  xpEarnedThisLesson = 0;

  el("path-screen").classList.add("hidden");
  el("topbar").classList.add("hidden");
  el("lesson-screen").classList.remove("hidden");
  el("summary-screen").classList.add("hidden");
  el("fail-screen").classList.add("hidden");

  renderExercise();
}

function exitLesson() {
  if (!confirm("Lektion verlassen? Dein Fortschritt in dieser Lektion geht verloren.")) return;
  el("lesson-screen").classList.add("hidden");
  el("topbar").classList.remove("hidden");
  el("path-screen").classList.remove("hidden");
  renderTopbar();
  renderPath();
}

function renderHearts() {
  const wrap = el("hearts");
  wrap.innerHTML = "";
  for (let i = 0; i < MAX_HEARTS; i++) {
    const span = document.createElement("span");
    span.className = "heart" + (i < hearts ? "" : " lost");
    span.textContent = "❤️";
    wrap.appendChild(span);
  }
}

function renderProgress() {
  const total = currentLesson.exercises.length;
  const pct = Math.min(100, Math.round((currentExerciseIdx / total) * 100));
  el("progress-fill").style.width = pct + "%";
}

function renderExercise() {
  awaitingContinue = false;
  currentExerciseState = null;
  renderHearts();
  renderProgress();

  const footer = el("footer-bar");
  footer.className = "footer-bar";
  footer.innerHTML = `<div class="feedback-text" id="feedback-text"></div>
    <button class="big-btn" id="check-btn" disabled>Prüfen</button>`;
  el("check-btn").addEventListener("click", onCheck);

  const exercise = currentLesson.exercises[currentExerciseIdx];
  const area = el("exercise-area");
  area.innerHTML = "";

  const promptEl = document.createElement("div");
  promptEl.className = "exercise-prompt";
  promptEl.textContent = exercise.prompt;
  area.appendChild(promptEl);

  if (exercise.type === "mc") renderMC(exercise, area);
  else if (exercise.type === "wordbank") renderWordbank(exercise, area);
  else if (exercise.type === "match") renderMatch(exercise, area);
}

function setCheckEnabled(enabled) {
  const btn = el("check-btn");
  if (btn) btn.disabled = !enabled;
}

// ---------- MC ----------

function renderMC(exercise, area) {
  const options = shuffle(exercise.options);
  currentExerciseState = { selected: null };

  const optWrap = document.createElement("div");
  optWrap.className = "mc-options";

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      if (awaitingContinue) return;
      optWrap.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      currentExerciseState.selected = opt;
      setCheckEnabled(true);
    });
    optWrap.appendChild(btn);
  });

  area.appendChild(optWrap);
}

function checkMC(exercise) {
  const isCorrect = currentExerciseState.selected === exercise.answer;
  document.querySelectorAll(".option-btn").forEach((b) => {
    b.disabled = true;
    if (b.textContent === exercise.answer) b.classList.add("correct");
    else if (b.classList.contains("selected") && !isCorrect) b.classList.add("incorrect");
  });
  return isCorrect;
}

// ---------- Wordbank ----------

function renderWordbank(exercise, area) {
  const shuffledBank = shuffle(exercise.bank);
  currentExerciseState = { chosen: [], remaining: shuffledBank.slice() };

  const answerStrip = document.createElement("div");
  answerStrip.className = "wordbank-answer";
  answerStrip.id = "wb-answer";

  const bankWrap = document.createElement("div");
  bankWrap.className = "wordbank-bank";
  bankWrap.id = "wb-bank";

  function renderTiles() {
    answerStrip.innerHTML = "";
    currentExerciseState.chosen.forEach((word, idx) => {
      const tile = document.createElement("button");
      tile.className = "word-tile";
      tile.textContent = word;
      tile.addEventListener("click", () => {
        if (awaitingContinue) return;
        currentExerciseState.chosen.splice(idx, 1);
        currentExerciseState.remaining.push(word);
        renderTiles();
      });
      answerStrip.appendChild(tile);
    });

    bankWrap.innerHTML = "";
    currentExerciseState.remaining.forEach((word, idx) => {
      const tile = document.createElement("button");
      tile.className = "word-tile";
      tile.textContent = word;
      tile.addEventListener("click", () => {
        if (awaitingContinue) return;
        currentExerciseState.remaining.splice(idx, 1);
        currentExerciseState.chosen.push(word);
        renderTiles();
      });
      bankWrap.appendChild(tile);
    });

    setCheckEnabled(currentExerciseState.chosen.length > 0);
  }

  renderTiles();
  area.appendChild(answerStrip);
  area.appendChild(bankWrap);
}

function checkWordbank(exercise) {
  const chosen = currentExerciseState.chosen;
  const isCorrect =
    chosen.length === exercise.answer.length && chosen.every((w, i) => w === exercise.answer[i]);
  document.querySelectorAll("#wb-answer .word-tile, #wb-bank .word-tile").forEach((t) => (t.disabled = true));
  return isCorrect;
}

// ---------- Match ----------

function renderMatch(exercise, area) {
  const hrWords = shuffle(exercise.pairs.map((p) => p[0]));
  const deWords = shuffle(exercise.pairs.map((p) => p[1]));
  currentExerciseState = {
    selectedHr: null,
    selectedDe: null,
    matchedCount: 0,
    total: exercise.pairs.length,
    wrongHearts: 0
  };

  const grid = document.createElement("div");
  grid.className = "match-grid";

  const colHr = document.createElement("div");
  const colDe = document.createElement("div");
  colHr.style.display = "flex";
  colHr.style.flexDirection = "column";
  colHr.style.gap = "0.6rem";
  colDe.style.display = "flex";
  colDe.style.flexDirection = "column";
  colDe.style.gap = "0.6rem";

  function findPairMatch(hr, de) {
    return exercise.pairs.some((p) => p[0] === hr && p[1] === de);
  }

  function tryMatch() {
    const { selectedHr, selectedDe } = currentExerciseState;
    if (!selectedHr || !selectedDe) return;
    const hrBtn = colHr.querySelector(`[data-word="${CSS.escape(selectedHr)}"]`);
    const deBtn = colDe.querySelector(`[data-word="${CSS.escape(selectedDe)}"]`);
    if (findPairMatch(selectedHr, selectedDe)) {
      hrBtn.classList.remove("selected");
      deBtn.classList.remove("selected");
      hrBtn.classList.add("matched");
      deBtn.classList.add("matched");
      hrBtn.disabled = true;
      deBtn.disabled = true;
      currentExerciseState.matchedCount++;
      currentExerciseState.selectedHr = null;
      currentExerciseState.selectedDe = null;
      if (currentExerciseState.matchedCount === currentExerciseState.total) {
        setCheckEnabled(false);
        finishMatch(true);
      }
    } else {
      hrBtn.classList.add("wrong");
      deBtn.classList.add("wrong");
      loseHeart();
      setTimeout(() => {
        hrBtn.classList.remove("selected", "wrong");
        deBtn.classList.remove("selected", "wrong");
        currentExerciseState.selectedHr = null;
        currentExerciseState.selectedDe = null;
      }, 500);
    }
  }

  hrWords.forEach((word) => {
    const btn = document.createElement("button");
    btn.className = "match-tile";
    btn.textContent = word;
    btn.dataset.word = word;
    btn.addEventListener("click", () => {
      if (awaitingContinue || btn.disabled) return;
      colHr.querySelectorAll(".match-tile").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      currentExerciseState.selectedHr = word;
      tryMatch();
    });
    colHr.appendChild(btn);
  });

  deWords.forEach((word) => {
    const btn = document.createElement("button");
    btn.className = "match-tile";
    btn.textContent = word;
    btn.dataset.word = word;
    btn.addEventListener("click", () => {
      if (awaitingContinue || btn.disabled) return;
      colDe.querySelectorAll(".match-tile").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      currentExerciseState.selectedDe = word;
      tryMatch();
    });
    colDe.appendChild(btn);
  });

  grid.appendChild(colHr);
  grid.appendChild(colDe);
  area.appendChild(grid);

  // Match-Übungen haben keinen separaten "Prüfen"-Schritt.
  el("check-btn").classList.add("hidden");
}

function finishMatch(isCorrect) {
  if (isCorrect) {
    correctCount++;
    xpEarnedThisLesson += 10;
  }
  showFeedback(isCorrect, null);
}

// ---------- Check / feedback flow ----------

function onCheck() {
  const exercise = currentLesson.exercises[currentExerciseIdx];
  let isCorrect = false;

  if (exercise.type === "mc") isCorrect = checkMC(exercise);
  else if (exercise.type === "wordbank") isCorrect = checkWordbank(exercise);

  if (!isCorrect) loseHeart();
  else {
    correctCount++;
    xpEarnedThisLesson += 10;
  }

  let correctAnswerText = null;
  if (!isCorrect) {
    if (exercise.type === "mc") correctAnswerText = exercise.answer;
    if (exercise.type === "wordbank") correctAnswerText = exercise.answer.join(" ");
  }

  showFeedback(isCorrect, correctAnswerText);
}

function loseHeart() {
  hearts = Math.max(0, hearts - 1);
  renderHearts();
}

function showFeedback(isCorrect, correctAnswerText) {
  awaitingContinue = true;
  const footer = el("footer-bar");
  footer.className = "footer-bar " + (isCorrect ? "feedback-correct" : "feedback-incorrect");

  const failed = hearts <= 0;

  footer.innerHTML = `
    <div class="feedback-text">
      ${isCorrect ? "Richtig! 🎉" : "Nicht ganz."}
      ${!isCorrect && correctAnswerText ? `<span class="feedback-sub">Richtige Antwort: ${correctAnswerText}</span>` : ""}
    </div>
    <button class="big-btn ${isCorrect ? "primary" : "danger-cont"}" id="continue-btn">
      ${failed ? "Weiter" : "Weiter"}
    </button>
  `;

  el("continue-btn").addEventListener("click", () => {
    if (hearts <= 0) {
      showFailScreen();
      return;
    }
    advanceExercise();
  });
}

function advanceExercise() {
  currentExerciseIdx++;
  if (currentExerciseIdx >= currentLesson.exercises.length) {
    finishLesson();
  } else {
    renderExercise();
  }
}

// ---------- Lesson end ----------

function finishLesson() {
  if (!state.completedLessons.includes(currentLesson.id)) {
    state.completedLessons.push(currentLesson.id);
  }
  state.xp += xpEarnedThisLesson;

  const today = todayStr();
  if (state.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;
    state.lastActiveDate = today;
  }
  saveState();

  el("lesson-screen").classList.add("hidden");
  el("summary-screen").classList.remove("hidden");

  const total = currentLesson.exercises.length;
  el("summary-xp").textContent = "+" + xpEarnedThisLesson;
  el("summary-accuracy").textContent = Math.round((correctCount / total) * 100) + "%";
  el("summary-streak").textContent = state.streak;
}

function showFailScreen() {
  el("lesson-screen").classList.add("hidden");
  el("fail-screen").classList.remove("hidden");
}

function backToPathFromSummary() {
  el("summary-screen").classList.add("hidden");
  el("topbar").classList.remove("hidden");
  el("path-screen").classList.remove("hidden");
  renderTopbar();
  renderPath();
}

function retryLesson() {
  el("fail-screen").classList.add("hidden");
  startLesson(currentLesson.id);
}

function backToPathFromFail() {
  el("fail-screen").classList.add("hidden");
  el("topbar").classList.remove("hidden");
  el("path-screen").classList.remove("hidden");
  renderTopbar();
  renderPath();
}

// ---------- Init ----------

function init() {
  el("close-lesson-btn").addEventListener("click", exitLesson);
  el("summary-continue-btn").addEventListener("click", backToPathFromSummary);
  el("fail-retry-btn").addEventListener("click", retryLesson);
  el("fail-back-btn").addEventListener("click", backToPathFromFail);

  renderTopbar();
  renderPath();
}

document.addEventListener("DOMContentLoaded", init);
