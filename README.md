# MusicFest 2025 · University Website Project

A multi-page festival website built with plain HTML, CSS and JavaScript for my university web development module.

**Live site:** https://h3nry2199.github.io/University-Website-Project/

![MusicFest home page](docs/screenshots/index.png)

## Pages

| Page | What it shows |
| --- | --- |
| [Home](Website/index.html) | Featured artists gallery, festival overview with an embedded venue map, and the festival theme |
| [Lineup](Website/lineup.html) | Artist cards with photos and descriptions |
| [Schedule](Website/schedule.html) | Performance timetable |
| [Tickets](Website/tickets.html) | Booking form with client-side validation |

| Lineup | Schedule | Tickets |
| --- | --- | --- |
| ![Lineup page](docs/screenshots/lineup.png) | ![Schedule page](docs/screenshots/schedule.png) | ![Tickets page](docs/screenshots/tickets.png) |

## Built with

- **HTML5** for page structure
- **CSS3** with Flexbox for the multi-column layout
- **JavaScript** for ticket form validation (name, email, phone, ticket quantity, payment method and terms)

## Project structure

```
Website/
├── index.html      Home page
├── lineup.html     Artist lineup
├── schedule.html   Performance schedule
├── tickets.html    Ticket booking form
├── styles.css      Shared styles for all pages
├── script.js       Form validation
└── images/         Artist photos
```

## Run locally

No build step is needed. Open `Website/index.html` in a browser, or serve the folder:

```bash
python3 -m http.server -d Website
```

The site deploys to GitHub Pages automatically on every push to `main` via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
