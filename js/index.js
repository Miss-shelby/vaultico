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
const food=['rice','beans']
// const newFood = food.map((name)=>({name,status:'available'}))
// console.log(newFood)
const studentArr=[
    {
        name:'mary',
        score:20
    },
    {
        name:'larry',
        score:10
    },
    {
        name:'fary',
        score:60
    },
    {
        name:'jerry',
        score:50
    }
]
//ternary operator
let today='wenesday'
today==='wednesday'?console.log('yes'):console.log('no')
//we are calculating the student  perrformance based on the next student in the list
// so we are comparing the current student score to the score of the next student
// and to do this we take the current student score and divide it by the next student score then multiplied by 100
const resultArr= studentArr.map((student,index,students)=>{
    // let performance =0;
    // if(students[index +1]){ //checks if theres a next student in the array
    //     performance = (student.score/students[index +1].score) *100;//calculate the current  score based on the next student score
    // }
    const performance = (student.score/(students[index +1]?.score)??0) *100 //optional chaining to check if student score exist and assign score 0 to it if it dosent 
    return {
        name: student.name,
        age: student?.age, // optional chaining here to check if age exists
        score: student.score,
        performance: performance,
        index: index
    };
})
console.log(resultArr)





