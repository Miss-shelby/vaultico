//call back function is a function that is passed as argument to another function
const hdsStudents=['koach','sam','kosy']
hdsStudents.forEach((index,value)=>{
    console.log(index,value)
})
//mapping:use to modify initial content of the array
const newStudents=hdsStudents.map((student,myarr,index)=>{
    // if (index == 0){
    //     student.toUpperCase()
    // }
    return student.toUpperCase()
})
console.log(newStudents)
//or 
function mapFunction(item) {
    // return item + " " + 'newvalue'
    //returning as object
    return {value:item}
}
const  newValue = hdsStudents.map(mapFunction)
console.log(newValue)