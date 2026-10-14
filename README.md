# Brooke Primary PTFA website

Static SvelteKit site hosted on Firebase Hosting. See DESIGN.md for how it
works and what is planned.

Needs Node.js 22.17 or newer.

```
npm install
npm run dev            # local development server
npm test               # build, then test the built site
npm run deploy:preview # test, then deploy to the "preview" channel (30 days)
npm run deploy:live    # test, then deploy to the live site
```

Deploying needs `npx firebase login` first, with a Google account that has
access to the `tactical-racer-511622-r1` Firebase project.
