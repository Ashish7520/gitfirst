var student={
    age:20
}

var ageOfStudent = function(){
    return this.age
}

var bound=ageOfStudent.bind(student)
console.log(bound())