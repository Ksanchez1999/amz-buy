/* =========================================================
													IMPORTS
========================================================= */
import { createInputText } from '../../form/dom/input/index.js';
import { createTr } from '../tools/tr.js';
import { createTbody } from '../index.js';
import { updateDom } from './columns-management.js';
import { debounce } from '../../general/general-tools.js';
import { post } from '../../requests/index.js';
import { createTrMsgToFilter } from './filter.js';
import { filterDatabaseObjects } from "../../database/mysql/formatters.js";





/* =========================================================
									  APPLY OFFLINE FILTER
========================================================= */
function applyOfflineFilter($table, originalDatabaseData, serverDataTreatment){
	// ----- GET INPUTS DATA -----
	const inputsData = {};
	$table.querySelectorAll('thead input').forEach((input)=> {
		inputsData[input.name] = input.value;
	})
	
	// ----- CURRENT TBODY  -----
	const $currentTbody = $table.querySelector("tbody");

	// ----- COLUMNS COUNT -----
	const columnsCount = $table.querySelectorAll('thead th').length;

	// ----- FILTER -----
	let newTbodyData = filterDatabaseObjects(originalDatabaseData, inputsData);

	// NO RESULTS MSG
	if(newTbodyData.length == 0) {
    $currentTbody.innerHTML = createTrMsgToFilter("noResults", columnsCount);
    return
  }

	// ----- SERVER DATA TREATMENT -----
	const modifiedDatabaseData = serverDataTreatment(newTbodyData);
	
	// ----- UPDATE TBODY -----
	const $newTbody = createTbody(modifiedDatabaseData, newTbodyData);
	$currentTbody.replaceWith($newTbody);
  updateDom($table.id);
}





/* =========================================================
												ADD FILTER
========================================================= */
export function addOfflineFilterToTheTable($table = null, inputsName = null, originalDatabaseData = null, serverDataTreatment = null){
	// ----- GUARD CLAUSES -----
	if ($table === null) throw new Error("Debe proveer un elemento tabla ($table)");
	if (!Array.isArray(inputsName)) throw new Error("inputsName debe ser un array");
	if (originalDatabaseData === null) throw new Error("Debe proveer la base de datos original");
	if (serverDataTreatment === null) throw new Error("Debe proveer la función para tratar los datos obtenidos del servidor");
	
	// ----- ADD INPUTS -----
	const $inputs = [];
	inputsName.forEach((name)=>{
		const input = createInputText(name, { placeholder: "Filtrar..."});				
		$inputs.push(input);
	})

	const $tr = createTr("td", $inputs);
	$table.querySelector('thead').append($tr);


	// ----- ADD EVENT -----
	const filterEvent = debounce(applyOfflineFilter, 300)

		
	$table.querySelector('thead').addEventListener("input", ()=>{
		filterEvent($table, originalDatabaseData, serverDataTreatment);
	});
}



