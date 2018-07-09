const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.create)
// Matches with "/api/articles/:id"
router.route("/:id")
  .delete(articlesController.delete)
//Matches with "/api/aricles/all"
router.route("/all")
  .get(articlesController.findAll)

module.exports = router;
