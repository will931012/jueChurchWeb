import express from "express";
import cors from "cors";

export function createApp() {
  const app = express();
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

  app.use(
    cors({
      origin: frontendUrl
    })
  );
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({
      ok: true,
      service: "iglesia-web-backend"
    });
  });

  app.get("/api/home", (_req, res) => {
    res.json({
      churchName: "Iglesia Comunidad de Fe",
      hero: {
        eyebrow: "Bienvenidos",
        title: "Una iglesia cercana, viva y con proposito.",
        description:
          "API inicial lista para mover el contenido del frontend a base de datos en futuras etapas."
      },
      contact: {
        email: "contacto@comunidaddefe.org",
        phone: "+1 (000) 000-0000"
      }
    });
  });

  return app;
}
