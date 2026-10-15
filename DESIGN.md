# Brooke Primary PTFA website: design

Status: agreed 2026-10-15.

## Goal

PTFA volunteers with no technical background can change what the website
says (events, promotions, links, documents) without help from a developer.

## Decisions so far

| Question | Decision |
|---|---|
| Starting point | The Claude Design prototype (single self-unpacking `index.html`), ported by hand. The export itself is not kept as source. |
| Site technology | SvelteKit with `adapter-static`. Output is plain HTML, CSS and JS. |
| Hosting | Firebase Hosting, free Spark plan. No Cloud Functions. |
| Where volunteers edit content | A Google Sheet owned by the PTFA Google account. |
| AI help for volunteers | Gemini in Google Sheets, if the PTFA gets a Workspace plan that includes it. The site does not depend on it. |
| When the site reads the sheet | At build time. Visitors' browsers never fetch the sheet. |
| How the build reads the sheet | Sheets API with a Google Cloud service account. The sheet stays private, shared with that account. |
| How publishing starts | Volunteers click a button in the sheet. No schedule. |
| Preview before live | Two buttons: "Publish to preview" deploys to a Firebase Hosting preview channel; "Publish to live" updates the live site. |
| What "Publish to live" deploys | Exactly the build on the preview channel, copied to live with `firebase hosting:clone`. No rebuild. If the preview has expired (channels last at most 30 days) the run fails with "Nothing in preview to publish. Publish to preview first." The status area shows when preview and live were last published. |
| Past events and expired promotions | Volunteers remove them. No scheduled rebuild. |
| Firebase project | `tactical-racer-511622-r1`, in the PTFA Google Cloud account. Default site `tactical-racer-511622-r1.web.app`. |
| Links with no address yet | Not shown. The prototype linked them to "#". Donate, Easyfundraising, lottery, Facebook, WhatsApp, privacy and accessibility are hidden until real addresses are added. |
| Placeholder content | Not shown. The prototype's example events and promotions, "To be confirmed" committee and "Awaiting approved copy" documents are left out until real versions exist. |
| Pages | Home, About us, What's on, Get involved, Contact us, Privacy. Added after Goodstack (Google for Nonprofits verification) asked for sub-pages, the charity ID, a street address and a mission statement. |
| Charity identity on the site | Facts come from the Charity Commission register (src/lib/content/charity.ts): registered name, number, registered address, charitable objects as the mission, latest income and spending. Every page footer shows name, number and address. The public contact address is contact@brookeprimaryptfa.org.uk, as on the register. Trustees are not named on the site; About links to the register's trustee list. |
| How GitHub Actions signs in to Google | Workload identity federation, no stored keys. Provider `github/website-repo` accepts tokens only from repository `brooke-primary-ptfa/website`, branch `main`. They act as `website-publisher@tactical-racer-511622-r1.iam.gserviceaccount.com`, which has Firebase Hosting Admin and Service Usage Consumer. Checked 2026-10-15: a run started from another branch was refused at sign-in. |
| Code ownership | Public repo `brooke-primary-ptfa/website` in a GitHub organisation owned by the PTFA. |

## How content gets to the site

1. A volunteer edits the sheet, by hand or with Gemini.
2. They choose Website > Publish to preview, or Website > Publish to live,
   from a menu added to the sheet by a small Apps Script.
3. The script starts a GitHub Actions workflow (`workflow_dispatch`). It
   sends only the target (preview or live), never content.
4. The workflow reads every tab through the Sheets API and validates every
   row. The sheet is read in this one place only.
5. Each run ends in one of two states:
   - **Valid:** build and deploy to the chosen target.
   - **Invalid, or the sheet cannot be read:** deploy nothing. The target
     keeps its last good version.
6. The workflow writes the outcome back into a status area in the sheet:
   time, target, preview URL, or the tab, row and problem that stopped it.

The Apps Script holds a GitHub fine-grained token limited to running
Actions on this repo. Sheet editors can see it. It expires after at most a
year; the sheet shows a reminder a month before, and an expired token makes
the button show an error naming the cause.

## Guardrails on the sheet

- Sheets data validation on every column: date cells, dropdowns for fixed
  values, URL checks, required cells.
- A Check column on each tab: a formula that shows OK or names the problem.
- An Instructions tab describing each column and its allowed values.
- A shared Gem ("PTFA website editor") told to read the Instructions tab
  before any change. Optional; depends on the Workspace plan.

The build's validation is the guard that cannot be bypassed. The sheet's
guardrails exist so volunteers see problems before the build does.

## Content in the prototype

| Content | Fields in the prototype | Sheet tab |
|---|---|---|
| Events | weekday, day, month, title, time, location, price, accent colour, "helpers wanted" | Events |
| Promotions (carousel) | overline, title, text, button text, link, icon, colour | Promotions |
| Links | PTA Events, donate, Easyfundraising, lottery, Facebook, WhatsApp, email | Links |
| Documents | title, note, link | Documents |

Page copy (hero, "how to help" cards) stays in the code for now.

## Delivery slices

Each slice ends with the change live on the site.

1. **Port the page and deploy it by hand.** SvelteKit page that looks like
   the prototype, with content hard-coded. Remove preview-only controls
   (mobile frame, demo labels). Compress the hero photo; self-host fonts.
   Live at `<project-id>.web.app`.
2. **Deploy on push.** GitHub Action builds and deploys when `main` changes. Done 2026-10-15.
3. **Events from the sheet.** Build reads the Events tab, validates it, and
   fails naming tab, row and problem. Run on demand from GitHub.
   Past events drop off automatically.
4. **Publish buttons in the sheet.** Apps Script menu with preview and
   live; status written back into the sheet.
5. **Promotions from the sheet.**
6. **Links from the sheet.** Fills the donate, social and fundraising links
   that are empty in the prototype.
7. **Documents from the sheet.** Constitution, accounts, AGM minutes.
8. **Sheet guardrails.** Data validation, Check columns, Instructions tab,
   volunteer how-to guide.
9. **Custom domain** `brookeprimaryptfa.org.uk`.

## Open questions

None at present.
