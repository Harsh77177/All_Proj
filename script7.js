// document.write("jhkjhjkhjkhjj")

let students =
[
    {name:"ajay", marks: 90},
    
    {name:"vijay", marks: 89},
    
    {name:"sagar", marks: 67}
];


EnrollStudent = (student)=>
{
    setTimeout(()=>
    {
        students.push(student)
    }, 2000);
    // DisplayStudents();

}

var obj = new Promise((resolve, reject)=>
{
    setTimeout(()=>
     {
   const error = false;
   EnrollStudent({name:"Gagan", marks:91});
   if(!error)
    resolve("Rec has been inserted")
    else
    reject("error");
     }, 3000)
    });

// console.log("insiee res")




DisplayStudents = () =>
{
    var str="";
    setTimeout(()=>
    {
    students.forEach( (temp)=>
    {
        str+= temp.name + " " + temp.marks;
        
        str+= `<li> ${temp.name} ----  ${temp.marks} </li>`;
         console.log(temp.name + "  " + temp.marks);
         document.getElementById("list").innerHTML=str;
         
    })}, 2000);
 
}


obj.then((res)=>
{   
    console.log(res)
    DisplayStudents();
}).catch((error)=>
{
    console.log(error);
})
