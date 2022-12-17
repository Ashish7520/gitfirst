var form= document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter = document.getElementById('filter')
form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
itemList.addEventListener('submit', addBtn)
filter.addEventListener('keyup', filterItems)

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    var li = document.createElement('li')
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${newItem} ${ newDescription}`));
   // li.appendChild(document.createTextNode(newDescription));


    var deleteBtn = document.createElement('button')
    var editBtn = document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    editBtn.className='btn btn-succss btn-sm float-right edit'
    deleteBtn.appendChild(document.createTextNode('X'))
    editBtn.appendChild(document.createTextNode('EDIT'))
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)
    itemList.appendChild(li)

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li= e.target.parentElement;
            itemList.removeChild(li)
        }
    }

}

function addBtn (e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li')
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var editBtn = document.createElement('button')
    editBtn.className='btn btn-danger btn-sm float-right '
    editBtn.appendChild(document.createTextNode('EDIT'))
    li.appendChild(editBtn)
    itemList.appendChild(li) 

} 

function filterItems(e){
    var text=e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 ){
            item.style.display='block'

        }else{
            item.style.display='none'
            
        }
    })
}



