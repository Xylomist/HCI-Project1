# Harbor & Haze — Glassmorphic HCI Demo Site

A 4-page static site for a fictional sauna club. No build step: open `index.html` or host on GitHub Pages.

## Structure
`index.html` · `sessions.html` · `book.html` · `visit.html` · `css/style.css` · `js/app.js`

## HCI principles demonstrated
| Principle | Where |
|---|---|
| Consistency | Same nav, tokens and button styles on every page |
| Visibility of system status | Open/closed badge, `aria-current` nav, result count, booking total |
| Feedback | Toast messages, pressed filter state, confirmation panel |
| User control and freedom | Filters with "All", Clear form, Esc closes mobile menu |
| Error prevention and recovery | Date min, guest limits, inline plain-language errors, focus moves to first error |
| Recognition over recall | Session prefilled from the card you clicked |
| Fitts's law | 44–48px minimum targets, large primary actions |
| Hick's law | 3 sessions, 4 nav items, 4 form fields |
| Accessibility | Skip link, labels, ARIA live regions, visible focus, reduced motion, contrast and `backdrop-filter` fallbacks |
| Aesthetic and minimal design | One accent colour, glass used for surfaces only |

## Deploy to GitHub Pages
```
git init && git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then Settings → Pages → Deploy from branch `main` / root.
