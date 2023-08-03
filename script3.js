// xhr object
var xhr = new XMLHttpRequest();
function  GetData() {
console.log(xhr.readyState);  // 0 
xhr.open("Get","https://jsonplaceholder.typicode.com/posts", true);
// xhr.open("Get", "posts.json", true);

// xhr.onprogress= function()
// {
//     console.log(xhr.readyState);
// }
xhr.onload= function ()
{    console.log("Response");
console.log(xhr.responseText);
document.getElementById("div1").innerHTML= xhr.responseText;
}
xhr.send();

 }
// function PostData() {}

 PostData = ()=>
 {
    var obj = {
        "name": "morpheus",
        "job": "leader"
    };
 xhr.open("POST", "https://reqres.in/api/users", true);
 xhr.getResponseHeader('Content-Type', 'application/json');
 xhr.send(obj);
 xhr.onload= ()=>
 {
    console.log(xhr.response);
 }
 }


