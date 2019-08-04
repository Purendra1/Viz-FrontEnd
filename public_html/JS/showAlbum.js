/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

monthD = {"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"October","11":"November","12":"December"}; 
var authToken = decodeURIComponent(document.cookie).split(';')[2];

    function dateToString(day)
    {
        var year = day.split("-")[0];
        var month = day.split("-")[1];
        var dayN = day.split("-")[2];
        var string = monthD[month]+" "+dayN+", "+year;
        return string;
    }

 var url = localStorage.getItem("detail_url");
$.ajax({	
    url: url,
    type:"GET",
    headers: {
        'Authorization': 'Token ' + authToken
    },
    dataType: 'json',
    success: function( response ) {
    	  var htm='';
    	  htm+'<p><div class="container"style="float:left;">'
          htm=htm+"<h3>"+response["title"]+"</h3><br>";
          var date = response["date_posted"];
          var day = date.split("T")[0];
          var time = date.split("T")[1];
          var time = time.split(".")[0];
          var time = time.split("Z")[0];
          htm=htm+dateToString(day)+" - "+time+" UTC</p>";
          htm=htm+response["description"]+"<br>";
          htm=htm+"<img src="+response["cover"]+" width='300' height='300'/><br><br></div>";
          for(i=0;i<response["photos"].length;i++)
          {
          	$.ajax({
          		url:response["photos"][i]["url"],
          		type:"GET",
   				headers: {
        			'Authorization': 'Token ' + authToken
   				},
    			dataType: 'json',
    			success: function(response1){
    				htm=htm+"<img src='"+response1["image"]+"' width='500' height='500'/>";
    				if(i==response["photos"].length-1)htm=htm+"</div>";
    				document.getElementById("viewport").innerHTML=htm;
    			}
    		});
		  }
    }
});