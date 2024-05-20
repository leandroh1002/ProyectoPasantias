const { Router } = require("express");
const { Publish } = require("../db");
const router = Router();

const getPublish = async (req, res) => {
    try {
        const publish = await Publish.findAll({
        });

        res.status(200).json(publish);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};

module.exports = getPublish;
