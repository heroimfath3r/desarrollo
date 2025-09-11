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

app.get("/version", (_req, res) => {
  res.json({ name: "hello-cloud", version: "1.0.0" });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
