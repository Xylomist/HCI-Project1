# Harbor & Haze — HCI Demo Site

A multi-page static prototype for a fictional waterfront sauna club. It demonstrates human-computer interaction principles through a consistent visual system, accessible navigation, session discovery and an interactive booking flow. There is no build step: open `index.html` in a browser or host the project on GitHub Pages.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Overview, session shortcuts and a preview of the visit flow |
| `about.html` | The sauna, plunge and rest spaces; the club's approach |
| `sessions.html` | Filter and compare the three session options |
| `book.html` | Interactive booking-form prototype with validation and a price summary |
| `first-visit.html` | What to bring, what to expect and common first-visit questions |
| `visit.html` | Opening hours, directions, contact information and FAQs |

Shared assets: `css/style.css` and `js/app.js`.

## Booking demo

The booking form is a front-end demonstration only. It does not send an email, save a booking or collect payment. The success message is generated in the browser so the form interaction can be explored without submitting personal information to a server.

## HCI principles demonstrated
| Principle | Where |
|---|---|
| Consistency | Same nav, tokens and button styles on every page |
| Visibility of system status | Open/closed badge, `aria-current` nav, result count, booking total |
| Feedback | Toast messages, pressed filter state, inline validation and confirmation panel |
| User control and freedom | Filters with "All", Clear form, Esc closes mobile menu |
| Error prevention and recovery | Date min, guest limits, inline plain-language errors, focus moves to first error |
| Recognition over recall | Session prefilled from the card you clicked |
| Fitts's law | 44–48px minimum targets, large primary actions |
| Hick's law | 3 session choices, grouped navigation, 4 booking fields |
| Accessibility | Skip link, labels, ARIA live regions, visible focus, reduced motion, and high-contrast support |
| Aesthetic and minimal design | Consistent solid surfaces, clear borders and a restrained accent palette |

## Deploy to GitHub Pages

Create an empty repository on GitHub, then run these commands from the project folder (replace the URL with your repository's URL):

```
git add .
git commit -m "Update Harbor & Haze site"
git remote add origin <your-repo-url>
git push -u origin main
```

If `origin` is already configured, skip `git remote add origin`. Then go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, and select `main` and `/(root)`.

## Try it locally

Open `index.html` in a browser and navigate through the pages. On the Sessions page, test each filter. On the Book page, try an incomplete form, a session selected from a session card, and the guest controls. On a narrow viewport, open the navigation menu and close it with Escape.
