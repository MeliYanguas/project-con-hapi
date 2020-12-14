const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(()=> console.log('Database is connected'))
    .catch(err => console.log(err));