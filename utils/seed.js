const connection = require('../config/connection');
const { Thought, User } = require('../models');
const seedData = require('./data');

// Will start the seeding runtime timer
console.time("seeding");

connection.once("open", async () => {
    console.log("DB is connected");

    // need to add await for delete

    await User.collection.insertMany(seedData.users);
    await Thought.collection.insertMany(seedData.thoughts);

    console.timeEnd('Seeding complete! 🌱');
    process.exit(0);
});