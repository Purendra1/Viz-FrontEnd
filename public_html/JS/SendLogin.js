/* global csrfToken */

var data = {'csrfmiddlewaretoken':csrfToken,'username':"purendra",'password':"vizapp111"};
console.log(data);
$.ajax({
  url:"http://localhost:8000/api/signIn/",
  type:"POST",
  data:data,
  dataType:"json",
  async=false,
  success: function(response){
      console.log(response["token"]);

  },
  complete: function(e,xhr,ss)
  {
	  if(e.status>=400){
	  alert("INVALID CREDENTIALS");
	  event.preventDefault();

	 }
  }
});