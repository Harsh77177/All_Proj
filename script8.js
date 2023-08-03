// console.log("Fetch Api")
// fetch("data.txt").then((res)=> {
//     console.log(res);
//     res.text();
// }).then(response => {
//     console.log("RES I S" + response);
// });



fetch("data.txt").then(res=>
    res.text()
).then(re=>
        
        console.log(re)
        )

fetch("posts.json").then(res =>
        
            res.json()
). then(res =>
    console.log(res)
)
         
// // .catch((error)=>
// //     {
// //         console.log(error)
// //     });