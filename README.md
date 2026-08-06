# mudr.design — landing page

Statická jednostránka podle grafického návrhu. Bez build nástrojů — stačí otevřít `index.html`.

## Struktura

```
index.html        # obsah stránky
css/style.css     # kompletní styly (CSS proměnné nahoře v :root)
js/main.js        # mobilní menu + rok v patičce
assets/           # obrázky (zatím prázdné, viz níže)
```

## Jak si stránku prohlédnout

**Nejrychleji — `nahled.html`.** Jeden soubor, který má CSS i JavaScript vevnitř.
Stáhni ho samotný (*Raw → uložit jako*) a otevři dvojklikem. Funguje i bez internetu.
Je to jen náhled, needituj ho — generuje se z `index.html` a `css/style.css`.

**Ostrá verze — `index.html`.** Ta si CSS načítá ze souboru `css/style.css`,
takže potřebuje celou složku. Když stáhneš jen `index.html`, zobrazí se bez stylů.
Správně: *Code → Download ZIP*, rozbalit celé, otevřít `index.html`.

## Mapa stránky

Každá sekce v `index.html` je uvozená komentářem `<!-- ==== NÁZEV ==== -->`,
takže se dá rychle najít vyhledáním.

| # | Sekce v návrhu | HTML | CSS třída |
|---|---|---|---|
| 1 | logo, menu, fialové CTA | `<header class="site-header">` | `.site-header`, `.nav` |
| 2 | „Vaší značce nasadíme…" + vak + 5 služeb | `<section class="hero">` | `.hero`, `.hero__services` |
| 3 | „Co obsahuje naše infuze?" (8 ikon) | `#sluzby` | `.capabilities` |
| 4 | „Grafika sama o sobě neprodává." | `#o-nas` | `.split` |
| 5 | „Případy z praxe" (4 dlaždice) | `#prace` | `.cases`, `.case` |
| 6 | „Ne každá značka…" + „Grafika je jen začátek" | `.section--duo` | `.duo`, `.card`, `.tiles` |
| 7 | „Proč právě mudr.design?" (7 ikon) | `.section--light` | `.capabilities--7` |
| 8 | formulář „Připojte svou značku…" | `#kontakt` | `.contact`, `.contact__form` |
| 9 | patička | `<footer class="site-footer">` | `.site-footer` |

Ikony jsou inline SVG přímo v HTML (uvnitř `<span class="ico">`), ne obrázky —
mění se jim barva jedním CSS pravidlem a nic se nenačítá zvenčí.

## Co ještě chybí

Do `assets/` je potřeba doplnit obrázky z návrhu. HTML na ně už odkazuje:

| Soubor | Kde se používá |
|---|---|
| `hero-infuze.png` | hero — infuzní vak s ikonami + ruka |
| `ukazka-mockup.png` | sekce „Grafika sama o sobě neprodává" |
| `case-koma.jpg` | Případy z praxe — KOMA |
| `case-natural-oils.jpg` | Případy z praxe — Natural Oils |
| `case-app.jpg` | Případy z praxe — mobilní aplikace |
| `case-fitway.jpg` | Případy z praxe — FITWAY |
| `objekt-kriz.png` | sekce „Ne každá značka potřebuje stejnou léčbu" |

Dokud tam nejsou, zobrazí se prázdná místa s alt textem — layout drží.

## Barvy

Všechny jsou v `:root` na začátku `css/style.css`, takže se mění na jednom místě:

| Proměnná | Hodnota | Použití |
|---|---|---|
| `--c-purple` | `#6C3EE0` | tlačítka, zvýrazněná slova, ikony |
| `--c-purple-dark` | `#3B1B7A` | tmavá dlaždice FITWAY |
| `--c-accent` | `#E8663C` | znaky „+" a nadpisky sekcí |
| `--c-bg` / `--c-bg-light` | `#F2EDE7` / `#F7F4F0` | střídané pozadí sekcí |

Barvy jsou odečtené z návrhu odhadem — až budou k dispozici přesné hodnoty
z brand manuálu, stačí je přepsat tady.

## Co zbývá dodělat

- [ ] doplnit obrázky do `assets/`
- [ ] napojit formulář na odesílání (teď má `action="#"`)
- [ ] dekorativní vlnovka procházející stránkou (v návrhu vlevo) — zatím vynechána
- [ ] doplnit odkazy u případů z praxe a u dlaždic služeb
- [ ] ověřit finální font (teď Inter z Google Fonts)
