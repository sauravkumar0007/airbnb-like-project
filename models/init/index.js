const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB");
})

.catch((err) => {
    console.log("Error connecting to DB", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner: "6a1b3b1da5adc3f18f1f5d37" }));
    await Listing.insertMany(initData.data);
    console.log("DB initialized with sample data");
};

initDB();
