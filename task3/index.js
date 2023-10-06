function submitData(e){
    e.preventDefault()
    let x=document.getElementById("fname").value
    let table = document.getElementById("data-table")
    let tr= document.createElement("tr")
    let td = document.createElement("td")
    td.innerText=x
    tr.appendChild(td)
    table.appendChild(tr)
    alert("Submitted")
}