const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
  Student: { type: Number, default: 10 },
  Professional: { type: Number, default: 15 },
  'Social Media Influencer': { type: Number, default: 20 },
  'Marketing Agent': { type: Number, default: 25 },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  rate: { type: Number, default: 5},
  commissionRates: commissionSchema,
});

module.exports = mongoose.model('Product', productSchema);
