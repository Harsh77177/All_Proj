console.log("async await")
console.log("start")
async function hello()
{
    console.log("iN hello");
    return await "in middle";
    console.log("in hello");
}

// console.log(hello())
hello().then(res=>
    console.log(res));

console.log("end")

async function GetValues()
{
      var res =  await fetch("https://jsonplaceholder.typicode.com/users");
      var response = await res.json();
      return response;

}

GetValues().then(res=>
    console.log(res));

    console.log("1");

console.log("1");
console.log("1");
console.log("1");
    