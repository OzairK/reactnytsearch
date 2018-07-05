const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.create)

router.get("/yo", (req,res)=> res.send("hi"))

router.route("/:id")
  .delete(articlesController.delete)
router.route("/all")
  .get(articlesController.findAll)

module.exports = router;
