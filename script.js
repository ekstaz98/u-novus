function mysearch(){
$.ajax({
     url: "http://tmsk.aleks19.ru/api/tags",
    }).then(function(response){
        var metki = JSON.parse(response);
        $('#myt').html('');
        var parent = document.getElementById('myt');
        console.log(response);
        for (var i = 0; i < metki.length; i++){
            if(metki[i].status === false){
              var status = "Не в архиве";
              var ant = "";
            }
            else{
              var status = "В архиве";
              var ant = metki[i].ant;
            }
           var idm = metki[i].rfid;
           var tr = document.createElement("tr");
           var th = document.createElement("th");
           var td1 = document.createElement("th");
           var td2 = document.createElement("th");  

           th.setAttribute('scope', 'row');
           th.setAttribute('class', 'idm');
           th.innerHTML = idm;
           tr.appendChild(th);

           td1.setAttribute('class', 'ant');
           td1.innerHTML = ant;
           tr.appendChild(td1);

           td2.setAttribute('class', 'status');
           td2.innerHTML = status;
           tr.appendChild(td2);

           parent.appendChild(tr);
       }
       var time = setInterval(mysearch,3000);
    });
}

//поиск по номеру антены ,но должно по названию документа -> не реализовано ,так как атрибута нет. (антен много, а документ 1 -> отображение только одной антены)
function show_(){
   $.ajax({
     url: "http://tmsk.aleks19.ru/api/tags" 
    }).then(function(response){
        var poisk = JSON.parse(response);
        var s = document.getElementById('result');
        var str = document.getElementById('searchdoc').value;
         for (var i = 0; i <= poisk.length; i++)
         {
             if(poisk[i].ant == str){
                s.textContent = poisk[i].rfid+' '+ poisk[i].ant+' '+poisk[i].status;
             }
         }
    });
}
