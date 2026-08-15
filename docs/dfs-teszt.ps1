# =====================================================================
#  DataForSEO hozzáférés-teszt
#
#  Mit csinál: bekéri a DataForSEO API belépési adatokat, és lekérdezi a
#  fiókadatokat a /v3/appendix/user_data végpontról. Ez a végpont DÍJMENTES,
#  nem fogyaszt keretet, viszont megmutatja az egyenleget és a jogosultságokat.
#
#  A jelszó csak ezen a gépen, a memóriában marad — nem kerül fájlba és
#  nem megy el sehova a DataForSEO-n kívül.
#
#  Futtatás: jobb klikk a fájlra -> "Futtatás PowerShell-lel"
#           vagy PowerShell-ben:  .\docs\dfs-teszt.ps1
# =====================================================================

Write-Host ""
Write-Host "DataForSEO hozzáférés-teszt" -ForegroundColor Cyan
Write-Host "----------------------------"
Write-Host "A belépési adatokat a DataForSEO Dashboard -> API Access oldalon találod."
Write-Host "FIGYELEM: az API-jelszó NEM azonos a weboldalra belépő jelszavaddal!" -ForegroundColor Yellow
Write-Host ""

$login = Read-Host "API login (jellemzően az e-mail címed)"
$secure = Read-Host "API jelszó" -AsSecureString
$plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
)

$pair = "$login`:$plain"
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($pair))
$headers = @{ Authorization = "Basic $b64" }

Write-Host ""
Write-Host "Kapcsolódás..." -ForegroundColor Gray

try {
  $r = Invoke-RestMethod -Uri "https://api.dataforseo.com/v3/appendix/user_data" `
                         -Headers $headers -Method Get -TimeoutSec 30

  Write-Host ""
  Write-Host "SIKERES HITELESÍTÉS" -ForegroundColor Green
  Write-Host ""

  $d = $r.tasks[0].result[0]
  Write-Host ("Egyenleg:            {0} USD" -f $d.money.balance)
  Write-Host ("Eddig elköltve:      {0} USD" -f $d.money.total)
  Write-Host ("Limit / perc:        {0}" -f $d.rates.limits.minute)
  Write-Host ""

  if ($d.money.balance -le 0) {
    Write-Host "EZ A PROBLÉMA: az egyenleg nulla vagy negatív." -ForegroundColor Red
    Write-Host "A DataForSEO elore fizetos. Toltsd fel a fiokot, es a 403 megszunik."
  } else {
    Write-Host "Az egyenleg rendben van." -ForegroundColor Green
    Write-Host "Ha a Claude connector ettol fuggetlenul 403-at ad, akkor a hiba"
    Write-Host "a connectorban van (rossz vagy elavult adat van elmentve benne):"
    Write-Host "  -> torold a connectort, es vedd fel ujra ezekkel az adatokkal."
  }
}
catch {
  $code = $null
  if ($_.Exception.Response) { $code = [int]$_.Exception.Response.StatusCode }

  Write-Host ""
  Write-Host ("SIKERTELEN — HTTP {0}" -f $code) -ForegroundColor Red
  Write-Host ""

  switch ($code) {
    401 {
      Write-Host "Hibas belepesi adat."
      Write-Host "  -> Az API-jelszot hasznald (Dashboard -> API Access), ne a fiokjelszot."
    }
    403 {
      Write-Host "A fiok letezik, de a hozzaferes meg van tagadva. Tipikus okok:"
      Write-Host "  1. Nulla egyenleg (a DataForSEO elore fizetos)."
      Write-Host "  2. IP-korlatozas van bekapcsolva a fiokban."
      Write-Host "  3. A fiok meg nincs aktivalva / megerositve e-mailben."
    }
    402 {
      Write-Host "Fizetes szukseges — toltsd fel a fiok egyenleget."
    }
    default {
      Write-Host ("Reszletek: {0}" -f $_.Exception.Message)
    }
  }

  Write-Host ""
  Write-Host "FONTOS: ha ez a teszt SIKERES, de a connector 403-at ad, akkor a"
  Write-Host "hiba nem a DataForSEO fiokban van, hanem a connectorban."
}

$plain = $null
Write-Host ""
Read-Host "Nyomj Entert a bezarashoz"
