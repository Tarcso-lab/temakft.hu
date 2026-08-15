# Élesítés — a weboldal kitétele a temakft.hu címre

## A lényeg elöljáróban

**A Rackhost sima (PHP-s) tárhelyén ez a weboldal nem fut.** Nem hiba, hanem
technológiai különbség: a PHP-tárhelyek nem futtatnak Node.js alkalmazást, ez az
oldal viszont Node.js-t igényel. Konkrétan azért, mert:

- az űrlapok szerveroldalon dolgoznak fel (adatbázisba írás + e-mail küldés),
- a megosztási képek futásidőben generálódnak.

**A domain viszont maradhat a Rackhostnál.** Csak a DNS-beállításokat kell
átirányítani a tárhelyszolgáltatóra. A domain tulajdonjoga, a hosszabbítás és a
kezelőfelület minden marad, ahol van.

---

## Melyik utat válasszuk?

| | **Vercel** *(ajánlott)* | **Rackhost VPS** |
|---|---|---|
| Költség | 0 Ft ezen a méreten | Havidíjas VPS |
| Beállítás | ~30 perc | Fél–egy nap |
| Karbantartás | Nincs | Szerverfrissítés, biztonsági javítások |
| SSL (https) | Automatikus, megújul magától | Kézzel kell beállítani |
| Frissítés | Egy paranccsal | Kézi másolás, újraindítás |
| Sebesség | Európai CDN-ről szolgál ki | Egy szerverről |

A Vercel a Next.js fejlesztőjének a szolgáltatása, erre az alkalmazástípusra
találták ki. Ezen a méreten (napi néhány száz látogató) az ingyenes csomag bőven
elég, és nem igényel kártyát.

VPS akkor indokolt, ha kifejezetten cél, hogy minden magyar szolgáltatónál és
egy helyen legyen. Cserébe a szerver karbantartása a tiéd.

---

## A. út — Vercel (ajánlott)

### 1. Fiók

Regisztrálj a [vercel.com](https://vercel.com) oldalon. GitHub-fiókkal a
legegyszerűbb, de e-mailes regisztráció is működik.

### 2. A projekt feltöltése

**Ha nincs GitHub-fiókod** — a legrövidebb út, a projektmappából:

```bash
npx vercel
```

Első futtatáskor bejelentkeztet, majd feltesz néhány kérdést (projekt neve,
mappa). A végén kapsz egy `*.vercel.app` címet — ezen már működik az oldal.

Éles kiadás:

```bash
npx vercel --prod
```

**Ha van GitHub-fiókod** — hosszabb távon ez a jobb: feltöltöd a projektet egy
(privát) tárolóba, a Vercelen összekapcsolod, és onnantól minden módosítás
automatikusan élesedik.

### 3. Környezeti változók beállítása

Ez a leggyakoribb hibaforrás: **a `.env.local` fájl szándékosan nem kerül fel**
a szerverre. Az értékeket a Vercel felületén kell megadni:

**Settings → Environment Variables**, mindegyiket „Production" környezetre:

| Név | Érték |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | a `.env.local` fájlból |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | a `.env.local` fájlból |
| `RESEND_API_KEY` | a `.env.local` fájlból |
| `LEAD_EMAIL_FROM` | `TEMA weboldal <onboarding@resend.dev>` |
| `LEAD_EMAIL_TO` | `tamaskoncsik9@gmail.com` |
| `IP_HASH_SALT` | **írj be egy egyedi, véletlen szöveget** |

Beállítás után egyszer újra ki kell adni (`npx vercel --prod`), hogy érvényesek
legyenek.

### 4. A domain hozzáadása

A Vercelen: **Settings → Domains → Add**, írd be: `temakft.hu`.

A Vercel ezután kiírja, milyen DNS-rekordokat kell felvenni. Két rekord kell:

- egy **A rekord** a `temakft.hu` címhez,
- egy **CNAME rekord** a `www` alcímhez.

> A pontos értékeket **a Vercel felületéről másold ki**, ne innen — ezek
> időnként változnak, és a rossz IP-cím miatt egyszerűen nem fog működni.

### 5. DNS a Rackhostnál

Lépj be a Rackhost ügyfélkapujába → a domain → **DNS-kezelés**.

1. Ha van meglévő `A` rekord a `@` (vagy üres) névhez, azt **módosítsd** a
   Vercel által megadott IP-címre. Ha nincs, vegyél fel újat.
2. Vegyél fel egy `CNAME` rekordot `www` névvel, a Vercel által megadott
   értékre.
3. **Az MX rekordokhoz ne nyúlj**, ha van e-mail szolgáltatás a domainen — azok
   a levelezést kezelik, és függetlenek a weboldaltól.

A változás jellemzően néhány perc alatt, néha órák alatt terjed szét. A Vercel
felületén látszik, amikor észleli. Az SSL-tanúsítványt utána magától kiállítja.

### 6. Ellenőrzés élesítés után

- [ ] `https://temakft.hu` betölt, és a `www` változat is átirányít
- [ ] A lakat ikon látszik (érvényes SSL)
- [ ] Küldj egy próba-ajánlatkérést → megérkezik-e az e-mail
- [ ] `https://temakft.hu/sitemap.xml` és `/robots.txt` elérhető

---

## B. út — Rackhost VPS

Ha mindenképp Rackhostnál maradna minden, VPS csomag kell (nem sima tárhely).
A telepítés lépései nagy vonalakban:

1. Node.js 20+ telepítése a szerverre.
2. A projekt felmásolása, `npm ci`, majd `npm run build`.
3. Az alkalmazás futtatása folyamatosan — PM2 vagy systemd szolgáltatásként
   (`npm start`, alapértelmezetten a 3000-es porton).
4. Nginx beállítása fordított proxyként a 80/443 portról a 3000-esre.
5. SSL-tanúsítvány Let's Encrypt-tel (certbot), automatikus megújítással.
6. A környezeti változók beállítása a szerveren.

Ez működőképes, de a szerver frissítése, a biztonsági javítások és a
tanúsítványmegújítás figyelése a tiéd marad.

---

## Amit élesítés előtt még érdemes elintézni

1. **Jogi szövegek véglegesítése** — az ÁSZF, a garanciális feltételek és az
   adatkezelési tájékoztató szögletes zárójeles helyei, valamint a jogi
   átnézés. Amíg ez nincs meg, figyelmeztető sáv látszik az oldalak tetején.
2. **`IP_HASH_SALT` cseréje** egyedi értékre.
3. **Székhely kérdése** — az elektronikus kereskedelmi törvény előírja a
   szolgáltató székhelyének feltüntetését. Jelenleg kérésre nincs kint.

## Élesítés után

1. **Google Search Console**: tulajdon hitelesítése, `sitemap.xml` beküldése.
2. **Google Cégprofil** létrehozása (lásd `docs/google-cegprofil.md`).
3. **Saját domain a Resendben** — a „Domains" menüben hitelesítve a
   `temakft.hu` domaint, a `LEAD_EMAIL_FROM` átírható `noreply@temakft.hu`
   címre. Ettől ritkábban kerül spambe az értesítés.
