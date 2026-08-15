import type { HubPage, ServicePage } from "./types";

export const projektekHub: HubPage = {
  key: "projektek",
  slug: "/projektek",
  h1: "Generálkivitelezés és műszaki projektmenedzsment",
  metaTitle: "Generálkivitelezés Budapest | TEMA Menedzsment",
  metaDescription:
    "Generálkivitelezés Budapesten és Pest vármegyében: építőmesteri munkák, gépészet, villamosság, burkolás, festés — minden szakág egy szerződésben.",
  keywords: [
    "generálkivitelezés",
    "generálkivitelező Budapest",
    "teljes körű kivitelezés",
    "kulcsrakész kivitelezés",
    "felújítás kivitelezés",
    "műszaki projektmenedzsment",
  ],
  lead: "Generálkivitelezőként a teljes építési feladatot visszük: az építőmesteri munkáktól a gépészeten és a villamosságon át a burkolásig és a festésig. Egy szerződés, egy határidő, egy felelős — Önnek nem kell tíz szakiparral egyeztetnie.",
  intro: [
    {
      type: "p",
      text: "A generálkivitelezés lényege, hogy a megrendelő egyetlen szerződést köt, és a kész, működő eredményt veszi át. Nem neki kell kőművest, gépészt, villanyszerelőt, burkolót, festőt és asztalost keresnie, majd összehangolnia őket — ez a mi feladatunk, és ez az, amiért a felelősség is nálunk marad.",
    },
    {
      type: "p",
      text: "Ez különbözteti meg a generálkivitelezést a szakági vállalkozástól. A szakági kivitelező a saját munkájáért felel; ha a burkoló a még be nem húzott kábel fölé dolgozik, az nem az ő gondja. A generálkivitelező viszont a teljes műszaki tartalomért felel, beleértve azt is, hogy a szakágak a megfelelő sorrendben és a megfelelő időben dolgozzanak.",
    },
    { type: "h2", text: "Milyen szakágakat viszünk?" },
    {
      type: "p",
      text: "Teljes körű kivitelezésnél a teljes műszaki tartalmat vállaljuk. Saját szakembereink az erős- és gyengeáramú, valamint az épületautomatizálási munkákat végzik — ez a cég szakmai magja —, a többi szakágat pedig bevizsgált, hosszú ideje velünk dolgozó alvállalkozói körrel valósítjuk meg, a mi koordinációnk és minőségellenőrzésünk mellett.",
    },
    {
      type: "ul",
      items: [
        "Építőmesteri munkák: bontás, falazás, vakolás, aljzatkészítés, szerkezetépítés.",
        "Épületgépészet: fűtés, víz, csatorna, szellőzés, hűtés-klíma.",
        "Épületvillamosság és gyengeáram: elosztók, kábelezés, világítás, kamera, beléptetés, hálózat.",
        "Épületautomatizálás: KNX és Loxone alapú vezérlés, okosépület-megoldások.",
        "Szárazépítés: gipszkarton válaszfalak, álmennyezetek, előtétfalak.",
        "Burkolás: hideg- és melegburkolatok, kőburkolat, ipari padló.",
        "Festés, mázolás, dekorfelületek.",
        "Nyílászárók: beépítés, csere, árnyékolástechnika.",
        "Homlokzat, hőszigetelés, tetőfedés és bádogozás.",
        "Asztalos- és belsőépítészeti munkák, beépített bútorok.",
        "Külső területek: térburkolat, kerítés, kapu- és sorompótechnika.",
      ],
    },
    { type: "h2", text: "Mikor melyik konstrukció való?" },
    {
      type: "ul",
      items: [
        "Generálkivitelezés — ha kész, működő eredményt szeretne a legkevesebb saját ráfordítással: egy szerződés, egy határidő, egy garanciavállaló.",
        "Műszaki projektmenedzsment — ha van saját kivitelezői köre, de kell valaki, aki összefogja, ellenőrzi és a határidőket tartatja.",
        "Műszaki koordináció — ha a beruházás mellé kell egy szakmai szem, aki a helyszínen ott van és dönt.",
      ],
    },
    {
      type: "p",
      text: "Elsősorban Budapesten és Pest vármegyében dolgozunk, ahol a helyszíni jelenlét napi szinten biztosítható — a generálkivitelezésnél ugyanis nem az ajánlati ár, hanem a folyamatos helyszíni kontroll dönti el a végeredményt.",
    },
  ],
  faq: [
    {
      q: "Tényleg mindent vállalnak, vagy csak a villamos részt?",
      a: "Generálkivitelezésben a teljes műszaki tartalmat vállaljuk: építőmesteri munkák, gépészet, villamosság, szárazépítés, burkolás, festés, nyílászárók, asztalos- és belsőépítészeti munkák. Az erős- és gyengeáramú, valamint az automatizálási munkákat saját szakembereink végzik, a többi szakágat bevizsgált alvállalkozói körrel, a mi koordinációnk mellett.",
    },
    {
      q: "Kisebb projekteket is vállalnak?",
      a: "Igen. Egy irodaszint átalakítása, egy bérlői beépítés vagy egy lakásfelújítás ugyanúgy projekt, csak kisebb léptékű. A koordinációs igény arányaiban sokszor itt a legnagyobb, mert kevesebb a mozgástér az ütemezésben.",
    },
    {
      q: "Hol vállalnak munkát?",
      a: "Elsősorban Budapesten és Pest vármegyében. Nagyobb volumenű projekt esetén ettől távolabb is, de csak akkor, ha a folyamatos helyszíni jelenlétet is tudjuk biztosítani — enélkül a generálkivitelezés nem működik jól.",
    },
    {
      q: "Dolgoznak más generálkivitelező alvállalkozójaként is?",
      a: "Igen, rendszeresen. Ilyenkor az erős- és gyengeáramú szakági tartalmat visszük egyben, ami a generálkivitelezőnek egy alvállalkozóval kevesebb koordinációs terhet jelent.",
    },
  ],
};

