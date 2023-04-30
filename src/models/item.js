const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const itemSchema = new mongoose.Schema(
	{
		owner: {
			type: ObjectID,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		images: {
			type: Array,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		labels: {
			type: Array,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		style: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
