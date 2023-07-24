const { User } = require('../models');
module.exports = {
    // Retrieve all users
    async getAllUsers(req, res) {
        try {
          const usersData = await User.find()
            .populate({ path: 'thoughts', select: '-__v' });
    
          res.json(usersData);
        } catch (err) {
          console.error({ message: 'Error with getting all users' });
          res.status(500).json(err);
        }
      },
    //  Retrieve a user by id
      async getSingleUserById(req, res) {
        try {
          const userData = await User.findOne({ _id: req.params.id })
          .populate('thoughts')
          .populate('friends')
          .select('-__v');
    
          if (!userData) {
            return res.status(404).json({ message: 'No user with that id' });
          }
    
          res.json(userData);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // create a new user
      async createUser(req, res) {
        try {
          const userData = await User.create(req.body);
          res.json(userData);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
};