const { Router } = require("express");
const { Publish } = require("../db");
const router = Router();

const getPublishById = async (req, res) => {
  const { idPublish } = req.params;

  try {
    const publish = await Publish.findOne({
      where: { idPublish: idPublish },

    });

    return publish ? res.status(200).json(publish) : res.status(404).json({ message: 'Publicacion no encontrada.' });
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getPublishById;
