const paypal = require("../adapters/PayPalAdapter");
const stripe = require("../adapters/StripeAdapter");
const momo = require("../adapters/MomoAdapter");

class PaymentService {
  constructor(provider) {
    switch (provider) {
      case "paypal":
        this.adapter = paypal;
        break;
      case "stripe":
        this.adapter = stripe;
        break;
      case "momo":
        this.adapter = momo;
        break;
      default:
        throw new Error("Unsupported payment provider");
    }
  }

  async processPayment(amount, currency) {
    return await this.adapter.pay(amount, currency);
  }
}

module.exports = PaymentService;
