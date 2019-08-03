/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var form;
$.ajax({
    url: "http://localhost:8000/api/signUp/",
    type:"GET",
    success: function( response ) {
        document.getElementById("SignUp").innerHTML=response;
        console.log(response);
    }
});