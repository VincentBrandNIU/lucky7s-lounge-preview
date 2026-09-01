# Lucky 7's Lounge

A website concept and future content platform for Lucky 7's Lounge, a small-town lounge in Somonauk, Illinois. The experience is designed around its antique speakeasy atmosphere, crafted cocktails, video gaming and slot machines, plastic-tip darts, Golden Tee, food, and frequent local events.

## Live preview

[View the current GitHub Pages preview](https://vincentbrandniu.github.io/lucky7s-lounge-preview/)

The preview currently presents three visual directions:

- **The Velvet Room** — the primary cocktail-forward concept
- **Main Street Social** — a warmer, community-focused direction
- **Lucky After Dark** — a bolder nightlife direction

## Project status

The repository currently builds as a static Next.js export and deploys automatically to GitHub Pages when `main` is updated. This makes it inexpensive and easy to share while the owner reviews the concepts.

The full application will expand the selected direction into a database-backed website with an intentionally lightweight content management system. GitHub Pages can continue hosting the static preview, but it cannot run a Next.js server, API routes, authentication, or PostgreSQL connections. The production application will therefore move to a server-capable platform such as Vercel, with PostgreSQL hosted by a compatible managed provider.

## Planned stack

- **Next.js** — application framework, routing, server rendering, and server actions/API endpoints
- **React** — reusable public-site and admin-interface components
- **TypeScript** — type-safe application code and content models
- **PostgreSQL** — menu items, categories, events, specials, site content, and admin data
- **Tailwind CSS** — styling and responsive layout
- **Lightweight CMS** — a protected, purpose-built admin area inside the Next.js application

An ORM, database provider, image-storage provider, and authentication solution will be selected when backend development begins. Keeping those choices open avoids locking the preview into infrastructure before the content workflow is confirmed with the owner.

## Planned features

### Public website

- Cocktail, beer, food, and appetizer menus
- Featured drinks and rotating specials
- Events calendar with event detail pages
- Gaming, plastic-tip darts, and Golden Tee information
- Hours, location, directions, contact details, and social links
- Mobile-first layouts, accessibility, SEO metadata, and social sharing images

### Lightweight CMS

- Secure staff sign-in
- Create, edit, publish, reorder, and temporarily hide menu items
- Manage menu categories, prices, descriptions, and availability
- Create and update events, recurring activities, and promotions
- Edit key homepage content without touching code
- Upload and manage promotional images
- Draft/published states and simple role-based access

## Suggested data model

- `users` and `roles`
- `menu_categories`
- `menu_items`
- `events`
- `specials`
- `media`
- `site_settings`

Menu prices should be stored as integer cents rather than floating-point values. Events should use timezone-aware timestamps, with `America/Chicago` as the display timezone.

## Getting started

### Requirements

- Node.js 22.13 or newer
- npm

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run lint
npm run build
```

The current build produces a static site in `out/`.

## Current routes

| Route | Concept |
| --- | --- |
| `/` | The Velvet Room |
| `/heritage/` | Main Street Social |
| `/after-dark/` | Lucky After Dark |

## Deployment

### Static preview

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes the static export to GitHub Pages. The Next.js configuration automatically applies the repository base path during GitHub Actions builds.

### Full application

When PostgreSQL and the CMS are introduced:

1. Remove `output: 'export'` and the GitHub Pages-specific base-path behavior from `next.config.ts`.
2. Provision PostgreSQL and configure environment variables outside source control.
3. Add database migrations, authentication, authorization, and media storage.
4. Deploy the Next.js application to a server-capable host.
5. Configure the production domain, backups, monitoring, and database connection security.

Do not expose database credentials through `NEXT_PUBLIC_*` variables or commit `.env` files.

## Development roadmap

1. Review the three concepts with the owner and select a visual direction.
2. Confirm the menu structure, event workflow, hours, contact information, and staff access needs.
3. Consolidate the chosen design into the production public site.
4. Add the PostgreSQL schema, migrations, and seed data.
5. Build authentication and the focused CMS dashboard.
6. Connect live menu, event, special, and homepage content.
7. Test mobile behavior, accessibility, permissions, backups, and publishing workflows.
8. Move production hosting off GitHub Pages and connect the final domain.

## Business information

**Lucky 7's Lounge**  
667 E Lasalle St  
Somonauk, IL 60552

## Repository

[VincentBrandNIU/lucky7s-lounge-preview](https://github.com/VincentBrandNIU/lucky7s-lounge-preview)
