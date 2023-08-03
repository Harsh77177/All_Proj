// xhr object
var xhr = new XMLHttpRequest();
function  GetData() {
 console.log(xhr.readyState);  // 0 
xhr.open("Get", "data.txt", true);

xhr.onreadystatechange =  callback;
xhr.send();

console.log(xhr.readyState);
}

function callback()
{
    console.log("inside callback");
    console.log(xhr.readyState);
    if(xhr.readyState==4 && xhr.status==200)
    {
        console.log("Response");
        console.log(xhr.responseText);
        document.getElementById("div1").innerHTML= xhr.responseText;
    }

}