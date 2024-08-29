const Commission = require('../models/Commission');
const Product = require('../models/Product');
const User = require('../models/User');

// Update commission rate
exports.updateCommissionRate = async (req, res) => {
  try {
    const { productId, userId, rate } = req.body;
    let commission = await Commission.findOne({ productId, userId });
    
    if (commission) {
      commission.rate = rate;
      await commission.save();
    } else {
      commission = new Commission({ productId, userId, rate });
      await commission.save();
    }
    
    res.json(commission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View commission rates
exports.getCommissionRates = async (req, res) => {
  try {
    const { productId, userId } = req.query;
    
    // If a userId is provided, return the user's specific commission rate for the product
    if (userId) {
      const commission = await Commission.find({ productId, userId });
      if (!commission) {
        return res.status(404).json({ error: 'Commission rate not found for this user' });
      }
      return res.json(commission);
    }
    
    // Otherwise, return the default commission rates for the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product.commissionRates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
