# Slaagsnel: klantmap

Klant van JM Websites: Rijschool Slaagsnel. Wat we bouwden: de one-pager met inschrijfformulier op slaagsnel.nl, in `sites/slaagsnel/`. Deze map **is de git-repo** (`joris1013/Slaagsnel`): klantkennis in de root, de site in `sites/slaagsnel/`, één geschiedenis.

Stand: stil sinds 22 februari 2026. Eén SEO-run in juni 2026.

## Hoe deze map werkt

- `CLIENT.md`: wie de klant is, afspraken, domeinen, accounts, log.
- `HANDOFF.md`: startpunt voor de volgende sessie. Lees dit eerst.
- `meetings/`: gespreksverslagen en transcripten (nog leeg).
- `seo/`: rapporten van de SEO-run. `latest.md` is het laatste rapport, `_history.md` de historie, `2026-06/` de run van juni met de klantversie `acties-klant.md`. Laat ze zoals ze zijn.
- `sites/slaagsnel/`: de site (Next.js, Vercel). **Eigen `CLAUDE.md`; lees die voordat je daar werkt.** De bouwstaat (`STATUS.md`, `OPEN-PUNTEN.md`, `WERKWIJZE.md`, `BOUWLOG.md`) leeft daar, niet hier.

Komt er materiaal van de rijschool binnen (reviews, foto's, veelgestelde vragen), dan hoort het in `aangeleverd/`; mails en appjes aan de klant in `berichten/`.

## Harde regels

- **De repo is de enige bron.** Een document hier verwijst nooit naar een bestand buiten de repo: niet naar een vault, niet naar Claude's geheugen, niet naar een pad op een pc. Staat iets alleen daar, dan schrijf je het hier op.
- Geen secrets in deze map: geen wachtwoorden, toegangscodes, tokens of inhoud van `.env`. Env-vars alleen bij naam. `.env*` staat in de `.gitignore`; houd dat zo.
- Geen gegevens van leerlingen of aanvragers in de repo.
- Geen verwijzingen naar werk buiten JM Websites.
- Deze repo is privé.
- Push naar `main` is een productie-deploy van slaagsnel.nl. Werk op een branch, test, en merge pas na akkoord.
