function calculateVAT(price) {
  const invalid = "invalid";
  if (typeof price !== "number") {
    return invalid;
  } else if (price < 0) {
    return invalid;
  }
  const VAT = (price * 7.5) / 100;
  return VAT;
}

const vat = calculateVAT(1500);
console.log(vat);
