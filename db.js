

class TableItem {
  constructor(buyAmzDate, deliveryDateUsa, deliveryDateBqto, name, weight, dimensions, volumetricWeight, basePrice, taxAmz, deliveryAmz, deliveryOwc, link) {
    this.buyAmzDate = buyAmzDate;
    this.deliveryDateUsa = deliveryDateUsa;
    this.deliveryDateBqto = deliveryDateBqto;
    this.name = name;
    this.weight = weight;
    this.dimensions = dimensions;
    this.volumetricWeight = volumetricWeight;
    this.basePrice = basePrice;
    this.taxAmz = taxAmz;
    this.deliveryAmz = deliveryAmz;
    this.deliveryOwc = deliveryOwc;
    this.finalPrice = (
      parseFloat(this.basePrice) +
      parseFloat(this.taxAmz) +
      parseFloat(this.deliveryAmz) +
      parseFloat(this.deliveryOwc)
    ).toFixed(2);
    this.link = link;
  }
}





export const tableData = [
  new TableItem(
    "19/08/2026",
    "21/08/2026",
    "27/08/2026",
    "VGN F1 MOBA",
    "0.45",
    "6.3 × 3.94 × 2.8",
    "0.42",
    "39.99",
    "0.54",
    "0",
    "4.98",
    "https://www.amazon.com/-/es/dp/B0F8J6VZB5?ref_=ppx_oui_title_mob_b_fed_asin_title_0_1"
  ),

  new TableItem(
    "19/08/2026",
    "21/08/2026",
    "27/08/2026",
    "Logitech G305",
    "0.38", 
    "5.91 × 4.33 × 1.8", 
    "0.28", 
    "27.99",
    "0.46",
    "0",
    "4.22",
    "https://www.amazon.com/-/es/dp/B07CMS5Q6P?ref_=ppx_oui_title_mob_b_fed_asin_title_0_2",
  ),

  new TableItem(
    "19/08/2026",
    "21/08/2026",
    "27/08/2026",
    "Zhendecase / Samsung Galaxy A56 / Samsung galaxy A36 / Azul real",
    "0.16", 
    "9 × 5 × 1", 
    "0.27", 
    "16.99",
    "0.19",
    "0",
    "1.8",
    "https://www.amazon.com/-/es/dp/B0FZG6MCFY?ref_=ppx_oui_title_mob_b_fed_asin_title_0_0",
  ),

];








