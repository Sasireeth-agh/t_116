const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rate: { type: Number, required: true },
});

module.exports = mongoose.model('Commission', commissionSchema);
