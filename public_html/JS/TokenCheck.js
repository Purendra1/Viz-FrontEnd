/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var csrfToken ='';
$.ajax({
    url: "http://localhost:8000/api/getCSRFToken/",
    type:"GET",
    dataType: 'json',
    success: function( response ) {
        console.log( response["csrfToken"] );
        csrfToken=response["csrfToken"];// server response
    }
});