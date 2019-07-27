/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var x1=new XMLHttpRequest();
x1.open("GET","http://localhost:8000/api/getCSRFToken/",true);
x1.send();
//while (x1.readyState !== XMLHttpRequest.DONE);
console.log(x1.responseText);
console.log("something");