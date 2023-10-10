const countries = [
    {
      name: "India",
      states: [
        {
          name: "MadhyaPradesh",
          cities: [
            {name: "Gwalior"},
            {name: "Indore"},
            {name: "Ujjain"}
          ]
        },
        {
          name: "UttarPradesh",
          cities: [
            { name: "Lucknow" },
            { name: "Kanpur" },
            { name: "Noida" }
          ]
        }
      ]
    },
    {
      name: "USA",
      states: [
        {
          name: "Illinois",
          cities: [
            { name: "Chicago" },
            { name: "Chicago2" }
          ]
        },
        {
          name: "Texas",
          cities:[
            { name: "Pittsburgh" },
            { name: "Massachusetts" }
          ]
        }
      ]
    }
  ];
  
let selectCountry = document.getElementById("country");
let selectState = document.getElementById("state");
let selectCity = document.getElementById("city");


function populateDropdown(element, data) {
  element.innerHTML = ""; // Clear existing options
  for (let item of data) {
    let option = document.createElement("option");
    option.value = item.name;
    option.innerText = item.name;
    element.appendChild(option);
  }
}

function updateStateAndCity(purpose) {
  let selectedCountryName = selectCountry.value;
  let selectedStateName = selectState.value;
  console.log("country: " + selectedCountryName);
  console.log("state: " + selectedStateName);

  let selectedCountry = countries.find(country => country.name === selectedCountryName);
  console.log(selectedCountry.name);

  if (selectedCountry) {
    purpose=="forState" && populateDropdown(selectState, selectedCountry.states);
    selectedStateName = selectState.value;
    let selectedState = selectedCountry.states.find(state => state.name === selectedStateName);
    console.log("selectedState" + selectedState);
    if (selectedState) {
      populateDropdown(selectCity, selectedState.cities);
    } else {
      selectCity.innerHTML = ""; 
    }
  } else {
    selectState.innerHTML = ""; 
    selectCity.innerHTML = ""; 
  }
}

// Event listeners to trigger updates
selectCountry.addEventListener("change", ()=>updateStateAndCity("forState"));
selectState.addEventListener("change", ()=>updateStateAndCity("forcity"));

// Initialize the Country dropdown
populateDropdown(selectCountry, countries);

// Trigger initial update
updateStateAndCity("forState");


// After submit Actions
form = document.forms.form1
let values = [
  {
    name: "FullName",
    value: "",
    errors: ["cfname"]
  },
  {
    name: "Email",
    value: "",
    errors: ["cemail"]
  },
  {
    name: "Mobile",
    value: "",
    errors: ["cmobile"]
  },
  {
    name: "Password",
    value: "",
    errors: ["cpassword"]
  },
  {
    name: "CnfPassword",
    value: "",
    errors: ["ccnfpassword", "ccnfpasswordm"]
  },
  {
    name: "Country",
    value: "",
    errors: ["ccountry"]
  },
  {
    name: "State",
    value: "",
    errors: ["cstate"]
  },
  {
    name: "City",
    value: "",
    errors: ["ccity"]
  },
  {
    name: "Gender",
    value: "",
    errors: ["cgender"]
  },
  {
    name: "Age",
    value: "",
    errors: ["cage"]
  },
  {
    name: "Summary",
    value: "",
    errors: ["csummary"]
  },
  {
    name: "Website",
    value: "",
    errors: ["cwebsite"]
  },
  {
    name: "DOJ",
    value: "",
    errors: ["cdoj"]
  },
  {
    name: "ImageProfile",
    value: "",
    errors: ["cimageprofile"]
  },
  {
    name: "Resume",
    value: "",
    errors: ["cresume"]
  }
];

let errors = [
  {
    name: "cfname",
    value: 1
  },
  {
    name: "cemail",
    value: 1
  },
  {
    name: "cmobile",
    value: 1
  },
  {
    name: "cpassword",
    value: 1
  },
  {
    name: "ccnfpassword",
    value: 1
  },
  {
    name: "ccnfpasswordm",
    value: 1
  },
  {
    name: "ccountry",
    value: 1
  },
  {
    name: "cstate",
    value: 1
  },
  {
    name: "ccity",
    value: 1
  },
  {
    name: "cgender",
    value: 1
  },
  {
    name: "cage",
    value: 1
  },
  {
    name: "csummary",
    value: 1
  },
  {
    name: "cwebsite",
    value: 1
  },
  {
    name: "cdoj",
    value: 1
  },
  {
    name: "cimageprofile",
    value: 1
  },
  {
    name: "cresume",
    value: 1
  }
];

