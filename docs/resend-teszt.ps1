# =====================================================================
#  Resend e-mail küldés tesztje
#
#  Mit csinál: kiolvassa a .env.local fájlból a RESEND_API_KEY,
#  LEAD_EMAIL_FROM és LEAD_EMAIL_TO értékeket, majd küld egy próbalevelet.
#  Ha megérkezik, az űrlapok értesítése is működni fog.
#
#  Futtatás a projekt gyökeréből:
#     powershell -ExecutionPolicy Bypass -File .\docs\resend-teszt.ps1
# =====================================================================

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $root ".env.local"

if (-not (Test-Path $envFile)) {
  Write-Host "Nem talalom a .env.local fajlt itt: $envFile" -ForegroundColor Red
  Read-Host "Enter a bezarashoz"; exit 1
}

# .env.local beolvasasa
$cfg = @{}
foreach ($line in [System.IO.File]::ReadAllLines($envFile)) {
  if ($line -match '^\s*#') { continue }
  if ($line -match '^\s*([A-Z_]+)\s*=\s*(.*)$') { $cfg[$Matches[1]] = $Matches[2].Trim() }
}

$key  = $cfg["RESEND_API_KEY"]
$from = if ($cfg["LEAD_EMAIL_FROM"]) { $cfg["LEAD_EMAIL_FROM"] } else { "TEMA weboldal <onboarding@resend.dev>" }
$to   = if ($cfg["LEAD_EMAIL_TO"])   { $cfg["LEAD_EMAIL_TO"] }   else { "tamaskoncsik9@gmail.com" }

Write-Host ""
Write-Host "Resend e-mail teszt" -ForegroundColor Cyan
Write-Host "-------------------"
Write-Host ("Felado:  {0}" -f $from)
Write-Host ("Cimzett: {0}" -f $to)
Write-Host ""

if ([string]::IsNullOrWhiteSpace($key)) {
  Write-Host "NINCS BEALLITVA a RESEND_API_KEY a .env.local fajlban." -ForegroundColor Red
  Write-Host ""
  Write-Host "Teendo:"
  Write-Host "  1. Regisztralj: https://resend.com  (a tamaskoncsik9@gmail.com cimmel!)"
  Write-Host "  2. API Keys -> Create API Key -> masold ki"
  Write-Host "  3. Illeszd be a .env.local fajlba:  RESEND_API_KEY=re_..."
  Write-Host "  4. Futtasd ujra ezt a szkriptet."
  Read-Host "Enter a bezarashoz"; exit 1
}

$body = @{
  from    = $from
  to      = @($to)
  subject = "TEMA weboldal - teszt ertesites"
  html    = "<div style='font-family:sans-serif'><h2>Mukodik.</h2><p>Ez egy proba ertesites a TEMA weboldal rendszerebol. Ha ezt latod, az urlapok ertesitese is mukodni fog.</p></div>"
  text    = "Mukodik. Ez egy proba ertesites a TEMA weboldal rendszerebol."
} | ConvertTo-Json -Depth 4

try {
  $r = Invoke-RestMethod -Uri "https://api.resend.com/emails" -Method Post `
        -Headers @{ Authorization = "Bearer $key"; "Content-Type" = "application/json" } `
        -Body ([Text.Encoding]::UTF8.GetBytes($body)) -TimeoutSec 30

  Write-Host "SIKERES KULDES" -ForegroundColor Green
  Write-Host ("Uzenet azonosito: {0}" -f $r.id)
  Write-Host ""
  Write-Host "Nezd meg a postafiokot ($to). Ha nem latod, a Spam mappat is."
}
catch {
  $code = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { "n/a" }
  Write-Host ("SIKERTELEN - HTTP {0}" -f $code) -ForegroundColor Red
  try {
    $sr = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
    $err = $sr.ReadToEnd() | ConvertFrom-Json
    Write-Host ("Uzenet: {0}" -f $err.message)
  } catch { Write-Host $_.Exception.Message }

  Write-Host ""
  switch ($code) {
    401 { Write-Host "Ervenytelen API kulcs. Ellenorizd, hogy a teljes kulcsot masoltad-e be (re_ kezdetu)." }
    403 { Write-Host "A felado cim nincs engedelyezve. Sajat domain hitelesitese nelkul csak"
          Write-Host "az onboarding@resend.dev felado es a regisztracios e-mail cim mukodik." }
    422 { Write-Host "Hibas kereses - a felado vagy a cimzett formatuma nem jo." }
  }
}

Write-Host ""
Read-Host "Enter a bezarashoz"
