const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();

const GATEWAY_URL = process.env.GATEWAY_URL || "http://localhost:9001";

// Liste des paiements
router.get("/", function (req, res) {
    fetch(`${GATEWAY_URL}/payments`)
        .then((response) => response.json())
        .then((payments) =>
            res.render("payments", {
                payments,
            })
        )
        .catch((err) => {
            console.error("Erreur payments:", err.message);
            res.render("payments", { payments: [] });
        });
});

// Formulaire de paiement : on propose les commandes encore PENDING
router.get("/new", function (req, res) {
    fetch(`${GATEWAY_URL}/orders?filter[where][status]=PENDING`)
        .then((response) => response.json())
        .then((orders) =>
            res.render("payment-new", {
                orders,
            })
        )
        .catch((err) => {
            console.error("Erreur payment-new:", err.message);
            res.render("payment-new", { orders: [] });
        });
});

// Création d'un paiement : on crée le paiement PUIS on marque la commande comme payée
router.post("/add", function (req, res) {
    const { orderId, amount, method } = req.body;

    fetch(`${GATEWAY_URL}/payments`, {
        method: "POST",
        body: JSON.stringify({
            orderId,
            amount: Number(amount) || 0,
            method: method || "CARD",
            status: "SUCCESS",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() =>
            // Une fois le paiement enregistré, on met à jour le statut de la commande
            fetch(`${GATEWAY_URL}/orders/${orderId}`, {
                method: "PATCH",
                body: JSON.stringify({ status: "PAID" }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        )
        .then(() => res.redirect("/payments"))
        .catch((err) => {
            throw err;
        });
});

module.exports = router;
