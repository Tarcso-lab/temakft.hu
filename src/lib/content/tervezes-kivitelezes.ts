import type { HubPage, ServicePage } from "./types";

export const tervezesHub: HubPage = {
  key: "tervezes-kivitelezes",
  slug: "/tervezes-kivitelezes",
  h1: "Tervezés és kivitelezés",
  metaTitle: "Erős- és gyengeáramú tervezés, kivitelezés | TEMA",
  metaDescription:
    "Erősáramú és gyengeáramú rendszerek tervezése és kivitelezése: elosztók, világítás, strukturált hálózat, kamera, beléptetés, KNX és Loxone vezérlés.",
  keywords: [
    "erősáramú tervezés kivitelezés",
    "gyengeáramú tervezés",
    "épületvillamossági kivitelezés",
    "villamos tervezés irodaház",
    "gyengeáramú rendszerek kivitelezése",
  ],
  lead: "A jó kivitelezés nem a szereléssel kezdődik, hanem a felméréssel és a tervvel. Nálunk ugyanaz a csapat tervez, épít és üzemeltet — így nincs hova elveszni a felelősségnek.",
  intro: [
    {
      type: "p",
      text: "A műszaki rendszerek kivitelezésénél a legtöbb probléma nem a szerelés minőségéből fakad, hanem abból, hogy a tervezés és a megvalósítás elszakad egymástól. A terv nem számol a helyszíni adottságokkal, a kivitelező eltér a tervtől, a dokumentáció pedig nem követi le a változást. Két év múlva ezt az üzemeltető fizeti meg.",
    },
    {
      type: "p",
      text: "A TEMA azért vállal tervezést és kivitelezést egyben, mert az esetek többségében mi is üzemeltetjük a rendszert. Ez erős érdekeltséget teremt: olyan megoldást tervezünk, amit később karban lehet tartani, bővíteni lehet, és nem nekünk okoz fejfájást a harmadik évben.",
    },
    { type: "h2", text: "A folyamat, felméréstől az átadásig" },
    {
      type: "ol",
      items: [
        "Helyszíni felmérés és igényfelmérés — mit kell tudnia a rendszernek, és milyen adottságokkal kell dolgozni.",
        "Koncepció és költségbecslés — még a részletes tervezés előtt, hogy a nagyságrend tisztázódjon.",
        "Kiviteli terv — nyomvonalak, elosztóséma, végpontlista, eszközspecifikáció.",
        "Kivitelezés — szerelés, kábelezés, eszköztelepítés, szakági koordináció.",
        "Beüzemelés és mérés — működési próbák, mérési jegyzőkönyvek, paraméterezés.",
        "Átadás — megvalósulási dokumentáció, betanítás, garancia indítása.",
      ],
    },
    { type: "h2", text: "Milyen munkákat vállalunk?" },
    {
      type: "p",
      text: "Új építésű ingatlanok teljes erős- és gyengeáramú kiépítését, meglévő épületek felújítását és rendszercseréjét, bérlői beépítéseket irodaházakban, valamint bővítéseket és korszerűsítéseket üzemelő létesítményekben — utóbbit gyakran folyamatos működés mellett, ütemezett szakaszolással.",
    },
  ],
  faq: [
    {
      q: "Tervezés nélkül, meglévő terv alapján is kiviteleznek?",
      a: "Igen. Ilyenkor a kivitelezés előtt átnézzük a kapott tervet, és ha műszaki vagy szabványossági problémát látunk, azt írásban jelezzük — nem építünk meg csendben olyat, amiről tudjuk, hogy nem fog jól működni.",
    },
    {
      q: "Vállalnak munkát üzemelő épületben is?",
      a: "Igen, ez a munkáink jelentős része. Ilyenkor ütemtervet készítünk a szakaszolásra, a leállásokat előre egyeztetjük, és ahol lehet, munkaidőn kívül dolgozunk.",
    },
    {
      q: "Mennyi idő egy ajánlat elkészítése?",
      a: "Helyszíni felmérés után egyszerűbb munkánál néhány munkanap, összetettebb, több szakágas projektnél egy–két hét. Sürgős esetben előzetes nagyságrendi becslést hamarabb is tudunk adni.",
    },
  ],
};