export const projektekPages: ServicePage[] = [
  {
    slug: "generalkivitelezes",
    hub: "projektek",
    navLabel: "Generálkivitelezés",
    icon: "HardHat",
    h1: "Generálkivitelezés — a teljes építési feladat egy kézben",
    metaTitle: "Generálkivitelezés Budapest és Pest vármegye | TEMA",
    metaDescription:
      "Teljes körű generálkivitelezés: építőmesteri munkák, gépészet, villamosság, szárazépítés, burkolás, festés, asztalos. Fix határidő, egy garancia.",
    // Mért adatok: „generálkivitelezés" 1 300/hó, nehézség mindössze 13 —
    // reálisan megnyerhető. „generálkivitelező" 590 (KD 7), „generálkivitelezés
    // Budapest" 210, „generálkivitelezés Pest megye" 70, „családi ház
    // generálkivitelezés" 110, „lakásfelújítás generálkivitelezés" CPC 5,50 USD.
    keywords: [
      "generálkivitelezés",
      "generálkivitelező",
      "generálkivitelezés Budapest",
      "generálkivitelezés Pest megye",
      "generálkivitelező cégek",
      "családi ház generálkivitelezés",
      "lakásfelújítás generálkivitelezés",
      "teljes körű kivitelezés",
      "kulcsrakész kivitelezés",
    ],
    lead: "Kőműves, gépész, villanyszerelő, burkoló, festő, asztalos — mindegyik kell egy felújításhoz, és mindegyik egymásra vár. Generálkivitelezőként ezt az egész láncot mi szervezzük, Ön egyetlen szerződést köt.",
    highlights: [
      { value: "10+", label: "szakág egyetlen szerződésben" },
      { value: "1", label: "felelős a teljes műszaki tartalomra" },
      { value: "Fix", label: "határidő és ütemterv, írásban" },
    ],
    body: [
      { type: "h2", text: "Mi az a generálkivitelezés?" },
      {
        type: "p",
        text: "A generálkivitelezés azt jelenti, hogy egyetlen vállalkozó felel a teljes építési feladatért: ő szerződik a megrendelővel, ő szervezi és fizeti a szakágakat, és ő adja át a kész eredményt. A generálkivitelezés tehát nem egy szakma, hanem egy szerep — azé, aki a munkát végigviszi és felel érte.",
      },
      {
        type: "p",
        text: "Ez a különbség a szakági vállalkozáshoz képest: a villanyszerelő a villanyszerelésért felel, a burkoló a burkolatért. A generálkivitelező azért is felel, ami a kettő között van — a sorrendért, az ütemezésért és azért, hogy a végén minden együtt működjön. A megrendelő egy szerződést ír alá, egy emberrel egyeztet, és nem tíz külön számlát meg tíz külön garanciát kap.",
      },
      {
        type: "p",
        text: "A TEMA Menedzsment Kft. szakmai magja az épületek erős- és gyengeáramú, valamint automatizálási rendszere; ezeket saját szakembereinkkel végezzük. Generálkivitelezőként azonban a teljes műszaki tartalomért felelünk: az építőmesteri munkáktól a gépészeten át a festésig és a belsőépítészetig. A többi szakágat évek óta velünk dolgozó, bevizsgált alvállalkozói körrel valósítjuk meg — a mi ütemezésünk, koordinációnk és minőségellenőrzésünk mellett.",
      },
      { type: "h2", text: "Mit tartalmaz a vállalás?" },
      {
        type: "table",
        head: ["Szakág", "Jellemző tartalom"],
        rows: [
          [
            "Építőmesteri munkák",
            "Bontás, falazás, vakolás, aljzatkészítés, áttörések, szerkezeti megerősítés",
          ],
          [
            "Épületgépészet",
            "Fűtés, víz, csatorna, szellőzés, hűtés-klíma, padlófűtés, radiátorok",
          ],
          [
            "Épületvillamosság",
            "Elosztók, kábelezés, világítás, dugaljhálózat, mérés, villámvédelem",
          ],
          [
            "Gyengeáram és IT",
            "Kamerarendszer, beléptetés, kaputelefon, strukturált hálózat, WiFi",
          ],
          [
            "Épületautomatizálás",
            "KNX és Loxone vezérlés: világítás, árnyékolás, fűtés-hűtés, energiafigyelés",
          ],
          [
            "Szárazépítés",
            "Gipszkarton válaszfalak, előtétfalak, álmennyezetek, akusztikai megoldások",
          ],
          [
            "Burkolás",
            "Hideg- és melegburkolat, kőburkolat, ipari padló, vizes helyiségek szigetelése",
          ],
          [
            "Felületképzés",
            "Glettelés, festés, mázolás, dekorfelületek, tapétázás",
          ],
          [
            "Nyílászárók, árnyékolás",
            "Ablak- és ajtócsere, beépítés, redőny, zsalúzia, szúnyogháló",
          ],
          [
            "Homlokzat, tető",
            "Hőszigetelés, homlokzatképzés, tetőfedés, bádogozás, csapadékvíz-elvezetés",
          ],
          [
            "Asztalos, belsőépítészet",
            "Beépített bútorok, konyha, belső ajtók, egyedi asztalosmunka",
          ],
          [
            "Külső területek",
            "Térburkolat, kerítés, kapu- és sorompótechnika, kültéri világítás",
          ],
        ],
      },
      { type: "h2", text: "Milyen projekteknél működik jól?" },
      {
        type: "ul",
        items: [
          "Teljes lakás- és házfelújítás, a bontástól a kulcsátadásig.",
          "Új építésű ingatlan kivitelezése szerkezetkész állapottól kulcsrakészig.",
          "Irodaszint vagy teljes irodaház felújítása, bérlői beépítés.",
          "Üzlethelyiség, vendéglátóegység kialakítása nyitásra kész állapotig.",
          "Ipari és logisztikai létesítmények átalakítása, bővítése.",
          "Társasházi felújítás: lépcsőház, homlokzat, gépészeti és villamos rendszerek.",
        ],
      },
      { type: "h2", text: "Lakásfelújítás és családi ház generálkivitelezésben" },
      {
        type: "p",
        text: "A teljes lakásfelújítás és a családi ház építése ugyanaz a feladat kisebb léptékben: sok szakág, szoros egymásra épülés, és egy megrendelő, akinek nincs ideje tíz emberrel egyeztetni. Generálkivitelezésben ezt egy szerződéssel vállaljuk — a bontástól a kulcsátadásig.",
      },
      {
        type: "p",
        text: "Lakásfelújításnál a leggyakoribb csúszási ok a gépészet és a villamosság sorrendje: ha a vésés és a kábelezés nem fejeződik be a burkolás előtt, az egész ütemterv eltolódik. Mivel ez a két szakág nálunk házon belül van, itt nem kell alvállalkozói kapacitásra várni — ez a gyakorlatban hetekben mérhető különbség.",
      },
      {
        type: "callout",
        title: "Lakott ingatlan felújítása",
        text: "Ha a felújítás alatt is lakni kell az ingatlanban, azt előre jelezze. Ilyenkor szakaszolt ütemtervet készítünk — jellemzően helyiségenként —, porfalakkal elválasztott munkaterülettel. Ez hosszabb átfutást jelent, viszont nem kell kiköltözni.",
      },
      { type: "h2", text: "Hogyan zajlik egy generálkivitelezés?" },
      {
        type: "ol",
        items: [
          "Helyszíni felmérés és igényfelmérés. Végigjárjuk az ingatlant, rögzítjük az adottságokat és azt, hogy mi a cél.",
          "Műszaki tartalom rögzítése. Tételesen leírjuk, mi épül meg és milyen minőségben — ez a későbbi viták nagy részét kizárja.",
          "Tételes árajánlat és ütemterv. Szakáganként bontva, egyértelműen jelölt kizárásokkal.",
          "Szerződés. Műszaki tartalom, határidők, fizetési ütemezés, garanciális feltételek.",
          "Kivitelezés. Szakági szervezés, folyamatos helyszíni koordináció, takarás előtti ellenőrzések.",
          "Beüzemelés és mérések. A gépészeti és villamos rendszerek próbája, mérési jegyzőkönyvek.",
          "Átadás. Megvalósulási dokumentáció, betanítás, hiánylista kezelése, garancia indítása.",
        ],
      },
      {
        type: "callout",
        title: "Amit egy ajánlatban mindig érdemes megnézni",
        text: "Nem az összeget, hanem azt, hogy mi nincs benne. A látszólag olcsóbb ajánlat jellemzően hiányos műszaki tartalmat takar, és a különbség pótmunkaként jelenik meg a kivitelezés közepén — amikor már nincs mérlegelési lehetőség. Az ajánlatainkban ezért külön fejezet sorolja fel, mi nem része a vállalásnak.",
      },
      { type: "h2", text: "Miért előny, hogy a villamosság és az automatizálás házon belül van?" },
      {
        type: "p",
        text: "Egy felújításnál a villamos és gyengeáramú munka az, ami a legtöbb szakággal érintkezik: a kőműves vési, a szárazépítő takarja, a burkoló fölé dolgozik, a festő utána jön, a gépész pedig ugyanazokon a nyomvonalakon halad. Ha ez a szakág alvállalkozónál van, a koordinációs kockázat itt a legnagyobb. Nálunk házon belül van — ezért tudjuk pontosan, mikor kell készen lennie, és nem kell rá várni.",
      },
      { type: "h2", text: "Üzemelő épületben történő kivitelezés" },
      {
        type: "p",
        text: "A munkáink jelentős része nem üres épületben zajlik, hanem működő irodaházban, üzletben, szállodában vagy lakott társasházban. Ilyenkor a szakaszolás, a porvédelem, a zajos munkák időzítése és a menekülési útvonalak folyamatos biztosítása ugyanolyan fontos, mint maga a szakmunka. Ezt az ütemtervben előre rögzítjük, és az érintettekkel — bérlőkkel, lakókkal, személyzettel — is egyeztetjük.",
      },
      { type: "h2", text: "Hol dolgozunk?" },
      {
        type: "p",
        text: "Elsősorban Budapesten és Pest vármegyében vállalunk generálkivitelezést. Ennek gyakorlati oka van: a generálkivitelezés minőségét a napi helyszíni jelenlét dönti el, és ezt csak ésszerű távolságon belül tudjuk felelősen vállalni. Nagyobb volumenű projektnél ettől távolabb is dolgozunk, de csak akkor, ha a folyamatos jelenlét is biztosítható.",
      },
    ],
    faq: [
      {
        q: "Vállalnak fix áras generálkivitelezést?",
        a: "Igen, pontosan meghatározott műszaki tartalomra fix árat vállalunk. Ahol a tartalom a felmérés alapján nem határozható meg egyértelműen — például bontás után derül ki a valós szerkezeti vagy gépészeti állapot —, ott ezt előre jelezzük, és az érintett részre tételes egységárat adunk.",
      },
      {
        q: "Ki felel, ha az egyik alvállalkozó hibázik?",
        a: "Generálkivitelezésben mi. Ez a konstrukció lényege: a megrendelőnek egy fél felel a teljes műszaki tartalomért, és az alvállalkozói viszonyok rendezése a mi feladatunk. Önnek nem kell alvállalkozókkal vitáznia.",
      },
      {
        q: "Mennyi idő egy teljes lakásfelújítás?",
        a: "A méret és a műszaki tartalom dönti el. Egy közepes méretű lakás teljes, gépészeti és villamos cserét is tartalmazó felújítása jellemzően több hónapos projekt, egy irodaszint bérlői beépítése ennél gyorsabb is lehet. Az ütemtervet a felmérés után, szakági bontásban adjuk meg — nem általános ígéretként.",
      },
      {
        q: "Az általunk kiválasztott alvállalkozókkal is dolgoznak?",
        a: "Igen, előfordul, hogy a megrendelőnek van bevált partnere egy szakágban. Ilyenkor előre tisztázzuk a felelősségi határokat, mert a garanciavállalás szempontjából lényeges, hogy kinek a teljesítéséért felelünk.",
      },
      {
        q: "Az átadás után is önök üzemeltetik az épületet?",
        a: "Ha így kéri, igen — és ezt javasoljuk is. Az általunk épített rendszereket ismerjük a legjobban, így az üzemeltetés hatékonyabb, és nincs vita arról, hogy egy hiba kivitelezési vagy üzemeltetési okra vezethető-e vissza.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/projektek/projektmenedzsment",
      "/projektek/muszaki-koordinacio",
      "/projektek/atadas-uzembe-helyezes",
      "/garancialis-feltetelek",
    ],
  },

  {
    slug: "projektmenedzsment",
    hub: "projektek",
    navLabel: "Projektmenedzsment",
    icon: "ClipboardList",
    h1: "Műszaki projektmenedzsment",
    metaTitle: "Műszaki projektmenedzsment beruházásokhoz | TEMA",
    metaDescription:
      "Műszaki projektmenedzsment: műszaki tartalom, ütemterv, költségkontroll, szakági koordináció, minőségellenőrzés és riportálás a beruházó felé.",
    keywords: [
      "műszaki projektmenedzsment",
      "beruházás lebonyolítás",
      "projektvezetés kivitelezés",
      "építési projekt ütemterv",
      "műszaki ellenőrzés koordináció",
    ],
    lead: "A projektmenedzsment nem adminisztráció. Az a munka, amitől a helyszínen a megfelelő ember a megfelelő napon a megfelelő dolgot csinálja.",
    highlights: [
      { value: "Egy", label: "kapcsolattartó a teljes műszaki tartalomra" },
      { value: "Heti", label: "írásos státuszriport a beruházónak" },
      { value: "Előre", label: "jelzett kockázatok, nem utólagos magyarázat" },
    ],
    body: [
      {
        type: "p",
        text: "A műszaki projektmenedzsment akkor éri meg, ha a beruházónak nem az a dolga, hogy a kivitelezőket egyeztesse. Átvesszük a műszaki tartalom felügyeletét: meghatározzuk, mi épüljön, milyen minőségben és milyen sorrendben, majd folyamatosan ellenőrizzük, hogy ez valóban megtörténik-e.",
      },
      {
        type: "p",
        text: "Ez a szolgáltatás akkor való Önnek, ha van saját kivitelezői köre, vagy más generálkivitelezővel dolgozik, de kell valaki, aki a beruházó oldalán áll, és szakmailag számon tudja kérni a teljesítést.",
      },
      { type: "h2", text: "Amit a projektmenedzsment tartalmaz" },
      {
        type: "ul",
        items: [
          "Műszaki tartalom pontosítása: mit kell tudnia a kész épületnek, és mi az, ami nem kell.",
          "Ütemterv készítése, szakági függőségek feltérképezése, kritikus út meghatározása.",
          "Kivitelezői ajánlatok bekérése és összehasonlítása azonos műszaki tartalomra.",
          "Költségkeret felügyelete, a pótmunkák átvezetése és jóváhagyása.",
          "Helyszíni koordináció, kooperációs egyeztetések vezetése, jegyzőkönyvezés.",
          "Minőségellenőrzés a kritikus pontokon — takarás előtti ellenőrzések.",
          "Rendszeres, írásos státuszriport a beruházó felé.",
        ],
      },
      { type: "h2", text: "A takarás előtti ellenőrzés a legfontosabb pont" },
      {
        type: "p",
        text: "Minden projektben vannak visszafordíthatatlan pillanatok: a betonozás, a falazás, a szárazépítés lezárása, a burkolás. Ami ezek előtt nem készült el vagy nem lett ellenőrizve, azt utólag csak bontással lehet korrigálni. A projektmenedzsment gyakorlati értékének nagy része abból származik, hogy ezek a pillanatok senkit nem érnek váratlanul.",
      },
      {
        type: "callout",
        title: "A pótmunka nem szükségszerű",
        text: "A pótmunkák nagy része nem előre nem látható körülményből, hanem hiányos műszaki tartalomból származik. Ha az elején pontosan meghatározzuk, mi épül, a projekt közben lényegesen kevesebb a vita és a többletköltség.",
      },
      { type: "h2", text: "Riportálás" },
      {
        type: "p",
        text: "A beruházó rendszeresen, írásban látja a projekt állását: mi készült el, mi csúszik és miért, milyen döntés vár rá, és milyen kockázat látszik előre. A cél, hogy döntést mindig időben és elég információval hozhasson — ne akkor derüljön ki egy probléma, amikor már csak drága megoldás maradt.",
      },
    ],
    faq: [
      {
        q: "Mi a különbség a projektmenedzsment és a műszaki ellenőrzés között?",
        a: "A műszaki ellenőr a beruházó képviseletében ellenőriz és igazol. A projektmenedzsment ennél aktívabb szerep: nemcsak megállapítja, hogy valami nem jó, hanem szervezi is a megoldást, koordinálja a szakágakat és felügyeli az ütemtervet.",
      },
      {
        q: "A projektmenedzsment mellett kivitelezést is vállalnak ugyanabban a projektben?",
        a: "Igen, de ezt mindig előre tisztázzuk, mert érdekkonfliktust jelenthet. Ilyenkor a szerepeket és a hatásköröket a szerződésben egyértelműen elválasztjuk, vagy generálkivitelezői konstrukcióban dolgozunk, ahol a felelősség eleve egy kézben van.",
      },
      {
        q: "Hogyan díjazzák a projektmenedzsmentet?",
        a: "Jellemzően a beruházás értékének arányában vagy fix havidíjjal, a projekt hosszához igazítva. A konstrukciót a projekt méretéhez választjuk, és az ajánlatban egyértelműen rögzítjük, mi tartozik bele.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/projektek/generalkivitelezes",
      "/projektek/muszaki-koordinacio",
      "/projektek/dokumentacio",
      "/megoldasok/beruhazok-generalkivitelezok",
    ],
  },

  {
    slug: "muszaki-koordinacio",
    hub: "projektek",
    navLabel: "Műszaki koordináció",
    icon: "Users",
    h1: "Szakági műszaki koordináció",
    metaTitle: "Szakági műszaki koordináció | TEMA",
    metaDescription:
      "Szakági koordináció a helyszínen: nyomvonalütközések feloldása, munkasorrend szervezése, kooperációk vezetése, takarás előtti ellenőrzések.",
    keywords: [
      "műszaki koordináció",
      "szakági koordináció",
      "kivitelezés koordinálása",
      "nyomvonal ütközés",
      "kooperációs egyeztetés",
    ],
    lead: "A rajzon minden elfér. A valóságban a kábeltálca, a légcsatorna és a sprinklercső ugyanazt a harminc centit szeretné.",
    highlights: [
      { value: "Helyszíni", label: "jelenlét, nem távoli egyeztetés" },
      { value: "Ütközés", label: "feloldás még a szerelés előtt" },
      { value: "Jegyzőkönyv", label: "minden döntésről és megállapodásról" },
    ],
    body: [
      {
        type: "p",
        text: "A műszaki koordináció az a munka, ami akkor is szükséges, ha minden szakág külön-külön kifogástalanul dolgozik. A szakágak ugyanis ugyanabban a fizikai térben és ugyanabban az időben végzik a munkájukat, a terveik pedig nem mindig lettek egymásra vetítve.",
      },
      { type: "h2", text: "Tipikus koordinációs feladatok" },
      {
        type: "ul",
        items: [
          "Nyomvonalütközések feltárása és feloldása a szerelés megkezdése előtt.",
          "Áttörések, falfúrások helyének és méretének egyeztetése, tűzvédelmi tömítés tisztázása.",
          "Munkasorrend meghatározása: ki mikor jön, és mit kell hozzá készen találnia.",
          "Takarás előtti ellenőrzések ütemezése és levezetése.",
          "Kooperációs egyeztetések vezetése, a döntések jegyzőkönyvezése.",
          "Anyagbeérkezések és szakági kapacitások összehangolása az ütemtervvel.",
        ],
      },
      { type: "h2", text: "Ahol a legtöbb ütközés keletkezik" },
      {
        type: "p",
        text: "Tapasztalatunk szerint három helyen: a gépészet és a villamosság nyomvonalainak találkozásánál, az álmennyezet feletti szűk sávban, valamint a vizes helyiségekben, ahol a szigetelés, a gépészet és a burkolás egymásra épül. Ezért kérünk mindig bútorozási és technológiai tervet is, mielőtt a végpontok és a nyomvonalak véglegesednek — a legtöbb utólagos bontás abból származik, hogy ez a terv később készült el, mint a szerelés.",
      },
      {
        type: "callout",
        title: "Egy koordinációs egyeztetés ára töredéke egy bontásénak",
        text: "A gyakorlat azt mutatja, hogy egy órányi közös helyszíni bejárás a szakágakkal több napnyi utólagos bontást és javítást előz meg. A koordináció akkor drága, ha kimarad.",
      },
      { type: "h2", text: "Dokumentált döntések" },
      {
        type: "p",
        text: "Minden koordinációs egyeztetésről jegyzőkönyv készül: mi hangzott el, ki mit vállalt, mikorra. Ez nem bürokrácia — a projekt későbbi szakaszában ez az egyetlen olyan dokumentum, amiből visszakereshető, miért úgy épült meg valami, ahogy megépült.",
      },
    ],
    faq: [
      {
        q: "Csak koordinációt is vállalnak, kivitelezés nélkül?",
        a: "Igen. Több projektben vagyunk jelen kizárólag koordinációs szerepben, ahol a kivitelezést más végzi. Ilyenkor a beruházó vagy a generálkivitelező oldalán dolgozunk.",
      },
      {
        q: "Milyen gyakran van szükség helyszíni jelenlétre?",
        a: "Ez a projekt intenzitásától függ. Aktív kivitelezési szakaszban jellemzően heti több alkalom, kritikus műveletek — takarás, áttörés, beüzemelés — előtt pedig napi jelenlét indokolt.",
      },
    ],
    ctaVariant: "visszahivas",
    related: [
      "/projektek/generalkivitelezes",
      "/projektek/projektmenedzsment",
      "/projektek/dokumentacio",
      "/megoldasok/beruhazok-generalkivitelezok",
    ],
  },

  {
    slug: "dokumentacio",
    hub: "projektek",
    navLabel: "Dokumentáció",
    icon: "FileText",
    h1: "Megvalósulási és műszaki dokumentáció",
    metaTitle: "Megvalósulási dokumentáció, jegyzőkönyvek | TEMA",
    metaDescription:
      "Megvalósulási terv, végpontlista, mérési jegyzőkönyvek és kezelési útmutató — az a dokumentáció, amit évek múlva is használni fog az üzemeltetés.",
    keywords: [
      "megvalósulási dokumentáció",
      "megvalósulási terv",
      "mérési jegyzőkönyv",
      "műszaki dokumentáció épület",
      "üzemeltetési dokumentáció",
    ],
    lead: "A dokumentáció értékét nem az átadáskor lehet lemérni, hanem három év múlva, éjjel fél tizenkettőkor, amikor valaki keresi, honnan jön a hiba.",
    highlights: [
      { value: "Megvalósulási", label: "terv, nem a tervezői állapot" },
      { value: "Digitális", label: "és papír formátumban is" },
      { value: "Frissítve", label: "minden későbbi módosítás után" },
    ],
    body: [
      {
        type: "p",
        text: "A műszaki dokumentáció a leggyakrabban elhanyagolt átadási elem, pedig ezt kell az épület életciklusa alatt a legtöbbször elővenni. A tipikus hiba nem is a hiány, hanem az elavultság: a mappában a tervezői állapot van, nem az, ami végül megépült.",
      },
      { type: "h2", text: "Mit tartalmaz egy használható dokumentáció?" },
      {
        type: "ul",
        items: [
          "Megvalósulási terv — a ténylegesen kiépített nyomvonalak és pozíciók, nem a tervezett állapot.",
          "Gépészeti és villamos kapcsolási rajzok, elosztósémák, az elosztóban is elhelyezve.",
          "Végpontlista: minden hálózati és gyengeáramú végpont azonosítóval, mindkét végén jelölve.",
          "Eszközlista: gyártó, típus, sorozatszám, telepítés helye, garancia lejárata.",
          "Mérési jegyzőkönyvek: villamos mérések, hálózati bemérés, gépészeti nyomáspróba.",
          "Beállítási paraméterek: IP-címzés, hozzáférések, vezérlési logika leírása.",
          "Kezelési és karbantartási útmutató a napi üzemeltetéshez.",
        ],
      },
      { type: "h2", text: "Hozzáférések átadása" },
      {
        type: "p",
        text: "A dokumentáció része a rendszerek adminisztrátori hozzáféréseinek átadása is. Fontosnak tartjuk kimondani: az általunk telepített rendszerek hozzáférései a megrendelőt illetik. Nem tartunk vissza jelszót, és nem építünk olyan függőséget, ami miatt egy esetleges szolgáltatóváltás lehetetlen volna.",
      },
      {
        type: "callout",
        title: "Dokumentáció hiányzó rendszerekhez",
        text: "Ha egy meglévő épületben nincs használható dokumentáció, azt önálló szolgáltatásként is elkészítjük: felmérjük a rendszereket, azonosítjuk a végpontokat, felcímkézzük az elosztókat, és elkészítjük a hiányzó rajzokat. Ez az üzemeltetési költséget tartósan csökkenti.",
      },
      { type: "h2", text: "A dokumentáció karbantartása" },
      {
        type: "p",
        text: "Az üzemeltetési szerződéssel rendelkező partnereinknél a dokumentációt folyamatosan naprakészen tartjuk: minden bővítés, csere és módosítás átvezetésre kerül. Így nem fordulhat elő, hogy néhány év alatt a dokumentáció ismét elszakad a valóságtól.",
      },
    ],
    faq: [
      {
        q: "Milyen formátumban kapjuk meg a dokumentációt?",
        a: "Digitálisan (PDF és szerkeszthető formátum) és igény szerint nyomtatva is. A kritikus rajzokat — például elosztósémát — az elosztószekrényben is elhelyezzük, mert hiba esetén ott van rá szükség.",
      },
      {
        q: "Készítenek dokumentációt olyan rendszerekhez is, amelyeket nem önök építettek?",
        a: "Igen, ez önálló szolgáltatásunk. Különösen az üzemeltetés átvételekor jellemző, hogy az első feladat a hiányzó dokumentáció pótlása.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/projektek/atadas-uzembe-helyezes",
      "/projektek/generalkivitelezes",
      "/uzemeltetes/muszaki-epuletuzemeltetes",
      "/rendszerek/strukturalt-halozat",
    ],
  },

  {
    slug: "atadas-uzembe-helyezes",
    hub: "projektek",
    navLabel: "Átadás és üzembe helyezés",
    icon: "CircleCheck",
    h1: "Átadás és üzembe helyezés",
    metaTitle: "Beüzemelés, próbaüzem, átadás-átvétel | TEMA",
    metaDescription:
      "Üzembe helyezés és átadás: működési próbák, mérések, paraméterezés, próbaüzem, hiánylista kezelése, betanítás és a garancia elindítása.",
    keywords: [
      "üzembe helyezés",
      "beüzemelés",
      "átadás-átvétel kivitelezés",
      "próbaüzem",
      "hiánylista kezelés",
      "betanítás üzemeltetőknek",
    ],
    lead: "Az átadás nem az a nap, amikor aláírjuk a papírt. Az a folyamat, aminek a végén a megrendelő magabiztosan használja az épületet.",
    highlights: [
      { value: "Próbaüzem", label: "valós terhelés mellett" },
      { value: "Betanítás", label: "annak, aki ténylegesen használni fogja" },
      { value: "Garancia", label: "az átadástól, egyértelmű feltételekkel" },
    ],
    body: [
      {
        type: "p",
        text: "A kivitelezési projektek egyik leggyakoribb hibája, hogy az átadás formalitás: aláírt jegyzőkönyv, átadott mappa, és a kész épület ott marad egy olyan üzemeltetőnél, aki nem tudja kezelni. Néhány hónap múlva ebből lesz a „nem működik jól” panasz — miközben műszakilag minden rendben van, csak senki nem állította be a napi működéshez.",
      },
      { type: "h2", text: "Az üzembe helyezés lépései" },
      {
        type: "ol",
        items: [
          "Működési próbák szakáganként: minden végpont és minden funkció egyenként ellenőrizve.",
          "Mérések elvégzése és jegyzőkönyvezése — villamos mérések, hálózati bemérés, gépészeti próbák.",
          "Paraméterezés: a rendszerek beállítása a tényleges használathoz, nem gyári alapértéken hagyva.",
          "Próbaüzem: valós működés melletti megfigyelés, a beállítások finomhangolása.",
          "Hiánylista felvétele, felelőssel és határidővel, majd tételes lezárása.",
          "Betanítás: a használók gyakorlati oktatása a napi feladatokra.",
          "Átadás-átvételi eljárás: dokumentáció, hozzáférések, garanciaindítás.",
        ],
      },
      { type: "h2", text: "Próbaüzem: itt derül ki, ami a próbán nem" },
      {
        type: "p",
        text: "A működési próba azt igazolja, hogy minden elem működik. A próbaüzem azt, hogy az épület valós használat mellett is jól viselkedik. Itt derül ki, hogy a jelenlét-érzékelő túl korán kapcsol le, hogy a szellőzés hangosabb a vártnál, vagy hogy a fűtés egy sarokhelyiségben nem éri el a beállított hőmérsékletet. Ezek beállítási kérdések — ha van próbaüzem, még az átadás előtt orvosolhatók.",
      },
      {
        type: "callout",
        title: "Betanítás: a hasznosság kulcsa",
        text: "A betanítást mindig azoknak tartjuk, akik ténylegesen használni fogják — a portásnak, a recepciósnak, a karbantartónak, a tulajdonosnak —, nem csak a vezetőnek. Rövid, gyakorlati, a valós feladatokra fókuszáló oktatás, írásos segédlettel, amit később is elő lehet venni.",
      },
      { type: "h2", text: "Garancia és az azt követő időszak" },
      {
        type: "p",
        text: "A garancia az átadás-átvétel napjától indul. A garanciális feltételeket írásban rögzítjük: mire terjed ki, mi az, ami rendeltetésellenes használat vagy elmaradt karbantartás miatt esik ki alóla, és milyen reakcióidővel járunk el garanciális bejelentés esetén.",
      },
    ],
    faq: [
      {
        q: "Mennyi ideig tart a próbaüzem?",
        a: "Rendszertől függően néhány naptól néhány hétig. Fűtés-hűtés és épületautomatizálás esetén hosszabb, mert a beállításokat különböző időjárási és használati helyzetekben is érdemes megfigyelni.",
      },
      {
        q: "Mi történik, ha az átadáskor hibalista keletkezik?",
        a: "Ez teljesen normális, minden projektben van hiánylista. A lényeg a kezelése: tételesen rögzítjük, felelőst és határidőt rendelünk mindegyikhez, és a lezárásukat írásban igazoljuk.",
      },
      {
        q: "A betanítás megismételhető, ha személyzet cserélődik?",
        a: "Igen, üzemeltetési szerződés keretében rendszeresen tartunk ismétlő betanítást. Ez a gyakorlatban fontos, mert a portaszolgálat és a karbantartó személyzet fluktuációja magas.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/projektek/dokumentacio",
      "/projektek/generalkivitelezes",
      "/garancialis-feltetelek",
      "/uzemeltetes/muszaki-epuletuzemeltetes",
    ],
  },
];
