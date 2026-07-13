# Ideal Detailing

Mobile-first landing and appointment-booking boilerplate for a mobile car detailing company.

## Stack

- SvelteKit 2 and Svelte 5 with TypeScript
- Vercel adapter
- Installable PWA with offline caching
- Cal.com-ready booking route

## Local development

```sh
npm install
cp .env.example .env
npm run dev
```

Set `VITE_CALCOM_URL` to a public Cal.com event URL to activate the embedded booking calendar.

## Pricing content

Package prices, service lists, add-ons, the monthly subscription, and value propositions are stored in `src/lib/pricing.ts`. The single landing page renders that data once through reusable Svelte components. Navigation uses section anchors, while legacy `/pricing` and `/book` links redirect to the matching section.

## Quality checks

```sh
npm run check
npm run lint
npm run build
```

## Deployment

Import the GitHub repository into Vercel. SvelteKit is detected automatically and the included Vercel adapter handles the production build.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.16.3 create --template minimal --types ts --add prettier eslint sveltekit-adapter="adapter:vercel" --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
