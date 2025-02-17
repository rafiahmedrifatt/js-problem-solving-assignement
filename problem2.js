function validContact(contact) {
  //   if (contact !== "number") {
  //     return false;
  //   }
  if (typeof contact !== "string") {
    return "invalid";
  }
  if (contact.includes(" ")) {
    return false;
  } else if (contact.length === 11 && contact.startsWith("01")) {
    return true;
  } else {
    return false;
  }
}

const vat = validContact(true);
console.log(vat);
