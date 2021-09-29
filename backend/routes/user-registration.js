const router = require("express").Router();
const userRegistration = require("../models/users-registration.model");

router.route("/").get((req, res) => {
  userRegistration.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  userRegistration.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/registration").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  const newUser = new userRegistration({ firstName, lastName, email, username, password, confirmPassword});
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;