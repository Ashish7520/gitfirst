console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.forms)
console.log(document.links)
console.log(document.images)


var headerTitle=document.getElementById('header-title')
console.log(headerTitle)
headerTitle.innerText='Hello'

var header = document.getElementById('main-header')
header.style.border='solid 3px #000'

var xyz=document.querySelectorAll('.title')
console.log(xyz)

xyz[0].style.color='green';



