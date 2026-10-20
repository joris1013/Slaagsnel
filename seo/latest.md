Profile: deep

# SEO-rapport - slaagsnel (slaagsnel.nl)

- Site: Rijschool Slaagsnel
- Domein: slaagsnel.nl
- Maand: 2026-06
- Gegenereerd: 2026-06-02
- Data: DataForSEO (locatie Nederland, taal nl) + live HTML-check. Eerste run, dus geen MoM-deltas.
- Geschatte API-kosten: laag (deep run, 1 domein).

## Samenvatting

De site is technisch schoon (onpage-score 100/100), maar dat cijfer is misleidend: het gaat over 1 pagina, want slaagsnel.nl is een eenpagina-site (Next.js op Vercel). Het echte probleem is zichtbaarheid: de site rankt op 0 organische zoekwoorden in Google NL en vangt geen organisch verkeer. Voor een rijschool zit de hele markt in stadszoekopdrachten: "rijschool utrecht" (6.600/mnd), "rijschool amsterdam" (2.900), "rijschool den haag" (2.400), "rijschool rotterdam" (1.900). De site noemt nergens een stad en bestaat uit 1 pagina, dus hij pakt hier niets van. De grootste hefboom deze maand is een vaste lesregio kiezen en daar indexeerbare stad- en dienstpagina's voor bouwen. Daarnaast ontbreken robots.txt en llms.txt, is er geen FAQ/uitgebreide schema, en is het backlinkprofiel vrijwel volledig SEO-spam.

| Metric | Waarde |
|---|---|
| Organische zoekwoorden | 0 |
| Top 3 / 10 / 100 | 0 / 0 / 0 |
| Geschatte organische traffic | 0 / maand |
| Backlinks | 20 |
| Verwijzende domeinen | 15 (14 nofollow) |
| Backlink spam-score | 43 / 100 |
| Onpage-score (crawl) | 100 / 100 (1 pagina) |
| Pagina's gecrawld | 1 |
| AEO/GEO-grade | C (~60) |

## Rankings & zichtbaarheid

Geen organische rankings in de DataForSEO NL-index: 0 zoekwoorden in top 100, geen geschatte traffic, geen concurrenten-overlap (de competitors-call gaf niets terug omdat er geen gedeelde rankings zijn). Dit is de kernbevinding. De site is vindbaar op de merknaam, maar vangt niets op generieke, koopgerichte zoekopdrachten.

Marktkans (zoekvolume NL, waar de site nu niets van pakt):

| Zoekterm | Volume/mnd | CPC | KD |
|---|---|---|---|
| rijschool | 14.800 | EUR 4,06 | 54 |
| rijschool utrecht | 6.600 | EUR 5,36 | 22 |
| rijschool amsterdam | 2.900 | EUR 8,34 | 19 |
| anwb rijschool | 2.900 | EUR 1,23 | 8 |
| rijschool den haag | 2.400 | EUR 8,34 | 32 |
| rijschool rotterdam | 1.900 | EUR 7,57 | 31 |
| motor rijschool | 1.900 | EUR 2,84 | 9 |
| rijschool eindhoven | 1.600 | EUR 7,41 | 31 |
| rijschool leiden | 1.600 | EUR 6,29 | 17 |
| rijschool slagingspercentage | 1.600 | EUR 0,09 | 14 |
| rijschool automaat | 880 | EUR 3,16 | 0 |

De zoekvraag is overweldigend stad-gericht. De generieke term "rijschool" is groot (14.800) maar hard (KD 54) en bovendien een lokaal-pack-zoekopdracht waar Google een Maps-resultaat toont. De winst zit in concrete steden met haalbare difficulty. 100 long-tail suggesties opgehaald, 7 direct gerelateerde termen.

## Technische gezondheid

Crawl vond 1 pagina, onpage-score 100. Schoon, maar dat is omdat er weinig te crawlen valt:

