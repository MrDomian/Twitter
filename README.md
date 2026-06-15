## Twitter w Next.js

Klon Twittera zbudowany z Next.js, Tailwind CSS, Sanity CMS i NextAuth.

### Uruchomienie lokalne

1. Zainstaluj zależności:
   ```bash
   npm install
   ```

2. Skopiuj plik konfiguracyjny i uzupełnij klucze:
   ```bash
   cp .env.local.example .env.local
   ```

3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```

4. Otwórz [http://localhost:3000](http://localhost:3000)

### Wymagane zmienne środowiskowe

| Zmienna | Opis |
|---------|------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID projektu Sanity (domyślnie: `nv2z3ypa`) |
| `SANITY_API_TOKEN` | Token z uprawnieniami zapisu (Sanity → API → Tokens) |
| `NEXTAUTH_SECRET` | Losowy sekret (`openssl rand -base64 32`) |
| `TWITTER_CLIENT_ID` | Klucz OAuth z Twitter Developer Portal |
| `TWITTER_CLIENT_SECRET` | Sekret OAuth z Twitter Developer Portal |

### Funkcje

- Wyświetlanie tweetów z Sanity CMS
- Publikowanie tweetów (po zalogowaniu przez Twitter)
- Komentarze pod tweetami
- Responsywny layout (mobile nav, ukryte widgety na małych ekranach)
- Panel boczny z nawigacją i logowaniem

### Sanity Studio

Panel CMS znajduje się w folderze `twitter4fun-sanity/`:

```bash
cd twitter4fun-sanity
npm install
npm run start
```
