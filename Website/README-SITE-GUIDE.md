# Plant-Based Prides — website guide

This is a plain HTML/CSS/JS website — no build tools, no server required. You can upload the whole `Website` folder as-is to any standard web hosting (upload via FTP/SFTP, or drag-and-drop into your host's file manager / cPanel "File Manager", into the site's root or `public_html` folder). `index.html` is the homepage and will load automatically.

## Folder structure

```
Website/
├── index.html                    Home
├── why.html                      Why?
├── take-action.html              Take Action (petition / email / campaign)
├── email-your-local-pride.html   Email template page
├── events.html                   Events
├── further-reading.html          Further Reading
├── impact-calculator.html        Full Impact Calculator
├── README-SITE-GUIDE.md          This file
└── assets/
    ├── css/style.css             All site styling
    ├── js/main.js                Nav menu + dropdown behaviour
    ├── js/calculator.js          Impact calculator maths (shared by home + full calculator)
    ├── js/events-data.js         ← THE EVENTS ADMIN FILE (see below)
    └── images/                   Logos, photos, favicons
```

## Adding / editing events (the "admin document")

Open **`assets/js/events-data.js`** in any plain text editor (Notepad, TextEdit, VS Code, etc. — not Word). Full instructions are written at the top of the file itself. In short: each event is a block like this —

```js
{
  title: "Brighton Pride 2026",
  date: "2026-08-01",
  location: "Brighton, UK",
  description: "A sentence or two about what's happening.",
  link: "https://example.com",
  linkLabel: "Event details",
},
```

Copy a block, edit the text, save, and re-upload the file to your host. The Events page sorts everything automatically and moves past events into a "Past events" section once their date has passed. Two example events are included — replace or delete them.

## Before you go live — three things to check

1. **Email template links.** On `email-your-local-pride.html`, each of the three template emails contains the placeholder `[insert Plant-Based Prides website link]`. Once the site has a live domain, update this to point at (for example) your Impact Calculator page, so people know where to send Pride organisers.
2. **Petition / sign-up links.** These currently point to `https://act.plantbasedbritain.org/plant_based_prides_petition` and `https://act.plantbasedbritain.org/plant_based_pride_sign_up`, taken from your source material — worth a quick click-through to confirm both are still live before launch.
3. **Tagline wording.** The homepage tagline was supplied as "...at higher risk from the affects of climate change..." — I've published it as "**effects** of climate change" (the correct word in this context). Flagging in case "affects" was intentional and you'd like it reverted.

## Brand colours

Sampled directly from your logo, and defined at the top of `assets/css/style.css` as CSS variables if you want to adjust them:

- Dark green (headings/wordmark): `#214001`
- Leaf green (buttons/links): `#4BAB13`
- Deep green (accents): `#029246`
- Charcoal (body text): `#3D3D3D`
- Progress Pride flag stripe (decorative top border): red `#EE1E25`, orange `#F59121`, yellow `#FEDB0E`, green `#029246`, navy `#232262`, purple `#804096`, light blue `#61CDF4`, pink `#F7AAB6`

## The Impact Calculator

The old accreditation system (None/Bronze/Silver/Gold) has been replaced with three plant-based commitment tabs — 100% (default), 60% and 30% — on both the homepage mini-calculator and the full `impact-calculator.html` page. The maths and its sources are documented as comments at the top of `assets/js/calculator.js`, and explained in plain English in the "Methodology" section at the bottom of the Impact Calculator page.

## Site background image

The soft colour wash behind the whole site comes from `assets/images/bg-tile.webp`, set as the background of the page "tile" (`.page-shell`) in `assets/css/style.css`. It's anchored to the top and repeats vertically, so short pages just show the top of it (cropped at the bottom), and on pages taller than it, it repeats seamlessly.

`bg-tile.webp` is generated from `assets/images/bg.png` (kept in the folder as the source file) — it's `bg.png` stacked on top of a vertical flip of itself, so that when it repeats down the page there's no visible seam (each mirrored half lines up perfectly with the next). If you replace `bg.png` with a new image, regenerate the tile with this Python snippet (needs the `Pillow` package: `pip install Pillow`):

```python
from PIL import Image, ImageOps
im = Image.open("assets/images/bg.png").convert("RGBA")
w, h = im.size
tile = Image.new("RGBA", (w, h * 2))
tile.paste(im, (0, 0))
tile.paste(ImageOps.flip(im), (0, h))
tile.save("assets/images/bg-tile.webp", "WEBP", quality=85, method=6)
```

## Editing text or images generally

All page text lives directly in each `.html` file — search for the sentence you want to change and edit it in place. Photos and logos are in `assets/images/`; replace a file with a new one of the same name to swap an image without editing any HTML.
