function getShippingCost(country){
  switch(country){
    case "China":
      const price1 = 100;
      return `Shipping to ${country} will cost ${price1} credits`;
      break;
    case "Chile":
      const price2 = 250;
      return `Shipping to ${country} will cost ${price2} credits`;
      break;
    case "Australia":
      const price3 = 170;
      return `Shipping to ${country} will cost ${price3} credits`;
      break;
    case "Jamaica":
      const price4 = 120;
      return `Shipping to ${country} will cost ${price4} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"