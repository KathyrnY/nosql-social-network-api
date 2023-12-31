const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
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
  
  router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

  module.exports = router;