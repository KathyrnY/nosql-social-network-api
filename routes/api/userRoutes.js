const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

  router
  .route('/:id')
  .get(getSingleUserById)
  .put(updateUser)
  .delete(deleteUser);
  

  module.exports = router;