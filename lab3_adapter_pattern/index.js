const express = require("express");
const PaymentService = require("./services/PaymentService");

const app = express();
app.use(express.json());

app.post("/pay", async (req, res) => {
  const { provider, amount, currency } = req.body;

  try {
    const paymentService = new PaymentService(provider);
    const result = await paymentService.processPayment(amount, currency);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));