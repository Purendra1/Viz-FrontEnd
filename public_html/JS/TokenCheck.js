/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$.ajax({
    url: "http://localhost:8000/api/getCSRFToken/",
    crossDomain:true,
    dataType: 'jsonp',
    accept: 'application/javascript',
    success: function( response ) {
        console.log( JSON.parse(response) ); // server response
    } 
});