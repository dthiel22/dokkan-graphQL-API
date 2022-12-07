const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://dthiel22:password111@cluster0.ksogziv.mongodb.net/?retryWrites=true&w=majority', 
  // || 'mongodb://127.0.0.1:27017/mern-set-up',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

// new line