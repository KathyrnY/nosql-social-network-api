const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUser,
} = require('../../controllers/userController');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

  router
  .route('/:id')
  .get(getSingleUserById)
  .put(updateUser)
  

  module.exports = router;