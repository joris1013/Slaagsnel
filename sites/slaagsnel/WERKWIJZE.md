# Werkwijze: slaagsnel.nl

Laatst bijgewerkt: 20 oktober 2026 (eerste ronde, Joris' sessie bij de ombouw naar de klantrepo; Mason vult aan). Dit bestand is voor wat tijd kost om uit te zoeken: omgeving, valkuilen, patronen die werken.

## Bouwen, testen, deployen

- Werk vanuit `sites/slaagsnel/`: `npm install`, `npm run dev`, `npm run lint`, `npm run build`. Er zijn geen tests.
- Push naar `main` is een productie-deploy van slaagsnel.nl. Werk op een branch; previews staan achter Vercel Authentication.
- Na de ombouw bouwt Vercel vanuit Root Directory `sites/slaagsnel`. Een bestand in de root van de repo doet niets voor de build.
- Er zijn geen CI-workflows. Komt er een, dan in `.github/workflows/slaagsnel.yml` in de root.
- Het Vercel-team heeft één lid, joris1013 (Vercel-inventaris 20-10). Een commit van een andere auteur kan op BLOCKED komen te staan.

## Omgeving

- `.env.local` staat in `sites/slaagsnel/` en nooit in git: `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`. In Vercel staan 3 env-vars (Vercel-inventaris 20-10).
- Mail via Gmail (`service: "gmail"` in `src/lib/email.ts`); `EMAIL_PASS` is dus een app-wachtwoord van dat Gmail-account.
- Inhoud die vaak verandert (prijzen, navigatie, WhatsApp-nummer, site-URL) staat in `src/lib/constants.ts`. Sitemap: `src/app/sitemap.ts`.

## Valkuilen

- `README.md` is nog de standaardtekst van create-next-app; er staat niets specifieks in.
- Het is een one-pager: navigatie loopt via ankers (`#prijzen`, `#inschrijven`). Wie onderpagina's toevoegt, moet de navigatie en de sitemap meenemen.
- Testinzendingen van het formulier gaan echt naar de ontvangers in `EMAIL_TO`. Zonder `EMAIL_TO` valt de code terug op twee vaste adressen in `src/lib/email.ts`. Test lokaal met een eigen `EMAIL_TO`.
- Lokale `.next/` en `node_modules/` in de map zijn van februari en gitignored.

## Afspraken voor documenten

- Deze repo is de enige bron. Niet verwijzen naar een vault, Claude-geheugen of een pad op een pc.
- Geen gegevens van leerlingen of aanvragers in documenten.
- Aan het eind van elke sessie: `STATUS.md`, `OPEN-PUNTEN.md` en dit bestand bijwerken; grotere stappen ook in `BOUWLOG.md`.
