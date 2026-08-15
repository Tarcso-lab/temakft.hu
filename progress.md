# TEMA Menedzsment Kft. — weboldal · állapotjelentés

**Utolsó frissítés:** 2026. augusztus 15.
**Állapot:** fejlesztés kész, élesítésre vár. A weboldal jelenleg csak helyben fut.

---

## 1. Hol tartunk

### Számokban

| | |
|---|---|
| Oldalak száma | **51** indexelhető oldal (58 építéskor, a technikai útvonalakkal együtt) |
| Tartalom | ~3 900 sor strukturált szöveg (8 tartalmi adatfájl) |
| Képek | 36 illusztráció |
| Komponensek | 22 React-komponens |
| Adatbázis | Supabase, `leads` tábla 33 oszloppal, 2 biztonsági szabállyal |
| Build | Hibamentes, TypeScript-hiba nélkül |

### Ami elkészült

**Oldalszerkezet.** Az eredeti elképzelést megtartottuk, két kiegészítéssel:
a `/megoldasok/…` célcsoport-oldalak (9 épülettípus) és az adatkezelési
tájékoztató. A szolgáltatások négy fő ágra bomlanak — üzemeltetés, tervezés és
kivitelezés, rendszerek, projektek —, összesen 23 aloldallal.

**Tartalom.** A szövegek adatfájlokban vannak, nem a komponensekben. Új oldal
felvételéhez nem kell React-et írni: egy új objektum a megfelelő tömbben, és az
útvonal, a menü, az oldaltérkép és a belső linkek maguktól frissülnek.

**Űrlapok és lead-kezelés.** Öt űrlaptípus, tudatos elhelyezéssel: négylépéses
részletes ajánlatkérő, gyors visszahívás, díjmentes felmérés, kapcsolatfelvétel
és hibabejelentés. Minden beküldés a Supabase adatbázisba kerül, és e-mail
értesítést indít. Spamvédelem: rejtett csapdamező, minimális kitöltési idő,
IP-alapú sebességkorlát. Az adatbázison sorszintű biztonság van: a beérkezett
megkereséseket a böngészőből senki nem tudja lekérdezni.

**Arculat.** Saját formalogó — hatszögben geometrikus „T", átlós szikraközzel —,
egyszínű változatban is, hímzéshez és szitanyomáshoz. A színvilág a munkaruha
neon zöld–fekete párosából származik, de a neon csak akcentusként jelenik meg.

**SEO.** Valós DataForSEO-adatokra épülő kulcsszókutatás (495 vizsgált kifejezés,
élő SERP-elemzéssel), és az ez alapján átalakított tartalom. Minden oldalon
egyedi meta-adatok a határértékeken belül, strukturált adatok (Organization,
Service, FAQPage, Article, BreadcrumbList), automatikus oldaltérkép.

**Dokumentáció és segédeszközök.**

| Fájl | Mire való |
|---|---|
| `README.md` | Üzemeltetési kézikönyv: indítás, beállítás, tartalomszerkesztés |
| `docs/seo-kutatas.md` | A DataForSEO piackutatás teljes eredménye |
| `docs/google-cegprofil.md` | Cégprofil-leírás (724 karakter) + beállítási útmutató |
| `docs/uj-cikk.md` | Hogyan írj új tudástári cikket, másolható sablonnal |
| `docs/deploy.md` | Élesítés lépésről lépésre, Rackhost DNS-beállítással |
| `docs/resend-teszt.ps1` | E-mail küldés ellenőrzése egy paranccsal |
| `docs/dfs-teszt.ps1` | DataForSEO hozzáférés ellenőrzése |
| `indit.bat` | A fejlesztői szerver indítása duplakattintással |

---

## 2. Mi hiányzik az élesítéshez

Ezek nélkül a weboldal nem mehet ki éles környezetbe. Sorrendben:

### 2.1 ~~Resend API-kulcs~~ — **KÉSZ**

Az e-mail értesítés működik. A teljes láncot végigteszteltük: űrlap beküldése →
adatbázisba mentés → értesítő levél kiküldése. A `leads` táblában
`email_sent: true`, hibaüzenet nincs.

Egy dolog maradt hátra, de nem blokkoló: a feladó jelenleg
`onboarding@resend.dev`. Ha a `temakft.hu` domaint hitelesítitek a Resend
„Domains" menüjében, a `LEAD_EMAIL_FROM` átírható `noreply@temakft.hu` címre —
a saját domainről küldött levél ritkábban kerül spambe.

### 2.2 Domain és tárhely — *blokkoló*

A weboldal jelenleg csak a saját gépeden fut. **Részletes útmutató:
[`docs/deploy.md`](docs/deploy.md).**

A lényeg: **a Rackhost sima PHP-tárhelyén ez a weboldal nem fut**, mert Node.js-t
igényel (az űrlapok szerveroldalon dolgoznak fel). **A domain viszont maradhat a
Rackhostnál** — csak a DNS-rekordokat kell átirányítani.

Két út van:

- **Vercel** *(ajánlott)* — 0 Ft ezen a méreten, ~30 perc beállítás, automatikus
  SSL. A Next.js fejlesztőjének szolgáltatása, erre az alkalmazástípusra való.
- **Rackhost VPS** — ha cél, hogy minden egy helyen legyen. Havidíjas, és a
  szerver karbantartása, az SSL-megújítás a tiéd marad.

### 2.3 Jogi szövegek jogi átnézése — *blokkoló*

