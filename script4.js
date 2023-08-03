// console.log("start");
// console.log("in middle");
// console.log("end");



// console.log("start");
// setTimeout(()=>
// { console.log("in middle");

// },2);
// console.log("end")

// // function add(no1, no2 )
// // {return no1+no2}

// // add= (no1,no2) => no1+no2;

// // setTimeout ( function()  
// // {

// // },4);
// // setimeOut is function in JS which runs asynchronously
// setTimeout ( () => 
// {
//  console.log("Hello");
// },1000);

// function GetName(name)
// {
//      setTimeout (()=>
     
//      {return "Hello " + name} , 10);
// }

// var res = GetName("deepak");
// console.log(res);
// console.log("end");

console.log("start");

   function GetName(name , callback)
 {
    // return "Hello" + name;
  setTimeout (()=>
 {
   res = "Hello " + name; callback(res);
   },10)
}
//  var res =  GetName("deepak");
//  console.log("Hello " + res);
//  console.log("end")

// calling part

// GetName("deepak", function display(res)
// {
//     console.log("Hello " + res);

// });

// GetName("deepak", display((res)=>
// {
//     console.log("Hello " + res);

// }));

GetName("deepak",  ((res)=>
{
    console.log("Hello 1111 " + res);

}));

// , function display(res)
// {
//     console.log("Hello " + res);

// GetName("deepak", display);
// , function display(res)
// {
//     console.log("Hello " + res);
    
   
// });
// function display(res)
// {
//     console.log("Hello " + res);
// }


console.log("end")
