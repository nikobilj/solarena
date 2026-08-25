// Kursinhalte: Kroatisch für Deutschsprachige
// Aufbau: Units -> Lektionen -> Übungen
// Übungstypen: "mc" (Multiple Choice), "wordbank" (Satz aus Wortbausteinen bauen), "match" (Paare zuordnen)

const COURSE = {
  units: [
    {
      id: "u1",
      title: "Grundlagen",
      subtitle: "Begrüßung & Vorstellung",
      color: "#1f7a8c",
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
      color: "#2c5f8a",
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
      color: "#c65b3a",
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
      color: "#6b4c6b",
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
    },
    {
      id: "u5",
      title: "Alltag & Zeit",
      subtitle: "Wochentage, Zeitangaben und Alltagsverben",
      color: "#5c7a3f",
      lessons: [
        {
          id: "u5-l1",
          title: "Wochentage",
          exercises: [
            { type: "mc", prompt: "„ponedjeljak“ heißt auf Deutsch:", options: ["Montag", "Dienstag", "Mittwoch", "Freitag"], answer: "Montag" },
            { type: "mc", prompt: "„petak“ heißt auf Deutsch:", options: ["Freitag", "Donnerstag", "Samstag", "Sonntag"], answer: "Freitag" },
            { type: "mc", prompt: "Wie sagt man „Mittwoch“?", options: ["srijeda", "utorak", "četvrtak", "subota"], answer: "srijeda" },
            { type: "mc", prompt: "Wie sagt man „Sonntag“?", options: ["nedjelja", "subota", "petak", "ponedjeljak"], answer: "nedjelja" },
            { type: "wordbank", prompt: "Übersetze: Heute ist Montag.", bank: ["Danas", "je", "ponedjeljak", "Sutra", "utorak"], answer: ["Danas", "je", "ponedjeljak"] },
            { type: "match", prompt: "Ordne die Wochentage einander zu.", pairs: [["ponedjeljak", "Montag"], ["srijeda", "Mittwoch"], ["petak", "Freitag"], ["nedjelja", "Sonntag"]] }
          ]
        },
        {
          id: "u5-l2",
          title: "Heute, morgen, gestern",
          exercises: [
            { type: "mc", prompt: "„sutra“ heißt auf Deutsch:", options: ["morgen", "heute", "gestern", "jetzt"], answer: "morgen" },
            { type: "mc", prompt: "„jučer“ heißt auf Deutsch:", options: ["gestern", "heute", "morgen", "jetzt"], answer: "gestern" },
            { type: "mc", prompt: "Wie sagt man „jetzt“?", options: ["sada", "danas", "sutra", "jučer"], answer: "sada" },
            { type: "mc", prompt: "Wie sagt man „Woche“?", options: ["tjedan", "dan", "mjesec", "godina"], answer: "tjedan" },
            { type: "wordbank", prompt: "Übersetze: Ich lerne heute Kroatisch.", bank: ["Učim", "danas", "hrvatski", "Radim", "sutra"], answer: ["Učim", "danas", "hrvatski"] },
            { type: "match", prompt: "Ordne die Zeitwörter einander zu.", pairs: [["danas", "heute"], ["sutra", "morgen"], ["jučer", "gestern"], ["tjedan", "Woche"]] }
          ]
        },
        {
          id: "u5-l3",
          title: "Alltagsverben",
          exercises: [
            { type: "mc", prompt: "„Radim“ heißt:", options: ["Ich arbeite", "Ich lerne", "Ich schlafe", "Ich wohne"], answer: "Ich arbeite" },
            { type: "mc", prompt: "„Spavam“ heißt:", options: ["Ich schlafe", "Ich arbeite", "Ich lerne", "Ich wohne"], answer: "Ich schlafe" },
            { type: "mc", prompt: "Wie sagt man „Ich lerne“?", options: ["Učim", "Radim", "Spavam", "Živim"], answer: "Učim" },
            { type: "mc", prompt: "Wie sagt man „Ich wohne“?", options: ["Živim", "Radim", "Učim", "Spavam"], answer: "Živim" },
            { type: "wordbank", prompt: "Übersetze: Ich wohne in Zagreb.", bank: ["Živim", "u", "Zagrebu", "Radim", "Berlinu"], answer: ["Živim", "u", "Zagrebu"] },
            { type: "match", prompt: "Ordne die Verben einander zu.", pairs: [["raditi", "arbeiten"], ["učiti", "lernen"], ["spavati", "schlafen"], ["živjeti", "leben/wohnen"]] }
          ]
        }
      ]
    },
    {
      id: "u6",
      title: "Wetter & Kleidung",
      subtitle: "Über Wetter sprechen und sich anziehen",
      color: "#c78a2e",
      lessons: [
        {
          id: "u6-l1",
          title: "Wetter",
          exercises: [
            { type: "mc", prompt: "„kiša“ heißt auf Deutsch:", options: ["Regen", "Schnee", "Sonne", "Wind"], answer: "Regen" },
            { type: "mc", prompt: "„sunčano“ heißt auf Deutsch:", options: ["sonnig", "bewölkt", "kalt", "warm"], answer: "sonnig" },
            { type: "mc", prompt: "Wie sagt man „Schnee“?", options: ["snijeg", "kiša", "sunce", "vjetar"], answer: "snijeg" },
            { type: "mc", prompt: "Wie sagt man „bewölkt“?", options: ["oblačno", "sunčano", "hladno", "toplo"], answer: "oblačno" },
            { type: "wordbank", prompt: "Übersetze: Heute ist es sonnig.", bank: ["Danas", "je", "sunčano", "Sutra", "oblačno"], answer: ["Danas", "je", "sunčano"] },
            { type: "match", prompt: "Ordne die Wetter-Wörter einander zu.", pairs: [["kiša", "Regen"], ["snijeg", "Schnee"], ["sunčano", "sonnig"], ["oblačno", "bewölkt"]] }
          ]
        },
        {
          id: "u6-l2",
          title: "Temperatur & Jahreszeiten",
          exercises: [
            { type: "mc", prompt: "„hladno“ heißt auf Deutsch:", options: ["kalt", "warm", "windig", "sonnig"], answer: "kalt" },
            { type: "mc", prompt: "„ljeto“ heißt auf Deutsch:", options: ["Sommer", "Winter", "Frühling", "Herbst"], answer: "Sommer" },
            { type: "mc", prompt: "Wie sagt man „warm“?", options: ["toplo", "hladno", "vjetrovito", "sunčano"], answer: "toplo" },
            { type: "mc", prompt: "Wie sagt man „Winter“?", options: ["zima", "ljeto", "proljeće", "jesen"], answer: "zima" },
            { type: "wordbank", prompt: "Übersetze: Im Winter ist es kalt.", bank: ["Zimi", "je", "hladno", "Ljeti", "toplo"], answer: ["Zimi", "je", "hladno"] },
            { type: "match", prompt: "Ordne die Jahreszeiten einander zu.", pairs: [["proljeće", "Frühling"], ["ljeto", "Sommer"], ["jesen", "Herbst"], ["zima", "Winter"]] }
          ]
        },
        {
          id: "u6-l3",
          title: "Kleidung",
          exercises: [
            { type: "mc", prompt: "„majica“ heißt auf Deutsch:", options: ["T-Shirt", "Hose", "Jacke", "Schuhe"], answer: "T-Shirt" },
            { type: "mc", prompt: "„cipele“ heißt auf Deutsch:", options: ["Schuhe", "Hut", "Hose", "Jacke"], answer: "Schuhe" },
            { type: "mc", prompt: "Wie sagt man „Jacke“?", options: ["jakna", "majica", "hlače", "šešir"], answer: "jakna" },
            { type: "mc", prompt: "Wie sagt man „Hose“?", options: ["hlače", "majica", "jakna", "cipele"], answer: "hlače" },
            { type: "wordbank", prompt: "Übersetze: Ich trage eine Jacke.", bank: ["Nosim", "jaknu", "Imam", "majicu"], answer: ["Nosim", "jaknu"] },
            { type: "match", prompt: "Ordne die Kleidungsstücke einander zu.", pairs: [["majica", "T-Shirt"], ["hlače", "Hose"], ["jakna", "Jacke"], ["cipele", "Schuhe"]] }
          ]
        }
      ]
    },
    {
      id: "u7",
      title: "Unterwegs",
      subtitle: "Richtungen, Verkehrsmittel und die Stadt",
      color: "#46707c",
      lessons: [
        {
          id: "u7-l1",
          title: "Richtungen",
          exercises: [
            { type: "mc", prompt: "„lijevo“ heißt auf Deutsch:", options: ["links", "rechts", "geradeaus", "weit"], answer: "links" },
            { type: "mc", prompt: "„daleko“ heißt auf Deutsch:", options: ["weit", "nah", "links", "rechts"], answer: "weit" },
            { type: "mc", prompt: "Wie sagt man „rechts“?", options: ["desno", "lijevo", "ravno", "blizu"], answer: "desno" },
            { type: "mc", prompt: "Wie sagt man „geradeaus“?", options: ["ravno", "lijevo", "desno", "daleko"], answer: "ravno" },
            { type: "wordbank", prompt: "Übersetze: Wo ist der Bahnhof?", bank: ["Gdje", "je", "kolodvor", "Kako", "grad"], answer: ["Gdje", "je", "kolodvor"] },
            { type: "match", prompt: "Ordne die Richtungen einander zu.", pairs: [["lijevo", "links"], ["desno", "rechts"], ["ravno", "geradeaus"], ["blizu", "nah"]] }
          ]
        },
        {
          id: "u7-l2",
          title: "Verkehrsmittel",
          exercises: [
            { type: "mc", prompt: "„vlak“ heißt auf Deutsch:", options: ["Zug", "Bus", "Flugzeug", "Auto"], answer: "Zug" },
            { type: "mc", prompt: "„bicikl“ heißt auf Deutsch:", options: ["Fahrrad", "Auto", "Bus", "Zug"], answer: "Fahrrad" },
            { type: "mc", prompt: "Wie sagt man „Flugzeug“?", options: ["avion", "vlak", "autobus", "auto"], answer: "avion" },
            { type: "mc", prompt: "Wie sagt man „Auto“?", options: ["auto", "vlak", "bicikl", "avion"], answer: "auto" },
            { type: "wordbank", prompt: "Übersetze: Ich fahre mit dem Zug.", bank: ["Putujem", "vlakom", "Idem", "autom"], answer: ["Putujem", "vlakom"] },
            { type: "match", prompt: "Ordne die Verkehrsmittel einander zu.", pairs: [["autobus", "Bus"], ["vlak", "Zug"], ["avion", "Flugzeug"], ["bicikl", "Fahrrad"]] }
          ]
        },
        {
          id: "u7-l3",
          title: "In der Stadt",
          exercises: [
            { type: "mc", prompt: "„grad“ heißt auf Deutsch:", options: ["Stadt", "Straße", "Platz", "Bahnhof"], answer: "Stadt" },
            { type: "mc", prompt: "„trg“ heißt auf Deutsch:", options: ["Platz", "Straße", "Stadt", "Hotel"], answer: "Platz" },
            { type: "mc", prompt: "Wie sagt man „Straße“?", options: ["ulica", "grad", "trg", "hotel"], answer: "ulica" },
            { type: "mc", prompt: "Wie sagt man „Flughafen“?", options: ["zračna luka", "kolodvor", "hotel", "grad"], answer: "zračna luka" },
            { type: "wordbank", prompt: "Übersetze: Das Hotel ist in der Stadt.", bank: ["Hotel", "je", "u", "gradu", "ulici"], answer: ["Hotel", "je", "u", "gradu"] },
            { type: "match", prompt: "Ordne die Orte einander zu.", pairs: [["grad", "Stadt"], ["ulica", "Straße"], ["kolodvor", "Bahnhof"], ["trg", "Platz"]] }
          ]
        }
      ]
    }
  ]
};
