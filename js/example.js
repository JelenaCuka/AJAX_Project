$(function() {                                   

  var times;                                      
  $.ajax({
    beforeSend: function(xhr) {                   
      if (xhr.overrideMimeType) {                 
        xhr.overrideMimeType("application/json"); 
      }
    }
  });

 
  function loadTimetable() {                    
    $.getJSON('data/example.json')              
    .done( function(data){                      
      times = data;                             
    }).fail( function() {                       
      $('#event').html('Došlo je do pogreške pri učitavanju.');
    });
  }

  loadTimetable();                             

  $('#content').on('click', '#event a', function(e) {  

    var loc = this.id.toUpperCase();                   

    var newContent = '';                              
    for (var i = 0; i < times[loc].length; i++) {      
      newContent += '<li class="list-group-item"><span class="text-warning" >' + times[loc][i].time + '</span>';
      newContent += '<a href="http://www.google.com/search?q=';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul class="list-group mb-5">' + newContent + '</ul>'); // Display times on page

  });

});