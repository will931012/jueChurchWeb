# Iglesia Web

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
