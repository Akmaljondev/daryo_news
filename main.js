let allNewDaryoYangiliklari = document.querySelector(".allNewDaryoYangiliklari")
let modalBady = document.querySelector(".modal-body")

let row = document.createElement("row")
row.classList.add("row")

let modalIndex
let imgAdres

function reRender(newData){
    row.innerHTML = ""
    newData.map((item, index) =>{ 

        let adButton = document.createElement("button")
        adButton.innerText = "Batafsil"
        adButton.setAttribute("class", "btn btn-info mt-2")
        adButton.setAttribute("data-bs-toggle", "modal")
        adButton.setAttribute("data-bs-target", "#exampleModal")
        adButton.setAttribute("onclick", `adButton(${index})`)

        let editButton = document.createElement("button")
        editButton.innerText = "Edite"
        editButton.style.width = "50%"
        editButton.setAttribute("class", "btn btn-success mt-2")
        editButton.setAttribute("data-bs-toggle", "modal")
        editButton.setAttribute("data-bs-target", "#editModal")
        editButton.setAttribute("onclick", `editButton(${index})`)

        let delButton = document.createElement("button")
        delButton.innerText = "Delete"
        delButton.style.width = "50%"
        delButton.setAttribute("class", "btn btn-danger mt-2")
        delButton.setAttribute("onclick", `deleteButton(${index})`)

        let span = document.createElement("div")
        span.style.width = "100%"

        let img = document.createElement("img")
        img.src = item.photo
        img.style.height = "250px"

        let title = document.createElement("p")
        title.innerText = item.title
        title.style.height = "60px"

        let col = document.createElement("div")
        col.classList.add("col-4")

        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")

        span.appendChild(editButton)
        span.appendChild(delButton)

        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(adButton)
        card.appendChild(span)
        col.appendChild(card)
        row.appendChild(col)
        allNewDaryoYangiliklari.appendChild(row)
    })
}

reRender(daryoYangiliklari)

function searchText(keyWord){
    let newData = daryoYangiliklari.filter(item =>{
        return item.title.toLowerCase().includes(keyWord.value.toLowerCase())
    })
    reRender(newData)
}

function adButton(index){
    let foto = document.createElement("img")
    foto.src = daryoYangiliklari[index].photo 
    foto.style.width = "100%"

    let title = document.createElement("p")
    title.innerText = daryoYangiliklari[index].title 

    let categoriya = document.createElement("p")
    categoriya.innerText = daryoYangiliklari[index].categories 

    let data = document.createElement("p")
    data.innerText = daryoYangiliklari[index].date 

    modalBady.innerHTML = ""

    modalBady.appendChild(foto)
    modalBady.appendChild(title)
    modalBady.appendChild(categoriya)
    modalBady.appendChild(data)
} 

function imgsrc(val){
    val.src = window.URL.createObjectURL(val.files[0])
    imgAdres = val.src
}

function editButton(index) {
    modalIndex = index
    document.querySelector(".titleFile").value = daryoYangiliklari[index].title
    document.querySelector(".categoriyaFile").value = daryoYangiliklari[index].categories
}

function editeButton(){
    let titleName = document.querySelector(".titleFile").value
    let categoriyaName = document.querySelector(".categoriyaFile").value

    daryoYangiliklari[modalIndex].photo = imgAdres
    daryoYangiliklari[modalIndex].title = titleName
    daryoYangiliklari[modalIndex].categories = categoriyaName

    reRender(daryoYangiliklari)

    document.querySelector(".imgFile").value = ""
    document.querySelector(".titleFile").value = ""
    document.querySelector(".categoriyaFile").value = ""
}

function deleteButton(index) { 
    daryoYangiliklari.splice(index, 1)
    reRender(daryoYangiliklari)
}