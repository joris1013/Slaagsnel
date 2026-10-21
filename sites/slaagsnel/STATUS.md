# Status: slaagsnel.nl

Laatst bijgewerkt: 21 oktober 2026 (de klantrepo staat live; Joris' sessie). Eerste ronde: 20 oktober 2026; Mason vult aan.

## Waar we staan

- **Live (`main`, `16b9e15` sinds 21 oktober 2026; de site zelf is ongewijzigd sinds `abf08b8`, 22 februari 2026):** de one-pager van Rijschool Slaagsnel op www.slaagsnel.nl: hero, voordelen, prijzen, examen, inschrijfformulier, contact en een WhatsApp-knop. Het formulier mailt naar de rijschool en stuurt de leerling een bevestiging (`src/app/api/inschrijven/route.ts`, `src/lib/email.ts`). In de footer de tag "Gemaakt door JM Websites". `slaagsnel.nl` stuurt door naar www (check 20 oktober: 307, daarna 200).
- **SEO-stand juni 2026:** technisch schoon (onpage 100 op 1 pagina), maar 0 organische zoekwoorden en 0 organisch verkeer. Geen robots.txt, geen llms.txt, geen canonical; 20 backlinks, vrijwel allemaal spam. Bron: `../../seo/latest.md`.
- **Af, niet live:** niets.
- **Loopt:** niets. De SEO-acties van juni zijn niet uitgevoerd (geen commits na 22 februari).
- **Klantrepo live sinds 21 oktober:** de repo is een klantrepo; de site staat in `sites/slaagsnel/` (`cb730a3`, pure verplaatsing), de SEO-rapporten in `../../seo/`. `klantrepo` ging op 21-10 naar `main` als `16b9e15` (was `abf08b8`). Vercel bouwt vanuit Root Directory `sites/slaagsnel`, productiebranch `main`. slaagsnel.nl en www.slaagsnel.nl serveren `16b9e15`, HTTP 200. Joris keek de preview van 20-10 na: "alles werkt goed". Bron: git; Vercel 21-10.

## Eerstvolgende stap

Mason: de repo binnenhalen en inrichten, daarna zijn inlijfprompt (`../../HANDOFF.md`, stap 1). Inhoudelijk: Joris besluit wat er met de SEO-acties gebeurt (`OPEN-PUNTEN.md`, sectie 2).

## Kerncijfers

- 12 commits op `main` van 12 tot en met 22 februari 2026, plus drie ombouwcommits van 20 oktober 2026 (`cb730a3`, `634b225`, `16b9e15`) (git).
- Laatste productie-deploy: 21 oktober 2026, `16b9e15` (Vercel 21-10); daarvoor 22 februari 2026. 3 env-vars in Vercel (Vercel-inventaris 20-10).
- SEO juni 2026: 0 zoekwoorden, 20 backlinks van 15 domeinen (14 nofollow), spam-score 43 van 100, AEO/GEO-cijfer C (`../../seo/latest.md`).
- Tests: geen.
