const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Data');

const dataSchema = new mongoose.Schema({
    name: String,
    address: String
});

const Data = mongoose.model('data', dataSchema);

const saveInDB = async () => {
    let data = new Data({
        name: "max 100",
        address: '123'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    let data = await Data.updateOne(
        { name: "max 6" },
        {
            $set: { address: '456', name: 'Ahmad' }
        }
    );
    console.log(data);
}

const deleteInDB = async () => {
    let data = await Data.deleteOne({ name: 'max 100' });
    console.log(data);
}

const findInDB = async () => {
    let data = await Data.find({ name: 'max pro 611' });
    console.log(data);
}

// Uncomment these function calls one by one to test them
// saveInDB();
// updateInDB();
// deleteInDB();
findInDB();
