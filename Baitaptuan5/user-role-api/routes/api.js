const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const roleController = require("../controllers/roleController");

/* USER */
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.softDeleteUser);

router.post("/enable", userController.enableUser);
router.post("/disable", userController.disableUser);

/* ROLE */
router.post("/roles", roleController.createRole);
router.get("/roles", roleController.getAllRoles);
router.get("/roles/:id", roleController.getRoleById);
router.put("/roles/:id", roleController.updateRole);
router.delete("/roles/:id", roleController.deleteRole);

/* GET USERS BY ROLE */
router.get("/roles/:id/users", userController.getUsersByRole);

module.exports = router;