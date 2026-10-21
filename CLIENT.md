# Slaagsnel

Laatst bijgewerkt: 21 oktober 2026 (de klantrepo staat live; Joris' sessie). Eerste ronde: 20 oktober 2026; Mason vult aan.

## Wie

- **Rijschool Slaagsnel.** Rijlessen van 80 minuten, alle examenroutes, een vast bedrag tot aan het rijbewijs. Bron: `sites/slaagsnel/src/lib/constants.ts`.
- **Contactpersoon:** staat niet in de repo. Het WhatsApp-nummer van de rijschool staat in `sites/slaagsnel/src/lib/constants.ts`. Open vraag in `sites/slaagsnel/OPEN-PUNTEN.md`.

## Afspraken

- **Opdracht:** een one-pager met inschrijfformulier. Gebouwd in februari 2026 door Joris en Mason (commits van allebei, git). Onderaan staat de tag "Gemaakt door JM Websites" met een link (`abf08b8`).
- **SEO:** één run in juni 2026 (`seo/2026-06/`); daarna is de maandelijkse run uitgezet (bron: Joris' klantkaart van 1 juni 2026). De klantversie van de acties staat in `seo/2026-06/acties-klant.md`; of die naar de klant is gegaan, staat niet in de repo.
- **Prijs, hosting, onderhoud en facturen:** onbekend. De oude klantkaart had alleen "facturatie via JM Websites". Open vraag. Het SEO-rapport labelt een deel van de acties als "binnen onderhoud" en een deel als "offerte"; of er een onderhoudsafspraak is, is dus van belang.

## Domeinen

- `slaagsnel.nl` en `www.slaagsnel.nl` hangen aan het Vercel-project `slaagsnel` (Vercel-inventaris 20-10).
- Bij een check op 20 oktober stuurde `slaagsnel.nl` door naar `www.slaagsnel.nl` (HTTP 307) en gaf `www.slaagsnel.nl` een 200.
- Wie het domein geregistreerd heeft en de DNS beheert: onbekend. Open vraag.

## Accounts en toegang (zonder secrets)

- **GitHub:** `joris1013/Slaagsnel`.
- **Vercel:** project `slaagsnel` op account joris1013, één team met Joris als enige lid. Previews achter Vercel Authentication. Bron: Vercel-inventaris 20-10.
- **Mail:** het inschrijfformulier verstuurt via Gmail-SMTP met `EMAIL_USER`, `EMAIL_PASS` en `EMAIL_TO`: een mail naar de rijschool en een bevestiging naar de leerling (`sites/slaagsnel/src/lib/email.ts`). Welk Gmail-account: onbekend.
- **Google Bedrijfsprofiel:** het SEO-rapport vraagt om toegang, of om er samen een aan te maken (`seo/2026-06/acties-klant.md`). Stand onbekend.

## Vercel-projecten

| Project | Repo | Domeinen | Prod-branch | Laatste productie | Env-vars |
|---|---|---|---|---|---|
| `slaagsnel` | `joris1013/Slaagsnel` | slaagsnel.nl, www.slaagsnel.nl | `main` | 21 oktober 2026 (`16b9e15`); inhoudelijk 22 februari 2026 | 3 |

Bron: Vercel-inventaris 20-10; de laatste productie: Vercel 21-10. Het project bouwt vanuit Root Directory `sites/slaagsnel`, productiebranch `main` (Vercel 21-10).

## Log

| Datum | Wat | Bron |
|---|---|---|
| 2026-10-21 | Klantrepo live: `klantrepo` naar `main` (`16b9e15`), Vercel bouwt vanuit `sites/slaagsnel` | git, Vercel 21-10 |
| 2026-10-20 | Ombouw naar klantrepo: site naar `sites/slaagsnel/`, SEO-rapporten in `seo/` | `cb730a3` |
| 2026-06-02 | Eerste SEO-run (deep); maandelijkse run daarna uitgezet | `seo/2026-06/report.md`, `seo/_history.md` |
| 2026-02-22 | Tag "Gemaakt door JM Websites" in de footer; laatste inhoudelijke productie-deploy | `abf08b8` |
| 2026-02-16 | Werkend inschrijfformulier met mail, favicon, prijskaarten | `f75a0e3`, `1d9d31a` |
| 2026-02-12 | Start en eerste volledige versie | `cf16590`, `1a9730c` |
