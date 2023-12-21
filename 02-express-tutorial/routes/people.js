const express = require("express");
const router = express.Router();
let { people } = require("../data");

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.put("/postman", updatePerson);

// router.delete("/:id", deletePerson);


router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(updatePerson)
router.route('/:id').delete(deletePerson)

module.exports = router;
