import type { Article } from "./types";

/**
 * Tudástár — információs keresési szándékra optimalizált cikkek.
 * Ezek nem közvetlenül konvertálnak, hanem a témakör tekintélyét építik,
 * és belső linkekkel vezetnek a szolgáltatásoldalakra.
 */
export const articles: Article[] = [
  {
    slug: "erintesvedelmi-felulvizsgalat-gyakorisag",
    title: "Érintésvédelmi felülvizsgálat: mikor kötelező és mit tartalmaz?",
    metaTitle: "Érintésvédelmi felülvizsgálat gyakorisága | TEMA",
    metaDescription:
      "Mikor kötelező az érintésvédelmi és szabványossági felülvizsgálat, mit mérnek, mit tartalmaz a jegyzőkönyv, és mi történik, ha hibát találnak?",
    keywords: [
      "érintésvédelmi felülvizsgálat",
      "érintésvédelmi felülvizsgálat gyakorisága",
      "szabványossági felülvizsgálat",
      "villamos biztonsági felülvizsgálat",
      "érintésvédelmi jegyzőkönyv",
    ],
    category: "Villamos üzemeltetés",
    readingMinutes: 6,
    publishedAt: "2026-02-10",
    updatedAt: "2026-07-22",
    excerpt:
      "A villamos biztonsági felülvizsgálat az egyik leggyakrabban halogatott üzemeltetői kötelezettség — és az első, amit káresemény után kérnek. Összeszedtük, mit érdemes tudni róla.",
    body: [
      {
        type: "p",
        text: "A villamos berendezések időszakos biztonsági felülvizsgálata azon feladatok közé tartozik, amelyek elmaradása sokáig nem okoz látható problémát — egészen egy tűzesetig, áramütésig vagy egy hatósági ellenőrzésig. Ez a cikk azt foglalja össze, amit üzemeltetőként, ingatlankezelőként vagy közös képviselőként érdemes tudni róla.",
      },
      { type: "h2", text: "Milyen felülvizsgálatokról van szó?" },
      {
        type: "p",
        text: "A gyakorlatban két, egymástól elkülönülő vizsgálatról beszélünk, amelyeket gyakran összemosnak. Az érintésvédelmi (más néven villamos biztonsági) felülvizsgálat azt vizsgálja, hogy a berendezés érintésvédelme megfelelően működik-e — vagyis hogy meghibásodás esetén nem alakulhat-e ki életveszélyes érintési feszültség. A szabványossági (tűzvédelmi) felülvizsgálat pedig arra irányul, hogy a villamos berendezés nem jelent-e tűzveszélyt.",
      },
      {
        type: "p",
        text: "A kettőt jellemzően együtt, egy kiszállással végezzük el, mert a mérések nagy része átfedésben van, és így a leállás is rövidebb.",
      },
      { type: "h2", text: "Milyen gyakran kell elvégezni?" },
      {
        type: "p",
        text: "A gyakoriságot nem lehet egyetlen számmal megválaszolni, mert a létesítmény jellegétől és besorolásától függ. Az általános irányok a következők:",
      },
      {
        type: "ul",
        items: [
          "Kereskedelmi, irodai és hasonló, nem fokozott kockázatú környezetben jellemzően háromévente.",
          "Fokozott kockázatú, robbanásveszélyes vagy különleges környezetben ennél gyakrabban.",
          "Kéziszerszámoknál és hordozható villamos berendezéseknél lényegesen rövidebb, akár éves ciklusok.",
          "Átalakítás, bővítés vagy jelentős javítás után soron kívül, függetlenül az utolsó vizsgálat időpontjától.",
        ],
      },
      {
        type: "p",
        text: "Az adott épületre vonatkozó pontos ciklust a besorolás alapján kell meghatározni. Az üzemeltetési szerződéseinkben ezt nyilvántartjuk, és a következő esedékességet előre jelezzük, hogy ne csússzon el.",
      },
      { type: "h2", text: "Mit tartalmaz a vizsgálat?" },
      {
        type: "p",
        text: "A felülvizsgálat szemrevételezésből és műszeres mérésekből áll. A szemrevételezés során a berendezés fizikai állapotát, a burkolatok épségét, a feliratozást, a szabad hozzáférést és a nyilvánvaló szabálytalanságokat vizsgáljuk. A műszeres mérések jellemzően a következők:",
      },
      {
        type: "ul",
        items: [
          "Védővezető folytonosságának ellenőrzése.",
          "Szigetelési ellenállás mérése.",
          "Hurokimpedancia mérése, a védelmi készülék kioldásának ellenőrzése.",
          "Áram-védőkapcsolók (Fi-relék) kioldási áramának és idejének mérése.",
          "Földelési ellenállás mérése, ahol ez értelmezhető.",
        ],
      },
      { type: "h2", text: "Mi történik, ha hibát találnak?" },
      {
        type: "p",
        text: "A jegyzőkönyv minden feltárt hiányosságot rögzít, súlyosság szerinti besorolással. Az életveszélyt jelentő hibáknál azonnali intézkedés szükséges — ilyenkor a helyszínen jelezzük, és ha indokolt, az érintett áramkört üzemen kívül helyezzük. A többi hiba javítására határidőt kell szabni.",
      },
      {
        type: "callout",
        title: "A leggyakoribb hiba, amit találunk",
        text: "Nem a hiányzó földelés vagy a rossz Fi-relé, hanem a dokumentálatlan bővítés: az évek során az elosztóhoz hozzákötött új áramkörök, amelyek nem szerepelnek semmilyen rajzon, nincsenek feliratozva, és amelyeknél a kábelkeresztmetszet és a védelem összhangja soha nem lett ellenőrizve.",
      },
      { type: "h2", text: "Mit ér a jegyzőkönyv?" },
      {
        type: "p",
        text: "A jegyzőkönyv nem csupán adminisztratív termék. Káresemény esetén ez az a dokumentum, amellyel igazolható, hogy az üzemeltető megtette, ami tőle elvárható volt. Ha a vizsgálat megtörtént, a feltárt hibák javítása pedig dokumentált, az a felelősségi és biztosítási kérdéseket alapvetően befolyásolja.",
      },
      {
        type: "p",
        text: "Ezért javasoljuk, hogy a felülvizsgálatot ne különálló, letudandó feladatként kezeljék, hanem az éves karbantartási ütemterv részeként — a hibák javításával és az ismételt méréssel együtt.",
      },
    ],
    faq: [
      {
        q: "Ki végezheti a felülvizsgálatot?",
        a: "Csak megfelelő szakképesítéssel és érvényes jogosultsággal rendelkező szakember, kalibrált műszerekkel. A jegyzőkönyvnek tartalmaznia kell a vizsgáló azonosítását és a használt műszerek adatait.",
      },
      {
        q: "Kell hozzá áramszünet?",
        a: "A mérések egy részéhez igen. Ezt előre egyeztetett időpontban, jellemzően munkaidőn kívül végezzük, hogy a működést ne zavarja.",
      },
      {
        q: "Mennyi ideig érvényes a jegyzőkönyv?",
        a: "A következő esedékes vizsgálat időpontjáig, feltéve, hogy a berendezésen közben nem történt olyan átalakítás vagy bővítés, ami soron kívüli vizsgálatot tesz szükségessé.",
      },
    ],
    related: ["/uzemeltetes/villamos-uzemeltetes", "/uzemeltetes/karbantartas"],
  },

  {
    slug: "kamerarendszer-tervezes-hany-kamera",
    title: "Hány kamera kell? A kamerarendszer tervezésének gyakorlati szempontjai",
    metaTitle: "Hány kamera kell? Kamerarendszer tervezés | TEMA",
    metaDescription:
      "Nem a kamerák száma dönt, hanem a pozíció, a látószög és a megőrzési idő. Négy kérdés, amit érdemes feltenni egy kamerarendszer megrendelése előtt.",
    keywords: [
      "kamerarendszer tervezés",
      "hány kamera kell",
      "kamera látószög azonosítás",
      "kamerarendszer méretezés",
      "kamerarendszer megőrzési idő",
    ],
    category: "Biztonságtechnika",
    readingMinutes: 7,
    publishedAt: "2026-03-18",
    excerpt:
      "A legtöbb használhatatlan kamerafelvételnek nem a kamera minősége az oka, hanem a tervezés. Négy kérdés, amit érdemes feltenni, mielőtt megrendel egy rendszert.",
    body: [
      {
        type: "p",
        text: "Amikor egy céges kamerarendszerről tárgyalunk, az első kérdés szinte mindig az, hogy hány kamera kell. Ez érthető — ez befolyásolja az árat. Műszakilag viszont ez a legkevésbé fontos kérdés, és a rossz sorrend miatt épül meg annyi olyan rendszer, ami baj esetén használhatatlan felvételt ad.",
      },
      { type: "h2", text: "1. Mit szeretne látni? Az észlelés és az azonosítás nem ugyanaz" },
      {
        type: "p",
        text: "A kamerák tervezésénél négy, egyre igényesebb célszintet szoktunk megkülönböztetni. Az áttekintés azt mutatja, hogy történik-e valami egy területen. Az észlelés azt, hogy van ott egy ember. A felismerés azt, hogy az egy ismert személy-e. Az azonosítás pedig azt, hogy pontosan ki az.",
      },
      {
        type: "p",
        text: "Ezek eltérő képpont-sűrűséget igényelnek ugyanazon a területen. Egy kamera, ami a parkolót áttekinti, alkalmatlan lesz arra, hogy megmondja, ki nyitotta ki az autót. Ezért minden kamerához külön meg kell határozni, mi a célja — és ha egy ponton azonosításra is szükség van, oda külön, szűkebb látószögű kamera kell.",
      },
      { type: "h2", text: "2. Hol vannak a valódi kritikus pontok?" },
      {
        type: "p",
        text: "A kamerákat nem területarányosan érdemes elosztani, hanem a kockázat mentén. Tipikus kritikus pontok:",
      },
      {
        type: "ul",
        items: [
          "Bejáratok és kijáratok — mindenki, aki bejön, itt halad át.",
          "Árukiadás, rakodókapu, komissiózás — logisztikai környezetben itt keletkezik a legtöbb eltérés.",
          "Pénzkezelési pontok, kassza.",
          "Értékes vagy veszélyes anyagok tárolója.",
          "Gépészeti helyiség, szerverszoba bejárata.",
          "Parkoló ki- és behajtó, ahol rendszám azonosítható.",
        ],
      },
      {
        type: "p",
        text: "Egy jól elhelyezett, megfelelő látószögű kamera a bejáratnál többet ér, mint négy áttekintő kamera a mennyezet közepén.",
      },
      { type: "h2", text: "3. Milyenek a valós fényviszonyok?" },
      {
        type: "p",
        text: "A tervezésnél a leggyakoribb hiba, hogy nappali, jó fényben gondolkodunk. A valóságban a legtöbb esemény rossz fényviszonyok között történik. Az ellenfény — például egy üvegajtóval szemben elhelyezett kamera — nappal is teljesen használhatatlanná teszi a képet: az érkező alak sziluettként látszik.",
      },
      {
        type: "p",
        text: "Ezért az éjszakai működést és az ellenfényes helyzeteket a tervezés részeként kezeljük: infravörös megvilágítás, színes éjszakai képet adó kameratípus, kiegészítő világítás, vagy egyszerűen egy jobb kamerapozíció, ami elkerüli az ellenfényt.",
      },
      { type: "h2", text: "4. Meddig kell megőrizni a felvételt?" },
      {
        type: "p",
        text: "Ez az a pont, ahol a legtöbb rendszer megbukik. Hiába kiváló a kamera, ha a felvétel három nap után felülíródik, és az eltérés csak a havi leltárnál derül ki. A megőrzési időt üzleti szempontból kell meghatározni: mennyi idő telhet el legrosszabb esetben addig, amíg valaki észreveszi a problémát?",
      },
      {
        type: "p",
        text: "Ehhez kell a tárolókapacitást méretezni. A számítás a kameraszámtól, a felbontástól, a képkockaszámtól és a tömörítési eljárástól függ — ezt konkrét számokkal kell megnézni, nem becsülni. Az adatkezelési oldalt is ez határozza meg: a rendszernek pontosan annyi ideig kell megőriznie a felvételt, amennyit az adatkezelési tájékoztató vállal, se többet, se kevesebbet.",
      },
      {
        type: "callout",
        title: "A leggyakoribb néma hiba",
        text: "Amikor egy meglévő rendszert veszünk át, a leggyakoribb probléma nem a képminőség, hanem hogy a rögzítés hetek óta nem működik — miközben az élőkép hibátlan. Ezt csak akkor lehet észrevenni, ha valaki rendszeresen ellenőrzi a rögzítést és a visszakeresést is, nem csak ránéz a monitorra.",
      },
      { type: "h2", text: "Összefoglalva" },
      {
        type: "ol",
        items: [
          "Határozza meg pontonként a célt: áttekintés, észlelés, felismerés vagy azonosítás.",
          "A kamerákat a kockázati pontokhoz rendelje, ne a terület méretéhez.",
          "Vegye figyelembe az éjszakai és ellenfényes viszonyokat még a telepítés előtt.",
          "Számolja ki a szükséges tárolást a vállalt megőrzési időhöz.",
          "Gondoskodjon róla, hogy valaki rendszeresen ellenőrizze a rögzítés tényleges működését.",
        ],
      },
    ],
    faq: [
      {
        q: "Mennyivel drágább egy jól megtervezett rendszer?",
        a: "Jellemzően nem drágább, csak máshova kerül a hangsúly: kevesebb kamera, de a fontos pontokon jobb minőségben és jobb pozícióban. Az áttekintő kamerák számának csökkentésével gyakran finanszírozható az azonosításra alkalmas kamerák telepítése.",
      },
      {
        q: "Utólag bővíthető a rendszer?",
        a: "Ha a hálózat és a rögzítő kapacitása tartalékkal készült, akkor igen, ez kameránként rövid munka. Ha nem, akkor a bővítés a rögzítő cseréjét is jelentheti — ezért javaslunk mindig tartalékot a tervezésnél.",
      },
    ],
    related: ["/rendszerek/kamerarendszerek", "/tervezes-kivitelezes/gyengearam"],
  },

  {
    slug: "knx-vagy-loxone",
    title: "KNX vagy Loxone? Melyiket mikor érdemes választani",
    metaTitle: "KNX vagy Loxone? Összehasonlítás | TEMA",
    metaDescription:
      "KNX és Loxone összevetése gyakorlati szempontok szerint: beruházási költség, bővíthetőség, gyártófüggetlenség, üzemeltethetőség és a kettő vegyítése.",
    keywords: [
      "KNX vagy Loxone",
      "KNX Loxone összehasonlítás",
      "épületautomatizálás rendszer választás",
      "okosépület rendszer",
    ],
    category: "Épületautomatizálás",
    readingMinutes: 6,
    publishedAt: "2026-04-09",
    excerpt:
      "Nem az a kérdés, melyik a jobb rendszer, hanem az, hogy melyik illik az adott épülethez, költségkerethez és üzemeltetési modellhez. Négy szempont, ami valóban számít.",
    body: [
      {
        type: "p",
        text: "Az épületautomatizálás tervezésénél gyakran kerül elő a kérdés: KNX vagy Loxone? A válasz nem az, hogy melyik a jobb — mindkettő kiforrott rendszer, és mi mindkettővel dolgozunk. A kérdés az, hogy az adott épülethez, időtávhoz és költségkerethez melyik illik jobban.",
      },
      { type: "h2", text: "1. Nyílt szabvány vagy zárt ökoszisztéma" },
      {
        type: "p",
        text: "A KNX nemzetközi szabvány: több száz gyártó készít hozzá tanúsított eszközöket, amelyek egymással együttműködnek. Ez azt jelenti, hogy tíz év múlva sem egyetlen gyártótól függ, és a rendszert bármely KNX-képzettséggel rendelkező szakember tovább tudja vinni.",
      },
      {
        type: "p",
        text: "A Loxone ezzel szemben egy gyártó saját, zárt, de kifejezetten jól összehangolt ökoszisztémája. Az eszközök egymásra vannak tervezve, ami gyorsabb telepítést és egyszerűbb beüzemelést jelent — cserébe erősebb a gyártói kötődés.",
      },
      { type: "h2", text: "2. Beruházási költség és megvalósítási idő" },
      {
        type: "p",
        text: "Azonos funkcionalitásra a Loxone jellemzően kedvezőbb beruházási költséggel és rövidebb megvalósítási idővel valósítható meg. A KNX magasabb belépési költséggel jár, de nagyobb, hosszú életciklusú épületeknél ez a különbség az élettartam alatt relativizálódik — különösen, ha figyelembe vesszük a gyártófüggetlenség értékét.",
      },
      { type: "h2", text: "3. Ki fogja üzemeltetni és bővíteni?" },
      {
        type: "p",
        text: "Ez a legfontosabb, mégis leggyakrabban kihagyott szempont. Egy intézménynél vagy nagy irodaháznál, ahol a szolgáltatóváltás reális forgatókönyv, a KNX szabványossága komoly előny: nem lehet „bennragadni” egy kivitelezőnél. Egy szállodánál vagy kisebb-közepes létesítménynél, ahol a rendszert az eredeti kivitelező viszi tovább, ez a szempont kevésbé nyom a latban.",
      },
      { type: "h2", text: "4. Milyen funkciók kellenek valójában?" },
      {
        type: "p",
        text: "A tapasztalatunk az, hogy a megtakarítás és a komfort nagy része néhány alapfunkcióból származik: jelenlét-alapú világítás, helyiségenkénti hőmérséklet-szabályozás, időprogramok és árnyékolásvezérlés. Ezeket mindkét rendszer kiválóan megoldja. A látványos, egyedi logikák nagy része a napi működésben alig használt — érdemes ezért a döntést az alapfunkciók megbízható működésére alapozni.",
      },
      {
        type: "callout",
        title: "A gyakorlatban gyakran a kettő együtt a válasz",
        text: "Több projektünkben a KNX adja a szabványos érzékelő- és beavatkozó-réteget, a Loxone pedig a logikát, a vizualizációt és az egyéb rendszerekkel való integrációt. Így a beruházó megkapja a szabvány hosszú távú biztonságát és a gyorsabb, költséghatékonyabb megvalósítást is.",
      },
      { type: "h2", text: "Mit érdemes tisztázni az ajánlatkérésnél?" },
      {
        type: "ul",
        items: [
          "Kié lesz a programozott projektfájl és az adminisztrátori hozzáférés az átadás után?",
          "Milyen feltételekkel bővíthető a rendszer, és mennyibe kerül egy tipikus bővítés?",
          "Működnek-e a kritikus funkciók kézi felülbírálással, ha a vezérlés meghibásodik?",
          "Milyen dokumentációt kap az átadáskor a vezérlési logikáról?",
        ],
      },
      {
        type: "p",
        text: "Ezek a kérdések fontosabbak, mint a rendszer neve. Ha a válaszok rendben vannak, mindkét technológiával jó eredmény érhető el.",
      },
    ],
    faq: [
      {
        q: "Kombinálható a két rendszer egy épületben?",
        a: "Igen, ez több projektünkben bevált gyakorlat. A Loxone képes KNX eszközökkel kommunikálni, így a két rendszer egymás mellett, egymást kiegészítve is működtethető.",
      },
      {
        q: "Meglévő épületben melyik valósítható meg könnyebben?",
        a: "Üzemelő épületben, ahol a bontás korlátozott, jellemzően a Loxone rugalmasabb a vezeték nélküli és hibrid megoldásai miatt. A konkrét választ mindig a helyszíni felmérés adja meg.",
      },
    ],
    related: ["/tervezes-kivitelezes/epuletautomatizalas", "/rendszerek/okosepulet"],
  },

  {
    slug: "sla-mit-jelent-epuletuzemeltetesben",
    title: "Mit jelent az SLA az épületüzemeltetésben, és mit érdemes belefoglalni?",
    metaTitle: "Mit jelent az SLA az üzemeltetésben? | TEMA",
    metaDescription:
      "Hogyan épül fel egy jó üzemeltetési SLA: hibaosztályok, a reakcióidő és az elhárítási idő különbsége, mérés, riportálás és a kötbér kérdése.",
    keywords: [
      "SLA épületüzemeltetés",
      "üzemeltetési szerződés reakcióidő",
      "rendelkezésre állási megállapodás",
      "hibaosztály besorolás",
    ],
    category: "Üzemeltetés",
    readingMinutes: 5,
    publishedAt: "2026-05-14",
    excerpt:
      "Az üzemeltetési szerződések legfontosabb — és leggyakrabban elnagyolt — része az SLA. Összeszedtük, mit érdemes benne rögzíteni, hogy ne utólag derüljön ki a félreértés.",
    body: [
      {
        type: "p",
        text: "Az üzemeltetési szerződések tárgyalásánál a legtöbb figyelem a havidíjra jut, holott a szolgáltatás valódi értékét az SLA — a rendelkezésre állási megállapodás — határozza meg. Ez mondja meg, mire számíthat valójában a pénzéért.",
      },
      { type: "h2", text: "Hibaosztályok: az alapja mindennek" },
      {
        type: "p",
        text: "Egy jó SLA nem egyetlen reakcióidőt tartalmaz, hanem hibaosztályokat. Ennek az az oka, hogy nem lehet ugyanazt vállalni egy teljes áramkimaradásra és egy kiégett lámpatestre — ha mégis, akkor vagy irreálisan drága lesz a szolgáltatás, vagy a vállalás nem lesz komolyan vehető.",
      },
      {
        type: "p",
        text: "A besorolás elveit előre kell rögzíteni, példákkal együtt. Enélkül minden bejelentésnél vita lesz arról, hogy az adott hiba kritikus-e — jellemzően éppen akkor, amikor a legkevésbé van rá idő.",
      },
      { type: "h2", text: "Reakcióidő és elhárítási idő" },
      {
        type: "p",
        text: "Ezt a két fogalmat gyakran összekeverik. A reakcióidő az, amennyi időn belül érdemben elkezdünk foglalkozni a hibával: visszaigazolás, távdiagnosztika vagy indulás a helyszínre. Az elhárítási idő az, amennyi idő alatt a működés helyreáll.",
      },
      {
        type: "p",
        text: "A kettőt azért kell külön kezelni, mert az elhárítás nem mindig áll a szolgáltató hatáskörében: egy speciális alkatrész beszerzése napokba telhet. Ilyenkor reális elvárás az ideiglenes műszaki megoldás rögzített határidőn belül — és ezt is érdemes az SLA-ban szabályozni.",
      },
      { type: "h2", text: "Amit mindenképp érdemes belefoglalni" },
      {
        type: "ul",
        items: [
          "Hibaosztályok meghatározása konkrét példákkal.",
          "Reakció- és elhárítási idő osztályonként, munkaidőben és azon kívül külön.",
          "A bejelentés csatornái, és hogy melyik számít hivatalos bejelentésnek.",
          "Mi történik, ha az elhárítás alkatrészhiány miatt csúszik — ideiglenes megoldás vállalása.",
          "Mérés és riportálás módja: milyen adatokat rögzítenek és milyen gyakran jelentenek.",
          "A nem teljesítés következménye: díjcsökkentés vagy kötbér.",
          "Mi nem tartozik az SLA hatálya alá — például rendeltetésellenes használatból eredő hiba.",
        ],
      },
      {
        type: "callout",
        title: "Az SLA csak akkor ér valamit, ha mérik",
        text: "Ha a bejelentések nem kapnak azonosítót és időbélyeget, akkor az SLA teljesülése utólag nem ellenőrizhető, csak emlékezet alapján vitatható. A mérhetőség tehát nem adminisztratív részlet, hanem az egész megállapodás értelme.",
      },
      { type: "h2", text: "Amit az SLA nem old meg" },
      {
        type: "p",
        text: "Egy szigorú SLA nem javítja meg az épület állapotát. Ha a rendszerek elhanyagoltak, a rövid reakcióidő csak annyit jelent, hogy gyorsabban érkezik valaki a következő hibához. A rendelkezésre állás valódi növelése mindig a megelőző karbantartásnál kezdődik — az SLA ehhez képest a biztonsági háló, nem a megoldás.",
      },
    ],
    related: ["/uzemeltetes/sla-rendelkezesre-allas", "/uzemeltetes/karbantartas"],
  },

  {
    slug: "strukturalt-halozat-tervezes-hibak",
    title: "Öt hiba, ami miatt néhány év múlva újra kell kábelezni az irodát",
    metaTitle: "Strukturált hálózat: 5 tervezési hiba | TEMA",
    metaDescription:
      "Miért kell sok irodában öt év után újrakábelezni? Öt tipikus tervezési és kivitelezési hiba a strukturált hálózatnál — és hogyan kerülhetők el.",
    keywords: [
      "strukturált hálózat hibák",
      "hálózati kábelezés tervezés",
      "irodai hálózat kiépítés",
      "Cat6 kábelezés",
      "rendezőszekrény kialakítás",
    ],
    category: "IT-infrastruktúra",
    readingMinutes: 6,
    publishedAt: "2026-06-03",
    excerpt:
      "A strukturált hálózat 15–20 évre készül. Ha mégis öt év múlva kell hozzányúlni, annak szinte mindig ugyanaz az öt oka van.",
    body: [
      {
        type: "p",
        text: "A strukturált hálózat az épület egyik leghosszabb élettartamú rendszere. Ha mégis idő előtt kell újraépíteni, az általában nem a kábel minőségén múlik, hanem a tervezésen. Az alábbi öt hibával találkozunk a leggyakrabban.",
      },
      { type: "h2", text: "1. Nincs tartalék végpont" },
      {
        type: "p",
        text: "A leggyakoribb és legdrágább spórolás. A kábel anyagára a projekt költségének töredéke; a kihúzás munkadíja viszont a nagyobb tétel, és utólag — kész álmennyezet, burkolat és bútorzat mellett — ennek a többszöröse. Minden munkaállomáshoz érdemes legalább egy tartalék végpontot építeni, mert a tapasztalat szerint ezek néhány éven belül mind betelnek: nyomtató, kamera, access point, kijelző, ajtóvezérlő.",
      },
      { type: "h2", text: "2. Túl kicsi vagy rosszul szellőző rendezőszekrény" },
      {
        type: "p",
        text: "A rendezőszekrény mérete a második leggyakoribb szűk keresztmetszet. Ha nincs benne szabad hely, minden bővítés kényszermegoldás lesz: külső switch a szekrény tetején, laza patchkábelek, átláthatatlan kábelgubanc. A szellőzés hiánya pedig közvetlen élettartam-csökkenést jelent az aktív eszközöknél — egy túlmelegedő switch évekkel korábban hibásodik meg.",
      },
      { type: "h2", text: "3. Nincs jelölés, vagy csak az egyik végén van" },
      {
        type: "p",
        text: "A jelöletlen végpont egy hibakeresésnél órákat vesz el. Minden végpontnak azonos azonosítót kell kapnia mindkét végén: a fali aljzatnál és a patch panelen is. Ez a kivitelezéskor néhány óra munka, később viszont minden egyes hibakeresésnél megtérül. A jelöléshez tartozó végpontlistát a dokumentációban is rögzíteni kell.",
      },
      { type: "h2", text: "4. Elmarad a bemérés" },
      {
        type: "p",
        text: "A leggyakrabban kihagyott átadási lépés. Sokan úgy gondolják, hogy ha a link működik és világít a LED, akkor a szakasz rendben van. A valóságban egy rosszul krimpelt csatlakozó, egy megtört kábel vagy egy túl hosszú szakasz hónapokig okozhat véletlenszerűnek tűnő hálózati akadást, amit aztán az aktív eszközökre vagy a szolgáltatóra fognak. A műszeres bemérés ezeket az átadás előtt kimutatja.",
      },
      { type: "h2", text: "5. Erős- és gyengeáram közös nyomvonalon, elválasztás nélkül" },
      {
        type: "p",
        text: "A hálózati kábel az erősáramú vezeték mellett, elválasztás nélkül futtatva zavart szedhet fel, ami nehezen behatárolható, időszakos hibákat okoz. A szabályos távolságtartás és a keresztezések megfelelő kialakítása nem többletköltség, csupán a nyomvonaltervezés során hozott jó döntés kérdése.",
      },
      {
        type: "callout",
        title: "Amit érdemes kérni az ajánlatban",
        text: "Kérje, hogy az ajánlat tartalmazza a bemérést és a mérési jegyzőkönyvet, a végpontok jelölését, valamint a végpontlistát és a nyomvonalrajzot tartalmazó átadási dokumentációt. Ezek együtt sem jelentenek nagy tételt, de nélkülük gyakorlatilag ellenőrizhetetlen minőséget kap.",
      },
    ],
    related: ["/rendszerek/strukturalt-halozat", "/tervezes-kivitelezes/it-halozat"],
  },

  {
    slug: "epuletuzemeltetes-atvetel-checklist",
    title: "Épület műszaki átvétele: mit nézzen meg, mielőtt aláírja",
    metaTitle: "Épület műszaki átvétele — ellenőrzőlista | TEMA",
    metaDescription:
      "Új üzemeltető vagy új tulajdonos? Ellenőrzőlista az épület műszaki átvételéhez: dokumentáció, elosztók, gyengeáramú rendszerek és hozzáférések.",
    keywords: [
      "épület műszaki átvétel",
      "üzemeltetés átvétele",
      "műszaki állapotfelmérés",
      "épület átvételi checklist",
      "ingatlan műszaki átvilágítás",
    ],
    category: "Üzemeltetés",
    readingMinutes: 7,
    publishedAt: "2026-07-08",
    excerpt:
      "Az üzemeltetés átvétele az a pillanat, amikor a korábbi évek elmaradásai a következő üzemeltető problémájává válnak. Ez a lista segít, hogy ez ne történjen meg észrevétlenül.",
    body: [
      {
        type: "p",
        text: "Amikor egy épület üzemeltetése új szolgáltatóhoz kerül — vagy amikor egy ingatlan új tulajdonoshoz —, az átvétel pillanata dönti el, ki viseli a korábbi évek elmaradásainak következményeit. Ha nincs dokumentált átvételi állapotfelmérés, akkor néhány hónap múlva minden hiba az új üzemeltető felelősségének fog látszani.",
      },
      { type: "h2", text: "1. Dokumentáció" },
      {
        type: "ul",
        items: [
          "Létezik-e megvalósulási terv, vagy csak a tervezői állapot van meg?",
          "Van-e elosztóséma, és megtalálható-e az elosztószekrényben is?",
          "Van-e végpontlista a hálózati és gyengeáramú végpontokról?",
          "Van-e eszközlista típussal, sorozatszámmal és garanciaadattal?",
          "Megvannak-e a korábbi mérési és felülvizsgálati jegyzőkönyvek?",
        ],
      },
      {
        type: "p",
        text: "Ha ezek hiányoznak, az nem akadály — de tudni kell róla, mert a pótlásuk időt és pénzt igényel, és ezt az üzemeltetési ajánlatba be kell építeni.",
      },
      { type: "h2", text: "2. Villamos rendszer" },
      {
        type: "ul",
        items: [
          "Mikor volt az utolsó érintésvédelmi és szabványossági felülvizsgálat, és mikor esedékes a következő?",
          "A korábbi jegyzőkönyvekben feltárt hibák javítása megtörtént-e, és van-e róla igazolás?",
          "Van-e szabad hely az elosztókban a bővítéshez?",
          "Fel vannak-e címkézve az áramkörök, és a felirat egyezik-e a valósággal?",
          "Van-e melegedésre utaló jel: elszíneződés, szag, deformálódott burkolat?",
          "Működik-e a biztonsági és irányfény-világítás, és mikor volt utoljára tesztelve?",
        ],
      },
      { type: "h2", text: "3. Gyengeáramú rendszerek" },
      {
        type: "ul",
        items: [
          "A kamerarendszernél nem csak az élőkép, hanem a rögzítés és a visszakeresés is működik-e?",
          "Mennyi a tényleges megőrzési idő, és megegyezik-e az adatkezelési tájékoztatóban vállalttal?",
          "A beléptetési jogosultsági lista naprakész-e? Vannak-e benne már kilépett személyek?",
          "Támogatott-e még a rögzítő és a beléptető vezérlő, kapható-e hozzá alkatrész?",
          "Van-e szünetmentes tápellátás, és az akkumulátorok mikor voltak cserélve?",
        ],
      },
      { type: "h2", text: "4. Hálózat és rendezőszekrény" },
      {
        type: "p",
        text: "A rendezőszekrény állapota megbízhatóan jelzi az épület egészének műszaki gondozottságát. Nézze meg, van-e szabad hely és szabad port, rendezett-e a kábelezés, működik-e a szellőzés, és van-e szünetmentes tápellátás az aktív eszközökön. Ha a szekrényben átláthatatlan gubanc van jelöletlen patchkábelekkel, akkor a hibakeresés a jövőben minden alkalommal hosszú lesz.",
      },
      { type: "h2", text: "5. Hozzáférések" },
      {
        type: "p",
        text: "Ezt a pontot szokták a legkésőbb észrevenni, pedig kritikus. Az átvételkor tisztázni kell, hogy a rendszerek adminisztrátori hozzáférései átadásra kerülnek-e, és hogy azok valóban a tulajdonost illetik-e. Előfordul, hogy a korábbi kivitelező visszatartja a hozzáféréseket vagy a programozott projektfájlt — ez a gyakorlatban azt jelenti, hogy a rendszert csak ő tudja módosítani.",
      },
      {
        type: "callout",
        title: "Írásos átvételi állapotjelentés",
        text: "Az átvételről mindig készüljön írásos állapotjelentés, fotókkal, prioritási sorrenddel. Ez nemcsak a felelősségi határokat tisztázza, hanem az első év műszaki költségvetésének is az alapja lesz. Üzemeltetési szerződéseinket mindig ezzel a felméréssel kezdjük.",
      },
      { type: "h2", text: "6. Sürgősségi rendezés" },
      {
        type: "p",
        text: "A felmérés eredményét érdemes három csoportba rendezni: azonnali beavatkozást igénylő biztonsági kockázat, egy éven belül várható meghibásodás, valamint hosszabb távon korszerűsítendő elem. Így az elmaradások nem egyetlen ijesztő listaként jelennek meg, hanem ütemezhető, tervezhető feladatokként.",
      },
    ],
    faq: [
      {
        q: "Mennyi ideig tart egy átvételi állapotfelmérés?",
        a: "Egy közepes méretű irodaháznál jellemzően egy–két nap helyszíni munka, majd néhány nap a jelentés összeállítása. Nagyobb vagy több telephelyes portfóliónál ez természetesen hosszabb.",
      },
      {
        q: "Elvégzik a felmérést akkor is, ha nem önök lesznek az üzemeltetők?",
        a: "Igen, önálló szolgáltatásként is vállalunk műszaki állapotfelmérést — például ingatlanvásárlás előtti átvilágításhoz vagy szolgáltatóváltás előkészítéséhez.",
      },
    ],
    related: ["/uzemeltetes/muszaki-epuletuzemeltetes", "/megoldasok/ingatlankezelok"],
  },
];

export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));
