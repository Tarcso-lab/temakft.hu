# TEMA Menedzsment Kft. — weboldal · állapotjelentés

**Utolsó frissítés:** 2026. augusztus 17. (második kiadás)
**Állapot:** **élesben van.** A weboldal a saját domainen fut, az űrlapok
mentenek és e-mail értesítést küldenek.

**Élő cím:** [https://temakft.hu](https://temakft.hu)

---

## 1. Hol tartunk

### Számokban

| | |
|---|---|
| Oldalak száma | **51** indexelhető oldal (58 építéskor, a technikai útvonalakkal együtt) |
| Tartalom | ~4 000 sor strukturált szöveg (8 tartalmi adatfájl) |
| Képek | 37 illusztráció, WebP formátumban — összesen 4,1 MB |
| Komponensek | 22 React-komponens |
| Adatbázis | Supabase, `leads` tábla 33 oszloppal, sorszintű biztonsággal |
| Kiszolgálás | Cloudflare Workers, globális CDN-ről |
| Verziókövetés | GitHub — [Tarcso-lab/temakft.hu](https://github.com/Tarcso-lab/temakft.hu) |

### Pozicionálás

**A weboldal elsődleges profilja a létesítményüzemeltetés**, második pillére a
műszaki koordináció. Ez 2026. augusztus 17-én változott: korábban a
generálkivitelezés volt a vezető téma.

**Miért.** A generálkivitelezés kulcsszó-volumene valós (a teljes kör
≈ 2 350 keresés/hó), de nem a cég profilja — a kivitelezést elvállalja, a
szakági munkát viszont alvállalkozói körrel valósítja meg. A friss
versenytárs-elemzés emellett kimutatta, hogy az üzemeltetési rés **organikusan
védtelen**: a „létesítményüzemeltetés budapest" tíz organikus találatából csak
**három valódi szolgáltató**, a piacvezető Millenia pedig a saját fő
kulcsszavára (facility management, 390/hó) a **14. helyen** áll.

**A generálkivitelezés nem tűnt el**, egyetlen aloldalra került a Projektek
menüpont alatt — így a hozzá tartozó volumen megmarad, de nem ez az identitás.

Részletek és teljes kulcsszókészlet: [`docs/seo-kutatas.md`](docs/seo-kutatas.md)
**0. szakasz**.

**Elejtve:** a „műszaki ellenőr" kulcsszókör (1 000/hó, KD 0) — névjegyzékhez
kötött cím, a cégnek nincs ilyen jogosultsága.

### Ami elkészült

**Élesítés.** A weboldal a Cloudflare Workersen fut, az OpenNext adapterrel.
A domain a Rackhostnál maradt regisztrálva, de a névszervereket a Cloudflare
kezeli. A `www.temakft.hu` 301-es átirányítással a www nélküli címre megy.
Az SSL-tanúsítvány automatikus.

**Űrlapok és lead-kezelés.** Öt űrlaptípus: négylépéses részletes ajánlatkérő,
gyors visszahívás, díjmentes felmérés, kapcsolatfelvétel és hibabejelentés.
Minden beküldés a Supabase adatbázisba kerül, és e-mail értesítést indít —
**a teljes lánc élesben végigtesztelve, működik.** Spamvédelem: rejtett
csapdamező, minimális kitöltési idő, IP-alapú sebességkorlát. Az adatbázison
egyetlen biztonsági szabály van érvényben: beszúrni lehet, olvasni nem.

**E-mail.** A `temakft.hu` domain hitelesítve van a Resendnél (DKIM, SPF,
DMARC rekordokkal), a feladó `noreply@temakft.hu`. A levelezés (MX, Rackhost)
a névszerver-váltást sértetlenül átvészelte.

**Képek.** A 36 illusztráció PNG-ről WebP-re konvertálva: **64,0 MB → 3,8 MB
(−94%)**. Ez a legnagyobb egyszeri sebességjavulás, és a kiszolgálási költséget
is ez határozza meg.

**Jogi szövegek.** Az ÁSZF, a garanciális feltételek és az adatkezelési
tájékoztató konkrét értékekkel kitöltve, „Hatályos: 2026. február 1."
dátummal. A korábbi figyelmeztető sáv eltávolítva. **Jogi átnézés még nem
történt** — lásd a 2.1 pontot.

**Arculat.** Saját formalogó — hatszögben geometrikus „T", átlós szikraközzel —,
egyszínű változatban is, hímzéshez és szitanyomáshoz.

**SEO.** Valós DataForSEO-adatokra épülő kulcsszókutatás (495 vizsgált
kifejezés), majd 2026. augusztus 17-én versenytárs- és élő SERP-elemzés, ami
az átpozicionáláshoz vezetett. Egyedi meta-adatok minden oldalon, strukturált
adatok (Organization, Service, FAQPage, Article, BreadcrumbList), automatikus
oldaltérkép valós módosítási dátumokkal, RSS-csatorna.

**Dokumentáció és segédeszközök.**

| Fájl | Mire való |
|---|---|
| `README.md` | Üzemeltetési kézikönyv: indítás, beállítás, tartalomszerkesztés |
| `docs/seo-kutatas.md` | A DataForSEO piackutatás teljes eredménye |
| `docs/google-cegprofil.md` | Cégprofil: leírás, kategóriák, szolgáltatások, ellenőrzőlista |
| `docs/uj-cikk.md` | Hogyan írj új tudástári cikket, másolható sablonnal |
| `docs/deploy.md` | Élesítés és üzemeltetés Cloudflare-en, hibakereséssel |
| `docs/resend-teszt.ps1` | E-mail küldés ellenőrzése egy paranccsal |
| `docs/dfs-teszt.ps1` | DataForSEO hozzáférés ellenőrzése |
| `indit.bat` | A fejlesztői szerver indítása duplakattintással |

---

## 2. Ami hátravan

### 2.1 Jogi átnézés — *a legfontosabb nyitott tétel*

A szövegekben már nincs kitöltetlen hely, és a számok a tényleges
gyakorlatotokat tükrözik. Azt viszont, hogy a **megfogalmazás jogilag
helytálló-e**, csak ügyvéd tudja megmondani. A figyelmeztető sáv levételével
ezek a dokumentumok véglegesként jelennek meg a látogatóknak.

Külön mérlegelendő: **a székhely nincs feltüntetve** a weboldalon, a kérésednek
megfelelően. Az elektronikus kereskedelmi törvény viszont előírja a szolgáltató
székhelyének megjelenítését. Ha nem akarjátok a magánlakcímet közzétenni,
székhelyszolgáltatás a szokásos megoldás.

### 2.2 Vercel leválasztása

A Vercel még mindig rá van kötve a GitHub-tárolóra, és minden feltöltésnél
fölöslegesen lefuttat egy építést. A domain már nem mutat rá, tehát ártalmatlan
— de érdemes kikapcsolni az automatikus élesítést vagy törölni a projektet.

### 2.3 Keresőkonzolok

**Google Search Console** — a tulajdon hitelesítve (`google-site-verification`
DNS-rekord él). Ami hátravan: az oldaltérkép beküldése. Két bejegyzés kell,
külön-külön: `sitemap.xml` és `tudastar/rss.xml`.

**Bing Webmaster Tools** — a `BingSiteAuth.xml` fájl kint van a domain
gyökerében, a hitelesítést a Bing felületén kell befejezni. A leggyorsabb út az
„Import from Google Search Console". **Amíg ez nincs meg, a Bing az
IndexNow-bejelentéseket 403-mal elutasítja** — és a Copilot meg a ChatGPT
keresési találatai a Bing indexéből dolgoznak, tehát ez az AI-láthatóság kapuja.

Az átpozicionálás után érdemes a Search Console URL-ellenőrzőjében indexelést
kérni a főoldalra, a `/uzemeltetes` és a `/projektek` oldalra — ez a három
hordozza az új pozicionálást.

### 2.4 Google Cégprofil

**A teljes beállítási csomag elkészült:** [`docs/google-cegprofil.md`](docs/google-cegprofil.md)
— leírás (732 karakter), kategóriák indoklással, 13 szolgáltatás, ellenőrzőlista.
A profilt magát Google-fiókból kell létrehozni.

**Miért ez a legnagyobb hatású lépés:** mindkét fő kulcsszavunk találati
listáját a **helyi találati doboz** uralja, jóval a szerves találatok előtt.
Ide kizárólag Cégprofillal lehet bekerülni.

Két döntés, amit adat támaszt alá:

- **Elsődleges kategória: Épület- és ingatlankarbantartás.** A Budapest
  környéki hasonló cégeknél ez a leggyakoribb; a „Facility management company"
  kategória a magyar piacon gyakorlatilag használatlan.
- **Kerülendő: Ingatlankezelő cég** — bérbeadást és közös képviseletet jelent,
  rossz megkereséseket hozna.

**A vélemények döntenek.** A helyi találati dobozban megjelenő cégeknél
33–77 vélemény a jellemző; a „műszaki ellenőr" első helyi találata egy egyéni
vállalkozó 37 véleménnyel, minden céget megelőzve. Néhány tucat valódi vélemény
többet ér a helyi rangsorban, mint bármilyen szövegcsiszolás.

### 2.5 Fiókhigiénia

- **A Cloudflare API-token törlése** — a beállításhoz használt token bekerült
  egy beszélgetés naplójába. My Profile → API Tokens → Delete.
- **A DataForSEO API-jelszót cseréld le** — ugyanez a helyzet.
- A Resend-kulcs cseréjéről úgy döntöttél, hogy nem szükséges.
- **A GitHub-tároló nyilvános.** Titkos adat nincs benne, de a teljes forráskód
  és a fejlesztés története bárki számára látható. Ha ez nem szándékos:
  Settings → General → Change visibility.

---

## 3. Amire érdemes több időt fordítani

### 3.1 Referenciák — a legnagyobb hiány

**Jelenleg egyetlen konkrét munka sincs a weboldalon.** Se fotó, se projektnév,
se szám, se ügyfélvélemény. Egy műszaki szolgáltatónál ez a legerősebb
bizonyíték, és a jelenlegi legnagyobb konverziós gyengeség.

Csökkenő sorrendben, amivel a legtöbbet lehet nyerni:

1. **5–10 valós referenciamunka** rövid leírással: milyen épület, mi volt a
   feladat, mi lett az eredmény. Név nélkül is működik („1 400 m²-es irodaház,
   XIII. kerület").
2. **Saját fotók** ezekről a munkákról. A jelenlegi 36 kép AI-generált
   illusztráció — jó helykitöltő, de nem bizonyíték.
3. **Ügyfélvélemények**, akár két mondat, névvel és cégnévvel.

### 3.2 Indexelési jelzések — *kész*

- **Az oldaltérkép `lastmod` mezője javítva.** Korábban minden oldalra a
  lekérdezés pillanatát írta, amitől a Google előbb-utóbb figyelmen kívül hagyja
  a mezőt. Most valós dátumok mennek ki: az oldal saját `updatedAt` értéke,
  ennek hiányában a `CONTENT_REVISION` alapérték.
- **RSS-csatorna** a tudástárhoz: `/tudastar/rss.xml`.
- **IndexNow**: kulcsfájl, `scripts/indexnow.mjs` és GitHub Action — minden
  feltöltés után bejelenti a címeket. A Yandex elfogadja; **a Bing addig
  elutasítja, amíg a Webmaster Tools-beli hitelesítés nincs befejezve.**

**Amit fontos tudni:** a Google-nél **nincs** automatikus indexelési kérelem
általános oldalakra. Az Indexing API kizárólag álláshirdetésre és élő
közvetítésre használható, a sitemap-ping végpontot 2023-ban megszüntették.
Ami a Google felé hat: pontos `lastmod`, RSS, belső linkelés, gyors
kiszolgálás — és a Search Console kézi „Indexelés kérése" gombja.

### 3.3 Napi tartalom: előbb a szerkesztési folyamat

A cikkek jelenleg TypeScript-objektumként állnak az `articles.ts` fájlban,
cikkenként ~80 sor. Hat cikkhez ez megfelelt, **napi publikáláshoz nem**: egy
elgépelt vessző megtöri az építést. Ha rendszeres tartalom a cél, előbb:

1. a cikkek átállítása Markdownra,
2. böngészőből használható szerkesztőfelület (Keystatic vagy Sveltia — git-alapú,
   ingyenes, szerver nélkül),
3. RSS-csatorna a tudástárhoz, az új cikkek gyorsabb felfedezéséhez.

Témajavaslatok, amikre mérhető kereslet van: „Mi az a generálkivitelezés, és
mikor éri meg?", „Mennyibe kerül egy teljes lakásfelújítás?", „Kaputelefon
csere társasházban", „Hikvision kamerarendszer: melyik típus mire jó?".

Egy megjegyzés az ütemhez: a napi cikk önmagában nem hoz helyezést — a Google
kifejezetten szűri a mennyiségi, felszínes tartalmat. Heti 2–3 valóban hasznos,
tapasztalatból írt cikk többet ér.

### 3.4 A facility management rés kiaknázása

A kutatás legérdekesebb megállapítása: a „műszaki épületüzemeltetés" találati
listáján **a nyolc helyből kettőt álláshirdetés-portál foglal el**, a többi
nagy, személytelen FM-cég. Ez szokatlanul gyenge verseny.

### 3.5 Mérés — *bekötve*

A **Cloudflare Web Analytics** működik: süti nélküli, egyedi látogatóazonosítót
nem képző, összesített mérés. Az adatkezelési tájékoztató 5. pontja ehhez
igazítva.

Egy buktató, ami sokáig rejtve maradt: a Cloudflare felületén az „automatikus
telepítés" be volt kapcsolva, de **nem mért semmit** — az automatikus beszúrás
a Worker által előállított válaszokon nem fut le. A mérőkód ezért kézzel került
a layoutba.

---

## 4. Nyitott apróságok

| Tétel | Megjegyzés |
|---|---|
| `sites_count` oszlop | Az adatbázisban van, de a kód sosem tölti ki — a helyszínek számát a `details.site_scope` mezőbe teszi |
| `/projektek/atadas-uzembe-helyezes` | Nincs képe — egy letöltési URL hibás volt |
| Mobil menü gombfelirata | „Részletes ajánlatot kérek" maradt, a hero „Ajánlatot kérek" |
| Teszt-sorok az adatbázisban | 20 sor, jórészt próbabeküldés — törölhetők |
| Telefonszám, e-mail | Beállítva; ha változik, `src/lib/site.ts` |
| Közösségi profilok | Üresen hagyva a konfigurációban, így nem jelennek meg |

---

## 5. Javasolt sorrend

1. **Bing Webmaster Tools hitelesítés befejezése** *(5 perc — a fájl kint van)*
2. **Oldaltérkép beküldése a Search Console-ba** *(10 perc)*
3. **Cloudflare API-token törlése** *(1 perc, biztonsági)*
4. **Google Cégprofil létrehozása** *(fél óra, a legnagyobb azonnali hatás —
   a fő kulcsszavaink találati listáját a helyi találati doboz uralja)*
5. **Vercel leválasztása** *(5 perc)*
6. **Jogi átnézés elindítása** *(a leghosszabb átfutás)*
7. **Referenciamunkák és saját fotók összegyűjtése** *(folyamatos — ez hozza a legtöbbet)*
8. Tudástár bővítése, előtte a szerkesztési folyamat rendbetétele

Az 1–5. lépés együtt egy délelőtt alatt elvégezhető. A 7. az, amin hosszú távon
a weboldal eredményessége múlik.

**4–6 hét múlva** érdemes visszanézni a Search Console-ba: akkor látszik, hogy
az átpozicionálás mely kifejezésekre hozott megjelenést.

---

## 6. Üzemeltetési tudnivalók

**Új verzió élesítése:** minden `git push` a `main` ágra automatikusan új
építést és élesítést indít a Cloudflare-en. Az építés 2–4 perc.

**A környezeti változók két külön helyen élnek**, és ez a leggyakoribb
hibaforrás:

| Hely | Mi kerül ide | Mikor él |
|---|---|---|
| Workers Builds → *Build variables* | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | csak építéskor |
| Worker → *Variables and Secrets* | `RESEND_API_KEY`, `IP_HASH_SALT`, `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO` | a kérések kiszolgálásakor |

A `NEXT_PUBLIC_` előtagú változók beépülnek a lefordított kódba, ezért azok
**az építés előtt** kellenek. A többit a Worker futás közben olvassa. Ha egy
titok hiányzik, a `wrangler secret list` parancs azonnal megmutatja.

**Ha nem érkezik e-mail az űrlapokról:** a hiba oka a Supabase `leads`
táblájának `email_error` oszlopában áll. A megkeresés maga ilyenkor is
elmentődik — a kód szándékosan csak akkor jelez hibát a látogatónak, ha sem a
mentés, sem az értesítés nem sikerült.
