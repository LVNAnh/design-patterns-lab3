const PaymentAdapter = require("./PaymentAdapter");

class MomoAdapter extends PaymentAdapter {
  async pay(amount, currency) {
    console.log(`Processing MoMo payment: ${amount} ${currency}`);
    return { status: "success", provider: "MoMo", amount, currency };
  }
}

module.exports = new MomoAdapter();