let handleError = ()=>{
  console.log("displAYING ERRORS");
  let errorFields = document.getElementsByClassName("error-message")
  let flag = 1
  for(let item of errors){
    if(item.value==1){      
      errorFields[item["name"]].style.display = "block"
      flag = 0
    }    
    else{
      errorFields[item["name"]].style.display = "none"
    }
  }
  return flag;
}
// fill values in object from table and also fill errors object
function fillValuesAndErrors(){
  console.log("fill values from form and change errros");
  for(let item of values){
    item.value = form[item.name].value
    if(item.value==""){
      for(let errorName in item.errors){
        let err = errors.find(error=>error.name==item.errors[errorName])
        err["value"] = 1  
      }
    }
    else{
      for(let errorName in item.errors){
        let err= errors.find(error=>error.name==item.errors[errorName])
        err["value"] = 0
      }
    }
  }
} 
let fillFormFromValues = ()=>{
  console.log("filling form from values")
  for(let item of values){
    // if(item.name=="Resume"|| item.name=="ImageProfile")
    //   form[item.name].value =""
    // else{
      form[item.name].value =item.value
      console.log(item.name + ":"+  item.value)
    // }
  }
}
let createTable = ()=>{
  console.log("Creating table");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headerRow = document.createElement("tr");
  table.id = "data-table"
  tbody.id = "table-body"
  thead.id = "table-head"
  for (let field of values) {
    let th = document.createElement("th");
    th.textContent = field.name;
    headerRow.appendChild(th);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("table-container").appendChild(table);
}

let fillTableFromValues = ()=>{
  console.log("fill table from values");
  let dataRow = document.createElement("tr");
  let tbody = document.getElementById("table-body")
  let tdAction = document.createElement("td")
  for (let field of values) {
    let td = document.createElement("td");
    td.textContent = field.value;
    dataRow.appendChild(td);
  }
  tdAction.innerHTML = '<button class = "edit-button" onclick="editRow(this)">Edit</button> <button class = "delete-button" onclick="deleteRow(this)">Delete</button>';

  dataRow.appendChild(tdAction)
  tbody.appendChild(dataRow);
}
let fillValuesFromTable = (button)=>{
  console.log("fill values from table");
  let row = button.parentNode.parentNode.childNodes
  let i=0
  for(let item of values){
    // if(item.name=="Resume" || item.name == "ImageProfile"){
    //   item.value=""
    // }
    // else{
      item.value = row[i].innerText
      // console.log(item.name + ":" + item.value);
      i++
    // }
  }
}
function handleSubmit(e){
  e.preventDefault()
  console.log("calling handle sbmit");
  // alert("started")
  fillValuesAndErrors()
  let canSubmit = 1
  canSubmit = handleError()
    // let errors = {
    //     cfname:1,
    //     cemail:1,
    //     cmobile:1,
    //     cpassword: 1,
    //     ccnfpassword:1,
    //     ccnfpasswordm:1
    // }
    // let fname = form.fname.value
    // let email = form.email.value
    // let mobile = form.mobile.value
    // let password = form.password.value
    // // let cnfpassword = form.cnfpassword.value
    // // let resume = form.resume
    // if(fname.trim()==""){
    //     // alert("Name must be filled out")
    //     errors.cfname = 1
    // }
    // else{
    //     errors.cfname=0
    // }
    // if(email==""){
    //     // alert("email must be filled out")
    //     errors.cemail = 1
    // }
    // else{
    //     errors.cemail=0
    // }
    
    // if (!/^[0-9]{10}$/.test(mobile)) {
    //     // alert("Invalid mobile number. Please enter a 10-digit phone number.");
    //     errors.cmobile = 1
    // }
    // else{
    //     errors.cmobile=0
    // }
    // if(password==""){
    //     errors.cpassword = 1
    // }
    // else{
    //     errors.cpassword=0
    // }
    // if(cnfpassword==""){
    //     errors.ccnfpassword = 1
    // }
    // else{
    //     errors.ccnfpassword=0
    // }
    // if(password!==cnfpassword){
    //     errors.ccnfpasswordm = 1
    // }
    // else{
    //     errors.ccnfpasswordm=0
    // }
    // for(let i in errors){
    //     if(errors[i]==1){
    //         document.getElementById(String(i)).style.display = "block"          
    //         canSubmit = 0
    //     }
    //     else{
    //         document.getElementById(String(i)).style.display = "none"         
    //     }
    // }
    if(canSubmit){
      console.log("can submit the form-- zero errors");
        document.getElementById("table-container").childNodes.length==0 && createTable()
        fillTableFromValues()
        alert("Submitted")    
        resetForm()
        return true
    } 
    return false;
}

function deleteRow(button) {
  console.log("deleting row");
  console.log(button);
  let row = button.parentNode.parentNode
  row.parentNode.removeChild(row)  
}

function editRow(button){
  let row = button.parentNode.parentNode
  console.log("editing row", row);
  console.log("button: ", button);
  enableSaveButton(button)
  fillValuesFromTable(button)
  fillFormFromValues()
  scrollToTop()
}
let updateRowData = (button)=>{
  console.log("updating row");
  fillValuesAndErrors()
  let canSave = handleError()
  if(canSave){
    updateTableFromValues(button)
    alert("saved")
    disableSaveButton()
  }
}

let updateTableFromValues=(button)=>{
  console.log("updating table from values"+ button);
  let row = button.parentNode.parentNode.childNodes
  let i=0
  for(let item of values){
    row[i].innerText = item.value
    console.log(item.name + ":" + item.value);
    i++
  }}

let enableSaveButton=(button)=> {
  console.log("display save button");
    document.getElementById("save-button").classList.remove("hide")
    document.getElementById("save-button").onclick = ()=> updateRowData(button) 
    !document.getElementById("submit").classList.contains("hide") && document.getElementById("submit").classList.add("hide")
}

let disableSaveButton = ()=>{
  console.log("disable save button");
  !document.getElementById("save-button").classList.comtains("hide") && document.getElementById("save-button").classList.add("hide")
  document.getElementById("submit").classList.remove("hide")    
}

let scrollToTop =() => window.scrollTo(
  {
    top: 0,
    behavior: "smooth" // For smooth scrolling animation
  }
);

let resetForm = ()=>form.reset()

