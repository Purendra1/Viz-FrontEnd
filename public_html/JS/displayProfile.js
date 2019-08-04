
var authToken = decodeURIComponent(document.cookie).split(';')[2];
$.ajax({

  url:"http://localhost:8000/api/profile/",
  type:"GET",
  headers: {
        'Authorization': 'Token ' + authToken
    },
  success: function(response){
	  if(response.status>=400)
	  {
		  document.getElementById("demo").innerHTML = "YOU ARE NOT LOGGED IN";
		  document.getElementById("logoutB").style.visibility = 'hidden';
	  }
	  else{
      var imgsrc = "http://localhost:8000"+response["image"];
      document.getElementById("demo").innerHTML =
            "<img src="+imgsrc+" height='300' width='300' style='border-radius:50%;'/>\n\
            <br>USERNAME = " + response["username"]
            + "<br> NAME: "  + response["firstname"] +" "+ response["lastname"]
            + "<br> EMAIL: " + response["email"];
  	  }
  },
  complete: function(e, xhr, settings){if(e.status>=400)
	  {
		  document.getElementById("demo").innerHTML = "YOU ARE NOT LOGGED IN";
		  document.getElementById("logoutB").style.visibility = 'hidden';
	  }}
});