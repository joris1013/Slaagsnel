# Open punten: slaagsnel.nl

Laatst bijgewerkt: 21 oktober 2026 (de klantrepo staat live; Joris' sessie). Eerste ronde: 20 oktober 2026; Mason vult aan.

Dit is de enige open-lijst van Slaagsnel. De acties uit het SEO-rapport van juni 2026 staan hieronder; het rapport zelf blijft zoals het is. Opgeloste punten gaan naar sectie 4, met het antwoord.

## 1. Kennis of materiaal dat alleen de klant heeft

| Punt | Sinds | Wacht op | Bron |
|---|---|---|---|
| In welke stad of regio geeft de rijschool les en wil hij gevonden worden? Basis voor stad- en dienstpagina's; de rest van de SEO hangt eraan | 06-2026 | rijschool, via Joris | `../../seo/2026-06/acties-klant.md` |
| Reviews van leerlingen die we mogen tonen, slagingspercentage, foto's (instructeur, lesauto, geslaagden), veelgestelde vragen | 06-2026 | rijschool | `../../seo/2026-06/acties-klant.md` |
| Toegang tot het Google Bedrijfsprofiel, of er samen een aanmaken | 06-2026 | rijschool | `../../seo/2026-06/acties-klant.md` |
| Akkoord op welke spamlinks we laten negeren (disavow) | 06-2026 | rijschool | `../../seo/2026-06/acties-klant.md` |

## 2. Beslissingen voor Joris of Mason

| Punt | Sinds | Wacht op | Bron |
|---|---|---|---|
| Is `acties-klant.md` van juni naar de rijschool gestuurd? Zo niet: sturen, of het SEO-traject laten rusten | 06-2026 | Joris | `../../seo/2026-06/acties-klant.md` |
| Afspraken vastleggen in `../../CLIENT.md`: prijs, hosting, onderhoud, facturen. Bepaalt of de "binnen onderhoud"-acties (robots.txt, llms.txt, canonical, schema met FAQ, titel en omschrijving inkorten) voor onze rekening zijn | 20-10 | Joris of Mason | `../../seo/2026-06/acties-klant.md` |
| Offerte voor stad- en dienstpagina's en echte onderpagina's (de grootste hefboom volgens het rapport)? | 06-2026 | Joris, na de regio van de klant | `../../seo/2026-06/report.md` |
| Contactpersoon en contactgegevens bij de rijschool staan niet in de repo | 20-10 | Joris of Mason | `../../CLIENT.md` |
| Wie heeft slaagsnel.nl geregistreerd en wie beheert de DNS? Welk Gmail-account verstuurt het formulier? | 20-10 | Joris of Mason | Vercel-inventaris 20-10, `src/lib/email.ts` |

## 3. Risico's die we bewust dragen

| Punt | Sinds | Wacht op | Bron |
|---|---|---|---|
| Het formulier hangt aan Gmail-SMTP met een app-wachtwoord. Vervalt dat, dan geeft het formulier een fout en komen er geen inschrijvingen binnen | 02-2026 | niemand; bij klachten eerst hier kijken | `src/lib/email.ts`, `src/app/api/inschrijven/route.ts` |
| Het formulier heeft geen captcha en geen rate-limit; spam kan zo in de mailbox van de rijschool komen | 02-2026 | niemand zolang er geen spam is | `src/app/api/inschrijven/route.ts` |
| Het backlinkprofiel is vrijwel helemaal spam (spam-score 43 van 100) | 06-2026 | akkoord rijschool (sectie 1) | `../../seo/latest.md` |
| Geen robots.txt: dat pad geeft de 404-pagina met noindex | 06-2026 | besluit afspraken (sectie 2) | `../../seo/latest.md` |

## 4. Opgelost (laatste drie maanden)

| Punt | Antwoord | Datum |
|---|---|---|
| (geen) | Er is sinds februari 2026 niet aan de site gewerkt. | 20-10 |
