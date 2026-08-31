

REEMPLAZAR

README
TABLE/INDEX.CSS
TABLE/INDEX.JS



## ********************************************** ALL HTML IMPORTS **********************************************
  <!-- _______________CSS-FACTORY_______________ -->
  <!-- BOX-MODEL -->
  <link rel="stylesheet" href="/factory/general/box-model.css">

  <!-- SCROLL -->
  <link rel="stylesheet" href="/factory/general/scroll.css">

  <!-- INPUT -->
  <link rel="stylesheet" href="/factory/form/dom/input/index.css">

  <!-- BADGE -->
  <link rel="stylesheet" href="/factory/general/dom/badge/index.css">

  <!-- BUTTON -->
  <link rel="stylesheet" href="/factory/general/dom/button/index.css">

  <!-- MODAL -->
  <link rel="stylesheet" href="/factory/modal/index.css">
  <link rel="stylesheet" href="/factory/modal/styles.css">

  <!-- TOAST NOTIFICATIONS -->
  <link rel="stylesheet" href="/factory/toast-notifications/index.css">

  <!-- TABLE -->
  <link rel="stylesheet" href="/factory/table/index.css">
  <link rel="stylesheet" href="/factory/table/styles/black-table.css">


  <!-- _______________FUENTES_______________ -->
  <!-- SOURCE SANS 3 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">




















# ********************************************** /TABLE **********************************************
1. IMPORTAR MÓDULOS:

/* TABLE */
import { createBasicTable} from '/factory/table/index.js';
import { addColumnsManagement} from '/factory/table/plugins/columns-management.js';
import { addFilterToTheTable} from '/factory/table/plugins/filter.js';
import { addEventToCopyTbodyCell} from '/factory/table/plugins/events.js';
import { showCaption} from '/factory/table/plugins/caption.js';

-----------------------------------------------------------------------------------------------------
2. CREAR TABLA BÁSICA [createBasicTable]:

* EJEMPLO
const $table = createBasicTable("profiles-table", theadData, tbodyDataModified, tbodyDataOriginal);

* PARÁMETROS:
- containerId: STRING,
- theadData: [STRING / DOM-ELEMENT]
- tbodyDataModified: [OBJECT]
- tbodyDataOriginal: [OBJECT]

-----------------------------------------------------------------------------------------------------
3. AGREGAR CLASE:

* EJEMPLO
$table.classList.add("container-black-table");

-----------------------------------------------------------------------------------------------------
4. AGREGAR FILTRO [addFilter]:

* EJEMPLO
addFilterToTheTable($table, [...tableKeys, " "], urlToFilter, serverDataTreatment);

* PARÁMETROS:
- $table: DOM ELEMENT
- inputsName: [STRING]
- url: STRING
- serverDataTreatment: FUNCTION

-----------------------------------------------------------------------------------------------------
5. AGREGAR MANEJADOR DE COLUMNAS [addColumnsManagement]:

* EJEMPLO
addColumnsManagement("profiles-table");

* PARÁMETROS:
- containerId: STRING

-----------------------------------------------------------------------------------------------------
6. AGREGAR EVENTO DE COPIADO A CELDAS DEL BODY [addEventToCopyTbodyCell]:

* EJEMPLO
addEventToCopyTbodyCell("profiles-table");

* PARÁMETROS:
- containerId: STRING

-----------------------------------------------------------------------------------------------------
7. MOSTRAR CAPTION [showCaption]:

* EJEMPLO
showCaption("profiles-table", "TABLA DE EJEMPLO PARA PRÓXIMOS PROYECTOS");

* PARÁMETROS:
- containerId: STRING
- captionText: STRING

-----------------------------------------------------------------------------------------------------
8. MODIFICAR EL ANCHO MÁXIMO DE LA COLUMNA:

SELECTOR-INDIVIDUAL-DE-LA-TABLA tbody .col-1 > div {
  display: block;
  max-width: 120px;
}

-----------------------------------------------------------------------------------------------------
9. APLICAR OPACIDAD A COLUMNA:

SELECTOR-INDIVIDUAL-DE-LA-TABLA tbody tr td:nth-child(1) > div,
SELECTOR-INDIVIDUAL-DE-LA-TABLA tbody tr td:nth-child(2) > div {
  color: var(--body-secondary-data-color); 
}

-----------------------------------------------------------------------------------------------------



