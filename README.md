# Poreč Bootstouren – Landingpage

Eine einzelne, selbstständige HTML-Seite (`index.html`) für den Verkauf von Bootstouren (Fish Picnic & Delfin Tour) über Movi Tours in Poreč. Kein Server, kein Build-Prozess nötig – einfach die Datei öffnen oder hosten.

## Vor dem Live-Schalten: Platzhalter ersetzen

In `index.html` suchen und ersetzen:

| Platzhalter | Wo | Womit ersetzen |
|---|---|---|
| `WHATSAPP_NUMBER = "385000000000"` | im `<script>`-Block ganz unten | echte WhatsApp-Nummer, Ländercode + Nummer, **ohne** `+`, `00` oder Leerzeichen (z. B. `385981234567`) |
| `[TELEFONNUMMER]` (2×) | Buchungsformular & Footer | Telefonnummer als Text, plus im `tel:+385000000000` Link die echte Nummer |
| `[EMAIL]` (2×) | Buchungsformular & Footer | E-Mail-Adresse, plus im `mailto:info@example.com` Link |
| `[NAME DES VATERS]` | Abschnitt „Über uns" | Name des Verkäufers |
| `[TREFFPUNKT eintragen ...]` | FAQ „Wo ist der Treffpunkt?" | genauer Treffpunkt/Hafen |

Preise (35 €/20 € Fish Picnic, 25 €/15 € Delfin Tour) sind bereits eingetragen — bei Bedarf im Text von `index.html` suchen & anpassen.

## Echte Fotos statt Illustrationen

Aktuell nutzt die Seite nur CSS/SVG-Illustrationen (kein Server nötig). Um echte Fotos einzubauen:

1. Bilder in einen Ordner z. B. `bilder/` legen.
2. In `index.html` bei `.tour-media.fish`, `.tour-media.dolphin` und `.about-photo` das CSS um `background-image: url('bilder/dein-bild.jpg'); background-size: cover; background-position: center;` ergänzen.

## Wie die Buchungsanfrage funktioniert

Das Formular sammelt Tour, Name, Datum und Personenzahl und öffnet WhatsApp mit einer vorausgefüllten Nachricht an die hinterlegte Nummer (`wa.me`-Link). Es gibt keine echte Online-Buchung/Zahlung — die Anfrage kommt direkt persönlich beim Verkäufer an, genau wie am Strand.

## Hosten (kostenlos, ohne eigenen Server)

**Option A – GitHub Pages**
1. Repo-Einstellungen → Pages → Branch auswählen (z. B. `main`), Ordner `/root`.
2. Seite ist danach unter `https://<username>.github.io/<repo>/` erreichbar.

**Option B – Netlify/Vercel**
1. Repo verbinden, kein Build-Command nötig (statisches HTML).
2. Deploy — fertig.

## Lokal testen

Einfach `index.html` im Browser öffnen, oder z. B.:

```bash
python3 -m http.server 8000
```

und `http://localhost:8000` öffnen.
