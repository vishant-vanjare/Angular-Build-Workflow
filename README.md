# Vishant Vanjare | Portfolio (Angular)

A colourful, modern personal portfolio built with Angular (standalone components, signals, new control flow).

## Run locally

Requires Node.js 18.19+ (Node 20 recommended).

```bash
npm install
npm start
```

Open http://localhost:4200.

## Edit your content

Open `src/app/app.component.ts` and change the `skills`, `projects`, `roles` and `github` values at the top of the class.

## Build

```bash
npm run build
```

Output goes to `dist/vishant-portfolio/browser`.

## Deploy to GitHub Pages

1. Push this project to the `main` branch of your GitHub repository.
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push.

Your site will be at `https://<your-username>.github.io/<repository-name>/`.
