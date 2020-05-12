const tableKey="cms-table";
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener;

("click",(); =>{
  localStorage.removeItem(tableKey);
});

let cmsTable;
let cmsTableDemo = {
  'mis': {
    'email':'m@matchMedia.com',
    'phone': '552-858-8955',
  }
};

let refreshDOMTable = () => {
  let cmsTableKeys = Object.keys(cmsTable);
  let tableContainer = document.getElementById('cmsTableContainer')
  let oldTablebody = document.getElementById('tablebody');
  tableContainer.removeChild(oldTablebody);
  let newTableBody = document.createElement('span');
newTableBody.id = 'tablebody';

for (let i=0; i<cmsTableKeys.length; i++) {
  let currentRow = document.createElement('div');
  let currentNameRow = document.createElement('div');
  let currentEmailRow = document.createElement('div');
  let currentPhoneRow = document.createElement('div');
  let currentEditbtn = document.createElement('div');
  let currentDeletebtn = document.createElement('div') ;


  currentRow.className = 'cms-table-row';
  currentNameRow.className = 'row-name';
  currentEmailRow.className = 'row-email';
  currentPhoneRow.className = 'row-phone';
  currentEditbtn.className = 'cms-edit';
  currentDeletebtn.className = 'cms-delete';

  currentNameRow.innerHTML = cmsTableKeys[i];
  currentEmailRow.innerHTML = cmsTable[cmsTableKeys[i]].email;
  currentPhoneRow.innerHTML = cmsTable[cmsTableKeys[i]].phone;
  currentDeletebtn.innerHTML = 'delete';
  currentEditbtn.innerHTML = 'edit'; 

  currentRow.appendChild(currentNameRow)
  currentRow.appendChild(currentEmailRow)
  currentRow.appendChild(currentPhoneRow)
  currentRow.appendChild(currentDeletebtn)
  currentRow.appendChild(currentEditbtn)

  newTableBody.appendChild('currentRow')
}
let addnewEntrybtn = getElementById('addNewEntry');
let editBtns = document.getElementsByClassName('cms-edit');
letdeletBtns = document.getElementsByClassName('cms-delete');

submitBtn.addEventListener('click', () => {

})
}


var fields = {};
document.getElementById("form").submit();
document.addEventListener("DOMContentLoaded", function () {
  fields.Name = document.getElementById("name");

  fields.email = document.getElementById("email");

  fields.Number = document.getElementById("number");
});
function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}
const person = {
  name: "name",
  location: "name",
};

window.localStorage.setItem("user", JSON.stringify(person));
