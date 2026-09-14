# Iglesia Web

## Deploy to Vercel

Import `will931012/jueChurchWeb` at https://vercel.com/new and use:

- Root Directory: `frontend`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

Deploy the `main` branch. The `frontend/vercel.json` configuration supports
direct visits and refreshes on routes such as `/es`, `/en`, and `/es/visita`.
This deploys the frontend; its current pages do not require the Express backend.
Vercel provides an HTTPS URL after deployment.

Estructura inicial separada para crecer de forma ordenada:

- `frontend/`: React + Vite + Tailwind CSS
- `backend/`: Express API preparada para futura base de datos

## Comandos

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

## Siguiente paso recomendado

Conectar el frontend al backend para que textos como horarios, eventos y contacto
puedan venir desde la API y luego pasar a base de datos sin cambiar la estructura general.
