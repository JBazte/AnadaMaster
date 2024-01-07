const express = require("express")
const router = express.Router()

const { getIndividualClients, getIndividualClient, createIndividualClient, updateIndividualClient, deleteIndividualClient } = require("../controllers/individualClient")

const { validatorCreateIndiviualClient, validatorGetIndiviualClient, validatorModifyIndiviualClient, checkUniquesIndividualClient } = require("../validators/individualClient")
const { authEmployee } = require("../middleware/session")
const checkRol = require("../middleware/rol")

//GET ALL INDIVIDUAL CLIENTS
router.get("/", getIndividualClients)

//GET ONE INDIVIDUAL CLIENT
router.get("/:id", validatorGetIndiviualClient, getIndividualClient)

//CREATE ONE INDIVIDUAL CLIENT
router.post("/", checkUniquesIndividualClient, validatorCreateIndiviualClient, createIndividualClient)

//EDIT ONE INDIVIDUAL CLIENT
router.put("/:id", validatorGetIndiviualClient, updateIndividualClient)

//DELETE ONE INDIVIDUAL CLIENT
router.delete("/:id", validatorGetIndiviualClient, deleteIndividualClient)

module.exports = router