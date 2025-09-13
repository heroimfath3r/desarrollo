import express from "express";

const app = express(); // ← primero debes inicializar express
const port = process.env.PORT || 3000;

// Rutas
app.get("/", (_req, res) => {
  res.json({
    message: "Hello Cloud ☁️",
    docs: ["/health", "/version"]
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/Gumfire", (_req, res) => {
  res.json({ status: "Buena suerte Gumfire", uptime: process.uptime() });
});

app.get("/pong", (_req, res) => {
  res.json({ pong: true, at: new Date().toISOString() });
});

app.get("/version", (_req, res) => {
  res.json({ name: "Juan Camilo / Carlos Muñoz / Harnol Cubides", version: "1.0.0" });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
