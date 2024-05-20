const { Router } = require("express");
const { Publish } = require("../db");
const router = Router();

const postPublish = async (req, res) => {
  try {
    const { namePublish, carrer, enterprise, perfilDescription, task, offer, otherDescription, image } = req.body;
    
    // Verificar si ya existe una publicación con el mismo nombre
    const [newPublish, created] = await Publish.findOrCreate({
      where: { namePublish },
      defaults: {
        carrer, enterprise, perfilDescription, task, offer, otherDescription, image
      }
    });

    if (created) {
      res.status(201).json(newPublish);
    } else {
      res.status(200).json({ message: "Publicación ya existe", newPublish });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

router.post('/publish', postPublish);

module.exports = router;
