# SurvCalc Pro and Construction Layout & Survey Control

Web versions of the SurvCalc Pro calculator and the course textbook for the Construction Management surveying courses at Community College of Aurora and Metropolitan State University of Denver.

Developed by Jeff Weygandt, PLS. R&R Engineers | Surveyors.

## Addresses

- Calculator: https://weygandt.github.io/survcalc/
- Textbook: https://weygandt.github.io/survcalc/book/

If the repository lives in an organization instead of the weygandt account, replace `weygandt` with the organization name.

## What is in here

| File | What it is |
|---|---|
| `index.html` | The calculator |
| `manifest.webmanifest` | Name and icon used when a phone adds it to the home screen |
| `sw.js` | Offline support for the calculator |
| `icons/` | Calculator home screen icons |
| `book/index.html` | The textbook |
| `book/manifest.webmanifest`, `book/sw.js`, `book/icons/` | Same three things for the textbook |

## Updating

1. Upload the new `index.html` (or `book/index.html`) with the same name. Use **Add file > Upload files**, then **Commit changes**.
2. Open `sw.js` (or `book/sw.js`), click the pencil to edit, and change the date in the `VERSION` line, for example `2026-11-21a` to `2027-01-10a`. Commit.
3. Phones pick up the new version the next time they open it with internet. It shows on the open after that.

## Notes

- GitHub Pages sites are public, even when the repository is private. Both pages tell search engines not to list them, but anyone with the link can open them.
- Values students type are stored only on their own device.
