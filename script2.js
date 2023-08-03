// xhr object
var xhr = new XMLHttpRequest();
function  GetData() {
console.log(xhr.readyState);  // 0 
xhr.open("Get", "data.txt", true);
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

 