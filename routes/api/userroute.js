const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

// Matches with "/api/users/:username"
router
  .route("/:username")
  .get(userController.findByUsername)
  .delete(userController.remove)
  
  // .put(userController.update)
  // .delete(userController.remove);


module.exports = router;
