import type { HubPage, ServicePage } from "./types";

export const uzemeltetesHub: HubPage = {
  key: "uzemeltetes",
  slug: "/uzemeltetes",
  h1: "Létesítményüzemeltetés és műszaki karbantartás",
  metaTitle: "Létesítményüzemeltetés Budapest | TEMA",
  metaDescription:
    "Létesítményüzemeltetés és facility management irodaházaknak, ipari létesítményeknek és társasházaknak: karbantartási szerződés, hibaelhárítás, felülvizsgálat.",
  keywords: [
    "létesítményüzemeltetés",
    "facility management",
    "épületüzemeltetés",
    "ingatlanüzemeltetés",
    "műszaki épületüzemeltetés",
    "karbantartási szerződés",
    "épületüzemeltetés Budapest",
  ],
  lead: "Az épület műszaki rendszerei akkor jók, ha észre sem veszi őket. Az üzemeltetési szolgáltatásunk pontosan ezt adja: folyamatos felügyeletet, tervezett karbantartást és kiszámítható reakcióidőt — erős- és gyengeáramon egyaránt, egyetlen szerződésben.",
  intro: [
    {
      type: "p",
      text: "A műszaki épületüzemeltetés a legtöbb ingatlannál nem azért drága, mert a karbantartás sokba kerül, hanem mert a meghibásodásokat utólag kell megfizetni. Egy leállt beléptetőrendszer, egy túlterhelt elosztó vagy egy dokumentálatlan hálózat üzemviteli kockázat: a javítás ára mellé bérleti reklamáció, kiesett munkaidő és biztosítási vita is társul.",
    },
    {
      type: "p",
      text: "A TEMA Menedzsment Kft. üzemeltetési szolgáltatása ezt a kockázatot fordítja meg. Átvesszük az épület erős- és gyengeáramú rendszereit, felmérjük a tényleges állapotukat, karbantartási ütemtervet készítünk, és szerződésben rögzített rendelkezésre állással működtetjük őket. Nem alvállalkozókat közvetítünk, hanem saját szakemberekkel dolgozunk.",
    },
    { type: "h2", text: "Mit takar nálunk az üzemeltetés?" },
    {
      type: "p",
      text: "Az üzemeltetés három, egymásra épülő rétegből áll. Az első a megelőzés: időszakos ellenőrzések, mérések és karbantartások, amelyek megakadályozzák a hibát. A második a reagálás: hibabejelentés fogadása, diagnosztika és javítás rögzített határidővel. A harmadik pedig a fejlesztés: az üzemeltetés során összegyűlt adatokból javaslatot teszünk arra, mit érdemes cserélni, bővíteni vagy korszerűsíteni, mielőtt az kényszerré válna.",
    },
    {
      type: "ul",
      items: [
        "Erősáramú rendszerek: elosztóberendezések, világítás, villamos hálózat, mérés és fogyasztáskövetés.",
        "Gyengeáramú rendszerek: kamerarendszer, beléptetés, kaputelefon, strukturált hálózat, kaputechnika.",
        "Épületautomatizálás: KNX és Loxone rendszerek felügyelete, paraméterezése, bővítése.",
        "Dokumentáció: naprakész műszaki nyilvántartás, mérési jegyzőkönyvek, karbantartási napló.",
      ],
    },
    {
      type: "h2",
      text: "Mi a különbség a facility management és a műszaki üzemeltetés között?",
    },
    {
      type: "p",
      text: "A facility management (magyarul létesítménygazdálkodás) a tágabb fogalom: minden olyan szolgáltatást magában foglal, ami egy épület működtetéséhez kell — takarítást, recepciót, biztonsági szolgálatot, kertészetet, hulladékkezelést és a műszaki üzemeltetést is.",
    },
    {
      type: "p",
      text: "A műszaki épületüzemeltetés ennek egy szakmai szelete: az épület műszaki rendszereiért felel. A TEMA ezt a szeletet viszi — de teljes mélységben, erős- és gyengeáramon egyaránt. Ez a gyakorlatban azt jelenti, hogy a nagy, mindent lefedő facility management szolgáltatók mellett vagy helyett is dolgozhatunk: több partnerünknél a takarítás és a recepció a meglévő szolgáltatónál maradt, és csak a műszaki tartalmat vettük át.",
    },
    { type: "h2", text: "Kinek szól?" },
    {
      type: "p",
      text: "Elsősorban azoknak, akiknek az épület nem hobbi, hanem üzleti eszköz: irodaház-tulajdonosoknak és ingatlankezelőknek, ipari és logisztikai létesítmények üzemvezetőinek, kereskedelmi egységek és szállodák műszaki vezetőinek, intézményeknek, valamint társasházi közös képviselőknek. Beruházóknak és generálkivitelezőknek pedig azt kínáljuk, hogy az általunk kivitelezett rendszereket az átadás után is mi visszük tovább — így nem szakad meg a felelősségi lánc.",
    },
  ],
  faq: [
    {
      q: "Mennyibe kerül egy műszaki üzemeltetési szerződés?",
      a: "Az üzemeltetési díj az épület méretétől, a rendszerek számától és a vállalt rendelkezésre állástól függ. Egy irodaháznál jellemzően négyzetméter-alapú havidíjjal dolgozunk, ipari létesítménynél a berendezéslista alapján. Az ajánlat előtt minden esetben ingyenes helyszíni felmérést végzünk, mert díjat felelősen csak a rendszerek tényleges állapotának ismeretében lehet adni.",
    },
    {
      q: "Átvesznek olyan épületet is, amit nem önök építettek?",
      a: "Igen, az esetek többségében ez a helyzet. Ilyenkor átvételi állapotfelméréssel kezdünk: felmérjük a meglévő rendszereket, dokumentáljuk, ami dokumentálatlan, és jelezzük, hol van azonnali beavatkozást igénylő hiányosság. Ez a felmérés az üzemeltetési szerződés alapja is egyben.",
    },
    {
      q: "Mi történik, ha munkaidőn kívül lesz hiba?",
      a: "Szerződéses partnereinknek ügyeleti elérhetőséget biztosítunk. Az SLA-ban rögzítjük, mely hibatípus számít kritikusnak, és ezekre milyen reakcióidőt vállalunk munkaidőben, illetve azon kívül.",
    },
    {
      q: "Csak a gyengeáramot vagy csak az erősáramot is átveszik?",
      a: "Igen, mindkettő külön is kérhető. A tapasztalatunk viszont az, hogy a két terület határán keletkeznek a legmakacsabb hibák — például egy hálózati eszköz azért esik ki ismétlődően, mert a betápláló áramkör terhelése nem megfelelő. Ha mindkettő nálunk van, ezek a hibák nem tudnak a szakágak közé csúszni.",
    },
  ],
};

