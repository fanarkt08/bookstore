const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();

// Toutes les requêtes passent désormais par l'API Gateway (plus d'appel direct au microservice)
const GATEWAY_URL = process.env.GATEWAY_URL || "http://localhost:9001";

router.get("/", function (req, res) {
    fetch(`${GATEWAY_URL}/books`)
        .then((response) => response.json())
        .then((json) =>
            res.render("inventory", {
                books: json,
            })
        )
        .catch((err) => {
            console.error("Erreur inventory:", err.message);
            res.render("inventory", { books: [] });
        });
});

router.post("/add", function (req, res) {
    fetch(`${GATEWAY_URL}/books`, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => res.redirect("/inventory"))
        .catch((err) => {
            throw err;
        });
});

module.exports = router;