## ========================= LISTA DE CLASES =========================
- container-black-table


## ========================= NOTAS =========================
* FUENTE SUGERIDA: SOURCE SANS 3.
* La clase base del contenedor de la tabla es: "table-container".
* Todos los **tr** de la tabla tienen una propiedad **_databaseData** que tiene el objeto original de la base de datos.

*_____INFORMACIÓN PARA AGREGAR FILTRO_____*
* Se debe crear una función **serverDataTreatment** que reciba el *array original* y le brinde tratamiento (Sin alteral el original).
* Las clases adicionales deben aplicarse a los elementos del DOM que insertes mediante **serverDataTreatment**, ya que al filtrar se eliminan las de la estructura incial del tbody.
* Que **inputsName** sea preferiblemente de las claves del objeto que viene desde la BD.

--EJEMPLO DE FUNCIÓN PARA MODIFICAR DATOS DEL SERVIDOR--
function serverDataTreatment(serverData){
	return filterKeysOfObjects(serverData, ["id", "name"]);
}

*_____INFORMACIÓN PARA COPIADO DE CELDAS_____*
* Para que no se active el evento, se debe añadir la clase **no-copy** al elemento que no requiere ser copiado. Si el elemento no cubre el 100% del espacio, la clase debe añadirse tambien al padre para evitar copiar al padre con click fuera del target.





















# ******************* FACTORY/DATABASE/MYSQL/FORMATTERS.JS *******************

# ================== JS ==================
## --- IMPORT ---
import { addDomElementToObject, filterKeysOfObjects } from "./mysql-data-treatment/index.js";


## ---------- ADD DOM ELEMENT TO OBJECT ----------
### --- > IN ---
* dataFromMySQL: ARRAY OF OBJECTS
* keyName: STRING
* domElementName: STRING
* OPTIONAL OBJECT: { classDomElement: ARRAY OF STRING }

### --- < OUT ---
* ARRAY OF OBJECTS MODIFY

### --- USE ---
const newDataFromMysql = addDomElementToObject(dataFromMySQL, "name", "span", { classDomElement: ["badge"]});



## ---------- FILTER KEYS OF OBJECTS ----------
### --- > IN ---
* dataFromMySQL: ARRAY OF OBJECTS
* keysName: ARRAY OF STRING

### --- < OUT ---
* ARRAY OF OBJECTS MODIFY

### --- USE ---
const newDataFromMysql = filterKeysOfObjects(dataFromMySQL, ["id, name"]);











# ******************* /MODAL *******************
# ---------- CSS CLASS ----------
modal-warning
modal-alert
modal-success
modal-info

# ---------- IMPORT ----------
import { createModal } from '/factory/modal/index.js';

# ---------- USE ----------
const $modal = createModal(
	"Proceso completado!",
	{ classList: ["modal-success"] }
);













# ******************* /REQUEST *******************

# ---------- IMPORT ----------
import { get, post } from '/factory/request/index.js';


# ---------- EXAMPLE WITH PROMISE.ALL ----------
const [busyProfilesRes, servicesRes] = await Promise.all([
  get(urlTableData),
  get(urlToServicesData)
]);



. Pasas el URL y devuelve un array de objetos listo;







# ******************* /GENERAL/DOM/BUTTON/INDEX.JS *******************

* onClick es la función que va dentro de un listener de click.


# ---------- IMPORT ----------
import { createButton } from '/factory/dom/button/index.js';

# ---------- EXAMPLE ----------
const $buttonCreateNewProfile = createButton("Crear nuevo perfil", { 
  onClick = async function(){ createModalToCreateProfile() },
  classes = ["buttonCreateNewProfile"]
});



# ******************* /TOAST-NOTIFICATION/INDEX.JS *******************
# ---------- IMPORT ----------
import { showToastNotification } from "/factory/toast-notifications/index.js"

# ---------- EXAMPLE ----------
showToastNotification("¡Copiado al portapapeles!");




















## ********************************************** REGLAS DE VERSIONADO **********************************************
- X.0.0 (MAJOR): Cambia cuando haces modificaciones grandes que rompen la compatibilidad con versiones anteriores.
- 0.Y.0 (MINOR): Cambia cuando agregas nuevas funciones sin romper el código existente.
- 0.0.Z (PATCH): Cambia cuando solo corriges errores menores.


















