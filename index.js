/* =================================
              IMPORTS
================================= */
/* TABLE */
import { createBasicTable } from './factory/table/index.js';
import { addColumnsManagement } from './factory/table/plugins/columns-management.js';
import { addFilterToTheTable } from './factory/table/plugins/filter.js';
import { addOfflineFilterToTheTable } from './factory/table/plugins/filter-offline.js';
import { addEventToCopyTbodyCell } from './factory/table/plugins/events.js';
import { showCaption } from './factory/table/plugins/caption.js';

/* DATABASE */
import { tableImportsData, TableMousesData } from './db.js';





/* =================================
              DOM
================================= */
const $main = document.getElementById("main");

// ----- CONTAINER CHOISE TABLE -----
const $containerChoiseTable = document.createElement("div");
$containerChoiseTable.className = "container-choise-table";

// BTN IMPORTS
const $buttonChoiseImportsTable = document.createElement("button");
$buttonChoiseImportsTable.className = "btn btn-choise-imports-table";
$buttonChoiseImportsTable.textContent = "TABLA DE IMPORTACIONES";
$containerChoiseTable.append($buttonChoiseImportsTable);

$buttonChoiseImportsTable.addEventListener('click', ()=> {
  $main.innerHTML = "";
  createImportsTable();
});


// BTN MOUSES
const $buttonChoiseMousesTable = document.createElement("button");
$buttonChoiseMousesTable.textContent = "TABLA DE MOUSES";
$buttonChoiseMousesTable.className = "btn btn-choise-mouses-table";
$containerChoiseTable.append($buttonChoiseMousesTable);

$buttonChoiseMousesTable.addEventListener('click', ()=> {
  $main.innerHTML = "";
  createMousesTable();
});

$main.append($containerChoiseTable);





/* =================================
          IMPORTS TABLE
================================= */
function createImportsTable(){
  const theadImportsNames = [
    "F. Compra AMZ",
    "F. entrega USA",
    "F. llegada BQTO",
    "Nombre",
    "Peso (lb)",
    "Medidas (in)",
    "Peso V. (lb/vol)",
    "Costo base",
    "Impuesto",
    "Envio AMZ",
    "Envio OWC",
    "Costo final",
    "Enlace",
  ]

  const tableImportsKeys = [
    "buyAmzDate",
    "deliveryDateUsa", 
    "deliveryDateBqto", 
    "name", 
    "weight", 
    "dimensions", 
    "volumetricWeight", 
    "basePrice", 
    "taxAmz", 
    "deliveryAmz", 
    "deliveryOwc",
    "finalPrice", 
    "link",
  ];

  function serverDataTreatment(databaseData){ return databaseData }

  const $table = createBasicTable("amz-buy-table", theadImportsNames, tableImportsData, tableImportsData);
  document.getElementById("main").append($table);
  addOfflineFilterToTheTable($table, tableImportsKeys, tableImportsData, serverDataTreatment);
}





/* =================================
          MOUSES TABLE
================================= */
function createMousesTable(){
  const theadMousesNames = [
    "id",
    "Nombre",
    "Nombre del sensor",
    "IPS",
    "Aceleración máxima (G)",
    "LOD",
    "Tolerancia de superficies",
    "Nombre de MCU",
    "Polling Rate",
    "Arquitectura del chip",
    "frecuencia",
    "RAM",
    "Memoria flash",
    "2.4",
    "Calidad del 2.4",
    "Bluetooth",
    "Cable",
    "Orientación de la mano",
    "Agarre",
    "Calidad de construcción",
    "Peso",
    "Skates",
    "Nombre de los switches",
    "Cantidad de clicks",
    "Botones extras",
    "Nombre de la rueda de desplazamiento",
    "Pasos de la rueda de desplazamiento",
    "Calidad del cable",
    "Duración de la bateria",
    "Software",
    "Precio final",
    "Enlace",
    "Observación",
  ]

  const tableMousesKeys = [
    "id",
    "name",
    "sensorName",
    "ips",
    "maximumAcceleration",
    "lod",
    "surfaceTolerance",
    "mcuName",
    "pollingRate",
    "chipArchitecture",
    "frequency",
    "ram",
    "flashMemory",
    "wireless2Point4",
    "wireless2Point4Quality",
    "bluetooth",
    "wire",
    "handOrientation",
    "grip",
    "constructionQuality",
    "weight",
    "skates",
    "switchesName",
    "clicks",
    "extraButtons",
    "scrollWheelName",
    "scrollSteps",
    "wireQuality",
    "batteryDuration",
    "software",
    "finalPrice",
    "link",
    "observation",
  ];

  function serverDataTreatment(databaseData){ return databaseData }

  const $table = createBasicTable("amz-mouses-table", theadMousesNames, TableMousesData, TableMousesData);
  document.getElementById("main").append($table);
  addOfflineFilterToTheTable($table, tableMousesKeys, TableMousesData, serverDataTreatment);
}
