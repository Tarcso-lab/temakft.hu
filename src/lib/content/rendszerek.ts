import type { HubPage, ServicePage } from "./types";

export const rendszerekHub: HubPage = {
  key: "rendszerek",
  slug: "/rendszerek",
  h1: "Rendszereink",
  metaTitle: "Kamerarendszer, beléptetés, hálózat | TEMA",
  metaDescription:
    "Kamerarendszer, beléptetőrendszer, kaputelefon, strukturált hálózat és okosépület telepítése és üzemeltetése Hikvision, Ubiquiti és KNX alapon.",
  keywords: [
    "kamerarendszer",
    "beléptető rendszer",
    "kaputelefon",
    "strukturált hálózat",
    "okosépület",
    "biztonságtechnika cégeknek",
  ],
  lead: "Nem eszközöket adunk el, hanem működő rendszereket. Az alábbi technológiákat tervezzük, építjük és üzemeltetjük — jellemzően ugyanannál az ügyfélnél mindhármat.",
  intro: [
    {
      type: "p",
      text: "A rendszerválasztásnál három dolgot nézünk: mit kell tudnia, meddig kell szolgálnia, és ki fogja üzemeltetni. Ebből a harmadik a legfontosabb, mert egy remek műszaki paraméterekkel rendelkező rendszer is használhatatlan, ha a napi kezelése bonyolult vagy a bővítése egy szűk szakértői körhöz kötött.",
    },
    {
      type: "p",
      text: "Ezért dolgozunk kiforrott, széles körben elterjedt, jó alkatrészellátással rendelkező gyártókkal, és ezért ragaszkodunk ahhoz, hogy minden rendszer dokumentáltan és nyitottan kerüljön átadásra.",
    },
  ],
  faq: [
    {
      q: "Kötelező a felsorolt márkákat választani?",
      a: "Nem. Ezek azok a gyártók, amelyekkel a legtöbb tapasztalatunk van, és amelyek alkatrészellátása hosszú távon biztosított. Ha a megrendelőnek más gyártói preferenciája van, vagy meglévő rendszert kell bővíteni, azzal is dolgozunk.",
    },
    {
      q: "Egy szerződésben megoldható több rendszer kiépítése?",
      a: "Igen, sőt ez a jellemző. A több szakágas munkánál a legnagyobb érték éppen a koordináció: egyszer bontunk, egyszer húzunk kábelt, egyszer állványozunk.",
    },
  ],
};

