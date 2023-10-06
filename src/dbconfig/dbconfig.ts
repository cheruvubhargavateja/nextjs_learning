import mongoose from 'mongoose';

const DB_URI = "mongodb+srv://March:W6PC1Uz3J42n7uoJ@clusterteja.emnhjbo.mongodb.net/?retryWrites=true&w=majority";

async function connectToDB() {
  try {
    mongoose.connect(DB_URI);
    const connection = mongoose.connection;

    connection.on('connected', () => { 
        console.log('server is up and running')
     })

     connection.on('error', (err) => { 
        console.error('Error connecting to MongoDB:', err.message);
        process.exit();
      })
  } catch (error) {
    console.log('something went wrong');
    console.log(error);
  }
}

export default connectToDB;