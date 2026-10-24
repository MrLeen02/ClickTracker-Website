/*
 * ============================================================
 *  INSTALLER WECHSELN – nur diese Datei anpassen
 * ============================================================
 *
 *  GitHub-Release (aktuell):  installerUrl + version unten anpassen.
 *
 *  Oder lokal:  installerUrl auf "" setzen, neue Setup-Datei in
 *  website/downloads/ legen. Mit  installer: "auto"  wird automatisch
 *  die Datei mit der höchsten Versionsnummer angeboten.
 *
 *  Eine bestimmte Version erzwingen? Dateinamen eintragen, z.B.:
 *     installer: "ClickTracker-Setup-0.3.3.exe",
 *
 *  Hinweis: "auto" funktioniert nur, wenn die Website über
 *  "Website starten.bat" (server.py) läuft. Sonst wird
 *  fallbackFile verwendet.
 */
window.CLICKTRACKER = {
  // Installer als GitHub-Release: hier den Link zur .exe eintragen.
  // Beim Wechsel auf eine neue Version nur diese Zeile ändern.
  installerUrl: "https://github.com/MrLeen02/ClickTracker-Website/releases/download/v5.0/ClickTracker-Setup-0.5.0.exe",
  version: "0.5.0",

  // Alternativ lokale Dateien aus downloads/ (dafür installerUrl auf "" setzen):
  installer: "auto",
  fallbackFile: "ClickTracker-Setup-0.5.0.exe",

  // Ältere Versionen aus downloads/ auf der Download-Seite anzeigen?
  showOlderVersions: true,
};
