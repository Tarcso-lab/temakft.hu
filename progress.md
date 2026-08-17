# TEMA Menedzsment Kft. — weboldal · állapotjelentés

**Utolsó frissítés:** 2026. augusztus 17.
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
| Képek | 36 illusztráció, WebP formátumban — összesen 3,8 MB |
| Komponensek | 22 React-komponens |
| Adatbázis | Supabase, `leads` tábla 33 oszloppal, sorszintű biztonsággal |
| Kiszolgálás | Cloudflare Workers, globális CDN-ről |
| Verziókövetés | GitHub — [Tarcso-lab/temakft.hu](https://github.com/Tarcso-lab/temakft.hu) |

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
kifejezés), egyedi meta-adatok minden oldalon, strukturált adatok
(Organization, Service, FAQPage, Article, BreadcrumbList), automatikus
oldaltérkép.

**Dokumentáció és segédeszközök.**

| Fájl | Mire való |
|---|---|
| `README.md` | Üzemeltetési kézikönyv: indítás, beállítás, tartalomszerkesztés |
| `docs/seo-kutatas.md` | A DataForSEO piackutatás teljes eredménye |
| `docs/google-cegprofil.md` | Cégprofil-leírás (724 karakter) + beállítási útmutató |
| `docs/uj-cikk.md` | Hogyan írj új tudástári cikket, másolható sablonnal |
| `docs/deploy.md` | Élesítési útmutató — **elavult, a Vercel-utat írja le** |
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

### 2.3 Google Search Console

A domain él, a `sitemap.xml` elérhető — **most már van értelme beküldeni.**
Tulajdon hitelesítése, majd az oldaltérkép beküldése. Enélkül nem látszik,
mire jelenik meg a weboldal.

### 2.4 Google Cégprofil

A leírás elkészült (`docs/google-cegprofil.md`). **A helyi keresésekben ez a
legnagyobb hatású egyetlen lépés.** „Szolgáltatási területű vállalkozásként"
kell beállítani, cím nélkül.

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

### 3.2 Az oldaltérkép `lastmod` mezőjének javítása — *valódi hiba*

A `src/app/sitemap.ts` minden oldalra a lekérdezés pillanatát írja
módosítási dátumnak. A Google ilyenkor egy idő után figyelmen kívül hagyja a
mezőt — pont azt a jelzést veszítjük el, amivel a friss tartalmat kiemelhetnénk.
A cikkeknél már jó a megoldás; ezt kell kiterjeszteni a többi oldaltípusra.

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

### 3.5 Mérés

Jelenleg semmilyen látogatottságmérés nincs a weboldalon — ezt az adatkezelési
tájékoztató is így rögzíti. Élesítés után érdemes egy adatvédelmi szempontból
tiszta megoldást bekötni. **Ha bekötjük, az adatkezelési tájékoztató 5.
pontját frissíteni kell.**

---

## 4. Nyitott apróságok

| Tétel | Megjegyzés |
|---|---|
| `docs/deploy.md` | Elavult: a Vercel-utat írja le. Átírandó a Cloudflare-re |
| `sites_count` oszlop | Az adatbázisban van, de a kód sosem tölti ki — a helyszínek számát a `details.site_scope` mezőbe teszi |
| `/projektek/atadas-uzembe-helyezes` | Nincs képe — egy letöltési URL hibás volt |
| Mobil menü gombfelirata | „Részletes ajánlatot kérek" maradt, a hero „Ajánlatot kérek" |
| Teszt-sorok az adatbázisban | 20 sor, jórészt próbabeküldés — törölhetők |
| Telefonszám, e-mail | Beállítva; ha változik, `src/lib/site.ts` |
| Közösségi profilok | Üresen hagyva a konfigurációban, így nem jelennek meg |

---

## 5. Javasolt sorrend

1. **Cloudflare API-token törlése** *(1 perc, biztonsági)*
2. **Search Console + oldaltérkép beküldése** *(fél óra — most már van értelme)*
3. **Google Cégprofil létrehozása** *(fél óra, a legnagyobb azonnali hatás)*
4. **Vercel leválasztása** *(5 perc)*
5. **Jogi átnézés elindítása** *(a leghosszabb átfutás)*
6. **`lastmod` javítása** *(fél óra, valódi hiba)*
7. **Referenciamunkák és saját fotók összegyűjtése** *(folyamatos — ez hozza a legtöbbet)*
8. Tudástár bővítése, előtte a szerkesztési folyamat rendbetétele

Az 1–4. lépés együtt egy délelőtt alatt elvégezhető. A 7. az, amin hosszú távon
a weboldal eredményessége múlik.

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
