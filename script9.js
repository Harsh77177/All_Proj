fetch("http://localhost:3000/comments")
.then(res=>
    res.json()
    ).then(response=>
        console.log("AAA" + response));

 // POST operation   
 
 fetch("https://reqres.in/api/users",
 {
 method :'POST',
 body : JSON.stringify(
    
        {
            "name": "morpheus",
            "job": "leader"
        }),
        headers: { "Content-type": "application/json"}
    
    }).then(res=>
 res.json()).then(response=> console.log(response));

 
 // PUT 

 fetch("https://reqres.in/api/users/2",
 {
 method :'PUT',
 body : JSON.stringify(
    
        {
            "name": "new ",
            "job": "leader"
        }),
        headers: { "Content-type": "application/json"}
    
    }).then(res=>
 res.json()).then(response=> console.log(response));

 
  // DELETE 

  fetch("https://reqres.in/api/users/2",
  {
  method :'DELETE' 
     
     }).then(res=>
  res.text()).then(response=> console.log(response));
 