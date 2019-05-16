//var mysql = require('mysql');
function mysearch(){
    var datas = document.getElementById("search").value;
   $.ajax({
     type: "GET",
     url: "https://reqres.in/api/users/2"
    }).then(function(response){


try {
  var data = JSON.parse(response);
  checkErrors(data);
} catch (e) {
  alert(e);
}

       /*var id = response.data.id[0]; 
       var polka = response.data.mail[0];
       var stel = response.data.avatar[0];*/
    });
}
function show_(){

}