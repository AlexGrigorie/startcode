const router = require("express").Router();
const User = require("../models/users.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const userRole = req.body.userRole;

  const newUser = new User({ name, email, userRole });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
    User.findByIdAndUpdate(req.params.id)
    .then(user => {
        user.name = req.body.name
        user.email = req.body.email
        user.userRole = req.body.userRole

        user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