- Server Vercel, HTTPS geldig, HTTP/2 aan, sitemap.xml aanwezig (1 URL, lastmod feb 2026). Geen 4xx/5xx, geen broken links, geen broken resources, geen non-indexable pagina's.
- Geen robots.txt: het pad geeft de SPA-404 terug (Next.js fallback met noindex). Crawlers krijgen geen expliciete instructies en geen verwijzing naar de sitemap.
- Eenpagina-site: 0 interne links geteld, navigatie loopt via ankers op de homepage. Er zijn geen aparte URL's per dienst of stad.
- Homepage: titel "Rijschool Slaagsnel | Betaalbare Rijlessen - Snel je Rijbewijs" (62 tekens, net aan de lange kant), description 163 tekens (iets te lang), H1 aanwezig, nette H2/H3-structuur, 472 woorden.
- Lage tekst-ratio (veel code, weinig leesbare tekst) en render-blocking resources op de homepage. Image title-attribuut ontbreekt op afbeeldingen (alt-teksten staan er wel).
- Geen canonical link tag in de head (alleen og:url aanwezig).

## Backlinks

Zwak en vrijwel volledig spam:

- 20 backlinks van 15 verwijzende domeinen, waarvan 14 nofollow.
- Spam-score 43/100. De verwijzende domeinen zijn vooral link-shortener- en junk-TLD's (.party, .world, .fyi, .agency, .cloud, .pages.dev) plus losse rommel.
- Twee anchors zijn letterlijk reclameteksten van backlink-verkopers ("Skyrocket your Ahrefs DR... Visit SeoBoost.agency", "Visit BuySeoLink.com"). Dit is geen organisch profiel, dit is spam die zichzelf aanmeldt.
- Enige half-echte verwijzing: yoys.nl (bedrijvengids). klantkompas.com is de enige niet-nofollow vermelding.
- Eerste backlink gezien 2023-11-14. Geen verloren links.

Netto: er is geen autoriteit opgebouwd, en wat er staat is grotendeels ongevraagde spam. Zonder een paar kwalitatieve, lokale links wordt ranken op stadstermen lastig.

## AEO/GEO (vindbaarheid in AI-antwoorden)

Grade C (~60/100). Gemengd beeld:

- Sterk: JSON-LD aanwezig (DrivingSchool met naam, beschrijving, telefoon, priceRange, 2 Offers), volledige Open Graph + Twitter cards, meta description/author/keywords, robots index/follow, nette H1 -> H2 -> H3 zonder sprongen, alt-teksten op afbeeldingen.
- Zwak: geen llms.txt, geen echte robots.txt, schema beperkt tot 1 type (geen LocalBusiness met adres, geen aggregateRating, geen FAQPage), geen FAQ-secties, geen zichtbare datums, content is verkoopgericht in plaats van antwoord-eerst, en als eenpagina-site is er geen interne contentstructuur om uit te citeren.

GEO prompt-targets (vragen waar de site op gevonden zou moeten worden in ChatGPT/AI Overviews):

- "beste rijschool in <stad>"
- "wat kost een rijbewijs halen"
- "rijschool met hoog slagingspercentage <stad>"
- "rijschool met vaste prijs tot je rijbewijs"
- "snel je rijbewijs halen rijschool"

Nu wordt de site op geen van deze genoemd.

## Concurrenten & content gap

Geen data: omdat de site zelf nergens op rankt, geeft DataForSEO geen concurrenten-overlap en is een content-gap-analyse niet mogelijk deze ronde. Zodra er eerste rankings zijn (na de stad- en dienstpagina's), wordt dit bij de volgende deep run wel ingevuld.

## Acties (zie acties-klant.md voor de klantversie)

Kort, intern, op prioriteit:

1. (critical) Kies een vaste lesregio en bouw indexeerbare stad- en dienstpagina's ("rijschool <stad>", "rijlessen <stad>", "automaat", "spoedcursus"). Dit is de hefboom.
2. (high) Maak van de eenpagina-site echte onderpagina's met eigen URL's per dienst en stad.
3. (high) Backlinks opschonen (disavow spam) en een paar kwalitatieve, lokale NL-links opbouwen.
4. (medium) Voeg een echte robots.txt + llms.txt toe.
5. (medium) Breid schema uit (LocalBusiness met adres, aggregateRating, FAQPage), voeg FAQ + antwoord-eerst content + datums toe (AEO).
6. (low) Voeg canonical toe in de head; los render-blocking resources en ontbrekende image title-attributen op; kort titel/description licht in.
