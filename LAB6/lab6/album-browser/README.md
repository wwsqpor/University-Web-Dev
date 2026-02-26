# Album Browser — Lab 6: Routing & HTTP

A multi-view Angular SPA that lets you browse, view, edit, and delete albums from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

## Features

- 📚 Browse 100 albums in a scrollable list
- 🔍 View album details and edit the title (PUT)
- 🖼️ Browse a responsive photo grid for each album
- 🗑️ Delete albums from the list (DELETE)
- 🔗 Full client-side routing with Angular Router
- ⏳ Loading indicators and empty/error states

## Routes

| Path | Component |
|------|-----------|
| `/home` | HomeComponent |
| `/about` | AboutComponent |
| `/albums` | AlbumsComponent |
| `/albums/:id` | AlbumDetailComponent |
| `/albums/:id/photos` | AlbumPhotosComponent |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI: `npm install -g @angular/cli`

### Installation

```bash
# Clone the repo and navigate into the project
cd lab6/album-browser

# Install dependencies
npm install

# Start the dev server
npm start
```

Then open your browser at **http://localhost:4200**

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── models/
│   │   ├── album.model.ts      # Album interface
│   │   └── photo.model.ts      # Photo interface
│   ├── services/
│   │   └── album.service.ts    # AlbumService (all HTTP calls)
│   ├── components/
│   │   ├── home/               # Welcome page
│   │   ├── about/              # About page
│   │   ├── albums/             # Album list with delete
│   │   ├── album-detail/       # Album detail + edit title
│   │   └── album-photos/       # Photo grid
│   ├── app.component.*         # Root component + navbar
│   ├── app.routes.ts           # Route configuration
│   └── app.config.ts           # App providers (HttpClient, Router)
└── main.ts                     # Bootstrap
```

## API

All data comes from **JSONPlaceholder** (free fake REST API):

- `GET /albums` — all albums
- `GET /albums/:id` — single album
- `GET /albums/:id/photos` — album photos
- `PUT /albums/:id` — update album (simulated)
- `DELETE /albums/:id` — delete album (simulated)

> Note: JSONPlaceholder simulates mutations — changes do not persist server-side, but the UI updates locally.

## Course Info

- **Course:** Web Development
- **Lab:** Lab 6 — Routing & HTTP
