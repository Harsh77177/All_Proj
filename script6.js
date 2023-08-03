console.log("Promise")

// Producing Code
const obj = new Promise((reslove, rejet)=>
{
     const error = false;
     if(!error)
     reslove("Promise has been fullfilled");
     else 
     rejet("Promise has been rejected");

})

// Calling part or Consuming Code

 obj.then((res)=>
 {console.log(res);

 }).catch((error)=>
 {
    console.log(error);
 })