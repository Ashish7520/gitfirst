

var form=document.getElementById('formId')
var itemList=document.getElementById('items')

form.addEventListener('submit', addItem)

function addItem(event){
    event.preventDefault();

    var newItem= document.getElementById('expense').value
    var description = document.getElementById("description").value
    var catagory = document.getElementById("catagory").value

    var li=document.createElement('li')
    li.className='list-group-item'
    let totalDescriptionOfTheExpence = `${newItem}-${description}-${catagory} `
    li.appendChild(document.createTextNode(totalDescriptionOfTheExpence))
    itemList.appendChild(li)
}