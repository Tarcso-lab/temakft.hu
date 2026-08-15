import type { SegmentPage } from "./types";

/**
 * Célcsoport-oldalak. Ezek hozzák a legjobb konverziót, mert a döntéshozó
 * a saját épülettípusára keres rá ("irodaház üzemeltetés", "csarnok
 * villanyszerelés", "társasház kaputelefon csere"), nem általános
 * szolgáltatásnévre.
 */
export const segments: SegmentPage[] = [
  {
    slug: "irodahazak",
    name: "Irodaházak",
    emoji: "🏢",
    h1: "Irodaház üzemeltetés és műszaki szolgáltatások",
    metaTitle: "Irodaház műszaki üzemeltetés, bérlői beépítés | TEMA",
    metaDescription:
      "Irodaházak műszaki üzemeltetése: villamos rendszerek, kamera, beléptetés, hálózat és bérlői beépítések egy partnertől. Mérhető SLA, havi riport.",
    keywords: [
      "irodaház üzemeltetés",
      "irodaház műszaki üzemeltetés",
      "bérlői beépítés kivitelezés",
      "irodaház beléptető rendszer",
      "irodaház karbantartás",
    ],
    lead: "Az irodaházban a műszaki minőség bérlőmegtartás kérdése. Egy akadozó hálózat vagy egy rosszul működő beléptetés a szerződéshosszabbításnál jön elő.",
    painPoints: [
      "A bérlők a recepciónak jelentenek hibát, ami onnan három különböző szolgáltatóhoz továbbítódik — és elveszik.",
      "A bérlői beépítések minden alkalommal más kivitelezővel készülnek, így a rendszer egyre kevésbé átlátható.",
      "Nincs naprakész dokumentáció: senki nem tudja, melyik kábel melyik szintre megy.",
      "A közüzemi elszámolás bérlőnként vitatott, mert nincs megbízható almérés.",
      "Az energiafogyasztás magas, de nem látszik, hol keletkezik.",
    ],
    deliverables: [
      {
        title: "Egy műszaki kapcsolattartó",
        text: "A recepció és a bérlők egy helyre jeleznek. A hibajegy nálunk keletkezik, nálunk zárul, és a havi riportban visszakereshető.",
      },
      {
        title: "Bérlői beépítések egységesen",
        text: "Minden beépítés ugyanazzal a műszaki színvonallal és dokumentációval készül, így az épület nem darabolódik szét kivitelezőnként.",
      },
      {
        title: "Almérés és energiafogyasztás",
        text: "Bérlőnkénti almérés kiépítése és leolvasása, hogy az elszámolás mérésen alapuljon, ne becslésen.",
      },
      {
        title: "Beléptetés és kamerarendszer",
        text: "Zónázott beléptetés bérlőnként, látogatókezeléssel, a kamerarendszerrel integrálva.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Egy irodaház műszaki üzemeltetése abban különbözik a többi ingatlantípustól, hogy itt a végfelhasználó fizető ügyfél, aki bármikor költözhet. A műszaki hibák nem csak javítási költséget jelentenek, hanem közvetlen üzleti kockázatot: egy hosszabb hálózati kiesés vagy egy nyáron nem hűtő szint azonnal megjelenik a bérlői elégedettségben.",
      },
      { type: "h2", text: "Amit átveszünk egy irodaházban" },
      {
        type: "ul",
        items: [
          "Erősáramú rendszerek: fő- és alelosztók, világítás, biztonsági világítás, almérés.",
          "Gyengeáramú rendszerek: kamerarendszer, beléptetés, kaputelefon, sorompók.",
          "IT-infrastruktúra: strukturált hálózat, rendezőszekrények, WiFi a közös terekben.",
          "Épületautomatizálás: világítás- és klímavezérlés, időprogramok, energiafigyelés.",
          "Bérlői beépítések teljes műszaki tartalma, a felméréstől az átadásig.",
        ],
      },
      { type: "h2", text: "Bérlőváltás: a leggyakoribb kritikus időszak" },
      {
        type: "p",
        text: "A bérlőváltás mindig szűk határidős, és mindig több szakágat érint egyszerre: átalakítás, kábelezés, beléptetési jogosultságok, kamerapozíciók, világítászónák. Ilyenkor a koordináció értéke a legnagyobb. Mivel a rendszereket üzemeltetjük, nem kell felmérni, mi hol van — a végpontlistából és a dokumentációból azonnal tervezhető a beépítés.",
      },
      {
        type: "callout",
        title: "Amit az első felmérésen szinte mindig találunk",
        text: "Elhasználódott biztonsági világítási akkumulátorok, hiányos vagy évek óta nem frissített beléptetési jogosultsági lista, és rendezőszekrény, amiben már nincs szabad hely. Egyik sem drága javítani — de mindhárom komoly kockázat, ha marad.",
      },
    ],
    faq: [
      {
        q: "Több irodaházra is köthető egy szerződés?",
        a: "Igen, portfólió szintű üzemeltetést is vállalunk. Ilyenkor egységes ütemtervet és összehasonlítható riportot készítünk, ami a portfólió műszaki állapotának összevetését is lehetővé teszi.",
      },
      {
        q: "Dolgoznak a ház meglévő üzemeltetője mellett is?",
        a: "Igen. Sok esetben az általános üzemeltetés (takarítás, recepció, kertészet) marad a jelenlegi szolgáltatónál, és csak a műszaki tartalmat vesszük át. A felelősségi határokat ilyenkor pontosan rögzítjük.",
      },
      {
        q: "Munkaidőn kívül is végeznek munkát?",
        a: "Igen, a bérlőket zavaró munkákat — feszültségmentesítés, zajos szerelés, gerincbeavatkozás — kifejezetten munkaidőn kívülre ütemezzük.",
      },
    ],
  },

  {
    slug: "ipari-logisztika",
    name: "Ipari és logisztikai létesítmények",
    emoji: "🏭",
    h1: "Ipari és logisztikai létesítmények műszaki üzemeltetése",
    metaTitle: "Ipari csarnok villamos üzemeltetése | TEMA",
    metaDescription:
      "Ipari és logisztikai létesítmények üzemeltetése: csarnokvilágítás, elosztók, kamerarendszer, rendszámfelismerés, kaputechnika és ipari hálózat.",
    keywords: [
      "ipari villanyszerelés",
      "csarnok villamos üzemeltetés",
      "logisztikai központ kamerarendszer",
      "ipari karbantartás villamos",
      "raktár világítás korszerűsítés",
    ],
    lead: "Ipari környezetben a leállás perc alapon mérhető veszteség. Itt a megelőzés nem költség, hanem biztosítás.",
    painPoints: [
      "Egy villamos hiba azonnali termelés- vagy kiszállítás-kiesést okoz.",
      "A csarnokvilágítás régi technológiájú, sokat fogyaszt, és a csere állványozást igényel.",
      "A kapuforgalom lassú, a sofőrök a portán várakoznak.",
      "A kamerarendszer nem fedi le az árukezelési pontokat, így az árueltérések nem visszakereshetők.",
      "A hálózat nem bírja a targoncás kézi terminálokat a csarnok teljes területén.",
    ],
    deliverables: [
      {
        title: "Villamos rendelkezésre állás",
        text: "Elosztók hőkamerás vizsgálata terhelés alatt, szabványossági mérések, tartalék betáplálás és szünetmentes ellátás kritikus pontokra.",
      },
      {
        title: "Csarnokvilágítás korszerűsítés",
        text: "LED-es csere zónázással és jelenlét-érzékeléssel — nagy üzemóraszám mellett ez a leggyorsabban megtérülő beruházás.",
      },
      {
        title: "Kapuforgalom gyorsítása",
        text: "Rendszámfelismerés és sorompóvezérlés integrálva a beléptetéssel, hogy a saját flotta és a törzsfuvarozók megállás nélkül közlekedjenek.",
      },
      {
        title: "Ipari hálózat",
        text: "Teljes csarnoklefedettségű, roaming-képes WiFi kézi terminálokhoz, optikai gerinccel és védett kivitelű végpontokkal.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Az ipari és logisztikai létesítmények műszaki üzemeltetése két dologban tér el az irodai környezettől: a leállás költsége lényegesen magasabb, és a környezet lényegesen igénybevevőbb. A por, a pára, a rezgés, a targoncaforgalom és a nagy motorok elektromágneses zavara mind olyan tényező, amit a tervezésnél és a karbantartási ciklusok meghatározásánál figyelembe kell venni.",
      },
      { type: "h2", text: "A leállás megelőzése" },
      {
        type: "p",
        text: "A villamos rendszernél a megelőzés eszköze a rendszeres, terhelés alatti hőkamerás vizsgálat és a mérés. Ipari környezetben a kötések a rezgés miatt gyorsabban lazulnak, a por pedig rontja a szekrények hőleadását — így az elosztóban keletkező melegedés itt jóval gyakoribb, mint irodában. Ezt üzemszünet nélkül fel lehet deríteni, és tervezett leállásban javítani.",
      },
      { type: "h2", text: "Kamerarendszer az árumozgás mentén" },
      {
        type: "p",
        text: "Logisztikai környezetben a kamerarendszer elsődleges célja nem a betörésvédelem, hanem a folyamatok visszakereshetősége: rakodókapuk, komissiózási pontok, csomagolás, kiadás. A jó kamerapozíció itt azt jelenti, hogy egy vitatott szállítmány esetén percek alatt előkereshető a rakodás felvétele. Ehhez elegendő megőrzési időt és keresést gyorsító analitikát is méretezünk.",
      },
      {
        type: "callout",
        title: "Karbantartás tervezett leállásban",
        text: "Ipari ügyfeleinknél a karbantartást a termelési naptárhoz igazítjuk: leállási ablakokban, előre egyeztetve, felkészült létszámmal dolgozunk. A cél, hogy a karbantartás soha ne okozzon nem tervezett kiesést.",
      },
    ],
    faq: [
      {
        q: "Több műszakos üzemben mikor tudnak dolgozni?",
        a: "A karbantartási munkákat a termelési ütemtervhez igazítjuk — hétvégén, leállási ablakban vagy műszakok között. A feszültségmentesítést igénylő munkákat mindig előre ütemezzük, több héttel korábban egyeztetve.",
      },
      {
        q: "Vállalnak gépek villamos bekötését is?",
        a: "Igen, technológiai berendezések villamos betáplálását és bekötését is végezzük, a szükséges kapacitás felmérésével és a meglévő elosztó terhelhetőségének vizsgálatával együtt.",
      },
      {
        q: "Meg tudják oldani több telephely egységes üzemeltetését?",
        a: "Igen. Több telephelynél központi hálózati felügyeletet és egységes karbantartási ütemtervet alakítunk ki, ami a telephelyek műszaki állapotának összehasonlítását is lehetővé teszi.",
      },
    ],
  },

  {
    slug: "uzletek-kereskedelem",
    name: "Üzletek és kereskedelmi ingatlanok",
    emoji: "🏬",
    h1: "Üzletek és kereskedelmi ingatlanok műszaki háttere",
    metaTitle: "Üzlet és üzletlánc műszaki háttere | TEMA",
    metaDescription:
      "Kereskedelmi egységek műszaki üzemeltetése: kamerarendszer, beléptetés, villamos hálózat, világítás — több telephelyen is egységes színvonalon.",
    keywords: [
      "üzlet kamerarendszer",
      "üzletlánc karbantartás",
      "bolt villamos hálózat",
      "kereskedelmi ingatlan üzemeltetés",
      "üzlethelyiség világítás",
    ],
    lead: "Üzletben minden műszaki hiba azonnal látszik a forgalmon: a sötét polc, az akadozó pénztárgép-hálózat, a nem működő kamera.",
    painPoints: [
      "Az árukiesések nem visszakereshetők, mert a kamera nem a megfelelő pontokat nézi.",
      "Több üzlet, több kivitelező, teljesen eltérő rendszerek — nincs egységes felügyelet.",
      "A pénztárgép- és kártyaterminál-hálózat megbízhatatlan, ami közvetlen forgalomkiesés.",
      "A világítás elavult, sokat fogyaszt, és rontja az áru megjelenését.",
      "Nyitás-zárás körüli időszakban nincs kontroll a helyiségek használatán.",
    ],
    deliverables: [
      {
        title: "Kamerarendszer a kritikus pontokra",
        text: "Pénztár, bejárat, raktár és árukiadás lefedése azonosításra alkalmas képminőséggel, elegendő megőrzési idővel.",
      },
      {
        title: "Egységes üzletlánc-színvonal",
        text: "Több telephelyen azonos rendszer, azonos kezelőfelület és központi felügyelet — az új üzlet nyitása sablon szerint történik.",
      },
      {
        title: "Megbízható kereskedelmi hálózat",
        text: "Elkülönített hálózat a pénztárgépeknek és a termináloknak, külön vendég-WiFi, tartalék internetkapcsolattal.",
      },
      {
        title: "Világítás, ami elad",
        text: "Kereskedelmi világítás korszerűsítése: jobb színvisszaadás az árun, alacsonyabb fogyasztás, kevesebb hőterhelés.",
      },
    ],
    body: [
      {
        type: "p",
        text: "A kereskedelmi egységek műszaki üzemeltetésének sajátossága, hogy a nyitvatartási időben szinte semmilyen zavaró munka nem végezhető, viszont a hibákat azonnal orvosolni kell. Ez éjszakai és kora reggeli munkavégzést, valamint gyors reakcióidőt kíván.",
      },
      { type: "h2", text: "Üzletláncoknál az egységesség a legnagyobb érték" },
      {
        type: "p",
        text: "Ha minden üzletben más rendszer van, akkor minden hiba egyedi feladat, és a személyzet betanítása is minden helyszínen elölről kezdődik. Az egységesítés — azonos kamera- és beléptetési rendszer, azonos hálózati felépítés, azonos felügyeleti felület — a hibaelhárítás idejét és az üzemeltetés költségét is jelentősen csökkenti. Új üzlet nyitásakor pedig a kiépítés sablon szerint, kiszámítható áron és határidővel történik.",
      },
      { type: "h2", text: "Árukiesés és visszakereshetőség" },
      {
        type: "p",
        text: "A leltárhiány feltárásához nem több kamera kell, hanem jobban elhelyezett kamera és elegendő megőrzési idő. A pénztár, a raktárkapu és az árukiadás lefedése azonosításra alkalmas képminőséggel többet ér, mint tíz áttekintő kamera a plafonon. Az analitika — például a raktári ajtó nyitásának eseményjelzése — tovább gyorsítja a visszakeresést.",
      },
      {
        type: "callout",
        title: "Nyitás előtti átadás",
        text: "Új üzlet nyitásánál a műszaki átadás mindig szűk határidős. Ilyenkor a kritikus rendszereket — hálózat, pénztári infrastruktúra, kamera, riasztó — előre ütemezve, a bútorozás előtt készítjük elő, hogy a nyitás napján ne a kábelhúzáson múljon a kezdés.",
      },
    ],
    faq: [
      {
        q: "Nyitvatartási időn kívül is dolgoznak?",
        a: "Igen, a kereskedelmi ügyfeleinknél ez az alap. A zavaró munkákat zárás után vagy nyitás előtt végezzük, előre egyeztetett időpontban.",
      },
      {
        q: "Több üzletre egy szerződés köthető?",
        a: "Igen, és ez a leggyakoribb konstrukció üzletláncoknál. Egy szerződés, egységes ütemterv, egy riport az összes telephelyről.",
      },
      {
        q: "Segítenek új üzlet nyitásánál?",
        a: "Igen, az új egység teljes műszaki kiépítését vállaljuk: villamos hálózat, világítás, hálózat, kamerarendszer, riasztó és beléptetés — a bérbeadói műszaki előírásokhoz igazítva.",
      },
    ],
  },

  {
    slug: "szallodak",
    name: "Szállodák",
    emoji: "🏨",
    h1: "Szállodák műszaki üzemeltetése",
    metaTitle: "Szálloda műszaki üzemeltetés, szobavezérlés | TEMA",
    metaDescription:
      "Szállodák műszaki üzemeltetése: szobai energiavezérlés, beléptetés, kamerarendszer és vendég-WiFi. Diszkrét, foglaltsághoz igazított munkavégzés.",
    keywords: [
      "szálloda műszaki üzemeltetés",
      "hotel karbantartás",
      "szálloda szobavezérlés",
      "hotel WiFi kiépítés",
      "szálloda energiahatékonyság",
    ],
    lead: "A szállodában a műszaki hiba nem javítási tétel, hanem értékelés a foglalási oldalon.",
    painPoints: [
      "A vendég-WiFi lassú vagy szakadozik — ez a leggyakoribb negatív értékelési ok.",
      "Az üres szobákat is fűtik-hűtik, mert nincs jelenlét- vagy foglaltság-alapú vezérlés.",
      "A kulcskártyás rendszer elavult, a hibás zárak folyamatos recepciós terhet jelentenek.",
      "Az energiaköltség magas, de nem látszik, mely épületrész mennyit fogyaszt.",
      "A karbantartás zavarja a vendégeket, mert nincs összehangolva a foglaltsággal.",
    ],
    deliverables: [
      {
        title: "Szobai energiavezérlés",
        text: "Foglaltság- és jelenlét-alapú fűtés-hűtés és világítás. Az üres szoba energiatakarékos módba áll, érkezés előtt visszaáll komfortra.",
      },
      {
        title: "Vendég-WiFi, ami bírja a terhelést",
        text: "Szobánkénti lefedettség tervezéssel, roaming, elkülönített vendég- és üzemi hálózat, tartalék internetkapcsolat.",
      },
      {
        title: "Beléptetés és zárrendszer",
        text: "Vendég- és személyzeti zónák elkülönítése, a közösségi terek és a személyzeti bejáratok kontrollált beléptetése.",
      },
      {
        title: "Diszkrét karbantartás",
        text: "A karbantartási ütemtervet a foglaltsághoz igazítjuk. Szezonban minimalizált beavatkozás, holtszezonban nagyobb munkák.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Szállodában a műszaki üzemeltetés minden döntése a vendégélményhez mérhető. Egy hangos szerelés, egy folyosón álló létra vagy egy nem működő szobavezérlés közvetlenül befolyásolja az értékeléseket — amelyek pedig közvetlenül befolyásolják a foglaltságot és az elérhető árat.",
      },
      { type: "h2", text: "Az energiaköltség a legnagyobb befolyásolható tétel" },
      {
        type: "p",
        text: "A szállodai energiafogyasztás jelentős része üres szobákra megy el. A foglaltság-alapú vezérlés — amely a recepciós rendszerrel vagy a kulcskártyás azonosítással összekötve tudja, hogy a szoba használatban van-e — ezt érdemben csökkenti anélkül, hogy a vendég bármit is érzékelne a komfortból. Érkezés előtt a rendszer visszaállítja a komfortértékeket.",
      },
      { type: "h2", text: "Vendég-WiFi: a leggyakoribb panaszforrás" },
      {
        type: "p",
        text: "A szállodai WiFi tervezésénél a hiba szinte mindig ugyanaz: a lefedettséget mérik, a terhelést nem. Egy száz szobás szállodában egyszerre több száz eszköz lehet aktív, jelentős részük videót streamel. Ezt access point-sűrűséggel, megfelelő sávszélesség-elosztással és a vendéghálózat elkülönítésével lehet kezelni — nem erősebb routerrel.",
      },
      {
        type: "callout",
        title: "Loxone a szállodai szegmensben",
        text: "Szállodáknál gyakran javasoljuk a Loxone alapú megoldást, mert a szobavezérlés viszonylag gyorsan és költséghatékonyan megvalósítható vele, és jól skálázható szobáról szobára. Nagyobb, hosszú életciklusú épületeknél a KNX vagy a kettő vegyítése lehet a jobb választás.",
      },
    ],
    faq: [
      {
        q: "Üzemelő szállodában is megvalósítható a szobavezérlés?",
        a: "Igen, jellemzően szobánként, ütemezetten, a foglaltsághoz igazítva. Egy szoba átalakítása általában egy-két nap, így a kiesés minimális, és holtszezonban több szoba is párhuzamosan elvégezhető.",
      },
      {
        q: "Össze lehet kötni a szállodai rendszert a recepciós szoftverrel?",
        a: "Sok esetben igen, ha a szoftver rendelkezik megfelelő interfésszel. Ez teszi lehetővé a valódi foglaltság-alapú vezérlést. A felmérés során ezt konkrétan megvizsgáljuk.",
      },
      {
        q: "Hogyan oldják meg, hogy a munka ne zavarja a vendégeket?",
        a: "A zajos és látható munkákat a foglaltsághoz igazítva ütemezzük, a szervizútvonalakat pedig a személyzeti közlekedőkre korlátozzuk. A szerelőink szállodai környezetben ehhez igazodó munkarendben dolgoznak.",
      },
    ],
  },

  {
    slug: "intezmenyek",
    name: "Intézmények",
    emoji: "🏫",
    h1: "Intézmények műszaki üzemeltetése",
    metaTitle: "Intézményi épületek üzemeltetése | TEMA",
    metaDescription:
      "Iskolák és közintézmények műszaki üzemeltetése: kötelező felülvizsgálatok nyilvántartása, szakaszolható korszerűsítés, beléptetés és kamera.",
    keywords: [
      "intézmény épületüzemeltetés",
      "iskola villamos felülvizsgálat",
      "közintézmény karbantartás",
      "intézményi beléptető rendszer",
      "érintésvédelmi felülvizsgálat intézmény",
    ],
    lead: "Intézményi környezetben a szabályosság és a dokumentáltság nem formaság — ellenőrzéskor ez az első, amit kérnek.",
    painPoints: [
      "A kötelező időszakos felülvizsgálatok nyilvántartása hiányos, nem tudni, mi mikor esedékes.",
      "A villamos hálózat sok részletében elavult, de a felújítás csak szakaszosan finanszírozható.",
      "A beléptetés nincs megoldva, így a nyitvatartási időben bárki bejöhet.",
      "A közbeszerzési vagy beszerzési eljáráshoz pontos, tételes műszaki tartalom kell.",
      "A karbantartás csak szünetekben végezhető, szűk időablakokban.",
    ],
    deliverables: [
      {
        title: "Felülvizsgálati nyilvántartás",
        text: "Az összes kötelező időszakos vizsgálat nyilvántartása esedékességgel, előre jelzett határidőkkel — hogy egyik se csússzon el.",
      },
      {
        title: "Szakaszolható korszerűsítés",
        text: "Prioritási sorrend és költségbecslés épületrészenként, hogy a felújítás a rendelkezésre álló kerethez igazítható legyen.",
      },
      {
        title: "Beléptetés és kamerarendszer",
        text: "Kontrollált bejárat, zónázott hozzáférés, a nyitvatartási időhöz igazított időprofilokkal.",
      },
      {
        title: "Tételes műszaki dokumentáció",
        text: "Beszerzési eljárásokhoz alkalmas, tételes műszaki leírás és költségbecslés készítése.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Az intézményi épületek üzemeltetésének két sajátossága van. Az egyik, hogy a jogszabályi megfelelés és a dokumentáltság kiemelt fontosságú, mert az ellenőrzések rendszeresek. A másik, hogy a felújítás jellemzően nem egy ütemben, hanem évekre elosztva, a rendelkezésre álló keret függvényében történik.",
      },
      { type: "h2", text: "Prioritásokra bontott műszaki állapotfelmérés" },
      {
        type: "p",
        text: "Ezért az intézményeknél az állapotfelmérésünk mindig prioritási sorrendbe rendezve készül: mi az, ami azonnali beavatkozást igényel biztonsági okból, mi az, ami egy éven belül várhatóan meghibásodik, és mi az, ami hosszabb távon korszerűsítendő. Ehhez költségbecslést is adunk, hogy a következő évek műszaki költségvetése tervezhető legyen.",
      },
      { type: "h2", text: "Karbantartás szünetekben" },
      {
        type: "p",
        text: "Oktatási intézményeknél a nagyobb munkák természetes időablaka a nyári és a téli szünet. Ezek szűk, fix határidős időszakok, ahol a előkészítés minősége dönt: az anyagbeszerzésnek és a létszámtervezésnek jóval korábban meg kell történnie. Ezt a tervezést az éves ütemterv részeként végezzük.",
      },
      {
        type: "callout",
        title: "Biztonsági világítás: gyakori hiányosság",
        text: "Intézményi épületekben a leggyakrabban feltárt hiányosság a biztonsági és irányfény-világítás állapota: lemerült akkumulátorok, nem működő lámpatestek, hiányzó időszakos tesztek. Ez ellenőrzéskor és valós vészhelyzetben egyaránt komoly kockázat, javítása viszont jellemzően nem nagy tétel.",
      },
    ],
    faq: [
      {
        q: "Készítenek beszerzési eljáráshoz műszaki leírást?",
        a: "Igen. Tételes műszaki leírást és költségbecslést készítünk, amely alkalmas ajánlatkérés kiírására, és amely alapján a beérkező ajánlatok ténylegesen összehasonlíthatók.",
      },
      {
        q: "Milyen kötelező felülvizsgálatokat végeznek?",
        a: "Érintésvédelmi és szabványossági (tűzvédelmi) villamos felülvizsgálatokat, a szükséges mérési jegyzőkönyvek kiállításával, valamint nyilvántartjuk a következő esedékességeket és időben jelezzük azokat.",
      },
      {
        q: "Csak szünetekben tudnak dolgozni?",
        a: "A nagyobb, zavaró munkákat igen, de a karbantartás és a hibaelhárítás jelentős része tanítási vagy üzemi időben is elvégezhető, a használt területek elkerülésével.",
      },
    ],
  },

  {
    slug: "tarsashazak",
    name: "Társasházak",
    emoji: "🏘️",
    h1: "Társasházak műszaki üzemeltetése",
    metaTitle: "Társasházi villamos karbantartás, kaputelefon | TEMA",
    metaDescription:
      "Társasházak műszaki ellátása: villamos hálózat és elosztók karbantartása, kaputelefon csere, kamerarendszer, lépcsőházi világítás korszerűsítése.",
    keywords: [
      "társasház villamos karbantartás",
      "társasház kaputelefon csere",
      "társasház kamerarendszer",
      "lépcsőházi világítás korszerűsítés",
      "közös képviselő karbantartó cég",
    ],
    lead: "Közös képviselőként nem szakembert keres, hanem valakit, aki felveszi a telefont, kimegy, és utána nem kell utána telefonálni.",
    painPoints: [
      "A kaputelefon elavult, alkatrész már nem kapható, de a csere költsége ijesztő a közgyűlésen.",
      "A lépcsőházi világítás sokat fogyaszt, és folyamatosan cserélni kell a fényforrásokat.",
      "A villamos főelosztó évtizedek óta nem volt felülvizsgálva.",
      "A lakók sűrűn panaszkodnak a garázskapura, ami akadozik vagy nem záródik.",
      "Nincs átlátható árajánlat, amit a közgyűlés elé lehetne vinni.",
    ],
    deliverables: [
      {
        title: "Közgyűlésre alkalmas ajánlat",
        text: "Tételes, érthető, döntést támogató árajánlat — több változattal, hogy a közgyűlés valóban tudjon választani.",
      },
      {
        title: "Kaputelefon korszerűsítés",
        text: "Meglévő vezetéken is megvalósítható csere, szakaszosan ütemezve, mobilos hívásátirányítással.",
      },
      {
        title: "Villamos biztonság",
        text: "Főelosztó felülvizsgálata, érintésvédelmi mérés, a feltárt hibák javítása jegyzőkönyvvel.",
      },
      {
        title: "Kapu- és garázstechnika",
        text: "Garázskapuk, tolókapuk javítása, automatizálása, biztonsági elemek ellenőrzése.",
      },
    ],
    body: [
      {
        type: "p",
        text: "A társasházi munka abban különleges, hogy a döntéshozó nem egy ember, hanem a közgyűlés. Ez azt jelenti, hogy az ajánlatnak nemcsak műszakilag kell helyesnek lennie, hanem érthetőnek is: a tulajdonosoknak látniuk kell, mit kapnak a pénzükért, és milyen alternatívák vannak.",
      },
      { type: "h2", text: "Ezért adunk több változatot" },
      {
        type: "p",
        text: "Társasházi ajánlatainkban jellemzően több változatot mutatunk: egy minimális, biztonsági szempontból mindenképp szükséges csomagot, egy javasolt megoldást, és — ahol van értelme — egy hosszabb távon gazdaságosabb, nagyobb beruházást igénylő verziót. Így a közgyűlés valóban dönthet, nem csak igent vagy nemet mondhat.",
      },
      { type: "h2", text: "A leggyakoribb társasházi munkák" },
      {
        type: "ul",
        items: [
          "Kaputelefon csere és bővítés, mobilos hívásátirányítással.",
          "Lépcsőházi és külső világítás LED-es korszerűsítése mozgásérzékelővel.",
          "Villamos főelosztó felülvizsgálata, korszerűsítése, érintésvédelmi mérés.",
          "Kamerarendszer a bejáratokhoz, a garázshoz és a tárolókhoz.",
          "Beléptetés: kulcstartós vagy mobilos kapunyitás, letiltható azonosítókkal.",
          "Garázskapu és tolókapu automatika javítása, karbantartása.",
          "Elektromos töltőpontok kiépítésének villamos előkészítése.",
        ],
      },
      {
        type: "callout",
        title: "Lépcsőházi világítás: gyors megtérülés",
        text: "A lépcsőházi világítás sok házban napi 8–14 órát üzemel. LED-es cserével és mozgásérzékelős vezérléssel a fogyasztás töredékére csökkenthető, és a fényforráscsere is évekre megszűnik — ez az egyik legkönnyebben elfogadtatható beruházás a közgyűlésen.",
      },
    ],
    faq: [
      {
        q: "Ki tudnak menni közgyűlésre bemutatni az ajánlatot?",
        a: "Igen, nagyobb beruházásoknál ezt kifejezetten javasoljuk. A tulajdonosok kérdéseire a helyszínen tudunk válaszolni, ami sokat segít a döntésben.",
      },
      {
        q: "Vállalnak folyamatos karbantartást társasháznak is?",
        a: "Igen, egyszerűsített karbantartási szerződéssel. Ez jellemzően éves villamos ellenőrzést, a kaputelefon és a kaputechnika karbantartását, valamint kedvezményes óradíjú hibaelhárítást tartalmaz.",
      },
      {
        q: "Elektromos autó töltő kiépítése megoldható?",
        a: "Igen, de ez elsősorban villamos kapacitáskérdés. Felmérjük a ház rendelkezésre álló teljesítményét, és ha szükséges, terheléselosztó megoldást javaslunk, hogy a töltés ne a lakások ellátása rovására menjen.",
      },
    ],
  },

  {
    slug: "beruhazok-generalkivitelezok",
    name: "Beruházók és generálkivitelezők",
    emoji: "🏗️",
    h1: "Beruházóknak és generálkivitelezőknek",
    metaTitle: "Erős- és gyengeáramú alvállalkozó | TEMA",
    metaDescription:
      "Beruházóknak és generálkivitelezőknek: a teljes erős- és gyengeáramú szakági tartalom egy alvállalkozótól, saját koordinációval és dokumentációval.",
    keywords: [
      "gyengeáramú alvállalkozó",
      "erősáramú alvállalkozó",
      "generálkivitelező partner villamos",
      "szakági kivitelező beruházás",
      "villamos alvállalkozó Budapest",
    ],
    lead: "Egy alvállalkozó az erős- és gyengeáramra. Kevesebb koordináció, kevesebb interfész, egy felelős a teljes elektromos tartalomra.",
    painPoints: [
      "Az erősáram és a gyengeáram két külön alvállalkozónál van, és a határterületeken senki nem felel.",
      "Az alvállalkozó nem tartja az ütemtervet, és csak a helyszínen derül ki.",
      "Az átadási dokumentáció hiányos, ami a műszaki átadás-átvételt akasztja meg.",
      "Az átadás után a beruházónak nincs kire hagynia az üzemeltetést.",
      "A pótmunkák a projekt végén, koncentráltan jelennek meg.",
    ],
    deliverables: [
      {
        title: "Egy szakági partner",
        text: "Erősáram, gyengeáram, hálózat és automatizálás egy alvállalkozótól — a szakágak közötti egyeztetés nálunk marad, nem az Ön projektvezetőjén.",
      },
      {
        title: "Ütemtervhez igazodó kapacitás",
        text: "A vállalt létszámot és ütemet előre rögzítjük, és a helyszíni haladásról rendszeresen, írásban jelentünk.",
      },
      {
        title: "Átadásra kész dokumentáció",
        text: "Megvalósulási terv, végpontlista, mérési jegyzőkönyvek — az átadás-átvételi eljárás nem a mi papírjainkon fog csúszni.",
      },
      {
        title: "Üzemeltetés átvétele",
        text: "Az átadás után az általunk épített rendszereket üzemeltetni is tudjuk, így a beruházónak vagy a vevőnek kész megoldást adhat át.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Generálkivitelezőként vagy beruházóként az alvállalkozó kiválasztásánál nem az óradíj a legfontosabb szempont, hanem a kiszámíthatóság: tartja-e az ütemtervet, ott van-e a kooperáción, és hoz-e olyan dokumentációt, amivel az átadás-átvétel lezárható. Az ezekben keletkező csúszás sokkal többe kerül, mint a szakági ajánlatok közötti különbség.",
      },
      { type: "h2", text: "Miért előnyös az erős- és gyengeáram egyben?" },
      {
        type: "p",
        text: "Mert a két szakág határán keletkezik a legtöbb helyszíni ütközés és a legtöbb felelősségi vita. A gyengeáramú eszközök táplálása, a nyomvonalak elválasztása, a rendezőszekrények betáplálása és a szünetmentes ellátás mind olyan pont, ahol két külön alvállalkozó esetén egyeztetni kell — és ahol a hiba jellemzően a másikra van hárítva. Ha mindkettő nálunk van, ez a koordinációs teher megszűnik.",
      },
      { type: "h2", text: "Amit a projekt során adunk" },
      {
        type: "ul",
        items: [
          "Ajánlat tételes bontásban, egyértelműen jelölt kizárásokkal.",
          "Kapacitástervezés az ütemtervhez, előre rögzített létszámmal.",
          "Részvétel a kooperációkon, helyszíni koordinációs jelenlét.",
          "Takarás előtti ellenőrzések kezdeményezése, dokumentálása.",
          "Rendszeres, írásos haladási jelentés.",
          "Beüzemelés, mérések, hiánylista kezelése az átadásig.",
          "Teljes átadási dokumentáció, a beruházó formátumigénye szerint.",
        ],
      },
      {
        type: "callout",
        title: "Pótmunkakezelés",
        text: "A pótmunkákat nem a projekt végén, egy összegben hozzuk elő. Amint egy változás felmerül, írásban jelezzük a műszaki és költségvonzatát, hogy a döntés időben, ismert következményekkel születhessen meg.",
      },
    ],
    faq: [
      {
        q: "Milyen méretű projekteket vállalnak alvállalkozóként?",
        a: "Bérlői beépítéstől a teljes épület erős- és gyengeáramú tartalmáig. A kapacitást a felmérés során őszintén jelezzük — ha egy projekt meghaladja az adott időszaki kapacitásunkat, azt előre megmondjuk, nem menet közben derül ki.",
      },
      {
        q: "Dolgoznak a beruházó által előírt gyártói termékekkel?",
        a: "Igen. Ha a beruházói vagy bérbeadói műszaki előírás konkrét gyártót ír elő, azzal dolgozunk. Ha műszaki aggályunk van egy előírt megoldással kapcsolatban, azt írásban jelezzük.",
      },
      {
        q: "Vállalnak garanciát a szakági tartalomra?",
        a: "Igen, a szerződésben rögzített feltételekkel. A garanciális feltételeinket nyilvánosan is közzétesszük, hogy előre látható legyen, mire számíthat.",
      },
    ],
  },

  {
    // Kutatási alap: „lakásfelújítás Budapest" 390/hó, CPC 6,38 USD,
    // nehézségi pontszám 1; „teljes lakásfelújítás" 70/hó; „családi ház
    // generálkivitelezés" 110/hó, CPC 4,13 USD. A generálkivitelezés
    // kiterjesztésével ez a kör valós célcsoporttá vált.
    slug: "lakasok-csaladi-hazak",
    name: "Lakások és családi házak",
    emoji: "🏡",
    h1: "Teljes lakásfelújítás és családi ház kivitelezés",
    metaTitle: "Teljes lakásfelújítás Budapest, generálkivitelezés | TEMA",
    metaDescription:
      "Teljes lakásfelújítás és családi ház kivitelezése Budapesten és Pest vármegyében: bontástól a kulcsátadásig, minden szakág egy szerződésben, fix határidővel.",
    keywords: [
      "lakásfelújítás Budapest",
      "teljes lakásfelújítás",
      "lakásfelújítás generálkivitelezés",
      "családi ház generálkivitelezés",
      "házfelújítás Budapest",
      "kulcsrakész lakásfelújítás",
    ],
    lead: "Egy lakásfelújításnál tíz szakma dolgozik egymás után, és mindegyik a másikra vár. Generálkivitelezőként ezt a láncot mi szervezzük — Ön egy szerződést köt, és a kész lakást veszi át.",
    painPoints: [
      "Külön kell keresni kőművest, gépészt, villanyszerelőt, burkolót, festőt — és mindegyiket összehangolni.",
      "Az egyik szakma csúszása az összes utána következőt eltolja, de senki nem felel az egészért.",
      "A burkoló a még be nem húzott kábel fölé dolgozik, aztán bontani kell.",
      "Menet közben derülnek ki a pótmunkák, amikor már nincs mérlegelési lehetőség.",
      "A végén tíz külön számla és tíz külön garancia marad — vita esetén mindenki a másikra mutat.",
    ],
    deliverables: [
      {
        title: "Egy szerződés, egy felelős",
        text: "A teljes műszaki tartalom egy vállalásban: bontás, falazás, gépészet, villamosság, szárazépítés, burkolás, festés, asztalos. A szakágak egyeztetése a mi dolgunk.",
      },
      {
        title: "Villamosság és gépészet házon belül",
        text: "A lakásfelújítás két legkritikusabb szakága nálunk saját kapacitás. Nem kell alvállalkozóra várni a vésés és a kábelezés befejezésére — ez hetekben mérhető különbség.",
      },
      {
        title: "Tételes ajánlat, kizárásokkal",
        text: "Az ajánlatban külön fejezet sorolja fel, mi nem része a vállalásnak. A pótmunkák így nem a kivitelezés közepén jelennek meg.",
      },
      {
        title: "Lakott ingatlan is megoldható",
        text: "Ha nem tud kiköltözni, szakaszolt ütemtervet készítünk, porfalakkal elválasztott munkaterülettel. Hosszabb átfutás, de nem kell albérletet keresni.",
      },
    ],
    body: [
      {
        type: "p",
        text: "A teljes lakásfelújítás és a családi ház építése ugyanaz a feladat, csak eltérő léptékben: sok szakág, szoros egymásra épülés, és egy megrendelő, akinek nincs ideje napi szinten szervezni. Generálkivitelezőként ezt egyetlen szerződéssel vállaljuk — a bontástól a kulcsátadásig.",
      },
      { type: "h2", text: "Mi kerül bele egy teljes lakásfelújításba?" },
      {
        type: "ul",
        items: [
          "Bontás, sitt elszállítása, falazás, vakolás, aljzatkészítés.",
          "Gépészet: víz, csatorna, fűtés, padlófűtés, radiátorok, klíma előkészítése.",
          "Villamosság: teljes vezetékcsere, új elosztótábla, dugalj- és világításhálózat.",
          "Gyengeáram: hálózati végpontok, kaputelefon-csatlakozás, kamera előkészítés.",
          "Szárazépítés: válaszfalak, álmennyezet, gipszkarton burkolatok.",
          "Burkolás: hideg- és melegburkolat, vizes helyiségek szigetelése.",
          "Festés, mázolás, dekorfelületek.",
          "Nyílászárók cseréje, árnyékolástechnika.",
          "Beépített bútor, konyha, belső ajtók.",
        ],
      },
      { type: "h2", text: "Ahol a felújítások csúszni szoktak" },
      {
        type: "p",
        text: "A tapasztalatunk szerint a késés ritkán egyetlen szakma hibája. A leggyakoribb ok a gépészet és a villamosság sorrendje: ha a vésés és a kábelezés nem fejeződik be a burkolás megkezdése előtt, az egész ütemterv eltolódik, és a végén bontani kell. Ez a két szakág nálunk saját kapacitás, ezért itt nem kell alvállalkozói szabad időpontra várni.",
      },
      {
        type: "p",
        text: "A második leggyakoribb ok a késői döntés. A burkolat, a szaniter és a konyha kiválasztása nem esztétikai kérdés az ütemterv szempontjából, hanem beszerzési határidő. Ezért az ajánlatban megadjuk, mely döntéseket mikorra kérjük — így a választás nem válik szűk keresztmetszetté.",
      },
      {
        type: "callout",
        title: "Mikor éri meg generálkivitelezőt bízni meg?",
        text: "Ha a felújítás három szakmánál többet érint, vagy ha nincs napi ideje a helyszínt szervezni. Egy fürdőszoba-felújításnál a generálkivitelezés felesleges többletköltség; egy teljes lakásnál viszont jellemzően kevesebbe kerül, mint a saját szervezéssel járó csúszás és a pótmunkák.",
      },
      { type: "h2", text: "Hol vállalunk lakásfelújítást?" },
      {
        type: "p",
        text: "Budapesten és Pest vármegyében. Ennek gyakorlati oka van: a felújítás minőségét a napi helyszíni jelenlét dönti el, és ezt csak ésszerű távolságon belül tudjuk felelősen vállalni.",
      },
    ],
    faq: [
      {
        q: "Mennyi ideig tart egy teljes lakásfelújítás?",
        a: "A méret és a műszaki tartalom dönti el. Egy közepes méretű lakás teljes, gépészeti és villamos cserét is tartalmazó felújítása jellemzően több hónapos projekt. Az ütemtervet a felmérés után, szakági bontásban adjuk meg — nem általános ígéretként.",
      },
      {
        q: "Kaphatok fix árat?",
        a: "Pontosan meghatározott műszaki tartalomra igen. Ahol a valós állapot csak bontás után derül ki — például a meglévő gépészet vagy a szerkezet állapota —, ott ezt előre jelezzük, és az érintett részre tételes egységárat adunk.",
      },
      {
        q: "Kell kiköltözni a felújítás idejére?",
        a: "Teljes felújításnál általában igen, mert a víz és az áram szakaszosan kimarad. Ha ez nem megoldható, szakaszolt ütemtervet készítünk helyiségenként, porfalakkal — ez hosszabb átfutást jelent, de lakhatóvá teszi az ingatlant a munka alatt.",
      },
      {
        q: "Az anyagokat önök szerzik be, vagy én?",
        a: "Mindkettő működik. Ha mi szerezzük be, az anyag a vállalás része és a garancia is egyben áll. Ha Ön hozza, azt is beépítjük, de a beszerzett anyagra értelemszerűen nem tudunk garanciát vállalni — a beépítés minőségére viszont igen.",
      },
    ],
  },

  {
    slug: "ingatlankezelok",
    name: "Ingatlankezelők és facility managerek",
    emoji: "🏢",
    h1: "Ingatlankezelőknek és facility managereknek",
    metaTitle: "Műszaki partner ingatlankezelőknek | TEMA",
    metaDescription:
      "Ingatlankezelők és FM-cégek műszaki partnere: erős- és gyengeáramú üzemeltetés, SLA-alapú hibaelhárítás és portfólió szintű, továbbadható riport.",
    keywords: [
      "facility management alvállalkozó",
      "ingatlankezelő műszaki partner",
      "portfólió üzemeltetés",
      "FM műszaki szolgáltatás",
      "épületüzemeltetés alvállalkozó",
    ],
    lead: "Facility managerként nem műszaki tanácsra van szüksége, hanem egy partnerre, aki nem generál újabb feladatot Önnek.",
    painPoints: [
      "A portfólió épületei eltérő műszaki állapotban vannak, és nincs összehasonlítható adat.",
      "A tulajdonos felé riportolni kell, de a szolgáltatóktól nem érkezik használható adat.",
      "A hibabejelentések státusza nem követhető, a bérlők Önt keresik.",
      "Az éves műszaki költségvetést becslésre kell alapozni.",
      "Az egyes épületekben más-más szolgáltató dolgozik, eltérő színvonalon.",
    ],
    deliverables: [
      {
        title: "Portfólió szintű riport",
        text: "Egységes szerkezetű havi riport minden épületről: hibajegyek, teljesítés az SLA-hoz mérve, elvégzett karbantartások, nyitott tételek.",
      },
      {
        title: "Követhető hibajegykezelés",
        text: "Minden bejelentés azonosítót kap, időbélyeggel. A státusz bármikor lekérdezhető, a lezárás igazolt.",
      },
      {
        title: "Tervezhető költségvetés",
        text: "Éves műszaki előrejelzés: mely rendszerek cseréje várható, milyen nagyságrendben — hogy a büdzsé ne meglepetés legyen.",
      },
      {
        title: "Egységes műszaki színvonal",
        text: "Ugyanaz a munkamódszer, dokumentációs szint és riportformátum a portfólió minden épületében.",
      },
    ],
    body: [
      {
        type: "p",
        text: "Az ingatlankezelő és a facility manager pozíciója sajátos: a tulajdonos felé felel a műszaki működésért, de a tényleges munkát szolgáltatók végzik. Ez akkor működik jól, ha a szolgáltató nem csak elvégzi a munkát, hanem olyan formában szolgáltat adatot, amit tovább lehet adni a tulajdonosnak.",
      },
      { type: "h2", text: "Riportálás, ami továbbadható" },
      {
        type: "p",
        text: "A havi riportjainkat úgy állítjuk össze, hogy a tulajdonosi beszámolóba közvetlenül beemelhetők legyenek: mérhető adatok, egyértelmű állapotjelzés és világos javaslatok. Nem műszaki zsargonnal teli munkalapokat küldünk, hanem döntést támogató összefoglalót — a részletes műszaki melléklettel együtt, ha arra is szükség van.",
      },
      { type: "h2", text: "Portfólió szintű átláthatóság" },
      {
        type: "p",
        text: "Ha több épületet is mi kezelünk a portfólióból, az adatok összehasonlíthatóvá válnak: melyik épületben van a legtöbb hibabejelentés, hol a legmagasabb a javítási költség, melyik rendszer közelít az élettartama végéhez. Ez az az információ, amiből a következő évek beruházási terve valóban megalapozottan készíthető.",
      },
      {
        type: "callout",
        title: "Nem szeretnénk az Ön munkája lenni",
        text: "Az jó szolgáltató, aki csökkenti az FM-es feladatait, nem növeli. Ezért törekszünk arra, hogy a bejelentés után ne kelljen utánakérdezni, a riport magától érkezzen, és a döntést igénylő ügyek időben, elég információval kerüljenek Ön elé.",
      },
    ],
    faq: [
      {
        q: "Be tudnak illeszkedni a meglévő hibabejelentő rendszerünkbe?",
        a: "Igen, több partnerünknél a bejelentések az ő saját rendszerükben keletkeznek. Az ehhez való illeszkedést az együttműködés elején tisztázzuk, hogy ne kelljen párhuzamosan két helyen adminisztrálni.",
      },
      {
        q: "Átvesznek épületet év közben, futó szerződés mellett?",
        a: "Igen. Ilyenkor átvételi állapotfelmérést végzünk, hogy egyértelmű legyen, milyen állapotban vettük át a rendszereket — ez mindkét fél érdeke a későbbi felelősségi kérdések tisztázásához.",
      },
      {
        q: "Milyen gyakran egyeztetnek személyesen?",
        a: "Havi riport mellé jellemzően negyedéves személyes egyeztetést javasolunk, ahol a nyitott tételeket, a következő időszak terveit és a szükséges beruházásokat vesszük át.",
      },
    ],
  },
];
