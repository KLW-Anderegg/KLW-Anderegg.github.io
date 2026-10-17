# GitHub-Pages-Website für KLW-Anderegg

Diese Website verwendet reines HTML, CSS und JavaScript, ohne Jekyll oder Build-Schritt.

## Veröffentlichen

1. Auf GitHub ein **öffentliches** Repository mit dem exakten Namen `KLW-Anderegg.github.io` erstellen.
2. Die drei Dateien `index.html`, `style.css` und `script.js` in die oberste Ebene des Repositories hochladen und committen.
3. Unter **Settings → Pages → Build and deployment** `Deploy from a branch`, Branch `main`, Ordner `/(root)` wählen und speichern.
4. Nach kurzer Zeit `https://klw-anderegg.github.io/` öffnen.

Die Liste aller öffentlichen Repositories wird bei jedem Seitenaufruf über die öffentliche GitHub-API geladen. Falls die API nicht erreichbar ist, werden sechs bekannte Repositories als Ersatz angezeigt.

Die drei Themenkacheln und die Mathematik-Liste lassen sich in `index.html` und `script.js` bearbeiten. Informatik und Robotik sind derzeit Platzhalter. Bestehende Repositories werden nicht verändert.

Zum lokalen Testen einfach `index.html` im Browser öffnen (die GitHub-API benötigt eine Internetverbindung).
