// Kursinhalte: Kroatisch für Deutschsprachige
// Aufbau: Units -> Lektionen -> Übungen
// Übungstypen: "mc" (Multiple Choice), "wordbank" (Satz aus Wortbausteinen bauen), "match" (Paare zuordnen)

const COURSE = {
  units: [
    {
      id: "u1",
      title: "Grundlagen",
      subtitle: "Begrüßung & Vorstellung",
      color: "#58cc02",
      lessons: [
        {
          id: "u1-l1",
          title: "Begrüßung",
          exercises: [
            { type: "mc", prompt: "„Bok“ heißt auf Deutsch:", options: ["Hallo", "Danke", "Bitte", "Auf Wiedersehen"], answer: "Hallo" },
            { type: "mc", prompt: "„Hvala“ heißt auf Deutsch:", options: ["Danke", "Bitte", "Ja", "Nein"], answer: "Danke" },
            { type: "mc", prompt: "Wie sagt man „Guten Morgen“?", options: ["Dobro jutro", "Dobar dan", "Laku noć", "Dobra večer"], answer: "Dobro jutro" },
            { type: "mc", prompt: "Wie sagt man „Auf Wiedersehen“?", options: ["Doviđenja", "Bok", "Hvala", "Molim"], answer: "Doviđenja" },
            { type: "wordbank", prompt: "Übersetze: Guten Tag, danke.", bank: ["Dobar", "dan", "hvala", "Bok", "molim", "doviđenja"], answer: ["Dobar", "dan", "hvala"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["Bok", "Hallo"], ["Hvala", "Danke"], ["Molim", "Bitte"], ["Doviđenja", "Auf Wiedersehen"]] }
          ]
        },
        {
          id: "u1-l2",
          title: "Ja, Nein & Höflichkeit",
          exercises: [
            { type: "mc", prompt: "„Da“ heißt auf Deutsch:", options: ["Ja", "Nein", "Bitte", "Danke"], answer: "Ja" },
            { type: "mc", prompt: "„Ne“ heißt auf Deutsch:", options: ["Nein", "Ja", "Bitte", "Tschüss"], answer: "Nein" },
            { type: "mc", prompt: "Wie sagt man „Entschuldigung“?", options: ["Oprosti", "Molim", "Hvala", "Bok"], answer: "Oprosti" },
            { type: "mc", prompt: "Wie sagt man „Wie geht's dir?“?", options: ["Kako si?", "Kako se zoveš?", "Odakle si?", "Tko si?"], answer: "Kako si?" },
            { type: "wordbank", prompt: "Übersetze: Mir geht's gut, danke.", bank: ["Dobro", "sam", "hvala", "Loše", "si", "molim"], answer: ["Dobro", "sam", "hvala"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["Da", "Ja"], ["Ne", "Nein"], ["Oprosti", "Entschuldigung"], ["Kako si?", "Wie geht's dir?"]] }
          ]
        },
        {
          id: "u1-l3",
          title: "Sich vorstellen",
          exercises: [
            { type: "mc", prompt: "„Kako se zoveš?“ heißt:", options: ["Wie heißt du?", "Wie geht's dir?", "Woher kommst du?", "Wer bist du?"], answer: "Wie heißt du?" },
            { type: "mc", prompt: "„Drago mi je“ heißt:", options: ["Freut mich", "Guten Tag", "Auf Wiedersehen", "Bitte"], answer: "Freut mich" },
            { type: "mc", prompt: "Wie sagt man „Woher kommst du?“?", options: ["Odakle si?", "Kako si?", "Tko si?", "Gdje si?"], answer: "Odakle si?" },
            { type: "mc", prompt: "Wie sagt man „Ich heiße Ana.“?", options: ["Zovem se Ana.", "Ti si Ana.", "Ja sam Ana ovdje.", "Odakle Ana?"], answer: "Zovem se Ana." },
            { type: "wordbank", prompt: "Übersetze: Ich bin aus Deutschland.", bank: ["Ja", "sam", "iz", "Njemačke", "Ti", "si", "Hrvatske"], answer: ["Ja", "sam", "iz", "Njemačke"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["Zovem se", "Ich heiße"], ["Drago mi je", "Freut mich"], ["Odakle si?", "Woher kommst du?"], ["Ja sam iz Njemačke", "Ich bin aus Deutschland"]] }
          ]
        }
      ]
    },
    {
      id: "u2",
      title: "Zahlen & Familie",
      subtitle: "Zählen und über Familie sprechen",
      color: "#1cb0f6",
      lessons: [
        {
          id: "u2-l1",
          title: "Zahlen 1–10",
          exercises: [
            { type: "mc", prompt: "„tri“ heißt auf Deutsch:", options: ["drei", "zwei", "vier", "fünf"], answer: "drei" },
            { type: "mc", prompt: "„sedam“ heißt auf Deutsch:", options: ["sieben", "sechs", "acht", "neun"], answer: "sieben" },
            { type: "mc", prompt: "Wie sagt man „fünf“?", options: ["pet", "četiri", "šest", "sedam"], answer: "pet" },
            { type: "mc", prompt: "Wie sagt man „zehn“?", options: ["deset", "devet", "osam", "sedam"], answer: "deset" },
            { type: "wordbank", prompt: "Übersetze: Ich habe drei Äpfel.", bank: ["Imam", "tri", "jabuke", "Ti", "imaš", "pet"], answer: ["Imam", "tri", "jabuke"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["jedan", "eins"], ["dva", "zwei"], ["pet", "fünf"], ["deset", "zehn"]] }
          ]
        },
        {
          id: "u2-l2",
          title: "Zahlen 11–20 & Fragen",
          exercises: [
            { type: "mc", prompt: "„dvanaest“ heißt auf Deutsch:", options: ["zwölf", "elf", "dreizehn", "zwanzig"], answer: "zwölf" },
            { type: "mc", prompt: "„dvadeset“ heißt auf Deutsch:", options: ["zwanzig", "zwölf", "fünfzehn", "zehn"], answer: "zwanzig" },
            { type: "mc", prompt: "Wie sagt man „fünfzehn“?", options: ["petnaest", "jedanaest", "dvanaest", "dvadeset"], answer: "petnaest" },
            { type: "mc", prompt: "Wie sagt man „Wieviel?“?", options: ["Koliko?", "Kako?", "Gdje?", "Tko?"], answer: "Koliko?" },
            { type: "wordbank", prompt: "Übersetze: Wie spät ist es?", bank: ["Koliko", "je", "sati", "Kako", "si", "dobro"], answer: ["Koliko", "je", "sati"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["jedanaest", "elf"], ["petnaest", "fünfzehn"], ["dvadeset", "zwanzig"], ["Koliko?", "Wieviel?"]] }
          ]
        },
        {
          id: "u2-l3",
          title: "Familie",
          exercises: [
            { type: "mc", prompt: "„majka“ heißt auf Deutsch:", options: ["Mutter", "Vater", "Schwester", "Oma"], answer: "Mutter" },
            { type: "mc", prompt: "„brat“ heißt auf Deutsch:", options: ["Bruder", "Schwester", "Sohn", "Vater"], answer: "Bruder" },
            { type: "mc", prompt: "Wie sagt man „Vater“?", options: ["otac", "majka", "djed", "brat"], answer: "otac" },
            { type: "mc", prompt: "Wie sagt man „Familie“?", options: ["obitelj", "sestra", "baka", "brat"], answer: "obitelj" },
            { type: "wordbank", prompt: "Übersetze: Meine Mutter und mein Vater", bank: ["Moja", "majka", "i", "moj", "otac", "sestra", "tvoj"], answer: ["Moja", "majka", "i", "moj", "otac"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["majka", "Mutter"], ["otac", "Vater"], ["sestra", "Schwester"], ["brat", "Bruder"]] }
          ]
        }
      ]
    },
    {
      id: "u3",
      title: "Essen & Trinken",
      subtitle: "Im Restaurant und beim Einkaufen",
      color: "#ff9600",
      lessons: [
        {
          id: "u3-l1",
          title: "Grundnahrungsmittel",
          exercises: [
            { type: "mc", prompt: "„kruh“ heißt auf Deutsch:", options: ["Brot", "Milch", "Wasser", "Ei"], answer: "Brot" },
            { type: "mc", prompt: "„kava“ heißt auf Deutsch:", options: ["Kaffee", "Tee", "Wasser", "Milch"], answer: "Kaffee" },
            { type: "mc", prompt: "Wie sagt man „Wasser“?", options: ["voda", "mlijeko", "kava", "čaj"], answer: "voda" },
            { type: "mc", prompt: "Wie sagt man „Tee“?", options: ["čaj", "kava", "jaje", "kruh"], answer: "čaj" },
            { type: "wordbank", prompt: "Übersetze: Ich möchte Wasser, bitte.", bank: ["Želim", "vodu", "molim", "Imam", "kavu", "hvala"], answer: ["Želim", "vodu", "molim"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["kruh", "Brot"], ["mlijeko", "Milch"], ["kava", "Kaffee"], ["čaj", "Tee"]] }
          ]
        },
        {
          id: "u3-l2",
          title: "Obst & Gemüse",
          exercises: [
            { type: "mc", prompt: "„jabuka“ heißt auf Deutsch:", options: ["Apfel", "Fisch", "Käse", "Fleisch"], answer: "Apfel" },
            { type: "mc", prompt: "„sir“ heißt auf Deutsch:", options: ["Käse", "Obst", "Gemüse", "Fisch"], answer: "Käse" },
            { type: "mc", prompt: "Wie sagt man „Fisch“?", options: ["riba", "meso", "sir", "voće"], answer: "riba" },
            { type: "mc", prompt: "Wie sagt man „Gemüse“?", options: ["povrće", "voće", "meso", "jaje"], answer: "povrće" },
            { type: "wordbank", prompt: "Übersetze: Ich esse Fisch und Gemüse.", bank: ["Jedem", "ribu", "i", "povrće", "Pijem", "vodu", "kavu"], answer: ["Jedem", "ribu", "i", "povrće"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["jabuka", "Apfel"], ["meso", "Fleisch"], ["riba", "Fisch"], ["sir", "Käse"]] }
          ]
        },
        {
          id: "u3-l3",
          title: "Im Restaurant",
          exercises: [
            { type: "mc", prompt: "„Dobar tek!“ heißt:", options: ["Guten Appetit!", "Guten Tag!", "Auf Wiedersehen!", "Prost!"], answer: "Guten Appetit!" },
            { type: "mc", prompt: "„Koliko košta?“ heißt:", options: ["Wieviel kostet das?", "Wie spät ist es?", "Wo ist das?", "Was ist das?"], answer: "Wieviel kostet das?" },
            { type: "mc", prompt: "Wie sagt man „Ich bin hungrig.“ (männlich)?", options: ["Ja sam gladan.", "Ja sam žedan.", "Ja sam umoran.", "Ja sam sretan."], answer: "Ja sam gladan." },
            { type: "mc", prompt: "Wie sagt man „Die Rechnung, bitte.“?", options: ["Račun, molim.", "Voda, molim.", "Dobar tek!", "Hvala lijepa."], answer: "Račun, molim." },
            { type: "wordbank", prompt: "Übersetze: Ich möchte einen Kaffee.", bank: ["Želim", "kavu", "Imam", "čaj", "vodu"], answer: ["Želim", "kavu"] },
            { type: "match", prompt: "Ordne die Wörter einander zu.", pairs: [["Dobar tek!", "Guten Appetit!"], ["gladan", "hungrig"], ["žedan", "durstig"], ["Koliko košta?", "Wieviel kostet das?"]] }
          ]
        }
      ]
    },
    {
      id: "u4",
      title: "Verben & Sätze",
      subtitle: "biti, imati und Fragewörter",
      color: "#ce82ff",
      lessons: [
        {
          id: "u4-l1",
          title: "biti (sein)",
          exercises: [
            { type: "mc", prompt: "„Ja sam“ heißt:", options: ["Ich bin", "Du bist", "Wir sind", "Sie sind"], answer: "Ich bin" },
            { type: "mc", prompt: "„Mi smo“ heißt:", options: ["Wir sind", "Ihr seid", "Sie sind", "Ich bin"], answer: "Wir sind" },
            { type: "mc", prompt: "Wie sagt man „Du bist“?", options: ["Ti si", "Ja sam", "On je", "Vi ste"], answer: "Ti si" },
            { type: "mc", prompt: "Wie sagt man „Sie sind“ (mehrere Personen)?", options: ["Oni su", "Mi smo", "Vi ste", "Ona je"], answer: "Oni su" },
            { type: "wordbank", prompt: "Übersetze: Wir sind Freunde.", bank: ["Mi", "smo", "prijatelji", "Vi", "ste", "obitelj"], answer: ["Mi", "smo", "prijatelji"] },
            { type: "match", prompt: "Ordne die Formen von „biti“ zu.", pairs: [["Ja sam", "Ich bin"], ["Ti si", "Du bist"], ["Mi smo", "Wir sind"], ["Oni su", "Sie sind (mehrere)"]] }
          ]
        },
        {
          id: "u4-l2",
          title: "imati (haben)",
          exercises: [
            { type: "mc", prompt: "„Imam“ heißt:", options: ["Ich habe", "Du hast", "Er hat", "Wir haben"], answer: "Ich habe" },
            { type: "mc", prompt: "„Imaju“ heißt:", options: ["Sie haben (mehrere)", "Ich habe", "Ihr habt", "Er hat"], answer: "Sie haben (mehrere)" },
            { type: "mc", prompt: "Wie sagt man „Du hast“?", options: ["Imaš", "Imam", "Ima", "Imamo"], answer: "Imaš" },
            { type: "mc", prompt: "Wie sagt man „Wir haben“?", options: ["Imamo", "Imate", "Imaju", "Imam"], answer: "Imamo" },
            { type: "wordbank", prompt: "Übersetze: Ich habe einen Hund.", bank: ["Imam", "psa", "Imaš", "mačku"], answer: ["Imam", "psa"] },
            { type: "match", prompt: "Ordne die Formen von „imati“ zu.", pairs: [["Imam", "Ich habe"], ["Imaš", "Du hast"], ["Ima", "Er/Sie hat"], ["Imamo", "Wir haben"]] }
          ]
        },
        {
          id: "u4-l3",
          title: "Fragewörter & Sätze",
          exercises: [
            { type: "mc", prompt: "„Gdje?“ heißt:", options: ["Wo?", "Wer?", "Wann?", "Warum?"], answer: "Wo?" },
            { type: "mc", prompt: "„Zašto?“ heißt:", options: ["Warum?", "Wie?", "Was?", "Wer?"], answer: "Warum?" },
            { type: "mc", prompt: "Wie sagt man „Wer?“?", options: ["Tko?", "Što?", "Kada?", "Kako?"], answer: "Tko?" },
            { type: "mc", prompt: "Wie sagt man „Wann?“?", options: ["Kada?", "Gdje?", "Zašto?", "Tko?"], answer: "Kada?" },
            { type: "wordbank", prompt: "Übersetze: Wo ist die Familie?", bank: ["Gdje", "je", "obitelj", "Kada", "su", "prijatelji"], answer: ["Gdje", "je", "obitelj"] },
            { type: "match", prompt: "Ordne die Fragewörter einander zu.", pairs: [["Tko?", "Wer?"], ["Što?", "Was?"], ["Gdje?", "Wo?"], ["Kada?", "Wann?"]] }
          ]
        }
      ]
    }
  ]
};
