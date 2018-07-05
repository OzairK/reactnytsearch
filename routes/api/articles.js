const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.create)
  

router.route("/:id")
  .delete(articlesController.delete)
router.route("/all")
  .get(articlesController.findAll)
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(articlesController.findById)
//   .put(articlesController.update)
//   .delete(articlesController.remove);

// router.route("/api/article")
// .post(articlesController.create)

module.exports = router;
