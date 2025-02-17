function calculateVAT(amount) {
  const invalid = "invalid";
  if (typeof amount !== "number") {
    return invalid;
  } else if (amount < 0) {
    return invalid;
  }
  const VAT = (amount * 7.5) / 100;
  return VAT;
}

const vat = calculateVAT("foo");
console.log(vat);
