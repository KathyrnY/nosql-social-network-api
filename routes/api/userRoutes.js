const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
} = require('../../controllers/userController');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

  router
  .route('/:id')
  .get(getSingleUserById);

  module.exports = router;