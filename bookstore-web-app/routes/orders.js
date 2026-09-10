const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();

const GATEWAY_URL = process.env.GATEWAY_URL || "http://localhost:9001";

// Liste des commandes
router.get("/", function (req, res) {
    fetch(`${GATEWAY_URL}/orders`)
        .then((response) => response.json())
        .then((orders) =>
            res.render("orders", {
                orders,
            })
        )
        .catch((err) => {
            console.error("Erreur orders:", err.message);
            res.render("orders", { orders: [] });
        });
});

// Formulaire de création : on a besoin de la liste des livres disponibles (via la gateway -> ms-books)
router.get("/new", function (req, res) {
    fetch(`${GATEWAY_URL}/books`)
        .then((response) => response.json())
        .then((books) =>
            res.render("order-new", {
                books,
            })
        )
        .catch((err) => {
            console.error("Erreur order-new:", err.message);
            res.render("order-new", { books: [] });
        });
});

// Création d'une commande
router.post("/add", function (req, res) {
    const { bookId, bookTitle, customerName, quantity } = req.body;

    fetch(`${GATEWAY_URL}/orders`, {
        method: "POST",
        body: JSON.stringify({
            bookId,
            bookTitle,
            customerName,
            quantity: Number(quantity) || 1,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => res.redirect("/orders"))
        .catch((err) => {
            throw err;
        });
});

module.exports = router;
