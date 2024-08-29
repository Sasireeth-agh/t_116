const Commission = require('../models/Commission');
const Product = require('../models/Product');
const User = require('../models/User');

// Update commission rate for product or user
exports.updateCommissionRate = async (req, res) => {
  try {
    const { type, option, rate } = req.body;

    if (type === 'product') {
      // Find the product by name instead of ID
      const product = await Product.findOne({ name: option });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Update commission rates for the product
      product.commissionRates = { ...product.commissionRates, default: rate };
      await product.save();
      return res.json(product);
    } else if (type === 'user') {
      // Find the user by name instead of ID
      const user = await User.findOne({ name: option });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update or create a commission entry for the user
      let commission = await Commission.findOne({ userId: user._id });
      console.log(commission);
      if (commission) {
        commission.rate = rate;
      } else {
        commission = new Commission({ userId: user._id, rate });
      }
      await commission.save();
      return res.json(commission);
    }

    res.status(400).json({ error: 'Invalid type' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View commission rates
exports.getCommissionRates = async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({ error: 'Type is required' });
    }

    let rates = [];

    if (type === 'product') {
      // Fetch and return commission rates for all products
      const products = await Product.find().select('name rate');
      rates = products.map(rate => ({
        name: rate.name, // Assuming userId represents the name
        rate: rate.rate
      }));
    } else if (type === 'user') {
      // Fetch and return commission rates for all users
      rates = await Commission.find().select('userId productId rate');
      rates = rates.map(rate => ({
        name: rate.userId, // Assuming userId represents the name
        rate: rate.rate
      }));
    } else if (type === 'occupation') {
      // Fetch and return commission rates for all occupations
      rates = await Commission.find().select('occupation rate');
      rates = rates.map(rate => ({
        name: rate.occupation,
        rate: rate.rate
      }));
    } else {
      return res.status(400).json({ error: 'Invalid type' });
    }

    if (!rates.length) {
      return res.status(404).json({ error: 'No commission rates found' });
    }

    res.json(rates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