export const tervezesPages: ServicePage[] = [
  {
    slug: "erosaram",
    hub: "tervezes-kivitelezes",
    navLabel: "Erősáram",
    icon: "Zap",
    h1: "Erősáramú tervezés és kivitelezés",
    metaTitle: "Erősáramú tervezés és kivitelezés | TEMA",
    metaDescription:
      "Épületvillamossági kivitelezés: elosztóberendezések, kábelezés, világítás, almérés, szünetmentes ellátás, elektromos töltők. Mérési jegyzőkönyvvel.",
    keywords: [
      "erősáramú kivitelezés",
      "épületvillamosság",
      "villamos tervezés",
      "elosztó gyártás szerelés",
      "ipari villanyszerelés",
      "LED világítás korszerűsítés",
    ],
    lead: "Az erősáramú rendszer 20–30 évig szolgál. Az számít, hogy bővíthető, mérhető és dokumentált legyen — nem csak az, hogy elsőre működjön.",
    highlights: [
      { value: "Schneider", label: "Electric elosztók és védelmi készülékek" },
      { value: "Mérési", label: "jegyzőkönyv minden átadott rendszerhez" },
      { value: "Bővíthető", label: "tartalékkal tervezett elosztóséma" },
    ],
    body: [
      {
        type: "p",
        text: "Az épületvillamossági munkánál a látható rész — a kapcsoló, a lámpatest, a dugalj — a kisebbik fele a feladatnak. A rendszer minőségét az elosztó felépítése, a védelmi koncepció, a kábelméretezés és a dokumentáltság dönti el. Ezek azok, amiket később nem lehet olcsón korrigálni.",
      },
      { type: "h2", text: "Amit tervezünk és kivitelezünk" },
      {
        type: "ul",
        items: [
          "Fő- és alelosztó berendezések tervezése, gyártása, szerelése, bekötése.",
          "Betáplálás, kábelnyomvonalak, kábeltálcák, erősáramú alaphálózat.",
          "Világítási rendszerek: általános, munkahelyi, biztonsági és irányfény-világítás.",
          "LED-es világításkorszerűsítés vezérléssel, jelenlét- és fényerő-érzékeléssel.",
          "Dugaljhálózat, gépi betáplálások, ipari csatlakozók.",
          "Almérés és fogyasztáskövetés bérlőnként vagy költséghelyenként.",
          "Szünetmentes (UPS) és tartalék ellátás kialakítása kritikus fogyasztókhoz.",
          "Villámvédelem és túlfeszültség-védelem kiépítése.",
        ],
      },
      { type: "h2", text: "Elosztóberendezés: ahol a legtöbb múlik a részleteken" },
      {
        type: "p",
        text: "Egy elosztót úgy építünk meg, hogy tíz év múlva is lehessen benne dolgozni. Ez a gyakorlatban azt jelenti, hogy marad benne szabad hely a bővítéshez, a sorkapcsok és a kismegszakítók feliratozva vannak, a fázisterhelés kiegyensúlyozott, a szelektivitás átgondolt, és a szekrényben ott van a naprakész kapcsolási rajz. Ezek apróságnak tűnnek — amíg egy hiba éjszaka nem kényszerít valakit az elosztó elé.",
      },
      {
        type: "callout",
        title: "Miért tervezünk mindig tartalékkal?",
        text: "A tapasztalat szerint minden épület bővül: új gép érkezik, új bérlő jön, elektromos töltő kerül a parkolóba. Ha az elosztó és a nyomvonal eleve tartalékkal készül, a bővítés napok kérdése. Ha nem, akkor új elosztó és új betáplálás kell — sokszorosáért.",
      },
      { type: "h2", text: "Elektromos töltők és új terhelések" },
      {
        type: "p",
        text: "Irodaházaknál, társasházaknál és ipari telephelyeknél egyre gyakoribb feladat az elektromos töltőpontok kiépítése. Ez elsősorban nem töltőoszlop-kérdés, hanem villamos kapacitáskérdés: felmérjük a rendelkezésre álló teljesítményt, és ahol szükséges, terheléselosztó vezérlést tervezünk, hogy a töltés ne a meglévő fogyasztók rovására menjen.",
      },
      { type: "h2", text: "Mérés és átadás" },
      {
        type: "p",
        text: "Minden általunk kivitelezett erősáramú rendszert átadás előtt bemérünk: szigetelési ellenállás, hurokimpedancia, védővezető folytonosság, áram-védőkapcsolók működése. A mérési jegyzőkönyv, a megvalósulási kapcsolási rajz és az eszközlista az átadási dokumentáció része — ez indítja a garanciát is.",
      },
    ],
    faq: [
      {
        q: "Készítenek villamos kiviteli tervet is, vagy csak szerelnek?",
        a: "Mindkettőt. Tervezéstől a kivitelezésig egy kézben visszük a munkát, de vállaljuk külön a tervezést, illetve külön a más által készített terv szerinti kivitelezést is.",
      },
      {
        q: "Meglévő elosztót fel lehet újítani, vagy cserélni kell?",
        a: "Ez az elosztó korától, típusától és a szabad helytől függ. Sok esetben a felújítás — készülékcsere, átkötések rendezése, feliratozás, mérés — gazdaságosabb. Ha viszont az alkatrészellátás megszűnt vagy a szekrény már nem bővíthető, a csere a jobb döntés. A felmérés után mindkét változatra adunk árat.",
      },
      {
        q: "Mennyi idő alatt térül meg egy LED-es világításkorszerűsítés?",
        a: "A megtérülés a napi üzemóra-számtól és a jelenlegi világítás típusától függ, ezért mindig konkrét számítást készítünk a tényleges fogyasztás alapján. Nagy üzemóraszámú helyeken — csarnok, raktár, garázs, folyosó — jellemzően ez a leggyorsabban megtérülő villamos beruházás, különösen ha vezérléssel is kiegészül.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/uzemeltetes/villamos-uzemeltetes",
      "/tervezes-kivitelezes/epuletautomatizalas",
      "/projektek/generalkivitelezes",
      "/megoldasok/ipari-logisztika",
    ],
  },

  {
    slug: "gyengearam",
    hub: "tervezes-kivitelezes",
    navLabel: "Gyengeáram",
    icon: "Radio",
    h1: "Gyengeáramú tervezés és kivitelezés",
    metaTitle: "Gyengeáramú tervezés és kivitelezés | TEMA",
    metaDescription:
      "Gyengeáramú rendszerek kiépítése: kamerarendszer, beléptetés, kaputelefon, strukturált hálózat, kaputechnika. Hikvision és Ubiquiti alapokon.",
    keywords: [
      "gyengeáramú tervezés",
      "gyengeáramú kivitelezés",
      "biztonságtechnikai kivitelezés",
      "gyengeáramú rendszerek irodaház",
      "kamerarendszer kiépítés cég",
    ],
    lead: "A gyengeáram ma már informatika. Aki még mindig külön kábelen gondolkodik rendszerenként, az drágábban és rosszabbat épít.",
    highlights: [
      { value: "Egy", label: "hálózati gerinc, több rendszer" },
      { value: "Cat6/6A", label: "és optika a jövőbiztos alapokhoz" },
      { value: "Nyílt", label: "rendszerek, nem szolgáltatói bezártság" },
    ],
    body: [
      {
        type: "p",
        text: "A gyengeáramú rendszerek — kamera, beléptetés, kaputelefon, riasztás, automatizálás — az elmúlt években egyetlen közös nevezőre kerültek: IP-hálózaton működnek. Ez lehetőség és kockázat egyszerre. Lehetőség, mert egy jól megépített strukturált hálózat mindegyiket kiszolgálja. Kockázat, mert ha a hálózat gyenge, az összes rendszer egyszerre lesz megbízhatatlan.",
      },
      { type: "h2", text: "Ezért kezdjük mindig a hálózattal" },
      {
        type: "p",
        text: "Gyengeáramú projektnél az első kérdésünk nem az, hogy hány kamera kell, hanem az, hogy hol lesz a rendezőszekrény, mekkora a PoE-igény, mennyi tartalék végpont kell, és hogyan lesz szegmentálva a hálózat. A kamerák, a beléptetés és az irodai forgalom külön hálózati szegmensbe tartozik — ez biztonsági és üzembiztonsági kérdés is.",
      },
      { type: "h2", text: "Amit kiépítünk" },
      {
        type: "ul",
        items: [
          "Strukturált hálózat: Cat6 / Cat6A rézkábelezés, optikai gerinc, rendezőszekrény.",
          "Kamerarendszer: IP kamerák, rögzítő, tárolás, távoli elérés, videoanalitika.",
          "Beléptetőrendszer: kártyás, mobilos vagy biometrikus azonosítás, zónakezelés.",
          "Kaputelefon: társasházi és irodai video-kaputelefon, mobilos hívásátirányítás.",
          "Kaputechnika: sorompók, tolókapuk, garázskapuk vezérlése és integrációja.",
          "Riasztó- és jelzőrendszerek, tűzjelzővel való kapcsolatok kiépítése.",
          "Audio és tájékoztató rendszerek, hangosítás alapinfrastruktúrája.",
        ],
      },
      { type: "h2", text: "Tervezés: a végpontlista a legfontosabb dokumentum" },
      {
        type: "p",
        text: "A gyengeáramú kiviteli terv magja a végpontlista: hol, milyen eszköz lesz, milyen kábelen, melyik portra kötve, milyen tápellátással. Ha ez pontos, a kivitelezés kiszámítható, a bővítés egyszerű, és az üzemeltető is tudja, mit hol keressen. Ha ez hiányzik, néhány év múlva senki nem fogja tudni, melyik kábel hova megy — és ez a hibakeresés árát sokszorozza meg.",
      },
      {
        type: "callout",
        title: "Gyakori spórolás, ami visszaüt",
        text: "A leggyakoribb megtakarítás a kevesebb kihúzott kábel és a kisebb rendezőszekrény. A kábelhúzás munkadíja viszont utólag többe kerül, mint az eredeti anyagár többszöröse — különösen kész álmennyezet vagy burkolat mögött. Tartalék végpontot mindig érdemes kiépíteni.",
      },
      { type: "h2", text: "Integráció: a rendszerek beszéljenek egymással" },
      {
        type: "p",
        text: "Külön-külön minden rendszer működhet, mégis kevés az értéke. Attól lesz használható, ha összekapcsoljuk őket: a beléptetés eseményéhez kameraképet rendelünk, a kaputelefonos nyitás naplózódik, a sorompó a rendszámfelismeréssel nyílik, a világítás a jelenlét-érzékelőre reagál. Ezt a rendszerintegrációs oldalunkon részletesen is bemutatjuk.",
      },
    ],
    faq: [
      {
        q: "Egy kábelen futhat a kamera és az irodai hálózat?",
        a: "Fizikailag futhatnak közös strukturált hálózaton, de logikailag mindig elválasztjuk őket VLAN-okkal. Így a kamerák forgalma nem terheli az irodai hálózatot, és egy esetleges biztonsági incidens sem terjed át rendszerről rendszerre.",
      },
      {
        q: "Miért Hikvision?",
        a: "A kamera, beléptetés és kaputelefon területen a Hikvision termékskálája lefedi a belépő szinttől a nagy rendszerekig terjedő igényeket, a hazai alkatrész-elérhetőség jó, és a rendszerek egymással jól integrálhatók. Ha a megrendelőnek más gyártó a preferenciája vagy meglévő rendszert kell bővíteni, azzal is dolgozunk.",
      },
      {
        q: "Kell külön szerver a kamerarendszerhez?",
        a: "Kisebb rendszereknél elegendő egy megfelelően méretezett hálózati rögzítő (NVR). Nagyobb, több telephelyes vagy videoanalitikát is használó rendszereknél már szerveres megoldás indokolt. A felmérés során a kameraszám, a felbontás és a megőrzési idő alapján számoljuk ki a szükséges kapacitást.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/rendszerek/kamerarendszerek",
      "/rendszerek/strukturalt-halozat",
      "/tervezes-kivitelezes/rendszerintegracio",
      "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
    ],
  },

  {
    slug: "it-halozat",
    hub: "tervezes-kivitelezes",
    navLabel: "IT-hálózat",
    icon: "Network",
    h1: "IT-hálózat tervezése és kiépítése",
    metaTitle: "IT-hálózat kiépítés cégeknek | TEMA",
    metaDescription:
      "Céges hálózat tervezése és kiépítése: strukturált kábelezés, menedzselt switch, Ubiquiti és MikroTik WiFi, VLAN, tűzfal, rendezőszekrény.",
    keywords: [
      "IT hálózat kiépítés",
      "strukturált hálózat kiépítés",
      "céges WiFi kiépítés",
      "hálózat tervezés iroda",
      "Ubiquiti MikroTik hálózat",
      "szerverszoba kialakítás",
    ],
    lead: "A hálózat ma közmű. Ha akadozik, az egész épület akadozik — a beléptetéstől a pénztárgépig.",
    highlights: [
      { value: "Ubiquiti", label: "MikroTik és TP-Link Omada alapokon" },
      { value: "VLAN", label: "szegmentált, biztonságos hálózat" },
      { value: "Bemért", label: "kábelezés, átadási jegyzőkönyvvel" },
    ],
    body: [
      {
        type: "p",
        text: "A céges IT-hálózat két rétegből áll: a passzív infrastruktúrából (kábelezés, rendezők, csatlakozók) és az aktív eszközökből (switch, router, tűzfal, WiFi). A passzív réteg 15–20 évig szolgál, az aktív 5–8 évig cserélődik. Ezért a kettőt külön kell gondolni: a kábelezésbe érdemes bőven beruházni, az aktív eszközöknél a bővíthetőség és a menedzselhetőség számít.",
      },
      { type: "h2", text: "Strukturált kábelezés" },
      {
        type: "p",
        text: "A kábelezésnél Cat6 vagy Cat6A rendszert építünk, gerincen szükség szerint optikával. Minden végpontot azonosítóval látunk el, a rendezőben és a fali aljzatnál egyaránt, és a nyomvonalakról dokumentációt készítünk. Átadás előtt a szakaszokat bemérjük — ez az a lépés, amit a legtöbben kihagynak, pedig egy rosszul krimpelt vagy megtört kábel évekig okozhat megmagyarázhatatlan hálózati hibát.",
      },
      { type: "h2", text: "Aktív hálózat és WiFi" },
      {
        type: "p",
        text: "Menedzselt switcheket telepítünk, mert csak így lehet VLAN-t, PoE-tápot és portszintű hibakeresést kezelni. A WiFi-t nem „router kirakása” alapon tervezzük: felmérjük a lefedettséget, a falak csillapítását és a várható eszközszámot, majd ehhez méretezzük az access pointokat és a csatornakiosztást. Ubiquiti, MikroTik és TP-Link Omada rendszerekkel dolgozunk, mert ezek központilag menedzselhetők és jól bővíthetők.",
      },
      {
        type: "ul",
        items: [
          "Hálózati koncepció és címzési terv, VLAN-szegmentálás.",
          "Menedzselt switchek, PoE-tápellátás méretezése tartalékkal.",
          "Vezeték nélküli lefedettség tervezése, több access pointos roaming.",
          "Vendéghálózat elkülönítve, korlátozott hozzáféréssel.",
          "Tűzfal, VPN-elérés telephelyek és távoli munkatársak között.",
          "Rendezőszekrény kialakítása: szellőzés, kábelrendezés, szünetmentes táp.",
          "Szerverszoba alapinfrastruktúra: hűtés, tápellátás, monitorozás.",
        ],
      },
      {
        type: "callout",
        title: "A rendezőszekrény állapota mindent elmond",
        text: "Amikor először megyünk egy épületbe, elsőként a rendezőt nézzük meg. Ha ott átláthatatlan kábelgubanc van, jelöletlen patchekkel és eltömődött szellőzéssel, akkor tudjuk, hogy a hibakeresés hosszú lesz. Egy rendezett szekrény önmagában csökkenti az üzemeltetési költséget.",
      },
      { type: "h2", text: "Több telephely összekötése" },
      {
        type: "p",
        text: "Több telephelynél a cél az egységes, központilag menedzselt hálózat. Site-to-site VPN kapcsolatot építünk a telephelyek között, egységes hálózati szabályrendszerrel és központi felügyelettel. Így a kamerarendszer, a beléptetés és az irodai rendszerek is egy helyről kezelhetők, a hibákat pedig gyakran távolról meg tudjuk oldani — kiszállás nélkül.",
      },
    ],
    faq: [
      {
        q: "Cat6 vagy Cat6A kábelt érdemes építeni?",
        a: "Irodai munkaállomásokhoz és kamerákhoz a Cat6 a legtöbb esetben elegendő. Cat6A akkor indokolt, ha hosszabb szakaszon 10 Gbit/s sebességre lesz szükség, jellemzően gerincszakaszon vagy szerverszoba környékén. A felmérés során a távolságok és a tervezett használat alapján döntjük el.",
      },
      {
        q: "Ki tudják bővíteni a meglévő hálózatot, vagy újat kell építeni?",
        a: "A meglévő kábelezés jellemzően megtartható, ha bemérés után megfelel. Az aktív eszközök cseréje és a hálózat átszegmentálása gyakran önmagában megoldja azokat a problémákat, amikre a felhasználók lassulásként vagy megszakadásként panaszkodnak.",
      },
      {
        q: "Vállalják a hálózat folyamatos felügyeletét is?",
        a: "Igen, ez az üzemeltetési szolgáltatásunk része. Központi felügyeleti felületről látjuk az eszközök állapotát, így a hibák egy részét azelőtt észleljük, hogy a felhasználók bejelentenék.",
      },
    ],
    ctaVariant: "ajanlatkeres",
    related: [
      "/rendszerek/strukturalt-halozat",
      "/tervezes-kivitelezes/gyengearam",
      "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
      "/megoldasok/irodahazak",
    ],
  },

  {
    slug: "epuletautomatizalas",
    hub: "tervezes-kivitelezes",
    navLabel: "Épületautomatizálás",
    icon: "Cpu",
    h1: "Épületautomatizálás: KNX és Loxone",
    metaTitle: "Épületautomatizálás KNX és Loxone | TEMA",
    metaDescription:
      "Épületautomatizálás tervezése és kivitelezése: világítás, árnyékolás, fűtés-hűtés vezérlés, jelenlét-érzékelés, energiafigyelés, központi felügyelet.",
    keywords: [
      "épületautomatizálás",
      "KNX rendszer",
      "Loxone épületautomatika",
      "okosépület megoldás",
      "épületfelügyeleti rendszer",
      "energiahatékonyság automatizálás",
    ],
    lead: "Az automatizálás akkor jó, ha nem kell foglalkozni vele. A cél nem a látványos vezérlőpanel, hanem a kevesebb energia és a kevesebb emberi hiba.",
    highlights: [
      { value: "KNX", label: "gyártófüggetlen, szabványos alap" },
      { value: "Loxone", label: "gyors, költséghatékony megvalósítás" },
      { value: "Vegyítve", label: "a kettő együtt, ahol ez a legjobb megoldás" },
    ],
    body: [
      {
        type: "p",
        text: "Az épületautomatizálás lényege, hogy a világítás, az árnyékolás, a fűtés-hűtés és a szellőzés ne külön-külön, kézzel működjön, hanem összehangoltan, a tényleges használathoz igazodva. Egy üres tárgyalóban nem kell fűteni és világítani; egy déli homlokzatnál a redőny többet spórol, mint a hűtés teljesítménynövelése.",
      },
      { type: "h2", text: "KNX vagy Loxone — melyiket mikor?" },
      {
        type: "p",
        text: "Nem hisszük, hogy egy rendszer mindenre jó, ezért mindkettővel dolgozunk, és sok projektben vegyítjük is őket. Az alábbi szempontok szerint döntünk együtt a megrendelővel.",
      },
      {
        type: "table",
        head: ["Szempont", "KNX", "Loxone"],
        rows: [
          [
            "Jelleg",
            "Nyílt, nemzetközi szabvány, sok gyártó eszközei keverhetők",
            "Egy gyártó zárt, de jól összehangolt ökoszisztémája",
          ],
          [
            "Tipikus terep",
            "Irodaház, intézmény, nagy és hosszú életciklusú épület",
            "Kisebb-közepes épület, szálloda, csarnok, gyors megvalósítás",
          ],
          [
            "Beruházási költség",
            "Magasabb, cserébe hosszú távon gyártófüggetlen",
            "Kedvezőbb, gyorsabban üzembe helyezhető",
          ],
          [
            "Bővítés",
            "Bármely KNX-tanúsított gyártó eszközével",
            "Elsősorban a gyártó eszközeivel, de nyitott protokollokkal is",
          ],
          [
            "Programozás",
            "ETS környezet, szabványos, bárki átveheti",
            "Saját fejlesztőkörnyezet, gyorsabb munkavégzés",
          ],
        ],
      },
      {
        type: "p",
        text: "Vegyes megoldásnál jellemzően a KNX adja a szabványos érzékelő- és beavatkozó-réteget, a Loxone pedig a logikát, a vizualizációt és az integrációt. Így a megrendelő megkapja a szabvány hosszú távú biztonságát és a gyorsabb megvalósítás előnyeit is.",
      },
      { type: "h2", text: "Mi az a Loxone, és mire jó?" },
      {
        type: "p",
        text: "A Loxone egy osztrák gyártó épületautomatizálási rendszere, amelynek a lényege a központi vezérlő: a világítás, az árnyékolás, a fűtés-hűtés, a szellőzés és akár a biztonságtechnika is egyetlen logikába kerül. A rendszer erőssége, hogy az elemei egymásra vannak tervezve, ezért a telepítés és a beüzemelés gyorsabb és kiszámíthatóbb, mint egy több gyártóból összerakott megoldásnál.",
      },
      {
        type: "p",
        text: "A gyakorlatban ez alacsonyabb beruházási költséget és rövidebb átfutást jelent — cserébe erősebb a gyártói kötődés. Ezért javasoljuk elsősorban ott, ahol a rendszert az eredeti kivitelező viszi tovább: családi háznál, kisebb-közepes épületnél, szállodánál, csarnoknál.",
      },
      {
        type: "p",
        text: "A KNX ezzel szemben nemzetközi szabvány: több száz gyártó tanúsított eszközei keverhetők benne, és bármely KNX-képzettségű szakember továbbviheti. Nagy, hosszú életciklusú épületnél — irodaháznál, intézménynél — ez a gyártófüggetlenség többet ér, mint a gyorsabb megvalósítás. A két rendszer részletes összevetését külön cikkben is megírtuk.",
      },
      { type: "h2", text: "Mit lehet automatizálni?" },
      {
        type: "ul",
        items: [
          "Világítás: jelenlét- és fényerőfüggő kapcsolás, zónázás, időprogramok.",
          "Árnyékolás: napkövető redőny- és zsaluvezérlés, szélvédelem.",
          "Fűtés és hűtés: helyiségenkénti hőmérséklet-szabályozás, ablaknyitás-érzékelés.",
          "Szellőzés: CO₂- és páratartalom-alapú vezérlés.",
          "Energiafigyelés: fogyasztásmérés körönként, riasztás rendellenességre.",
          "Központi kezelőfelület: állapotok, kapcsolás, riasztások egy képernyőn.",
          "Kapcsolat a biztonságtechnikával: beléptetéshez kötött világítás- és klímavezérlés.",
        ],
      },
      {
        type: "callout",
        title: "A legnagyobb megtakarítás a legegyszerűbb funkciókban van",
        text: "Tapasztalatunk szerint az energiamegtakarítás nagy része néhány alapfunkcióból jön: jelenlét-alapú világítás, helyiségenkénti hőmérséklet-szabályozás és időprogram. A látványos okos funkciók ehhez képest keveset adnak hozzá — ezért az alapokkal kezdünk.",
      },
      { type: "h2", text: "Meglévő épület automatizálása" },
      {
        type: "p",
        text: "Nem csak új építésnél van értelme. Üzemelő épületben is megvalósítható az automatizálás — jellemzően szakaszosan, a legnagyobb megtakarítást hozó területekkel kezdve. Sokszor a meglévő erősáramú hálózat is felhasználható, vezeték nélküli vagy hibrid megoldásokkal kiegészítve, így a bontás minimalizálható.",
      },
    ],
    faq: [
      {
        q: "Mennyi idő alatt térül meg egy épületautomatizálási beruházás?",
        a: "A megtérülés az épület használati profiljától függ. Ahol jelentős a fűtési-hűtési és világítási fogyasztás, és a helyiségek kihasználtsága ingadozó — irodaház, szálloda, intézmény —, ott térül meg a leggyorsabban. A felmérés során a tényleges fogyasztási adatokból konkrét becslést készítünk, nem általános százalékokat ígérünk.",
      },
      {
        q: "Ki tudja kezelni a rendszert az átadás után?",
        a: "A rendszert úgy építjük fel, hogy a napi kezelés egyszerű maradjon, és az átadáskor betanítást tartunk az üzemeltető személyzetnek. A mélyebb paraméterezést és a bővítést jellemzően mi végezzük az üzemeltetési szerződés keretében.",
      },
      {
        q: "Össze lehet kapcsolni a kamerarendszerrel és a beléptetéssel?",
        a: "Igen, és ez az egyik legnagyobb gyakorlati haszna. Például a beléptetés eseménye indíthatja a világítás és a klíma bekapcsolását, munkaidő végén pedig a rendszer automatikusan visszaállhat energiatakarékos módba.",
      },
      {
        q: "Mi történik, ha meghibásodik a vezérlés?",
        a: "A rendszereket úgy tervezzük, hogy a kritikus funkciók vezérlés nélkül is működtethetők legyenek — kézi kapcsolással, helyi felülbírálással. Az automatizálás nem lehet egyetlen ponton meghibásodó rendszer.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/rendszerek/okosepulet",
      "/tudastar/knx-vagy-loxone",
      "/tervezes-kivitelezes/rendszerintegracio",
      "/megoldasok/szallodak",
    ],
  },

  {
    slug: "rendszerintegracio",
    hub: "tervezes-kivitelezes",
    navLabel: "Rendszerintegráció",
    icon: "Blocks",
    h1: "Rendszerintegráció",
    metaTitle: "Épülettechnikai rendszerintegráció | TEMA",
    metaDescription:
      "Különálló rendszerek összekapcsolása egy felületen: kamera, beléptetés, kaputechnika, automatizálás és hálózat együttműködése nyílt protokollokkal.",
    keywords: [
      "rendszerintegráció",
      "épületfelügyeleti rendszer integráció",
      "biztonságtechnikai integráció",
      "egységes felügyeleti felület",
      "épülettechnikai rendszerek összekapcsolása",
    ],
    lead: "Öt jó rendszer, amelyik nem beszél egymással, összesen kevesebbet ér, mint három, amelyik igen.",
    highlights: [
      { value: "Egy", label: "felület a napi üzemeltetéshez" },
      { value: "Nyílt", label: "protokollok: KNX, Modbus, BACnet, ONVIF, API" },
      { value: "Naplózott", label: "események, visszakereshető történet" },
    ],
    body: [
      {
        type: "p",
        text: "A legtöbb épületben a rendszerek külön-külön kerültek be, más időpontban, más kivitelezőtől. A kamerarendszernek saját szoftvere van, a beléptetésnek másik, az automatizálásnak harmadik, a sorompónak pedig egy kapcsoló a portán. Ez így üzemeltethető, csak lassú, hibalehetőségekkel teli és nehezen ellenőrizhető.",
      },
      { type: "h2", text: "Mit jelent a gyakorlatban az integráció?" },
      {
        type: "p",
        text: "Azt, hogy az egyik rendszer eseménye kiváltja a másik reakcióját, és hogy a napi üzemeltetéshez elég egy felület. Néhány tipikus, azonnal hasznot hozó példa:",
      },
      {
        type: "ul",
        items: [
          "Beléptetési eseményhez automatikusan társított kamerakép — egy vitatott belépés másodpercek alatt visszakereshető.",
          "Rendszámfelismerés a sorompónál: a törzsvendégek és a saját flotta beavatkozás nélkül közlekedik.",
          "Munkaidő vége után a beléptetés utolsó kilépése indítja a világítás és a klíma visszaállítását.",
          "Tűzriasztás esetén a beléptetés menekülési útvonalai automatikusan nyitnak.",
          "Hálózati eszköz kiesése azonnali értesítést küld, mielőtt a felhasználók észlelnék.",
          "Egy központi eseménynapló, amelyben a különböző rendszerek eseményei időrendben együtt látszanak.",
        ],
      },
      { type: "h2", text: "Hogyan integrálunk?" },
      {
        type: "p",
        text: "Elsősorban nyílt protokollokkal és dokumentált interfészekkel dolgozunk: ONVIF a kameráknál, KNX, Modbus és BACnet az épülettechnikánál, valamint a gyártói API-k, ahol elérhetők. Ahol nincs közvetlen kapcsolat, ott az automatizálási vezérlő (KNX vagy Loxone) tölti be a hídszerepet, potenciálmentes érintkezőkkel vagy logikai kapcsolatokkal.",
      },
      {
        type: "callout",
        title: "Amit nem csinálunk",
        text: "Nem építünk olyan integrációt, amit rajtunk kívül senki nem tud továbbvinni. A megoldásokat dokumentáljuk, a logikát átadjuk, a hozzáféréseket a megrendelő kapja meg. Az üzemeltetőváltás nem lehet zsarolási alap.",
      },
      { type: "h2", text: "Meglévő rendszerek integrálhatósága" },
      {
        type: "p",
        text: "Az integráció megvalósíthatóságát mindig felméréssel kezdjük, mert erősen eszközfüggő. Vannak rendszerek, amelyek zártak, és csak korlátozottan nyithatók meg — ilyenkor őszintén megmondjuk, meddig lehet elmenni, és mi az, amihez eszközcsere kellene. Az esetek nagy részében azonban jelentős előrelépés érhető el az eszközpark cseréje nélkül is.",
      },
    ],
    faq: [
      {
        q: "Kell hozzá új szoftvert vásárolni?",
        a: "Nem feltétlenül. Sok esetben a meglévő rendszerek felügyeleti felületei és az automatizálási vezérlő összekapcsolásával megoldható. Ha mégis szükség van külön felügyeleti szoftverre, azt az ajánlatban tételesen szerepeltetjük.",
      },
      {
        q: "Az integráció nem növeli a kiberbiztonsági kockázatot?",
        a: "Rosszul megvalósítva igen, ezért az integrációt mindig szegmentált hálózaton, egyedi jelszavakkal, korlátozott jogosultságokkal és naprakész firmware-rel építjük. Az alapbeállításon hagyott, internetről közvetlenül elérhető eszköz sokkal nagyobb kockázat, mint egy jól megtervezett integráció.",
      },
      {
        q: "Több telephelyet is egy felületen lehet kezelni?",
        a: "Igen, ez az integráció egyik legnagyobb haszna több telephelyes cégeknél. Egy központi felületről látható minden helyszín állapota, ami jelentősen csökkenti a kiszállások számát.",
      },
    ],
    ctaVariant: "felmeres",
    related: [
      "/tervezes-kivitelezes/epuletautomatizalas",
      "/rendszerek/okosepulet",
      "/tervezes-kivitelezes/it-halozat",
      "/megoldasok/ingatlankezelok",
    ],
  },
];
