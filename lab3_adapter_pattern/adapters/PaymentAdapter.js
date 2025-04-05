class PaymentAdapter {
  async pay(amount, currency) {
    throw new Error("pay() method must be implemented");
  }
}

module.exports = PaymentAdapter;