Az ÁSZF, a garanciális feltételek és az adatkezelési tájékoztató **kidolgozott
tervezetek**, de szögletes zárójeles helyekkel: `[12] hónap`, `[15] nap`,
hatálybalépési dátumok. Ezeket a tényleges gyakorlatotokra kell állítani, és
jogásszal átnézetni. Addig figyelmeztető sáv látszik az oldalak tetején.

Külön mérlegelendő: **a székhely nincs feltüntetve** a weboldalon, a kérésednek
megfelelően. Az elektronikus kereskedelmi törvény viszont előírja a szolgáltató
székhelyének megjelenítését. Ha nem akarjátok a magánlakcímet közzétenni,
székhelyszolgáltatás a szokásos megoldás.

### 2.4 Google Cégprofil

A leírás elkészült (724 karakter), a beállítási útmutatóval együtt. **A helyi
keresésekben ez a legnagyobb hatású egyetlen lépés** — nagyobb, mint bármi, amit
a weboldal szövegén még csiszolni lehet. „Szolgáltatási területű vállalkozásként"
kell beállítani, cím nélkül.

### 2.5 Google Search Console

Élesítés után: tulajdon hitelesítése, oldaltérkép beküldése. Enélkül vakon
repülünk — nem látszik, mire jelenik meg a weboldal.

---

## 3. Amire érdemes több időt fordítani

Ezek nem blokkolók, de ezeken múlik, hogy a weboldal hoz-e valódi ügyfelet.

### 3.1 Referenciák — a legnagyobb hiány

**Jelenleg egyetlen konkrét munka sincs a weboldalon.** Se fotó, se projektnév,
se szám, se ügyfélvélemény. Egy műszaki szolgáltatónál ez a legerősebb bizonyíték,
és a jelenlegi legnagyobb konverziós gyengeség.

Amivel a legtöbbet lehetne nyerni, csökkenő sorrendben:

1. **5–10 valós referenciamunka** rövid leírással: milyen épület, mi volt a
   feladat, mi lett az eredmény. Név nélkül is működik („1 400 m²-es irodaház,
   XIII. kerület").
2. **Saját fotók** ezekről a munkákról. A jelenlegi 36 kép AI-generált
   illusztráció — jó helykitöltő, de nem bizonyíték, és nem is állítjuk róla,
   hogy az lenne.
3. **Ügyfélvélemények**, akár két mondat, névvel és cégnévvel.

### 3.2 Tudástár bővítése

Hat cikk van. A kutatás szerint az informatív keresések adják a forgalom nagy
részét ezen a piacon — a „generálkivitelezés" kifejezés keresési szándéka is
**informational**. Néhány további cikk, amire konkrét kereslet mérhető:

- „Mi az a generálkivitelezés, és mikor éri meg?"
- „Mennyibe kerül egy teljes lakásfelújítás?" — az árkeresés erős
- „Kaputelefon csere társasházban: mit kell tudni a közgyűlés előtt?"
- „Hikvision kamerarendszer: melyik típus mire jó?"

### 3.3 A facility management rés kiaknázása

A kutatás legérdekesebb megállapítása: a „műszaki épületüzemeltetés" találati
listáján **a nyolc helyből kettőt álláshirdetés-portál foglal el**, a többi pedig
nagy, személytelen FM-cég. Ez szokatlanul gyenge verseny. Egy alaposabb,
konkrétabb tartalom itt aránytalanul jó helyezést érhet el.

### 3.4 Mérés

Jelenleg semmilyen látogatottságmérés nincs a weboldalon. Élesítés után érdemes
egy adatvédelmi szempontból tiszta megoldást bekötni, hogy látszódjon, mely
oldalak hoznak megkeresést. Enélkül a további optimalizálás találgatás.

### 3.5 Fiókhigiénia

- **A DataForSEO API-jelszót cseréld le** — a kutatás során bekerült a
  beszélgetés naplójába. Dashboard → API Access, egy kattintás.
- A DataForSEO-egyenleg ~0,67 USD. Egy későbbi, teljes kutatáshoz érdemes
  feltölteni néhány dollárt.
- Higgsfield: ~34 kredit maradt (kb. 17 kép).

---

## 4. Nyitott apróságok

| Tétel | Megjegyzés |
|---|---|
| `/projektek/atadas-uzembe-helyezes` | Nincs képe — egy letöltési URL hibás volt |
| Telefonszám, e-mail | Beállítva; ha változik, `src/lib/site.ts` |
| Közösségi profilok | Üresen hagyva a konfigurációban, így nem jelennek meg |
| Mobil menü gombfelirata | „Részletes ajánlatot kérek" maradt, a hero „Ajánlatot kérek" |

---

## 5. Javasolt sorrend

1. ~~Resend-kulcs beállítása~~ — **kész, tesztelve**
2. Jogi szövegek véglegesítése és átnézetése *(a leghosszabb átfutás — érdemes most elindítani)*
3. Élesítés: Vercel + Rackhost DNS *(~30 perc, lásd `docs/deploy.md`)*
4. Google Cégprofil létrehozása *(fél óra, a legnagyobb azonnali hatás)*
5. Search Console és mérés bekötése *(fél óra)*
6. Referenciamunkák és saját fotók összegyűjtése *(folyamatos, de ez hozza a legtöbbet)*
7. Tudástár bővítése, negyedévente néhány cikk

Az 1–5. lépés együtt egy nap alatt elvégezhető. A 6. az, amin hosszú távon a
weboldal eredményessége múlik.
