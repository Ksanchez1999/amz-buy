

/* =======================================
        TABLE IMPORT DATA
======================================= */
class TableImportsDataItem {
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





export const tableImportsData = [
  new TableImportsDataItem(
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

  new TableImportsDataItem(
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

  new TableImportsDataItem(
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











/* =======================================
        TABLE MOUSES DATA
======================================= */
class TableMousesDataItem {
  constructor(
    id,
    name,
    sensorName,
    ips,
    maximumAcceleration,
    lod,
    surfaceTolerance,
    mcuName,
    pollingRate,
    chipArchitecture,
    frequency,
    ram,
    flashMemory,
    wireless2Point4,
    wireless2Point4Quality,
    bluetooth,
    wire,
    handOrientation,
    grip,
    constructionQuality,
    weight,
    skates,
    switchesName,
    clicks,
    extraButtons,
    scrollWheelName,
    scrollSteps,
    wireQuality,
    batteryDuration,
    software,
    finalPrice,
    link,
    observation
  ){

    this.id = id;
    this.name = name;
    this.sensorName = sensorName;
    this.ips = ips;
    this.maximumAcceleration = maximumAcceleration;
    this.lod = lod;
    this.surfaceTolerance = surfaceTolerance;
    this.mcuName = mcuName;
    this.pollingRate = pollingRate;
    this.chipArchitecture = chipArchitecture;
    this.frequency = frequency;
    this.ram = ram;
    this.flashMemory = flashMemory;
    this.wireless2Point4 = wireless2Point4;
    this.wireless2Point4Quality = wireless2Point4Quality;
    this.bluetooth = bluetooth;
    this.wire = wire;
    this.handOrientation = handOrientation;
    this.grip = grip;
    this.constructionQuality = constructionQuality;
    this.weight = weight;
    this.skates = skates;
    this.switchesName = switchesName;
    this.clicks = clicks;
    this.extraButtons = extraButtons;
    this.scrollWheelName = scrollWheelName;
    this.scrollSteps = scrollSteps;
    this.wireQuality = wireQuality;
    this.batteryDuration = batteryDuration;
    this.software = software;
    this.finalPrice = finalPrice;
    this.link = link;
    this.observation = observation;
  }
}






export const TableMousesData = [
  new TableMousesDataItem(
    "00001",
    "VGN Dragonfly F1 Pro Max",	
    "PixArt PAW3395",	
    "650",
    "50",
    "Menos de 1 mm / Regulable",	
    "Falla en vidrio Transparente",	
    "Nordic nRF52840",
    "1000Hz",
    "ARM Cortex-M4 de 32 bits",
    "64 MHz",
    "256KB",
    "1MB",
    "Si",
    "Alta",	
    "Si",
    "Si",
    "Ambidiestra",	
    "Claw Grip y Fingertip",	
    "Excelente",
    "55gr",
    "100% PTFE Virgen",
    "Kailh GM 8.0 Blue",	
    "80M",
    "2 laterales",
    "TTC Silver",
    "24M",
    "Alta",	
    "130 horas",
    "Intuitivo",
    "45,51",
    "https://www.amazon.com/VGN-F1-Pro-Max-Lightspeed/dp/B0F8J24GMH/ref=mp_s_a_1_2?dib=eyJ2IjoiMSJ9.HR7SYnzaFIJWf6EN3nysEvHuBrTaX1De0Nv0d8keGe083vqJ29RQCPSpKTA2da5AT2k5eRH6iIS_mH65AdBDBEcnFYGVWQuaDgz75F3BHkSuUreWzTVECjR6TaxF9N7KjnlBl5F3wtZTEqdLLEljgX4DQ-lD92-T0MGoHknUPfmbHcNZ-WDdeTZwWb6i5XusxWx4G7whAYQsoagdJrI57w.MPTJvvOxPqTS4Qs45bLCOhAi6sYUGAvXdy9XJjyQ-a0&dib_tag=se&keywords=f1%2Bpro%2Bmax&qid=1789736177&s=electronics&sr=1-2&th=1&psc=1",
    ".",
  ),


  new TableMousesDataItem(
    "00002",
    "VGN Dragonfly F1 Moba",	
    "PixArt PAW3395",	
    "650",
    "50",
    "Menos de 1 mm / Regulable",	
    "Falla en vidrio Transparente",	
    "Nordic nRF52840",
    "1000Hz",
    "ARM Cortex-M4 de 32 bits",
    "64 MHz",
    "256KB",
    "1MB",
    "Si",
    "Alta",	
    "Si",
    "Si",
    "Ambidiestra",	
    "Claw Grip y Fingertip",	
    "Excelente",
    "55gr",
    "100% PTFE Virgen",
    "Huano Blue Shell Pink Dot",	
    "100M",
    "2 laterales",
    "TTC Silver",
    "24M",
    "Alta",	
    "130 horas",
    "Intuitivo",
    "45,51",
    "https://www.amazon.com/-/es/dp/B0F8J6VZB5?ref_=ppx_oui_title_mob_b_fed_asin_title_0_1",
    ".",
  ),



  new TableMousesDataItem(
    "00003",
    "Logitech G305 LightSpeed",	
    "HERO 12K",	
    "400",
    "40",
    "Entre 1.2 mm y 1.5 mm / No regulable",	
    "Falla en vidrio Transparente",	
    "Nordic nRF52832",
    "1000Hz",
    "ARM Cortex-M4 de 32 bits",
    "64 MHz",
    "64KB",
    "512KB",
    "Si",
    "Alta",	
    "No",
    "No",
    "Ambidiestra",	
    "Claw Grip y Fingertip",	
    "Muy buena",
    "99gr",
    "PTFE Estándar (Teflón Negro)",
    "Omron D2FC-F-7N",	
    "10M",
    "2 laterales",
    "TTC White Core",
    "24M",
    "N/A",	
    "Doble A",
    "Intuitivo",
    "32,67",
    "https://www.amazon.com/-/es/dp/B07CMS5Q6P?ref_=ppx_oui_title_mob_b_fed_asin_title_0_2",
    ".",
  ),



  new TableMousesDataItem(
    "00004",
    "Logitech B100",	
    "Propio",	
    "20",
    "8",
    "Por encima de los 2.5 mm o 3 mm.",	
    "Falla en superficies Brillantes o transparentes.",	
    "Propio",
    "125Hz",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",	
    "No",
    "Si",
    "Ambidiestra",	
    "Palm Grip",	
    "Excelente",
    "90gr",
    "Plástico rígido común",
    "No",	
    "3M",
    "No",
    "Sin nombre, puramente óptica",
    "Infinito",
    "Buena",	
    "No",
    "N/A",
    "10,5",
    "https://www.amazon.com/Logitech-mouse-%C3%B3ptico-910-001439-Negro/dp/B003L62T7W/ref=mp_s_a_1_1?crid=1ZEOCKOORZBOX&dib=eyJ2IjoiMSJ9.x4c73nx-17IpXygXYObWhK4iaNGJCwPTTyKPJB_9Y91XzdqVH0-NFcpT7u9FoflNvtkbIe_WrecN4mzujSyeMh1WxFtud6e9_qnjY4agdlLALw9_FnWTwteCXHz3yz2Zd7Wqk4_eb5R4292fcY1oheHQ6XDHhgQcSCgCCDrxSPFIpJNkr5zfuQ7UMw4ROd163rdM4LTCiBNbqflqFzRdmA.UcrFKH5RIrwyhZQnzLn59HijJuiVTjWF2qVnLsGu4NI&dib_tag=se&keywords=Logitech+b100&qid=1789737572&sprefix=logitech+b%2Caps%2C513&sr=8-1",
    ".",
  ),


  new TableMousesDataItem(
    "00005",
    "Logitech G203 Lightsync",	
    "Propio",	
    "200",
    "30",
    "Entre 1.5 mm y 1.8 mm / No regulable",	
    "Falla en superficies Brillantes o transparentes.",	
    "Propio",
    "1000Hz",
    "ARM Cortex-M0 de 32 bits",
    "24Mhz",
    "8KB",
    "64 KB",
    "No",
    "No",	
    "No",
    "Si",
    "Ambidiestra",	
    "claw y Fingertip",	
    "Excelente",
    "85gr",
    "PTFE Estándar (Teflón Negro)",
    "Omron D2FC-F-7N",	
    "10M",
    "2 laterales",
    "Kailh Black Core",
    "24M",
    "Muy buena",	
    "No",
    "Intuitivo",
    "",
    "https://www.amazon.com/dp/B07YN82X3B?lv=shuf&rsd=68%2BF8d4o5gP8uzW9dSmsBT79kGdT5zipoa3C5aE%2FJWaJ1vLQw4IN4XZ3AYZub7Uow4%2FguYXSfKRZt%2FT2%2FLunRaggzJcdegdNOn9UFktQ7jNQNwyUkMoK7u4%3D&edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQGBxK6TorhVw8lT3NrcyqksAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM73PDufP93fNUrytBAgEQgDtnD90C6lAh96l4zPI5sg1fK3bWzUkx8ks7ZW0buNC1edIYqgFHwUZKz7fDvAXno5U0s0WC7FzqCfyzeA%3D%3D&social_share=cm_sw_r_cso_cp_mwn_dp_73ZXS7YX59MV69BFWED5&channelId=704&ref_=cm_sw_r_cso_cp_mwn_dp_73ZXS7YX59MV69BFWED5&plpRedirect=mhFallback&th=1&psc=1",
    ".",
  ),



  new TableMousesDataItem(
    "00006",
    "Logitech G502 Hero",	
    "HERO 25K",	
    "400",
    "40",
    "Menos de 1 mm / Regulable automáticamente",	
    "Falla en vidrio Transparente",	
    "STM32L100R8T6",
    "1000Hz",
    "ARM Cortex-M3 de 32 bits",
    "32Mhz",
    "10KB",
    "64 KB",
    "No",
    "No",	
    "No",
    "Si",
    "Diestros",	
    "palm grip y claw grip",	
    "Muy buena",
    "121gr",
    "PTFE Estándar (Teflón Negro)",
    "Omron D2FC-F-K",	
    "50M",
    "6 combinaciones extra",
    "Rotatorio óptico propio",
    "Casi Infinito",
    "Buena",	
    "No",
    "Intuitivo",
    "",
    "",
    "",
  ),


  new TableMousesDataItem(
    "00007",
    "ATK VXE Dragonfly R1 SE+",	
    "PixArt PAW3395 SE",	
    "400",
    "40",
    "1 mm / Regulable",	
    "Falla en superficies Brillantes o transparentes.",	
    "Compx CX52850SE",
    "1000Hz",
    "RISC de 32 bits",
    "64 MHz",
    "80KB",
    "512KB",
    "Si",
    "Alta",	
    "Si",
    "Si",
    "Ambidiestra",	
    "claw y Fingertip",	
    "Muy buena",
    "55gr",
    "PTFE 100% puro (Teflón virgen)",
    "Huano Transparent Blue Shell Red Dot",	
    "60M",
    "2 laterales",
    "F-Switch E10 Flagship",
    "24M",
    "Alta",	
    "130 horas",
    "Intuitivo",
    "",
    "",
    "",
  ),



  new TableMousesDataItem(
    "00008",
    "ATK VXE Dragonfly R1 Pro",	
    "PixArt PAW3395",	
    "650",
    "50",
    "1 mm / Regulable",	
    "Falla en vidrio Transparente",	
    "Nordic nRF52840",
    "1000Hz",
    "ARM Cortex-M4 de 32 bits",
    "64 MHz",
    "256KB",
    "1 MB",
    "Si",
    "Alta",	
    "No",
    "Si",
    "Ambidiestra",	
    "claw y Fingertip",	
    "Excelente",
    "48gr",
    "PTFE 100% puro (Teflón virgen)",
    "Huano Ice Berry Pink Dot",	
    "80M",
    "2 laterales",
    "F-Switch E10 Flagship",
    "24M",
    "Alta",	
    "75 horas",
    "Intuitivo",
    "",
    "",
    "",
  ),

  new TableMousesDataItem(
    "00009",
    "Attack shark X6",	
    "PixArt PAW3395",	
    "650",
    "50",
    "1 mm / Regulable",	
    "Falla en vidrio Transparente",	
    "Broadcom BK3633",
    "1000Hz",
    "RISC de 32 bits",
    "64 MHz",
    "80 KB",
    "512 KB",
    "Si",
    "Alta",	
    "Si",
    "Si",
    "Ambidiestra",	
    "Fingertip Grip y Claw Grip",	
    "Loteria",
    "49gr",
    "PTFE Estándar (Teflón Negro)",
    "Huano Blue Shell Pink Dot",	
    "80M",
    "2 laterales",
    "TTC Golden Encoder",
    "48M",
    "Regular",	
    "80 horas",
    "Básico",
    "",
    "",
    "Trae base de carga magnetica",
  ),




];





/*

  new TableMousesDataItem(
    "",
    "",	
    "",	
    "",
    "",
    "",	
    "",	
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",	
    "",
    "",
    "",	
    "",	
    "",
    "",
    "",
    "",	
    "",
    "",
    "",
    "",
    "",	
    "",
    "",
    "",
    "",
    "",
  ),

*/





