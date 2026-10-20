# Status: slaagsnel.nl

Laatst bijgewerkt: 20 oktober 2026 (eerste ronde, Joris' sessie bij de ombouw naar de klantrepo; Mason vult aan).

## Waar we staan

- **Live (`main`, `abf08b8`, 22 februari 2026):** de one-pager van Rijschool Slaagsnel op www.slaagsnel.nl: hero, voordelen, prijzen, examen, inschrijfformulier, contact en een WhatsApp-knop. Het formulier mailt naar de rijschool en stuurt de leerling een bevestiging (`src/app/api/inschrijven/route.ts`, `src/lib/email.ts`). In de footer de tag "Gemaakt door JM Websites". `slaagsnel.nl` stuurt door naar www (check 20 oktober: 307, daarna 200).
- **SEO-stand juni 2026:** technisch schoon (onpage 100 op 1 pagina), maar 0 organische zoekwoorden en 0 organisch verkeer. Geen robots.txt, geen llms.txt, geen canonical; 20 backlinks, vrijwel allemaal spam. Bron: `../../seo/latest.md`.
- **Af, niet live:** niets.
- **Loopt:** niets. De SEO-acties van juni zijn niet uitgevoerd (geen commits na 22 februari).
- **Ombouw (20 oktober):** de repo is een klantrepo geworden; de site staat in `sites/slaagsnel/` (`cb730a3`, pure verplaatsing), de SEO-rapporten in `../../seo/`. Branch `klantrepo` is nog niet gepusht of gemerged.

## Eerstvolgende stap

Joris' sessie: Root Directory in Vercel op `sites/slaagsnel`, `klantrepo` pushen, preview checken, mergen. Daarna Joris: besluiten wat er met de SEO-acties gebeurt (`OPEN-PUNTEN.md`, sectie 2).

## Kerncijfers

- 12 commits op `main` van 12 tot en met 22 februari 2026, plus de verhuiscommit (git).
- Laatste productie-deploy: 22 februari 2026; 3 env-vars in Vercel (Vercel-inventaris 20-10).
- SEO juni 2026: 0 zoekwoorden, 20 backlinks van 15 domeinen (14 nofollow), spam-score 43 van 100, AEO/GEO-cijfer C (`../../seo/latest.md`).
- Tests: geen.
