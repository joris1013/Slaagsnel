# HANDOFF: startpunt volgende sessie

Stand: 21 oktober 2026 (de klantrepo staat live; Joris' sessie). Eerste versie: 20 oktober 2026, bij het inrichten van de klantrepo.

## Waar je bent

- Dit is de klantrepo van Slaagsnel. De site staat in `sites/slaagsnel/`. Er loopt geen werk; de laatste inhoudelijke commit is van 22 februari 2026.
- Productie is `main` en dat is slaagsnel.nl. Sinds 21-10 staat `main` op `16b9e15` (was `abf08b8`, 22 februari 2026): `klantrepo` is gemerged en op 21-10 gepusht. De site zelf is niet veranderd; de ombouw verplaatste alleen bestanden. Bron: git.
- Vercel bouwt vanuit Root Directory `sites/slaagsnel`, productiebranch `main`. slaagsnel.nl en www.slaagsnel.nl serveren `16b9e15`, HTTP 200. Joris keek de preview van 20-10 na: "alles werkt goed". Bron: Vercel 21-10.
- In juni 2026 draaide één SEO-run. Kern: technisch schoon, maar nul organische zoekwoorden; de kans zit in stadspagina's (`seo/latest.md`).

## Wat er nu moet gebeuren, op volgorde

1. **Mason:** de repo binnenhalen (`git pull` op `main`), `.env.local` en `.vercel` in `sites/slaagsnel/` zetten en daar `npm install` draaien. Zijn open branches rebasen op `main` (de site staat nu in `sites/slaagsnel/`), als hij die heeft. Daarna zijn inlijfprompt voor de vault draaien, op branch `vault-slaagsnel`. Joris en Mason lezen na; niet mergen zonder akkoord.
2. **Joris:** nagaan of de SEO-acties van juni (`seo/2026-06/acties-klant.md`) naar de rijschool zijn gegaan, en of er een onderhoudsafspraak is. Dat bepaalt of wij de kleine technische punten oppakken. Zie `sites/slaagsnel/OPEN-PUNTEN.md`.
3. **Joris of Mason:** contact, afspraken en domeinbeheer aanvullen in `CLIENT.md`.

## Documentenkaart

- Root: `CLIENT.md` (wie en wat), dit bestand, `seo/`, `meetings/`.
- Site: `sites/slaagsnel/STATUS.md`, `OPEN-PUNTEN.md`, `WERKWIJZE.md`, `BOUWLOG.md`.

## Startprompt voor een verse chat

Lees `HANDOFF.md` in de root, daarna `STATUS.md`, `OPEN-PUNTEN.md` en `WERKWIJZE.md` in `sites/slaagsnel/`. Werk aan het eind van de sessie die drie bij.
