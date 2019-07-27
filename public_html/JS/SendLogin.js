function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
    return null;
  }

  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

var xhttp = new XMLHttpRequest();
                /*xhttp.onreadystatechange = function() {
                 if (this.readyState === 4 && this.status === 200) {
                 alert("Logged In");
                 }
                 else alert("Login failed");
                 };*/
                const csrfToken = getCookie('CSRF-TOKEN');

                xhttp.open("POST", "http://localhost:8000/api/signIn/", true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                
                //xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhttp.onreadystatechange = function () {
                    // Begin accessing JSON data here
                    //var data = JSON.parse(this.response);

                    if (xhttp.status >= 200 && xhttp.status < 400) {
                        console.log(xhttp.responseText);
                    } else {
                        console.log('error');
                    }
                }
                var data = 'csrfmiddlewaretoken='+csrfToken+'&username=purendra&password=vizapp111';
                console.log(data);
                var x = xhttp.send(data);