const { Thought, User } = require('../models');

module.exports = {
    // Retrieve all thoughts
    async getAllThoughts(req, res) {
        try {
          const thoughtsData = await Thought.find({})
            .populate({
              path: 'reactions',
              select: '-__v'
            })

          if (!thoughtsData) {
            res.status(404).json({ message: "No thoughts found" });
            return;
          }
    
          res.json(thoughtsData);
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }
      },
    
      // Retrieve a thought by id
      async getSingleThought(req, res) {
        try {
          const thoughtData = await Thought.findOne({ _id: req.params.id })
            .populate({
              path: 'reactions',
              select: '-__v'
            })
            .select('-__v');
      
          if (!thoughtData) {
            return res.status(404).json({ message: 'No thought with this ID!' });
          }
      
          res.json(thoughtData);
        } catch (err) {
          console.log(err);
          res.status(400).json(err);
        }
      },
    
      // Create a thought
      async createThought(req, res) {
        try {
          const thought = await Thought.create(req.body);
          console.log('New thought created:', thought);
      
          const userData = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
          );
  
          if (!userData) {
            return res.status(404).json({ message: 'No user found with this ID' });
          }
      
          res.json(thought);
        } catch (err) {
          res.json(err);
        }
      },
      
     
      async updateThought(req, res) {
        try {
          const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true, runValidators: true }
          );
    
          if (!thoughtData) {
            res.status(404).json({ message: 'No thought with this id!' });
            return
          }
    
          res.json(thoughtData);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
};