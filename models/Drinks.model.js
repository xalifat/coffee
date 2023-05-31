const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
	name: String,
	price: Number,
	inStock: Boolean,
	caffeine: Boolean,
	volume: Number,
	description: String,


 });
 
 const Drink = mongoose.model('Drinks', drinksSchema);
 
 module.exports = Drink; 