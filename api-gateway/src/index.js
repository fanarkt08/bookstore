const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 9001;

// URLs internes des microservices. En local (npm start) elles pointent sur
// localhost ; dans docker-compose elles sont surchargées avec les noms de
// service (ms-books, ms-orders, ms-payments).
const BOOKS_SERVICE_URL = process.env.BOOKS_SERVICE_URL || "http://localhost:3000";
const ORDERS_SERVICE_URL = process.env.ORDERS_SERVICE_URL || "http://localhost:3001";
const PAYMENTS_SERVICE_URL = process.env.PAYMENTS_SERVICE_URL || "http://localhost:3002";

app.use(morgan("dev"));

// Petit endpoint de santé pour vérifier que la gateway répond
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    routes: {
      "/books": BOOKS_SERVICE_URL,
      "/orders": ORDERS_SERVICE_URL,
      "/payments": PAYMENTS_SERVICE_URL,
    },
  });
});

// Routage vers Inventory / Books (ms-books, port 3000)
app.use(
  "/books",
  createProxyMiddleware({
    target: BOOKS_SERVICE_URL,
    changeOrigin: true,
  })
);

// Routage vers Order (ms-orders, port 3001)
app.use(
  "/orders",
  createProxyMiddleware({
    target: ORDERS_SERVICE_URL,
    changeOrigin: true,
  })
);

// Routage vers Payment (ms-payments, port 3002)
app.use(
  "/payments",
  createProxyMiddleware({
    target: PAYMENTS_SERVICE_URL,
    changeOrigin: true,
  })
);

app.use((req, res) => {
  res.status(404).json({ error: `No route found for ${req.method} ${req.originalUrl}` });
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
  console.log(`  /books    -> ${BOOKS_SERVICE_URL}`);
  console.log(`  /orders   -> ${ORDERS_SERVICE_URL}`);
  console.log(`  /payments -> ${PAYMENTS_SERVICE_URL}`);
});