export const rendszerekPages: ServicePage[] = [
  {
    slug: "kamerarendszerek",
    hub: "rendszerek",
    navLabel: "Kamerarendszerek",
    icon: "Cctv",
    h1: "Kamerarendszerek",
    metaTitle: "Hikvision kamerarendszer telepítés, kiépítés | TEMA",
    metaDescription:
      "Kamerarendszer telepítés és kiépítés cégeknek, társasházaknak: Hikvision IP kamerák, méretezett tárolás, videoanalitika, távoli elérés, GDPR-megfelelés.",
    // Mért adatok: „hikvision kamerarendszer" 1 000/hó, „kamerarendszer" 720,
    // „kamerarendszer telepítése" 210, „kamerarendszer kiépítése" CPC 5,18 USD,
    // „társasházi kamerarendszer" CPC 5,52 USD, „kültéri kamerarendszer" 50.
    keywords: [
      "kamerarendszer telepítés",
      "kamerarendszer kiépítés",
      "Hikvision kamerarendszer",
      "IP kamerarendszer cégeknek",
      "kültéri kamerarendszer telepítés",
      "társasházi kamerarendszer",
      "kamerarendszer irodaház",
      "kamerarendszer GDPR",
    ],
    lead: "A kamerarendszer értékét nem a kamerák száma adja, hanem az, hogy egy fontos pillanatban használható felvétel legyen róla.",
    highlights: [
      { value: "Hikvision", label: "professzionális IP kamerák" },
      { value: "Méretezett", label: "tárolás a vállalt megőrzési időhöz" },
      { value: "Analitika", label: "vonalátlépés, területvédelem, rendszám" },
    ],
    body: [
      {
        type: "p",
        text: "A kamerarendszer akkor jó, ha az esemény után visszanézve azonosítható, ami történt. Ez nem magától értetődő: a legtöbb használhatatlan felvétel oka nem a kamera minősége, hanem a rossz pozíció, az ellenfény, a túl nagy látószög vagy a túl rövid megőrzési idő.",
      },
      { type: "h2", text: "Tervezés: a kamerapozíció fontosabb a felbontásnál" },
      {
        type: "p",
        text: "A felmérés során minden kamerához meghatározzuk a célt: azonosítás, felismerés, észlelés vagy áttekintés. Ezek eltérő képpont-sűrűséget és látószöget igényelnek. Egy bejárati azonosító kamera szűk látószöggel, arcmagasságban a legjobb; egy parkoló áttekintéséhez ugyanez a kamera alkalmatlan. Ezt a különbséget a terven, még telepítés előtt tisztázzuk.",
      },
      {
        type: "ul",
        items: [
          "Kamerapozíciók és látószögek megtervezése helyszínrajzon.",
          "Kültéri és beltéri IP kamerák: dome, bullet, PTZ, halszem, rendszámfelismerő.",
          "Éjszakai működés: infra, ColorVu (színes éjszakai kép), kiegészítő megvilágítás.",
          "Hálózati rögzítő (NVR) vagy szerveres rögzítés méretezése.",
          "Tárolókapacitás a vállalt megőrzési időhöz — nem becslés, hanem számítás alapján.",
          "Távoli elérés mobilon és számítógépen, jogosultsági szintekkel.",
          "Videoanalitika: vonalátlépés, területvédelem, tárgyeltűnés, rendszámfelismerés.",
        ],
      },
      { type: "h2", text: "Videoanalitika: kevesebb nézés, több észlelés" },
      {
        type: "p",
        text: "A felvételek visszanézése időigényes és megbízhatatlan. Az analitika ezen segít: a rendszer maga jelez, ha valaki átlép egy virtuális vonalat, belép egy védett területre, vagy ha egy tárgy eltűnik. Az így generált események keresése másodpercek kérdése, szemben a több órányi felvétel átnézésével. Ipari és logisztikai környezetben a rendszámfelismerés a beléptetéssel összekötve érdemben gyorsítja a kapuforgalmat.",
      },
      {
        type: "callout",
        title: "Adatvédelem: nem opcionális",
        text: "A munkahelyi kamerázás személyes adatot kezel, ezért érdekmérlegelési teszt, adatkezelési tájékoztató és megfelelő tájékoztató táblák szükségesek. Kialakításkor figyelünk arra is, hogy a kamerák ne lássanak be olyan területre, ahol a megfigyelés aránytalan volna. A műszaki kialakításban segítünk; a jogi dokumentumok elkészítése az adatkezelő feladata.",
      },
      { type: "h2", text: "Miért Hikvision kamerarendszert építünk?" },
      {
        type: "p",
        text: "A kamerarendszereinket elsősorban Hikvision eszközökre építjük. Ennek gyakorlati oka van: a termékskála a néhány kamerás rendszertől a több telephelyes, videoanalitikát is használó megoldásig lefedi az igényeket, a hazai alkatrészellátás jó, és a kamerák, rögzítők, beléptetők, kaputelefonok egymással jól integrálhatók — ez utóbbi hosszú távon többet ér, mint egy-egy eszköz papíron jobb paramétere.",
      },
      {
        type: "p",
        text: "Ez nem kizárólagosság: ha a megrendelőnek más gyártó a preferenciája, vagy meglévő, más márkájú rendszert kell bővíteni, azzal is dolgozunk. Amit nem vállalunk, az a vegyes, dokumentálatlan eszközpark toldozgatása — ott előbb rendet teszünk, és csak utána bővítünk.",
      },
      { type: "h2", text: "Társasházi kamerarendszer: amiben eltér a céges rendszerektől" },
      {
        type: "p",
        text: "Társasháznál a műszaki kérdés a kisebbik fele a feladatnak. A kamerarendszer közös tulajdonban lévő területet figyel, ezért a telepítés előtt közgyűlési döntés és megfelelő adatkezelési szabályozás szükséges. A kamerák nem láthatnak be lakásba, lakásajtóra és olyan területre, ahol a megfigyelés aránytalan volna. A műszaki kialakításban ehhez igazodunk: a látószögeket a felmérésen közösen rögzítjük, és a telepítés után írásban dokumentáljuk, melyik kamera mit lát.",
      },
      { type: "h2", text: "Meglévő rendszer bővítése" },
      {
        type: "p",
        text: "Sok esetben nem kell mindent kicserélni. Ha a kábelezés megfelelő és a rögzítő még támogatott, gyakran elég a kritikus pontokon kamerát cserélni, a tárolást bővíteni, és a beállításokat rendbe tenni. A felmérés után megmondjuk, mi az, ami megtartható, és mi az, aminek a cseréje elkerülhetetlen.",
      },
    ],
    faq: [
      {
        q: "Hány kamera kell egy telephelyre?",
        a: "Ezt nem a terület nagysága, hanem a védendő pontok száma határozza meg: bejáratok, kapuk, értékes tárolók, pénzkezelési pontok, kritikus gépek. Egy jól elhelyezett kamera többet ér, mint három rosszul irányított. A felmérésen közösen végigvesszük, mit szeretne látni, és ebből adódik a szám.",
      },
      {
        q: "Mennyi ideig őrzi meg a rendszer a felvételeket?",
        a: "A megőrzési időt az adatkezelő határozza meg, és a rendszert ehhez méretezzük. A számítás a kameraszámtól, a felbontástól, a képkockaszámtól és a tömörítéstől függ — ezt az ajánlatban konkrét számokkal mutatjuk meg, nem ígéretként.",
      },
      {
        q: "Elérhető a kamerakép mobilról?",
        a: "Igen, mobilos és számítógépes elérést is beállítunk, felhasználónként külön jogosultsággal. A távoli elérést mindig biztonságosan alakítjuk ki — nem közvetlen internetes portnyitással, mert az az egyik leggyakoribb támadási felület.",
      },
      {
        q: "Működik a rendszer áramszünet alatt?",
        a: "Szünetmentes tápellátással igen, meghatározott áthidalási ideig. Ezt kritikus helyszíneken javasoljuk is, mert az áramszünet és a betörés együttes előfordulása nem véletlen szokott lenni.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/rendszerek/beleptetes",
      "/tervezes-kivitelezes/gyengearam",
      "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
      "/megoldasok/uzletek-kereskedelem",
    ],
  },

  {
    slug: "beleptetes",
    hub: "rendszerek",
    navLabel: "Beléptetőrendszerek",
    icon: "ScanFace",
    h1: "Beléptetőrendszerek",
    metaTitle: "Beléptető rendszer telepítés cégeknek | TEMA",
    metaDescription:
      "Beléptetőrendszer tervezése és telepítése: kártyás, mobilos és biometrikus azonosítás, zónakezelés, munkaidő-nyilvántartás, kamerás integráció.",
    // Mért adatok: „beléptető rendszer" 720/hó; a „beléptető rendszer telepítés"
    // kattintási ára 15,52 USD — az egész kutatás legmagasabb értéke.
    keywords: [
      "beléptető rendszer",
      "beléptető rendszer telepítés",
      "munkahelyi beléptető rendszer",
      "kártyás beléptetés iroda",
      "beléptetés munkaidő nyilvántartás",
      "biometrikus beléptetés",
    ],
    lead: "A beléptetés nem ajtónyitás, hanem jogosultságkezelés. A hardver egyszer kerül be — a jogosultságokat viszont minden nap kezelni kell.",
    highlights: [
      { value: "Kártya", label: "mobil vagy biometrikus azonosítás" },
      { value: "Zónák", label: "és időprofilok személyre szabva" },
      { value: "Integrált", label: "kamerakép a belépési eseményekhez" },
    ],
    body: [
      {
        type: "p",
        text: "A beléptetőrendszer legfőbb haszna nem az, hogy kizárja az illetéktelent — hanem hogy pontosan tudni lehet, ki, mikor, hol járt, és hogy egy kilépő munkatárs hozzáférését egy kattintással meg lehet szüntetni. Kulcsnál ez lehetetlen: egy elveszett kulcs zárcserét jelent, egy elveszett kártya pedig egy sorral kevesebbet az adatbázisban.",
      },
      { type: "h2", text: "Azonosítási módok" },
      {
        type: "table",
        head: ["Mód", "Előny", "Mikor javasoljuk"],
        rows: [
          [
            "Kártya / kulcstartó",
            "Olcsó, gyors, egyszerű kezelés",
            "Általános irodai és ipari használatra",
          ],
          [
            "Mobiltelefonos",
            "Nincs kártyaköltség, távolról kiosztható",
            "Váltakozó létszám, vendégkezelés, több telephely",
          ],
          [
            "PIN-kód",
            "Eszköz nélkül működik",
            "Ritkán használt helyiségek, kiegészítő azonosításként",
          ],
          [
            "Biometrikus (ujjnyomat, arc)",
            "Nem átadható, nem veszíthető el",
            "Fokozottan védett terület — adatvédelmi mérlegelés után",
          ],
        ],
      },
      {
        type: "p",
        text: "Fokozott biztonságú területeknél a módokat kombináljuk: kártya és PIN, vagy kártya és biometrikus azonosítás együtt. A biometrikus megoldásoknál külön felhívjuk a figyelmet arra, hogy különleges személyes adat kezeléséről van szó, amihez alapos adatvédelmi mérlegelés szükséges.",
      },
      { type: "h2", text: "Zónák, időprofilok, naplózás" },
      {
        type: "p",
        text: "A rendszer akkor hasznos igazán, ha nem mindenki mindenhova léphet be. Zónákra osztjuk az épületet — közös terek, irodák, szerverszoba, raktár, gépészet —, és minden felhasználóhoz zóna- és időprofilt rendelünk. Így egy takarító munkatárs csak a saját munkaidejében és csak a takarítandó területre léphet be, egy külsős szerelő pedig időkorlátos, célzott jogosultságot kap.",
      },
      {
        type: "ul",
        items: [
          "Ajtóvezérlők, olvasók, mágneszárak és motoros zárak telepítése.",
          "Forgóvillák, sorompók, tolókapuk beléptetéshez kötése.",
          "Menekülési útvonalak szabályos kialakítása, vészkinyitás.",
          "Munkaidő-nyilvántartás alapadatainak szolgáltatása bérszámfejtéshez.",
          "Látogatókezelés: ideiglenes, lejáró jogosultságok.",
          "Kamerarendszeres integráció: eseményhez társított felvétel.",
        ],
      },
      {
        type: "callout",
        title: "A tűzvédelem elsőbbséget élvez",
        text: "A menekülési útvonalakon lévő ajtóknak áramszünet és tűzriasztás esetén is nyithatónak kell lenniük. Ezt minden beléptetési tervnél az első szempontként kezeljük — a biztonságtechnika soha nem akadályozhatja a menekülést.",
      },
      { type: "h2", text: "Munkaidő-nyilvántartás" },
      {
        type: "p",
        text: "A beléptetési események alkalmasak munkaidő-nyilvántartás alapjául. A rendszer exportálható jelentéseket készít, amelyek a bérszámfejtésbe illeszthetők. Fontos ugyanakkor, hogy a munkaidő-nyilvántartási cél önálló adatkezelési jogalapot igényel, ezért ezt a funkciót mindig külön, tudatosan kell bekapcsolni.",
      },
    ],
    faq: [
      {
        q: "Bővíthető a beléptetés utólag több ajtóra?",
        a: "Igen, ha a rendszer és a hálózati infrastruktúra ezt lehetővé teszi. Ezért tervezünk mindig tartalék kapacitással és tartalék kábelvégponttal — az utólagos bővítés így ajtónként néhány órás munka, nem projekt.",
      },
      {
        q: "Mi történik áramszünet esetén?",
        a: "A rendszert szünetmentes tápellátással látjuk el, a menekülési útvonalak ajtói pedig áramszünet esetén nyithatók. A vezérlők akkumulátoros áthidalással működnek tovább, így az események naplózása sem szakad meg.",
      },
      {
        q: "Össze lehet kötni a meglévő kamerarendszerrel?",
        a: "A legtöbb esetben igen, különösen ha a két rendszer azonos gyártótól származik vagy nyílt protokollt támogat. A felmérés során ezt konkrétan megvizsgáljuk.",
      },
      {
        q: "Társasházban is használható?",
        a: "Igen, társasházaknál a beléptetés jellemzően a kaputelefonnal együtt kerül kiépítésre. Ilyenkor a lakók kulcstartós vagy mobilos azonosítót kapnak, ami elvesztés esetén azonnal letiltható — ez a zárcserénél lényegesen olcsóbb megoldás.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/rendszerek/kamerarendszerek",
      "/rendszerek/kaputelefon",
      "/tervezes-kivitelezes/rendszerintegracio",
      "/megoldasok/intezmenyek",
    ],
  },

  {
    slug: "kaputelefon",
    hub: "rendszerek",
    navLabel: "Kaputelefon",
    icon: "PhoneCall",
    h1: "Kaputelefon és video-kaputelefon",
    metaTitle: "Kaputelefon szerelés, javítás, csere | TEMA",
    metaDescription:
      "Kaputelefon szerelés, javítás, csere és bekötés társasházban és irodaházban: videós és kamerás kaputelefon, Codefon és Hikvision, mobilos hívásátirányítás.",
    // A kulcsszavak mért keresési adatok alapján: „kaputelefon" 4 400/hó,
    // „video kaputelefon" 590, „kaputelefon bekötés" 390, „kaputelefon
    // szerelés" 320, „társasházi kaputelefon" 320, „Codefon kaputelefon" 590.
    keywords: [
      "kaputelefon szerelés",
      "kaputelefon javítás",
      "kaputelefon szerviz",
      "kaputelefon csere",
      "kaputelefon bekötés",
      "video kaputelefon",
      "kamerás kaputelefon",
      "társasházi kaputelefon",
      "Codefon kaputelefon",
      "Hikvision kaputelefon",
      "vezeték nélküli kaputelefon",
    ],
    lead: "A kaputelefon a legtöbbet használt gyengeáramú rendszer az épületben — és jellemzően a legelhanyagoltabb.",
    highlights: [
      { value: "Codefon", label: "és Hikvision rendszerek" },
      { value: "Mobilos", label: "hívásátirányítás és távoli nyitás" },
      { value: "Szakaszos", label: "csere lakott társasházban is" },
    ],
    body: [
      {
        type: "p",
        text: "Egy társasházban vagy irodaházban a kaputelefont naponta több százszor használják. Ennek megfelelően kopik: a nyomógombok elhasználódnak, a beszédminőség romlik, a zárfogadó kilazul. A régi, analóg rendszereknél ráadásul egyre nehezebb az alkatrész-utánpótlás.",
      },
      { type: "h2", text: "Mikor érdemes cserélni, és mikor elég a javítás?" },
      {
        type: "p",
        text: "Ha a hiba egyedi — egy lakáskészülék néma, egy gomb nem működik, a zár nem fogad —, akkor a javítás gazdaságos. Ha viszont a kültéri egység alkatrésze már nem beszerezhető, a központ ismétlődően hibásodik, vagy a kábelezés állapota rossz, akkor a folyamatos javítgatás többe kerül, mint a csere. A felmérés során ezt megmondjuk, és mindkét változatra adunk árat.",
      },
      {
        type: "ul",
        items: [
          "Audio és video kaputelefon rendszerek telepítése és cseréje.",
          "Kültéri egység: vandálbiztos kivitel, névtáblák, kameraegység.",
          "Lakáskészülékek: kézibeszélős vagy kihangosított, videós kijelzővel.",
          "Mobilos hívásátirányítás: a hívás a telefonra érkezik, távolról nyitható a kapu.",
          "Meglévő kábelezés felhasználása, ahol az állapota ezt megengedi.",
          "Kapunyitás beléptetéssel: kulcstartó, kártya vagy kód a lakóknak.",
          "Több bejárat, több kapu és garázskapu kezelése egy rendszerben.",
        ],
      },
      { type: "h2", text: "Csere lakott társasházban" },
      {
        type: "p",
        text: "A kaputelefoncsere a lakók mindennapjait érinti, ezért ütemezetten dolgozunk: a kültéri egység és a központ cseréje jellemzően egy nap, a lakáskészülékek cseréje pedig előre egyeztetett időpontokban, akár több turnusban is történhet. A cél, hogy a ház egyetlen éjszakát se töltsön működő kaputelefon nélkül.",
      },
      {
        type: "callout",
        title: "Meglévő kábelezés: az esetek nagy részében megtartható",
        text: "Sok társasház azért halogatja a cserét, mert bontástól és a lépcsőház felújításától tart. A modern rendszerek jelentős része a meglévő két- vagy négyeres vezetéken is működik, így teljes újrakábelezés nélkül megoldható a korszerűsítés — beleértve a videofunkciót is.",
      },
      { type: "h2", text: "Milyen kaputelefon típusok közül lehet választani?" },
      {
        type: "table",
        head: ["Típus", "Mikor jó választás", "Mire figyeljen"],
        rows: [
          [
            "Audio kaputelefon",
            "Kis társasház, ahol a kép nem követelmény",
            "A legolcsóbb megoldás, de utólag videóra bővíteni jellemzően nem lehet",
          ],
          [
            "Video kaputelefon",
            "A leggyakoribb választás társasháznál és irodánál",
            "A kültéri egység éjszakai képminősége dönti el, mennyit ér a rendszer",
          ],
          [
            "Kamerás kaputelefon rögzítéssel",
            "Ahol a hívások visszakereshetősége is fontos",
            "Rögzítés esetén adatkezelési tájékoztató és tájékoztató tábla szükséges",
          ],
          [
            "Vezeték nélküli kaputelefon",
            "Ahol a kábelezés nem megoldható vagy aránytalanul drága",
            "Hatótávolság és a WiFi-lefedettség stabilitása a kritikus pont",
          ],
          [
            "Mobilra irányított rendszer",
            "Ha a hívást távolról is fogadni kell",
            "Alkalmazásfüggő; a szolgáltatás hosszú távú elérhetőségét érdemes tisztázni",
          ],
        ],
      },
      { type: "h2", text: "Kaputelefon bekötés: mi történik a szerelés során?" },
      {
        type: "p",
        text: "A bekötés a meglévő adottságoktól függ. Ha van használható vezeték, a szerelés jellemzően bontás nélkül elvégezhető: a kültéri egység és a központ cseréje után a lakáskészülékek sorra kerülnek. Ha a vezeték szakadt vagy alkalmatlan, akkor vagy új nyomvonalat építünk a lépcsőházban, vagy vezeték nélküli megoldást javaslunk — ezt a felmérésen döntjük el, nem utólag.",
      },
      {
        type: "p",
        text: "A szerelés része a zárfogadó vagy elektromos zár beállítása is. A tapasztalatunk szerint a legtöbb „rossz a kaputelefon” bejelentés valójában nem a kaputelefonra, hanem a kopott zárszerkezetre vezethető vissza — ezért ezt minden esetben ellenőrizzük.",
      },
      { type: "h2", text: "Irodai és üzemi használat" },
      {
        type: "p",
        text: "Irodaházakban és telephelyeken a kaputelefon jellemzően a recepcióval és a beléptetéssel együtt működik: a hívás a portára vagy a recepcióra fut be, a nyitás naplózódik, és a kaputelefon kamerájának képe a kamerarendszerbe integrálódik. Több bejárat esetén a hívásirányítás időprofilhoz köthető — munkaidőn kívül a hívás mobilra vagy ügyeletre továbbítható.",
      },
    ],
    faq: [
      {
        q: "Megoldható, hogy a kaputelefon hívása a mobilomra érkezzen?",
        a: "Igen, ez ma már az egyik leggyakrabban kért funkció. A hívás alkalmazáson keresztül a telefonra érkezik, ott látható a kamerakép, és onnan nyitható a kapu — akkor is, ha éppen nem tartózkodik otthon vagy az irodában.",
      },
      {
        q: "Egy társasházban egyszerre kell mindenkinek cserélni a készüléket?",
        a: "Nem feltétlenül. Több rendszernél megoldható a szakaszos csere, így a lakások fokozatosan is átállhatnak. Ezt a ház döntése és költségvetése szerint ütemezzük.",
      },
      {
        q: "Kültéri egység elbírja a rongálást?",
        a: "Vandálbiztos, fém kültéri egységeket javaslunk minden olyan helyre, ahol az utcáról közvetlenül hozzáférhető. Ezek lényegesen tartósabbak, és hosszú távon olcsóbbak, mint a többszöri csere.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/rendszerek/beleptetes",
      "/megoldasok/tarsashazak",
      "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
      "/rendszerek/biztonsagtechnika",
    ],
  },

  {
    slug: "strukturalt-halozat",
    hub: "rendszerek",
    navLabel: "Strukturált hálózat",
    icon: "Cable",
    h1: "Strukturált hálózat",
    metaTitle: "Strukturált hálózat kiépítés | TEMA",
    metaDescription:
      "Strukturált hálózat kiépítése: Cat6 és Cat6A kábelezés, optikai gerinc, rendezőszekrény, végpontjelölés, bemérés és átadási jegyzőkönyv.",
    keywords: [
      "strukturált hálózat",
      "strukturált kábelezés",
      "Cat6 hálózat kiépítés",
      "hálózati kábelezés iroda",
      "optikai gerinc kiépítés",
      "rendezőszekrény kialakítás",
    ],
    lead: "A strukturált hálózat az épület leghosszabb életű műszaki rendszere. Az aktív eszközök cserélődnek — a kábel marad.",
    highlights: [
      { value: "15–20 év", label: "tervezett élettartam" },
      { value: "Bemérve", label: "minden szakasz, jegyzőkönyvvel" },
      { value: "Jelölve", label: "minden végpont, mindkét végén" },
    ],
    body: [
      {
        type: "p",
        text: "A strukturált hálózat az a rendszer, ahol a legrosszabbul jár, aki spórol. A kábel anyagára a projekt költségének töredéke; a kihúzás munkadíja és a bontás viszont utólag sokszorosa. Ezért mindig tartalék végpontokkal és a jelenlegi igényen túlmutató kategóriájú kábellel tervezünk.",
      },
      { type: "h2", text: "Mit építünk?" },
      {
        type: "ul",
        items: [
          "Cat6 és Cat6A árnyékolt vagy árnyékolatlan rézkábelezés munkaállomásokhoz és eszközökhöz.",
          "Optikai gerinchálózat szintek, épületrészek és telephelyek között.",
          "Rendezőszekrények: patch panel, kábelrendezés, szellőzés, szünetmentes táp.",
          "Falidobozok, padlódobozok, ipari környezetben védett kivitelű aljzatok.",
          "PoE-tápellátás kamerákhoz, access pointokhoz, beléptetéshez.",
          "Kábeltálcák, nyomvonalak kiépítése erős- és gyengeáram szabályos elválasztásával.",
        ],
      },
      { type: "h2", text: "Bemérés: az átadás nem ott ér véget, hogy világít a LED" },
      {
        type: "p",
        text: "Minden kiépített szakaszt műszerrel bemérünk, és a mérési eredményeket jegyzőkönyvben adjuk át. A bemérés olyan hibákat mutat ki, amelyek egyébként hónapokkal később, véletlenszerű hálózati akadásként jelentkeznének: rossz érpár-sorrend, megtört kábel, túl hosszú szakasz, sérült árnyékolás. Egy be nem mért hálózat gyakorlatilag garancia nélküli hálózat.",
      },
      {
        type: "callout",
        title: "Erős- és gyengeáram együtt futtatása",
        text: "A gyakori kivitelezési hiba, hogy a hálózati kábel az erősáramú vezetékkel egy nyomvonalon, elválasztás nélkül fut. Ez zavart és nehezen behatárolható hálózati hibákat okoz. A szabályos távolságtartás és a keresztezések megfelelő kialakítása nem többletköltség, csak odafigyelés kérdése.",
      },
      { type: "h2", text: "Dokumentáció, amit évek múlva is használni fog" },
      {
        type: "p",
        text: "Az átadási dokumentáció tartalmazza a végpontlistát, a rendezőszekrény kiosztását, a nyomvonalrajzot és a mérési jegyzőkönyveket. Minden végpont mindkét végén azonos jelölést kap. Ez az a dokumentáció, amit egy későbbi hibakeresésnél, bővítésnél vagy bérlőváltásnál elő fog venni — és amiért az üzemeltetés ára évekre lecsökken.",
      },
    ],
    faq: [
      {
        q: "Mennyi tartalék végpontot érdemes építeni?",
        a: "Munkaállomásonként legalább egy tartalék, a rendezőben pedig 20–30% szabad kapacitás a bevált gyakorlat. A tapasztalat az, hogy ezek néhány éven belül mind betelnek — nyomtató, kamera, access point, kijelző folyamatosan kerül be.",
      },
      {
        q: "Régi Cat5e hálózatot ki kell cserélni?",
        a: "Nem feltétlenül. Ha a kábelezés jó állapotú és bemérve megfelel, gigabites sebességen sokáig szolgálhat. Bemérés után megmondjuk, mely szakaszok tarthatók meg, és melyeket érdemes cserélni.",
      },
      {
        q: "Csarnokban, ipari környezetben mi a különbség?",
        a: "Ipari környezetben a mechanikai védelem, a por- és nedvességállóság, valamint a nagyobb távolságok miatt gyakran optikai gerinc és védett kivitelű aljzatok kellenek. A hegesztés, a frekvenciaváltók és a nagy motorok elektromágneses zavara miatt az árnyékolás és a nyomvonal-elválasztás is hangsúlyosabb.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/tervezes-kivitelezes/it-halozat",
      "/tervezes-kivitelezes/gyengearam",
      "/rendszerek/kamerarendszerek",
      "/megoldasok/irodahazak",
    ],
  },

  {
    slug: "okosepulet",
    hub: "rendszerek",
    navLabel: "Okosépület",
    icon: "Sparkles",
    h1: "Okosépület megoldások",
    metaTitle: "Okosépület megoldások cégeknek | TEMA",
    metaDescription:
      "Okosépület kialakítása irodaházban, szállodában és ipari létesítményben: világítás- és klímavezérlés, energiafigyelés, központi felügyelet.",
    keywords: [
      "okosépület",
      "okos épület megoldások",
      "intelligens épület",
      "energiahatékony épületüzemeltetés",
      "KNX Loxone okosépület",
    ],
    lead: "Az „okos” nem attól okos, hogy telefonról kapcsolható. Attól, hogy magától jól viselkedik akkor is, ha senki nem foglalkozik vele.",
    highlights: [
      { value: "Kevesebb", label: "energia, ugyanolyan komfort mellett" },
      { value: "Központi", label: "felügyelet, épületszintű áttekintés" },
      { value: "Fokozatos", label: "bevezetés meglévő épületben is" },
    ],
    body: [
      {
        type: "p",
        text: "Az okosépület fogalmát a lakossági piac lejáratta: sokan színes világítást és hangvezérlést értenek alatta. Kereskedelmi és ipari épületben viszont az okosépület egészen mást jelent — mérhető energiamegtakarítást, kevesebb üzemeltetési beavatkozást és jobb bérlői komfortot.",
      },
      { type: "h2", text: "Hol keletkezik a valódi megtakarítás?" },
      {
        type: "ol",
        items: [
          "Jelenlét-alapú világítás. A folyosók, mosdók, raktárak és tárgyalók világítása csak akkor ég, amikor kell — ez önmagában jelentős tétel a világítási fogyasztásban.",
          "Helyiségenkénti hőmérséklet-szabályozás. Nem az egész szintet fűtjük egy termosztátról, hanem zónánként, a tényleges használat szerint.",
          "Időprogramok. Az épület munkaidő után automatikusan visszaáll energiatakarékos módba — nem marad ott a hétvégén teljes teljesítményen.",
          "Árnyékolásvezérlés. A napsütés kiszűrése olcsóbb, mint a bejutott hő elhűtése.",
          "Ablaknyitás-érzékelés. Nyitott ablaknál a fűtés vagy hűtés leáll az adott zónában.",
        ],
      },
      { type: "h2", text: "Energiafigyelés: mérés nélkül nincs megtakarítás" },
      {
        type: "p",
        text: "Az okosépület alapja a mérés. Almérőkkel és fogyasztásgyűjtéssel láthatóvá tesszük, mi hol fogy — épületrészenként, bérlőnként, rendszerenként. Ez két dolgot ad: az elszámolás pontos lesz, és kiderülnek a rejtett fogyasztók. A tapasztalatunk szerint szinte minden épületben van olyan berendezés, ami éjjel-nappal jár, pedig nem kellene.",
      },
      {
        type: "callout",
        title: "Fokozatos bevezetés",
        text: "Meglévő, üzemelő épületben nem kell mindent egyszerre megvalósítani. Jellemzően a világítás és a fűtés-hűtés vezérlésével kezdünk, mert ezek hozzák a leggyorsabb megtérülést, majd a rendszer bővíthető. A megtakarítás egy része finanszírozhatja a következő ütemet.",
      },
      { type: "h2", text: "Központi felügyelet" },
      {
        type: "p",
        text: "Az okosépület üzemeltetői oldala egy áttekintő felület: itt látszik minden zóna állapota, a hőmérsékletek, a fogyasztási adatok és a rendellenességek. A rendszer riasztást küld, ha egy érték kilép a normál tartományból — például ha egy helyiség hőmérséklete indokolatlanul emelkedik, vagy ha egy fogyasztás megugrik. Így a hibák egy részét azelőtt észleljük, hogy panasz érkezne.",
      },
    ],
    faq: [
      {
        q: "Meglévő épületben is megvalósítható?",
        a: "Igen. A meglévő erősáramú hálózat gyakran felhasználható, és a vezeték nélküli, valamint hibrid megoldásokkal a bontás minimalizálható. A felmérés során megnézzük, mit lehet a meglévő infrastruktúrára építeni.",
      },
      {
        q: "Ki üzemelteti a rendszert az átadás után?",
        a: "A napi működés automatikus, kezelést jellemzően nem igényel. A paraméterezést, a szezonális beállításokat és a bővítést üzemeltetési szerződés keretében mi végezzük — vagy betanítjuk rá az épület saját műszaki személyzetét.",
      },
      {
        q: "Mekkora megtakarítás érhető el?",
        a: "Ez erősen épületfüggő, ezért nem szeretünk általános százalékokat ígérni. A felmérés során a tényleges fogyasztási adatokból számolunk, és azt mutatjuk meg, mely intézkedés mennyit hoz — így a beruházás nagysága is ehhez igazítható.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/tervezes-kivitelezes/epuletautomatizalas",
      "/tervezes-kivitelezes/rendszerintegracio",
      "/megoldasok/szallodak",
      "/megoldasok/irodahazak",
    ],
  },

  {
    slug: "biztonsagtechnika",
    hub: "rendszerek",
    navLabel: "Egyéb biztonságtechnika",
    icon: "ShieldCheck",
    h1: "Egyéb biztonságtechnika és kaputechnika",
    metaTitle: "Riasztó és kaputechnika cégeknek | TEMA",
    metaDescription:
      "Riasztórendszer, sorompó, tolókapu és garázskapu vezérlés telepítése, javítása és karbantartása — a kamerával és a beléptetéssel integrálva.",
    keywords: [
      "riasztórendszer telepítés cég",
      "kaputechnika",
      "sorompó telepítés",
      "tolókapu automatika",
      "biztonságtechnikai rendszerek",
    ],
    lead: "A biztonságtechnika akkor működik, ha a rendszerek együtt működnek — nem akkor, ha külön-külön mindegyik be van kapcsolva.",
    highlights: [
      { value: "Kapuk", label: "sorompók, tolókapuk automatizálása" },
      { value: "Riasztás", label: "betörésjelző és távfelügyeleti kapcsolat" },
      { value: "Integrált", label: "működés a kamerával és beléptetéssel" },
    ],
    body: [
      {
        type: "p",
        text: "A kamerarendszer és a beléptetés mellett számos további gyengeáramú rendszer tartozik az épület biztonságához. Ezeket azért érdemes egy kézben tartani, mert a hibáik gyakran egymás működését is befolyásolják — például egy sorompó vezérlésének meghibásodása a beléptetés naplózását is megzavarhatja.",
      },
      { type: "h2", text: "Kaputechnika" },
      {
        type: "p",
        text: "Sorompók, tolókapuk, szárnyaskapuk és garázskapuk automatizálása, vezérlése és karbantartása. A kaputechnikánál a biztonsági elemek — fotocellák, biztonsági élek, nyomatékkorlátozás — legalább annyira fontosak, mint a nyitás sebessége: ezek hiánya vagy hibája személyi sérüléshez és komoly felelősségi kérdésekhez vezethet. Karbantartáskor ezért mindig teszteljük őket.",
      },
      {
        type: "ul",
        items: [
          "Sorompók telepítése, vezérlés kiépítése, rendszámfelismeréssel is.",
          "Tolókapu- és szárnyaskapu-automatika telepítése, javítása.",
          "Garázskapuk vezérlése, távnyitás, beléptetéshez kötés.",
          "Betörésjelző (riasztó) rendszerek kiépítése és bővítése.",
          "Távfelügyeleti átjelzés műszaki feltételeinek biztosítása.",
          "Tűzjelző rendszerekhez kapcsolódó gyengeáramú munkák, vezérlési kapcsolatok.",
        ],
      },
      {
        type: "callout",
        title: "Fontos elhatárolás",
        text: "A tűzjelző rendszerek tervezése, telepítése és felülvizsgálata külön jogosultsághoz kötött szakterület. Mi az ehhez kapcsolódó gyengeáramú munkákat és a vezérlési kapcsolatokat végezzük — például beléptetés vészkinyitás, kapuk automatikus nyitása riasztás esetén —, a tűzjelző rendszer önálló szakági munkáit erre jogosult partnerrel közösen oldjuk meg.",
      },
      { type: "h2", text: "Miért éri meg együtt kezelni?" },
      {
        type: "p",
        text: "Egy telephelyen jellemzően négy-öt különböző rendszer működik, gyakran négy-öt különböző szolgáltatóval. Ha ezek egy üzemeltetőhöz kerülnek, nemcsak a hibakeresés gyorsul, hanem a karbantartások is összevonhatók: egy kiszállással több rendszer ellenőrizhető. Ez költségben és leállásban is érezhető különbség.",
      },
    ],
    faq: [
      {
        q: "Meglévő, más által telepített riasztót átvesznek karbantartásra?",
        a: "Igen, ha a rendszer típusa támogatott és az alkatrészellátás megoldható. A felmérés során ezt egyértelműen jelezzük, mert néhány régebbi rendszernél a karbantartás már csak korlátozottan biztosítható.",
      },
      {
        q: "A sorompó nyitható legyen rendszám alapján?",
        a: "Igen, a rendszámfelismerő kamera és a sorompó vezérlésének összekötésével a törzsvendégek és a saját flotta megállás nélkül közlekedhet. Ez a kapuforgalom gyorsításának leghatékonyabb módja telephelyeken.",
      },
      {
        q: "Vállalnak folyamatos karbantartást is ezekre?",
        a: "Igen, ezek a rendszerek a karbantartási és üzemeltetési szerződésbe is beépíthetők, saját ciklusidővel. A kaputechnikánál ezt kifejezetten javasoljuk, mert mozgó, kopó szerkezetekről van szó.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/rendszerek/beleptetes",
      "/rendszerek/kamerarendszerek",
      "/uzemeltetes/karbantartas",
      "/megoldasok/ipari-logisztika",
    ],
  },
];
