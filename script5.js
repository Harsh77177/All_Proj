// have list of students
// will perform 2 function
// 1. enrollstudent > adding student record in list
// 2. dipslay all records of students
// Enrollment will take more time coz of some validations
// display list will take less time


 var students = [
    {name:"ajay", marks : 90},
    {name:"vijay", marks : 89},
    {name:"sagar", marks : 90}
 ]

EnrollStudent = (student , callback)=>
{
     setTimeout(()=>
     {
         students.push(student);
         console.log("Recors has been inserted")
         callback();
     },4000);
    
}


DisplayStudents = () =>
{
    setTimeout(()=>
    {
    students.forEach( (temp)=>
    {
         console.log(temp.name + "  " + temp.marks);
    })}, 2000);
    
}


var student = {name:"deepak", marks: 95};
EnrollStudent(student , DisplayStudents);
// DisplayStudents();