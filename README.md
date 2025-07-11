# generate-pdf

> Ein kleines CLI-Tool zur Konvertierung von lokalen HTML-Dateien in PDFs.

`generate-pdf` ist ein minimalistisches Node.js-Tool, das mithilfe von [Puppeteer](https://pptr.dev/) lokal gespeicherte HTML-Dateien in schön formatierte PDF-Dokumente umwandelt. Ideal für Bewerbungen, technische Berichte, oder einfach als Ersatz für ein Office-Programm.

---

## Features

- Konvertiert lokale `.html`-Dateien in `.pdf`
- Fügt Seitenzahlen optional hinzu (`--nums`)
- Nutzt Chromium über Puppeteer
- CLI-freundlich

---

## Installation

```bash
git clone https://github.com/dein-username/html-to-pdf
cd html-to-pdf
npm install
npm link
```
Danach ist der Befehl global verfügbar.
## Benutzung
```bash
generate-pdf [pfad-zur-html-datei] [--nums]
```
Es kann auch `generate-pdf` ausgeführt werden und dann der Pfad dann angegeben werden. Anführungszeichen um den Pfad sind erlaubt, unter Windows kann man also auch die "Als Pfad kopieren" Funktion nutzen und diesen Pfad dann einsetzen.

---
## Optionen
| Flag     | Beschreibung                      |
| -------- | --------------------------------- |
| `--nums` | Fügt Seitenzahlen im Footer hinzu |

---
## Intern
Dieses Tool nutzt:

* [Puppeteer](https://pptr.dev/) zur PDF-Erstellung
* `readline-sync` für CLI-Interaktion
* Vanilla Node.js (CommonJS)
## Lizenz
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)