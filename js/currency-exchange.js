function exchange(amount, from, to) {
  const exchangeRatese = {
    USD: 1.0,    // US Dollar (base currency)
    EUR: 0.905,  // Euro
    JPY: 147.25, // Japanese Yen
    GBP: 0.785,  // British Pound
    AUD: 1.52,   // Australian Dollar
    CAD: 1.35,   // Canadian Dollar
    CHF: 0.92,   // Swiss Franc
    CNY: 7.25,   // Chinese Yuan
    HKD: 7.85,   // Hong Kong Dollar
    NZD: 1.65,   // New Zealand Dollar
    EGP: 0.02,
  };

  let result = amount * exchangeRatese[from] / exchangeRatese[to];
  
  return result;
}

console.log(exchange(100, "EGP", "USD"));
