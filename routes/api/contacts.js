const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../utils/validation/contactValidationSchemas");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:contactId", ctrl.deleteById);

module.exports = router;