export const uzemeltetesPages: ServicePage[] = [
  {
    slug: "muszaki-epuletuzemeltetes",
    hub: "uzemeltetes",
    navLabel: "Műszaki épületüzemeltetés",
    icon: "Building2",
    h1: "Műszaki épületüzemeltetés",
    metaTitle: "Műszaki épületüzemeltetés egy partnertől | TEMA",
    metaDescription:
      "Teljes körű műszaki épületüzemeltetés: erős- és gyengeáramú rendszerek felügyelete, tervezett karbantartás, hibaelhárítás és naprakész dokumentáció.",
    keywords: [
      "műszaki épületüzemeltetés",
      "épületüzemeltetés irodaház",
      "létesítményüzemeltetés",
      "technical facility management",
      "épület műszaki üzemeltetés árajánlat",
    ],
    lead: "Egy szerződés, egy kapcsolattartó, egy felelős az épület teljes műszaki működéséért. Nem kell külön villanyszerelőt, hálózatost és biztonságtechnikust koordinálnia.",
    highlights: [
      { value: "0–24", label: "ügyeleti hibabejelentés szerződéses partnereknek" },
      { value: "1 partner", label: "erős- és gyengeáram egy kézben" },
      { value: "Havi", label: "írásos üzemeltetési riport" },
    ],
    body: [
      {
        type: "p",
        text: "A műszaki épületüzemeltetés akkor működik jól, ha a tulajdonosnak vagy az ingatlankezelőnek nem kell műszaki kérdésekben döntenie. A TEMA ezt úgy oldja meg, hogy az épület erős- és gyengeáramú rendszereit egyben veszi át, és a teljes életciklusra felel értük — a felméréstől a karbantartáson át a cseréig.",
      },
      { type: "h2", text: "Hogyan indul az együttműködés?" },
      {
        type: "ol",
        items: [
          "Helyszíni állapotfelmérés. Végigjárjuk az épületet, felvesszük az elosztókat, a gyengeáramú végpontokat, a hálózati aktív eszközöket és az automatizálási rendszereket.",
          "Állapotjelentés és kockázati lista. Írásban megkapja, mi működik jól, mi az, ami rövid időn belül meghibásodik, és mi az, ami már most szabálytalan vagy életveszélyes.",
          "Üzemeltetési koncepció és díjajánlat. Meghatározzuk a karbantartási ciklusokat, a vállalt reakcióidőket és a havidíjat.",
          "Átvétel és dokumentálás. Feltöltjük a hiányzó műszaki dokumentációt, felcímkézzük az elosztókat és a rendezőszekrényeket, felvesszük a rendszereket a karbantartási nyilvántartásba.",
          "Folyamatos üzemeltetés. Ütemterv szerinti karbantartás, hibaelhárítás, havi riport, éves fejlesztési javaslat.",
        ],
      },
      { type: "h2", text: "Mi tartozik bele a szolgáltatásba?" },
      {
        type: "p",
        text: "Az üzemeltetési csomag tartalma minden épületnél testre szabott, de a gerince ugyanaz. Az erősáramú oldalon a villamos hálózat, az elosztóberendezések, a világítás és a szabványossági mérések tartoznak ide. A gyengeáramú oldalon a kamerarendszer, a beléptetés, a kaputelefon, a kaputechnika és a strukturált hálózat működtetése. Emellett kezeljük az épületautomatizálási rendszert, és — ha van — a rendszerek közötti integrációt is.",
      },
      {
        type: "ul",
        items: [
          "Időszakos műszaki bejárás és állapotellenőrzés jegyzőkönyvvel.",
          "Tervezett megelőző karbantartás gyártói előírás és üzemi tapasztalat alapján.",
          "Hibabejelentés fogadása, diagnosztika, javítás vagy szükség esetén csere.",
          "Kisjavítások elvégzése a helyszínen, külön kiszállási díj felszámítása nélkül.",
          "Alkatrész- és eszközbeszerzés kezelése, gyártói garancia érvényesítése.",
          "Naprakész műszaki dokumentáció, karbantartási napló és mérési jegyzőkönyvek.",
          "Havi üzemeltetési riport: elvégzett munkák, nyitott tételek, javaslatok.",
        ],
      },
      {
        type: "callout",
        title: "Miért éri meg egy partnerrel dolgozni?",
        text: "A több szakágas üzemeltetés legnagyobb rejtett költsége a koordináció. Ha a kamerarendszer kiesik, a biztonságtechnikus a hálózatosra mutat, a hálózatos a villanyszerelőre. Amikor mindhárom terület egy szerződés alatt van, nincs hova mutogatni — és nincs hova elveszni a hibának sem.",
      },
      { type: "h2", text: "Milyen épületeknél dolgozunk?" },
      {
        type: "p",
        text: "Irodaházakban, ahol a bérlői elégedettség és a zavartalan működés a tét. Ipari és logisztikai létesítményekben, ahol egy villamos leállás azonnal termeléskiesés. Kereskedelmi ingatlanokban és szállodákban, ahol az üzemeltetés a vendégélmény része. Intézményekben, ahol a szabályosság és a dokumentáltság elsődleges. Társasházakban, ahol a közös képviselőnek kell egy megbízható műszaki háttér. És beruházóknál, akiknek az átadott épületet valakinek tovább kell vinnie.",
      },
      { type: "h2", text: "Átláthatóság: amit mérünk, azt jelentjük" },
      {
        type: "p",
        text: "Minden beavatkozásról írásos nyoma van. A havi riportban látja, hány hibabejelentés érkezett, ezek közül mennyit oldottunk meg a vállalt határidőn belül, milyen karbantartások történtek, és mi az, ami a következő időszakban beruházást igényel. Ez nemcsak a mi munkánk ellenőrzését teszi lehetővé, hanem a tulajdonos felé történő beszámolást és a következő évi műszaki költségvetés tervezését is.",
      },
    ],
    faq: [
      {
        q: "Mi a különbség a műszaki üzemeltetés és a karbantartás között?",
        a: "A karbantartás egy tevékenység: az ütemterv szerinti ellenőrzés és megelőző beavatkozás. A műszaki üzemeltetés ennél tágabb: magában foglalja a karbantartást, de emellett felelősséget jelent a rendszerek folyamatos működéséért, a hibák elhárításáért, a dokumentációért és a fejlesztési javaslatokért is.",
      },
      {
        q: "Hosszú távú szerződéshez kötött a szolgáltatás?",
        a: "Az üzemeltetési szerződéseket jellemzően határozatlan időre, felmondási idővel kötjük, mert az első hónapok az épület megismeréséről szólnak, és ez mindkét fél számára akkor térül meg, ha van folytatás. Eseti javításra és felmérésre azonban szerződés nélkül is vállalunk munkát.",
      },
      {
        q: "Az üzemeltetési díj tartalmazza az alkatrészeket is?",
        a: "A havidíj a munkadíjat, a bejárásokat, a karbantartást és a rendelkezésre állást tartalmazza. Az anyagköltséget és a cserealkatrészeket külön, önköltségen számlázzuk, előzetes egyeztetés után. Az ajánlatban egyértelműen jelöljük, mi van benne és mi nincs.",
      },
      {
        q: "Mennyi idő alatt tudják átvenni az épületet?",
        a: "A helyszíni felmérést jellemzően egy héten belül elvégezzük, az állapotjelentés és az ajánlat további néhány munkanap. Az átvétel maga az épület méretétől függ: egy közepes irodaház esetében két–négy hét, amíg a teljes műszaki nyilvántartás elkészül.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/uzemeltetes/karbantartas",
      "/uzemeltetes/sla-rendelkezesre-allas",
      "/megoldasok/irodahazak",
      "/megoldasok/ingatlankezelok",
    ],
  },

  {
    slug: "villamos-uzemeltetes",
    hub: "uzemeltetes",
    navLabel: "Villamos üzemeltetés",
    icon: "Zap",
    h1: "Villamos üzemeltetés és erősáramú karbantartás",
    metaTitle: "Villamos üzemeltetés, erősáramú karbantartás | TEMA",
    metaDescription:
      "Erősáramú üzemeltetés cégeknek: elosztók karbantartása, érintésvédelmi és szabványossági mérés, hőkamerás vizsgálat, világításkorszerűsítés.",
    // Mért adatok: „ipari villanyszerelés" és „érintésvédelmi felülvizsgálat"
    // a B2B szándékú kifejezések; a puszta „villanyszerelő" (8 100/hó) nagyrészt
    // lakossági és képzés/álláskeresési szándék, ezért nem arra pozicionálunk.
    keywords: [
      "ipari villanyszerelés",
      "villamos üzemeltetés",
      "érintésvédelmi felülvizsgálat",
      "szabványossági felülvizsgálat",
      "erősáramú karbantartás",
      "elosztó karbantartás",
      "csarnok világítás korszerűsítés",
    ],
    lead: "Az erősáramú rendszer az épület keringési rendszere. Ha itt van a baj, minden más is áll — a felvonótól a szerverszobáig.",
    highlights: [
      { value: "Schneider", label: "Electric alapú elosztók és készülékek" },
      { value: "Jegyzőkönyv", label: "minden mérésről és beavatkozásról" },
      { value: "Termográfia", label: "melegedő kötések feltárása üzem közben" },
    ],
    body: [
      {
        type: "p",
        text: "A villamos üzemeltetés célja, hogy az épület erősáramú rendszere biztonságosan, szabványosan és kiszámíthatóan működjön. Ez nem merül ki abban, hogy kicseréljük a kiégett fénycsövet: a hangsúly a rendszerszintű állapoton van — a betápláláson, az elosztóberendezéseken, a védelmi készülékeken és a terhelések egyensúlyán.",
      },
      { type: "h2", text: "Elosztóberendezések karbantartása" },
      {
        type: "p",
        text: "Az elosztó a leggyakoribb hibaforrás és egyben a legritkábban ellenőrzött pont. A karbantartás során átvizsgáljuk a főelosztót és az alelosztókat: ellenőrizzük a csatlakozási pontok meghúzási nyomatékát, a védelmi készülékek működését, a szelektivitást, a nullázás és a földelés állapotát, valamint a szekrény tisztaságát és szellőzését. A meglazult vagy oxidálódott kötések melegedést okoznak — ez a tűzesetek egyik leggyakoribb villamos oka.",
      },
      {
        type: "p",
        text: "A rejtett melegedések feltárására hőkamerás vizsgálatot alkalmazunk üzem közben, terhelés alatt. Így olyan hibát is megtalálunk, ami feszültségmentes állapotban láthatatlan lenne, és jóval a meghibásodás előtt beavatkozhatunk.",
      },
      { type: "h2", text: "Szabványossági és érintésvédelmi mérések" },
      {
        type: "p",
        text: "Az időszakos villamos biztonsági felülvizsgálat nem választható opció, hanem jogszabályi kötelezettség — és baleset vagy tűzeset esetén az első dolog, amit a biztosító és a hatóság kér. Elvégezzük az érintésvédelmi és szabványossági méréseket, a szükséges jegyzőkönyveket kiállítjuk, a feltárt hibákat pedig nem csak listázzuk: javaslatot és árajánlatot adunk a javításukra, majd a javítás után újramérünk.",
      },
      {
        type: "ul",
        items: [
          "Érintésvédelmi felülvizsgálat és mérési jegyzőkönyv.",
          "Szabványossági (tűzvédelmi) villamos felülvizsgálat.",
          "Szigetelési ellenállás és hurokimpedancia mérés.",
          "Áram-védőkapcsolók (Fi-relék) működéspróbája.",
          "Hőkamerás vizsgálat elosztókon és kötéspontokon.",
          "Feltárt hibák javítása és ismételt mérés.",
        ],
      },
      { type: "h2", text: "Világítás és energiafogyasztás" },
      {
        type: "p",
        text: "A világítás a legtöbb irodaházban és ipari csarnokban a villamos fogyasztás jelentős részét adja, ezért itt térül meg leggyorsabban a korszerűsítés. Felmérjük a meglévő világítást, megvizsgáljuk a megvilágítási szinteket, és ahol indokolt, LED-es cserét vagy vezérlési átalakítást javasolunk — jelenlét- és fényerő-érzékelővel, zónázással, időprogrammal. A biztonsági és irányfény-világítás időszakos ellenőrzése és tesztje szintén az üzemeltetés része.",
      },
      { type: "h2", text: "Terhelés, mérés, fogyasztáskövetés" },
      {
        type: "p",
        text: "Ahol több bérlő, több üzem vagy több költséghely osztozik egy betápláláson, ott almérőkkel tehető átláthatóvá a fogyasztás. Kiépítjük az almérő-rendszert, és — ha igény van rá — távleolvasható, adatgyűjtős megoldást is, így a havi elszámolás nem becslés alapján történik. A mért adatokból egyúttal a terhelés egyenetlenségei és a felesleges alapfogyasztás is kiderül.",
      },
      {
        type: "callout",
        title: "Tipikus hiba, amivel találkozunk",
        text: "Bővítéskor a legtöbb épületben az új fogyasztókat a legközelebbi szabad helyre kötik be, nem oda, ahova terhelés szerint kellene. Néhány év alatt így alakul ki az aszimmetrikus terhelés és a folyamatosan melegedő elosztó. A javítás jellemzően nem drága — ha időben derül ki.",
      },
    ],
    faq: [
      {
        q: "Milyen gyakran kötelező az érintésvédelmi felülvizsgálat?",
        a: "A gyakoriságot a létesítmény jellege és besorolása határozza meg; a legtöbb kereskedelmi és irodai környezetben háromévente, egyes ipari és fokozott kockázatú helyeken ennél sűrűbben szükséges. A felméréskor pontosan megmondjuk, az adott épületre milyen ciklus vonatkozik, és nyilvántartjuk a következő esedékességet.",
      },
      {
        q: "Kell-e áramszünet a karbantartáshoz?",
        a: "Az elosztók belső vizsgálatához és a kötések ellenőrzéséhez feszültségmentesítés szükséges, ezt viszont mindig előre egyeztetett időpontban, jellemzően munkaidőn kívül vagy hétvégén végezzük. A hőkamerás vizsgálat és számos mérés üzem közben, leállás nélkül elvégezhető.",
      },
      {
        q: "Miért Schneider Electric?",
        a: "Az elosztóberendezéseknél és a védelmi készülékeknél a hosszú távú alkatrészellátás és a dokumentáltság számít a legtöbbet, mert egy elosztó 20–30 évig szolgál. A Schneider Electric termékcsaládjai ebben megbízhatóak, széles a hazai alkatrész-elérhetőség, és a bővítés évek múlva is megoldható. Meglévő, más gyártójú rendszereket természetesen ugyanúgy üzemeltetünk.",
      },
      {
        q: "Vállalnak eseti hibajavítást szerződés nélkül is?",
        a: "Igen. Eseti kiszállást és javítást szerződés nélkül is vállalunk, a rendelkezésre állási garancia viszont csak üzemeltetési szerződés mellett érvényes.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/tervezes-kivitelezes/erosaram",
      "/uzemeltetes/karbantartas",
      "/uzemeltetes/hibafeltaras-hibaelharitas",
      "/megoldasok/ipari-logisztika",
    ],
  },

  {
    // Kutatási alap: „érintésvédelmi felülvizsgálat" 1 300 keresés/hó,
    // nehézségi pontszám 0 — a teljes kutatás legjobb arányú kifejezése.
    // Korábban csak tudástári cikk célozta, konverziós oldal nem volt rá.
    slug: "erintesvedelmi-felulvizsgalat",
    hub: "uzemeltetes",
    navLabel: "Érintésvédelmi felülvizsgálat",
    icon: "ShieldCheck",
    h1: "Érintésvédelmi és szabványossági felülvizsgálat",
    metaTitle: "Érintésvédelmi felülvizsgálat, mérés | TEMA",
    metaDescription:
      "Érintésvédelmi és szabványossági felülvizsgálat cégeknek, intézményeknek, társasházaknak: mérés, jegyzőkönyv, a feltárt hibák javítása és ismételt mérés.",
    keywords: [
      "érintésvédelmi felülvizsgálat",
      "érintésvédelmi mérés",
      "szabványossági felülvizsgálat",
      "villamos biztonsági felülvizsgálat",
      "érintésvédelmi jegyzőkönyv",
      "tűzvédelmi szabványossági felülvizsgálat",
    ],
    lead: "Az időszakos villamos felülvizsgálat az a kötelezettség, amit a legkönnyebb halogatni — és amit káresemény után elsőként kérnek. Elvégezzük, jegyzőkönyvezzük, és a feltárt hibákat meg is javítjuk.",
    highlights: [
      { value: "Mérés", label: "kalibrált műszerekkel, jogosultsággal" },
      { value: "Javítás", label: "nem csak hibalista, hanem megoldás is" },
      { value: "Nyilvántartás", label: "a következő esedékesség előre jelezve" },
    ],
    body: [
      {
        type: "p",
        text: "A villamos berendezések időszakos biztonsági felülvizsgálata jogszabályi kötelezettség. A gyakorlatban mégis ez az egyik legtöbbször elmulasztott feladat, mert az elmaradása sokáig nem okoz látható problémát — egészen egy tűzesetig, áramütésig, biztosítási eljárásig vagy hatósági ellenőrzésig.",
      },
      { type: "h2", text: "Melyik felülvizsgálatról van szó?" },
      {
        type: "p",
        text: "A gyakorlatban két, egymástól elkülönülő vizsgálatot szoktak összemosni. Az érintésvédelmi (villamos biztonsági) felülvizsgálat azt vizsgálja, hogy meghibásodás esetén nem alakulhat-e ki életveszélyes érintési feszültség. A szabványossági — sokszor tűzvédelmi néven emlegetett — felülvizsgálat pedig arra irányul, hogy a villamos berendezés nem jelent-e tűzveszélyt.",
      },
      {
        type: "p",
        text: "A kettőt jellemzően együtt, egy kiszállással végezzük el: a mérések nagy része átfedésben van, így a leállás is rövidebb és a költség is alacsonyabb.",
      },
      { type: "h2", text: "Mit tartalmaz a vizsgálat?" },
      {
        type: "ul",
        items: [
          "Szemrevételezés: burkolatok épsége, feliratozás, szabad hozzáférés, nyilvánvaló szabálytalanságok.",
          "Védővezető folytonosságának ellenőrzése.",
          "Szigetelési ellenállás mérése.",
          "Hurokimpedancia mérése és a védelmi készülék kioldásának ellenőrzése.",
          "Áram-védőkapcsolók (Fi-relék) kioldási áramának és idejének mérése.",
          "Földelési ellenállás mérése, ahol ez értelmezhető.",
          "Mérési jegyzőkönyv kiállítása, a feltárt hiányosságok súlyosság szerinti besorolásával.",
        ],
      },
      { type: "h2", text: "Milyen gyakran kötelező?" },
      {
        type: "p",
        text: "A ciklust a létesítmény jellege és besorolása határozza meg, ezért egyetlen számmal nem válaszolható meg. Az általános irányok:",
      },
      {
        type: "table",
        head: ["Környezet", "Jellemző gyakoriság"],
        rows: [
          ["Irodai, kereskedelmi, nem fokozott kockázatú", "Jellemzően háromévente"],
          ["Fokozott kockázatú, robbanásveszélyes, ipari", "Ennél sűrűbben"],
          ["Kéziszerszámok, hordozható berendezések", "Lényegesen rövidebb, akár éves ciklus"],
          ["Átalakítás, bővítés, jelentős javítás után", "Soron kívül, az utolsó vizsgálattól függetlenül"],
        ],
      },
      {
        type: "callout",
        title: "Amit a legtöbbször találunk",
        text: "Nem hiányzó földelést vagy rossz Fi-relét, hanem dokumentálatlan bővítést: az évek során az elosztóhoz kötött új áramköröket, amelyek nem szerepelnek semmilyen rajzon, nincsenek feliratozva, és amelyeknél a kábelkeresztmetszet és a védelem összhangját soha nem ellenőrizte senki.",
      },
      { type: "h2", text: "Ami a legtöbb szolgáltatónál kimarad: a javítás" },
      {
        type: "p",
        text: "A felülvizsgálat önmagában csak egy dokumentum. Ha a jegyzőkönyv hibákat tár fel, azokat javítani kell — különben a vizsgálat épp az ellenkezőjét bizonyítja annak, amit szeretnénk: azt, hogy az üzemeltető tudott a hibáról, és nem tett ellene semmit.",
      },
      {
        type: "p",
        text: "Ezért nálunk a felülvizsgálat nem ér véget a jegyzőkönyvvel. A feltárt hiányosságokra árajánlatot adunk, a javítást elvégezzük, majd az érintett szakaszt ismételten bemérjük, és ezt is dokumentáljuk. Így a mappában nem egy hibalista lesz, hanem egy lezárt ügy.",
      },
      { type: "h2", text: "Nyilvántartás és határidőfigyelés" },
      {
        type: "p",
        text: "Üzemeltetési szerződéssel rendelkező partnereinknél nyilvántartjuk a következő esedékességet, és előre jelezzük, mielőtt lejárna. Több telephely esetén ez különösen fontos: tapasztalatunk szerint a felülvizsgálatok nem azért maradnak el, mert valaki nem akarja elvégeztetni, hanem mert senki nem tartja számon, mikor esedékes.",
      },
    ],
    faq: [
      {
        q: "Ki végezheti el a felülvizsgálatot?",
        a: "Csak megfelelő szakképesítéssel és érvényes jogosultsággal rendelkező szakember, kalibrált műszerekkel. A jegyzőkönyvnek tartalmaznia kell a vizsgáló azonosítását és a használt műszerek adatait — enélkül a dokumentum nem fogadható el.",
      },
      {
        q: "Kell hozzá áramszünet?",
        a: "A mérések egy részéhez igen. Ezt előre egyeztetett időpontban, jellemzően munkaidőn kívül vagy hétvégén végezzük, hogy a működést ne zavarja. A szemrevételezés és több mérés üzem közben is elvégezhető.",
      },
      {
        q: "Mennyi ideig érvényes a jegyzőkönyv?",
        a: "A következő esedékes vizsgálat időpontjáig, feltéve, hogy a berendezésen közben nem történt olyan átalakítás vagy bővítés, ami soron kívüli vizsgálatot tesz szükségessé.",
      },
      {
        q: "Mi történik, ha életveszélyes hibát találnak?",
        a: "Ilyenkor a helyszínen jelezzük, és ha indokolt, az érintett áramkört üzemen kívül helyezzük. Ez kellemetlen, de a felülvizsgálat éppen ezért van. A javításra azonnal ajánlatot adunk, hogy a működés a lehető leghamarabb helyreálljon.",
      },
      {
        q: "Társasháznak is kötelező?",
        a: "A közös tulajdonban lévő villamos berendezésekre — lépcsőházi hálózat, főelosztó, közös helyiségek — igen. A lakáson belüli hálózat a tulajdonos felelőssége. Társasházaknál jellemzően a közös képviselő rendeli meg, és a közgyűlés elé vihető, tételes ajánlatot adunk hozzá.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/uzemeltetes/villamos-uzemeltetes",
      "/uzemeltetes/karbantartas",
      "/tudastar/erintesvedelmi-felulvizsgalat-gyakorisag",
      "/megoldasok/tarsashazak",
    ],
  },

  {
    slug: "gyengearamu-rendszerek-uzemeltetese",
    hub: "uzemeltetes",
    navLabel: "Gyengeáramú rendszerek üzemeltetése",
    icon: "Cctv",
    h1: "Gyengeáramú rendszerek üzemeltetése",
    metaTitle: "Gyengeáramú rendszerek üzemeltetése | TEMA",
    metaDescription:
      "Kamerarendszer, beléptetés, kaputelefon és hálózat üzemeltetése: rögzítés ellenőrzése, jogosultságkezelés, szoftverfrissítés, hibaelhárítás.",
    keywords: [
      "gyengeáramú rendszerek üzemeltetése",
      "kamerarendszer karbantartás",
      "beléptető rendszer üzemeltetés",
      "biztonságtechnikai karbantartás",
      "kamerarendszer felülvizsgálat",
    ],
    lead: "A gyengeáramú rendszer az a fajta beruházás, amiről mindenki azt hiszi, hogy működik — egészen addig, amíg vissza nem kellene nézni egy felvételt.",
    highlights: [
      { value: "Hikvision", label: "kamera, beléptetés, kaputelefon" },
      { value: "Ellenőrzött", label: "rögzítési idő és felvételminőség" },
      { value: "Naprakész", label: "belépési jogosultságok és kártyalista" },
    ],
    body: [
      {
        type: "p",
        text: "A gyengeáramú rendszerek üzemeltetése azért különleges feladat, mert a hibáik nagy része néma. Egy kamera hetekig küldhet képet úgy, hogy közben a rögzítés nem működik. Egy beléptetőrendszerben évekig bent maradhat egy régen kilépett munkatárs kártyája. Egy hálózati switch túlmelegedhet a rendezőszekrényben, mielőtt bárki észrevenné. Ezeket csak rendszeres, célzott ellenőrzéssel lehet elkapni.",
      },
      { type: "h2", text: "Kamerarendszer üzemeltetése" },
      {
        type: "p",
        text: "A kamerarendszer karbantartása során nem elég ránézni a képre. Ellenőrizzük a tényleges rögzítési időt és azt, hogy megfelel-e az adatkezelési szabályzatban vállaltnak, teszteljük a visszakeresést, megvizsgáljuk a rögzítő tárolóinak állapotát (a merevlemezek folyamatos írás mellett kopó alkatrészek), és felülvizsgáljuk az éjszakai képminőséget, amikor a legtöbb kameránál a valódi különbség kiderül. Szükség szerint tisztítjuk a kupolákat, korrigáljuk az elállítódott látószöget és frissítjük a firmware-t.",
      },
      {
        type: "ul",
        items: [
          "Élőkép és rögzítés ellenőrzése kameránként, nem csak mintavételesen.",
          "Tárolókapacitás és tényleges megőrzési idő ellenőrzése.",
          "Merevlemezek állapotvizsgálata, proaktív csere a meghibásodás előtt.",
          "Éjszakai és ellenfényes képminőség vizsgálata.",
          "Firmware- és szoftverfrissítés, biztonsági beállítások felülvizsgálata.",
          "Optika tisztítása, rögzítés és látószög korrekciója.",
          "Távoli elérés és értesítések működésének tesztelése.",
        ],
      },
      { type: "h2", text: "Beléptetőrendszer üzemeltetése" },
      {
        type: "p",
        text: "A beléptetés üzemeltetésének súlypontja nem a hardver, hanem a jogosultságkezelés. Rendszeres időközönként átnézzük a felhasználói listát, kiszűrjük a már nem aktív kártyákat, ellenőrizzük a zónabeosztást és az időprofilokat. Emellett teszteljük a fizikai elemeket is: a zárak, mágneszárak és nyitóérzékelők mechanikai kopását, a menekülési útvonalak vészkinyitásának működését, valamint a szünetmentes áramellátás akkumulátorait.",
      },
      { type: "h2", text: "Hálózat és rendezőszekrény" },
      {
        type: "p",
        text: "A gyengeáramú rendszerek ma szinte kivétel nélkül IP-alapúak, ezért a hálózat állapota közvetlenül meghatározza a kamerák és a beléptetés megbízhatóságát. Ellenőrizzük a switchek terhelését és hőmérsékletét, a PoE-táplálás tartalékát, az optikai és réz gerincszakaszok állapotát, a rendezőszekrény szellőzését és rendezettségét, valamint a szünetmentes tápegységek kapacitását. Ahol a dokumentáció hiányos, kábeljelölést és nyomvonalrajzot készítünk.",
      },
      {
        type: "callout",
        title: "Adatvédelmi szempont",
        text: "A kamerarendszer személyes adatot kezel. Az üzemeltetés során ellenőrizzük, hogy a tényleges megőrzési idő, a kamerák látószöge és a hozzáférési jogosultságok összhangban vannak-e az adatkezelési tájékoztatóval. Ez egy hatósági vizsgálat vagy munkavállalói panasz esetén válik igazán fontossá.",
      },
      { type: "h2", text: "Kaputelefon és kaputechnika" },
      {
        type: "p",
        text: "A kaputelefon és a kaputechnika a mindennapi használat miatt a leggyorsabban kopó gyengeáramú elem. Az üzemeltetés része a beszédminőség és a kameraképek ellenőrzése, a hívásátirányítások és mobilos elérés tesztje, a zárfogadó és nyitószerkezetek beállítása, valamint a sorompók és kapumozgatók biztonsági érzékelőinek vizsgálata — utóbbi baleset-megelőzési szempontból is lényeges.",
      },
    ],
    faq: [
      {
        q: "Milyen gyakran kell karbantartani egy kamerarendszert?",
        a: "Kereskedelmi és irodai környezetben évente kétszeri ellenőrzés a bevált gyakorlat, ipari vagy szennyezett környezetben (por, pára, hegesztés) negyedévente. A rögzítés meglétét és a tárolási időt viszont ennél sűrűbben, akár havonta érdemes ellenőrizni, mert ez a leggyakoribb néma hiba.",
      },
      {
        q: "Más által telepített rendszert is átvesznek üzemeltetésre?",
        a: "Igen. Ilyenkor első lépésként állapotfelmérést végzünk, és rögzítjük, mi az, ami korlátozottan tartható karban — például már nem támogatott rögzítő vagy elavult vezérlő esetén. Ezt előre jelezzük, nem az első hibánál.",
      },
      {
        q: "Meg tudják oldani a több telephely központi felügyeletét?",
        a: "Igen. Több telephely esetén központosított rögzítést és felügyeleti felületet alakítunk ki, ahol egy helyről látható minden helyszín állapota. Ez a hibák észlelését is gyorsítja, mert nem a helyszíni személyzet bejelentésére kell várni.",
      },
      {
        q: "Mennyi ideig kell megőrizni a kamerafelvételeket?",
        a: "A megőrzési időt az adatkezelő határozza meg a célhoz kötöttség elve alapján, és az adatkezelési tájékoztatóban rögzíti. A rendszert ehhez méretezzük: ellenőrizzük, hogy a tárolókapacitás valóban elegendő-e a vállalt időtartamhoz, mert a gyakorlatban ez a két szám sokszor nincs összhangban.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/rendszerek/kamerarendszerek",
      "/rendszerek/beleptetes",
      "/tervezes-kivitelezes/gyengearam",
      "/uzemeltetes/sla-rendelkezesre-allas",
    ],
  },

  {
    slug: "karbantartas",
    hub: "uzemeltetes",
    navLabel: "Karbantartás",
    icon: "Wrench",
    h1: "Tervezett megelőző karbantartás",
    metaTitle: "Karbantartási szerződés épületekre | TEMA",
    metaDescription:
      "Tervezett megelőző karbantartás ütemterv szerint: villamos rendszerek, kamera, beléptetés, hálózat és automatizálás. Jegyzőkönyv, fix havidíj.",
    keywords: [
      "karbantartási szerződés",
      "megelőző karbantartás",
      "tervszerű megelőző karbantartás",
      "épület karbantartás cég",
      "karbantartási ütemterv",
    ],
    lead: "A megelőző karbantartás nem költség, hanem a legolcsóbb hibajavítás — az, amelyiket még a hiba előtt végezzük el.",
    highlights: [
      { value: "Éves", label: "karbantartási ütemterv, előre látható időpontokkal" },
      { value: "Írásos", label: "jegyzőkönyv minden elvégzett munkáról" },
      { value: "Fix", label: "havidíj, kiszámítható műszaki költségvetés" },
    ],
    body: [
      {
        type: "p",
        text: "A karbantartásnak két útja van. Az egyik a reaktív: megvárjuk, amíg elromlik, aztán sürgősséggel, drágán, gyakran leállás mellett javítjuk. A másik a tervezett megelőző karbantartás: ütemterv szerint, előre egyeztetett időpontban, üzemi terhelés nélkül. A második olcsóbb, de csak akkor, ha valóban rendszeresen megtörténik — ezért kötjük szerződésbe.",
      },
      { type: "h2", text: "Így épül fel a karbantartási ütemterv" },
      {
        type: "p",
        text: "Az ütemtervet az épület rendszereihez igazítjuk. Minden berendezéshez hozzárendeljük a gyártói előírásból, a jogszabályi kötelezettségből és a saját üzemi tapasztalatunkból adódó ciklust, majd ezekből éves naptárt készítünk. Így előre látja, mikor melyik rendszernél lesz munkavégzés, és a bérlőket, dolgozókat vagy vendégeket időben tudja tájékoztatni.",
      },
      {
        type: "table",
        head: ["Rendszer", "Tipikus ciklus", "Fő tartalom"],
        rows: [
          [
            "Elosztóberendezések",
            "Évente",
            "Kötések ellenőrzése, hőkamerás vizsgálat, védelmi készülékek tesztje",
          ],
          [
            "Érintésvédelem / szabványosság",
            "Jogszabály szerint",
            "Mérés, jegyzőkönyv, feltárt hibák javítása",
          ],
          [
            "Kamerarendszer",
            "Félévente",
            "Rögzítés és tárolás ellenőrzése, optika tisztítása, firmware",
          ],
          [
            "Beléptetés",
            "Félévente",
            "Jogosultságok felülvizsgálata, zárak, akkumulátorok, vésznyitás",
          ],
          [
            "Hálózat, rendezőszekrény",
            "Évente",
            "Switchek terhelése, PoE tartalék, szellőzés, kábelrendezés",
          ],
          [
            "Épületautomatizálás",
            "Évente",
            "Vezérlési logika, szenzorok, időprogramok, szoftverfrissítés",
          ],
          [
            "Szünetmentes tápegységek",
            "Évente",
            "Akkumulátor kapacitásteszt, áthidalási idő ellenőrzése",
          ],
        ],
      },
      { type: "h2", text: "Mi történik egy karbantartási alkalommal?" },
      {
        type: "ol",
        items: [
          "Előzetes egyeztetés az időpontról és a szükséges hozzáférésekről.",
          "Az ütemtervben szereplő ellenőrzések és mérések elvégzése.",
          "Kisjavítások azonnali elvégzése — ami a helyszínen megoldható, azt megoldjuk.",
          "Jegyzőkönyv készítése: mit ellenőriztünk, mit találtunk, mit javítottunk.",
          "Ha nagyobb beavatkozás szükséges: írásos javaslat és árajánlat, sürgősségi besorolással.",
        ],
      },
      {
        type: "callout",
        title: "Amit a jegyzőkönyv ér",
        text: "Egy káresemény, biztosítási eljárás vagy hatósági ellenőrzés során az első kérdés az, hogy volt-e karbantartás, és van-e róla dokumentum. A rendszeres, jegyzőkönyvezett karbantartás nem csak műszakilag, jogilag is védi a tulajdonost és az üzemeltetőt.",
      },
      { type: "h2", text: "Mit ad a szerződéses karbantartás azon felül, hogy időben megtörténik?" },
      {
        type: "ul",
        items: [
          "Ismerjük az épületet. Nem kell minden hibánál elölről kezdeni a felderítést.",
          "Előrejelezhető költség. A havidíj tervezhető, a nagyobb beruházások előre jelezve érkeznek.",
          "Elsőbbség hibabejelentésnél. A szerződéses partnerek kiszolgálása megelőzi az eseti munkákat.",
          "Kedvezőbb javítási óradíj és anyagbeszerzés a szerződés keretében.",
          "Gyártói garancia megőrzése — több eszköznél a garancia feltétele a dokumentált karbantartás.",
        ],
      },
    ],
    faq: [
      {
        q: "Mit tartalmaz pontosan a karbantartási szerződés?",
        a: "A szerződés melléklete tételesen felsorolja a karbantartott rendszereket, a ciklusidőket, az elvégzendő ellenőrzéseket és a vállalt reakcióidőket. Ezt a felmérés után, az adott épületre szabva állítjuk össze — nem sablonos csomagokat árulunk.",
      },
      {
        q: "A karbantartás zavarja a napi működést?",
        a: "A munkák nagy része üzem közben, észrevétlenül elvégezhető. Ahol feszültségmentesítés vagy rendszerleállás szükséges, ott előre egyeztetett időpontot keresünk — jellemzően munkaidőn kívül, hétvégén vagy éjszaka.",
      },
      {
        q: "Több telephelyre is köthető egy szerződés?",
        a: "Igen, és ez általában kedvezőbb is. Több telephely esetén egységes ütemtervet és közös riportot készítünk, így a műszaki állapot telephelyenként összehasonlíthatóvá válik.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/uzemeltetes/muszaki-epuletuzemeltetes",
      "/uzemeltetes/villamos-uzemeltetes",
      "/uzemeltetes/sla-rendelkezesre-allas",
      "/garancialis-feltetelek",
    ],
  },

  {
    slug: "hibafeltaras-hibaelharitas",
    hub: "uzemeltetes",
    navLabel: "Hibafeltárás és hibaelhárítás",
    icon: "SearchCheck",
    h1: "Hibafeltárás és hibaelhárítás",
    metaTitle: "Villamos hibaelhárítás, azonnali kiszállás | TEMA",
    metaDescription:
      "Villamos hibaelhárítás és műszeres hibafeltárás cégeknek Budapesten: zárlatkeresés, hőkamerás vizsgálat, hálózati diagnosztika. Ügyeleti elérhetőség 0–24.",
    // Mért adatok: a sürgősségi szándék a legfizetőképesebb csoport —
    // „villanyszerelő budapest" 1 000/hó CPC 8,22 USD, „sos villanyszerelő" 210
    // CPC 8,20, „villanyszerelő azonnal" 260 CPC 7,23, „villanyszerelő 0-24" 320.
    keywords: [
      "villamos hibaelhárítás",
      "azonnali villanyszerelő",
      "villanyszerelő 0-24",
      "sürgős villanyszerelő Budapest",
      "hibafeltárás",
      "zárlatkeresés",
      "hőkamerás vizsgálat",
      "kábelhiba keresés",
    ],
    lead: "A legtöbb visszatérő hibát nem azért nem sikerül megjavítani, mert nehéz — hanem mert soha nem a valódi okot keresték meg.",
    highlights: [
      { value: "Műszeres", label: "diagnosztika találgatás helyett" },
      { value: "Ok-elemzés", label: "nem csak a tünetet szüntetjük meg" },
      { value: "Írásos", label: "hibajelentés és javaslat" },
    ],
    body: [
      {
        type: "p",
        text: "Az ismétlődő hiba mindig drágább, mint az egyszeri. Ha egy áramkör havonta kiold, egy kamera hetente kiesik, vagy a hálózat naponta megakad néhány percre, akkor a probléma nem a cserélt alkatrészben van. Az ilyen hibákhoz módszeres feltárás kell: mérés, adatgyűjtés, és a valódi kiváltó ok megtalálása.",
      },
      { type: "h2", text: "Milyen hibákkal keresnek meg leggyakrabban?" },
      {
        type: "ul",
        items: [
          "Ismétlődően kioldó kismegszakító vagy áram-védőkapcsoló.",
          "Melegedő elosztó, égett szag, elszíneződött kötés.",
          "Feszültségingadozás, villódzó világítás, elektronikák véletlenszerű újraindulása.",
          "Kamerák időszakos kiesése, hiányzó felvételszakaszok.",
          "Beléptetőrendszer, amely alkalmanként nem nyit vagy nem zár.",
          "Hálózati megszakadások, lassulás, PoE-eszközök váratlan újraindulása.",
          "Ismeretlen nyomvonalú, dokumentálatlan kábel, amit be kell azonosítani.",
        ],
      },
      { type: "h2", text: "Hogyan dolgozunk?" },
      {
        type: "ol",
        items: [
          "Tényfelvétel. Mikor, milyen körülmények között jelentkezik a hiba? A pontos mintázat sokszor önmagában megmutatja az irányt.",
          "Mérés és megfigyelés. Hőkamera, lakatfogó, hálózati analizátor, kábelnyomkövető, szükség esetén több napos adatgyűjtés.",
          "Az ok azonosítása. Elkülönítjük a tünetet a kiváltó októl — például a kioldás nem hiba, hanem egy túlterhelt vagy nedvességet kapott szakasz jelzése.",
          "Javítás és ellenőrzés. A javítás után újramérünk és igazoljuk, hogy a hiba valóban megszűnt.",
          "Írásos hibajelentés. Rögzítjük, mi volt az ok, mit végeztünk el, és mit javaslunk a megismétlődés elkerülésére.",
        ],
      },
      { type: "h2", text: "Diagnosztikai eszközök, amelyeket bevetünk" },
      {
        type: "p",
        text: "A hőkamerás vizsgálat terhelés alatt mutatja meg a melegedő kötéseket és a túlterhelt vezetékszakaszokat. A hálózati diagnosztika a csomagvesztést, a hibás kábelezést és a switch-portok hibaszámlálóit tárja fel — ezekből derül ki a legtöbb „kiesik a kamera” típusú panasz oka. A kábelnyomkövetés és a vezetékazonosítás dokumentálatlan épületeknél nélkülözhetetlen. Ahol az áramminőség gyanús, ott hálózati analizátorral több napos mérést végzünk.",
      },
      {
        type: "callout",
        title: "Sürgős hibája van?",
        text: "Ha az épületben most áll valami, jelezze a hibabejelentő űrlapon vagy telefonon. A bejelentéshez elég a helyszín, a hiba rövid leírása és egy elérhetőség — a többit a helyszínen tisztázzuk.",
      },
      { type: "h2", text: "Azonnali kiszállás és ügyelet" },
      {
        type: "p",
        text: "Van, amikor nincs idő diagnosztikára: ha egy szinten nincs áram, ha a beléptetés leállt, vagy ha égett szagot érezni, akkor a működés helyreállítása az első. Ilyen esetekre üzemeltetési szerződéssel rendelkező partnereinknek 0–24 órás ügyeleti elérhetőséget biztosítunk, az SLA-ban rögzített reakcióidővel — nem ígéret alapon, hanem szerződésben vállalva.",
      },
      {
        type: "p",
        text: "Szerződés nélkül is fogadunk sürgős bejelentést Budapesten és Pest vármegyében; ilyenkor a kiszállást a szabad kapacitás függvényében szervezzük, és a bejelentéskor őszintén megmondjuk, mikorra tudunk érkezni. Amit nem csinálunk: nem vállalunk olyan határidőt, amit nem tudunk tartani.",
      },
      {
        type: "callout",
        title: "Mit tegyen a kiszállásig?",
        text: "Ha égett szagot érez vagy melegedést tapasztal, kapcsolja le az érintett áramkört a kismegszakítóval, és ne kapcsolja vissza. Ha egy áram-védőkapcsoló old ki ismételten, ne kösse ki és ne hidalja át — ez a védelem, ami éppen a bajt jelzi. A telefonos bejelentésnél segít, ha meg tudja mondani, melyik elosztóban és melyik biztosítéknál jelentkezik a hiba.",
      },
      { type: "h2", text: "Mi történik, ha a hiba oka egy korábbi rossz kivitelezés?" },
      {
        type: "p",
        text: "Ez gyakoribb, mint gondolná. Ilyenkor őszintén megmondjuk, és két utat kínálunk: egy azonnali, tüneti megoldást, hogy a működés helyreálljon, valamint egy javaslatot a végleges rendezésre — árral, ütemezéssel, prioritással. A döntés az Öné; a mi feladatunk, hogy a döntéshez legyen elég információja.",
      },
    ],
    faq: [
      {
        q: "Mennyi idő alatt tudnak kiszállni?",
        a: "Üzemeltetési szerződéssel rendelkező partnereinknek az SLA-ban rögzített reakcióidőn belül. Szerződés nélküli, eseti bejelentésnél a kiszállást a szabad kapacitás függvényében szervezzük, sürgős esetben igyekszünk aznap vagy másnap érkezni.",
      },
      {
        q: "Mibe kerül a hibafeltárás, ha nem találnak hibát?",
        a: "A diagnosztika munkaidő-alapon díjazott, függetlenül az eredménytől — a mérés akkor is értékes információ, ha kizár egy okot. A kiszállás előtt megmondjuk a várható időigényt és óradíjat, hogy ne érje meglepetés.",
      },
      {
        q: "Más cég által telepített rendszerhez is hívhatjuk önöket?",
        a: "Igen, gyakran pont ez a helyzet. Ilyenkor a hibajelentésben azt is rögzítjük, ha a hiba oka kivitelezési hiányosság — ez adott esetben garanciális igény érvényesítéséhez is felhasználható.",
      },
      {
        q: "Ki tudják deríteni, hol fut egy fal mögötti kábel?",
        a: "Igen, kábelnyomkövető műszerrel a legtöbb esetben azonosítható a nyomvonal és a szakadás helye is. Ez jelentősen csökkenti a bontás mértékét a javításnál.",
      },
    ],
    ctaVariant: "hibabejelentes",
    related: [
      "/uzemeltetes/villamos-uzemeltetes",
      "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
      "/uzemeltetes/sla-rendelkezesre-allas",
      "/kapcsolat",
    ],
  },

  {
    slug: "sla-rendelkezesre-allas",
    hub: "uzemeltetes",
    navLabel: "SLA és rendelkezésre állás",
    icon: "Timer",
    h1: "SLA és rendelkezésre állás",
    metaTitle: "SLA és garantált reakcióidő | TEMA",
    metaDescription:
      "Mérhető szolgáltatási szint az üzemeltetésben: hibaosztályok, garantált reakció- és elhárítási idők, ügyeleti elérhetőség, havi teljesítményriport.",
    keywords: [
      "SLA szerződés",
      "rendelkezésre állás",
      "garantált reakcióidő",
      "üzemeltetési SLA",
      "hibaelhárítási idő",
    ],
    lead: "Az „igyekszünk gyorsan kimenni” nem szolgáltatási szint. Az SLA az, ami számonkérhetővé teszi az üzemeltetőt — minket is.",
    highlights: [
      { value: "3", label: "hibaosztály, eltérő reakcióidővel" },
      { value: "0–24", label: "ügyeleti bejelentés kritikus hibára" },
      { value: "Havi", label: "teljesítményriport, mért adatokkal" },
    ],
    body: [
      {
        type: "p",
        text: "A rendelkezésre állási megállapodás (SLA, Service Level Agreement) az üzemeltetési szerződés azon része, amely számokban rögzíti, mire számíthat. Meghatározza, mi számít hibának, hogyan kell bejelenteni, mennyi idő alatt reagálunk, és mennyi idő alatt kell helyreállnia a működésnek. Enélkül az üzemeltetés minősége megítélés kérdése; ezzel mérhető.",
      },
      { type: "h2", text: "Hibaosztályok" },
      {
        type: "p",
        text: "Nem minden hiba egyforma sürgősségű, és félrevezető lenne mindegyikre ugyanazt vállalni. Ezért a bejelentéseket három osztályba soroljuk, és mindegyikhez külön reakció- és elhárítási időt rendelünk. A besorolás elveit a szerződésben rögzítjük, hogy ne utólagos vita legyen belőle.",
      },
      {
        type: "table",
        head: ["Hibaosztály", "Mit jelent", "Tipikus példa"],
        rows: [
          [
            "Kritikus",
            "Az épület vagy egy fő funkció működésképtelen, biztonsági kockázat áll fenn",
            "Áramkimaradás egy szinten, teljes beléptetés-leállás, füst- vagy égésszag",
          ],
          [
            "Súlyos",
            "A működés korlátozott, de nem áll le; érdemi kényelmetlenség vagy kockázat",
            "Kamerarendszer rögzítése nem működik, egy zóna világítása kiesett",
          ],
          [
            "Normál",
            "Egyedi meghibásodás, a működést érdemben nem akadályozza",
            "Egy kaputelefon-állomás hibája, egyedi lámpatest csere",
          ],
        ],
      },
      {
        type: "p",
        text: "A konkrét reakció- és elhárítási időket az épület jellege és a kockázatai alapján határozzuk meg. Egy 0–24 órában működő logisztikai központnál más számok indokoltak, mint egy hivatali időben használt irodaházban — és nem is szeretnénk olyat vállalni, ami az adott helyszínen nem tartható.",
      },
      { type: "h2", text: "Reakcióidő és elhárítási idő — nem ugyanaz" },
      {
        type: "p",
        text: "A reakcióidő az, amennyi időn belül a bejelentés után érdemben foglalkozni kezdünk a hibával: visszaigazoljuk, elkezdjük a távdiagnosztikát vagy elindulunk a helyszínre. Az elhárítási idő az, amennyi idő alatt a működés helyreáll. Fontos különbség, hogy az elhárítási idő nem mindig rajtunk múlik — egy speciális, beszerzendő alkatrésznél reális köztes állapot az ideiglenes műszaki megoldás. Az SLA ezt is szabályozza.",
      },
      { type: "h2", text: "Hogyan lehet hibát bejelenteni?" },
      {
        type: "ul",
        items: [
          "Telefonon, munkaidőben és ügyeleti időben egyaránt.",
          "E-mailben, ha a hiba nem sürgős és dokumentálni szeretné.",
          "A weboldal hibabejelentő űrlapján, amely azonnal rögzíti a bejelentést.",
        ],
      },
      {
        type: "p",
        text: "Minden bejelentés azonosítót kap, és a lezárásig nyomon követhető. A havi riportban visszamenőleg is látszik, mikor érkezett, mikor reagáltunk, és mikor zárult a hibajegy.",
      },
      {
        type: "callout",
        title: "Amit az SLA nem old meg",
        text: "Az SLA nem helyettesíti a karbantartást. Ha egy épület rendszerei elhanyagolt állapotban vannak, a szoros reakcióidő csak azt jelenti, hogy gyorsabban érkezünk a következő hibához. A rendelkezésre állás valódi növelése mindig a megelőzésnél kezdődik.",
      },
      { type: "h2", text: "Riportálás és felülvizsgálat" },
      {
        type: "p",
        text: "Havonta írásos riportot adunk: hány bejelentés érkezett hibaosztályonként, mennyi teljesült a vállalt időn belül, milyen karbantartások történtek, és mi maradt nyitva. Évente közösen felülvizsgáljuk az SLA-t: ha egy hibatípus rendszeresen ismétlődik, az nem szigorúbb határidőt kíván, hanem műszaki beavatkozást — ezt is a riport adataiból javasoljuk.",
      },
    ],
    faq: [
      {
        q: "Van kötbér, ha nem tartják a vállalt reakcióidőt?",
        a: "A szerződésben rögzíthetünk a nem teljesítéshez kötött díjcsökkentést vagy kötbért. Ezt korrektnek tartjuk: ha mérhető szolgáltatást ígérünk, akkor a mérésnek következménye is legyen.",
      },
      {
        q: "Ügyeleti időben is ugyanaz a reakcióidő?",
        a: "Kritikus hibára jellemzően igen, ez az ügyelet lényege. Súlyos és normál besorolású hibáknál az ügyeleti időben tett bejelentést a következő munkanapon kezdjük kezelni, kivéve ha ezt külön másképp rögzítjük.",
      },
      {
        q: "Hogyan mérik, hogy tartják-e az SLA-t?",
        a: "Minden bejelentést hibajegyként rögzítünk időbélyeggel: mikor érkezett, mikor igazoltuk vissza, mikor kezdődött és mikor zárult a beavatkozás. A havi riport ezekből az adatokból készül, tehát nem emlékezet alapján.",
      },
      {
        q: "Kell-e SLA egy kisebb társasháznak?",
        a: "Egyszerűsített formában érdemes. Egy társasháznál általában elég két hibaosztály és egy világos ügyeleti szabály — a lényeg, hogy a lakók és a közös képviselő tudják, mire számíthatnak, és ne minden hiba minősüljön vészhelyzetnek.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/uzemeltetes/muszaki-epuletuzemeltetes",
      "/uzemeltetes/karbantartas",
      "/uzemeltetes/hibafeltaras-hibaelharitas",
      "/megoldasok/ingatlankezelok",
    ],
  },
];
