const PaymentAdapter = require("./PaymentAdapter");

class PayPalAdapter extends PaymentAdapter {
  async pay(amount, currency) {
    console.log(`Processing PayPal payment: ${amount} ${currency}`);
    return { status: "success", provider: "PayPal", amount, currency };
  }
}

module.exports = new PayPalAdapter();
