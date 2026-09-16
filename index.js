
/* ============= IMPORTS ============= */
/* TABLE */
import { createBasicTable } from './factory/table/index.js';
import { addColumnsManagement } from './factory/table/plugins/columns-management.js';
import { addFilterToTheTable } from './factory/table/plugins/filter.js';
import { addOfflineFilterToTheTable } from './factory/table/plugins/filter-offline.js';
import { addEventToCopyTbodyCell } from './factory/table/plugins/events.js';
import { showCaption } from './factory/table/plugins/caption.js';


/* DATABASE */
import { tableData } from './db.js';


const theadNames = [
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

const tableKeys = [
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

const $table = createBasicTable("amz-buy-table", theadNames, tableData, tableData);

//$table.classList.add("container-black-table");

document.getElementById("main").append($table);

addOfflineFilterToTheTable($table, tableKeys, tableData, serverDataTreatment);





