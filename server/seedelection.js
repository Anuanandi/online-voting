const mongoose = require('mongoose');
require('dotenv').config();
const Election = require('./models/Election');

const sampleElections = [
  {
    title: "Presidential Election 2024",
    description: "National election to choose the next president",
    startDate: new Date("2024-11-03"),
    endDate: new Date("2024-11-03")
  },
  {
    title: "City Council Election",
    description: "Local election for city council members",
    startDate: new Date("2024-05-15"),
    endDate: new Date("2024-05-15")
  },
  {
    title: "State Governor Election",
    description: "State-wide election for governor",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-01")
  },
  {
    title: "School Board Election",
    description: "Election for local school board members",
    startDate: new Date("2024-04-20"),
    endDate: new Date("2024-04-20")
  },
  {
    title: "Referendum on Public Transport",
    description: "Vote on expanding the city's public transportation system",
    startDate: new Date("2024-06-10"),
    endDate: new Date("2024-06-10")
  }
];

const seedElections = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await Election.deleteMany({});
    console.log('Deleted existing elections');

    const createdElections = await Election.insertMany(sampleElections);
    console.log(`Added ${createdElections.length} sample elections`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding elections:', error);
  }
};

seedElections();