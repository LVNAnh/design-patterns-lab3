const PaymentAdapter = require("./PaymentAdapter");

class StripeAdapter extends PaymentAdapter {
  async pay(amount, currency) {
    console.log(`Processing Stripe payment: ${amount} ${currency}`);
    return { status: "success", provider: "Stripe", amount, currency };
  }
}

module.exports = new StripeAdapter();
