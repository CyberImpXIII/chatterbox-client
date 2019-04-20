var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var rooms = [];
    var html = ""
    Parse.readAll((data)=>{
      rooms.concat(_.pluck(data, "roomname"))
      for(location of rooms){
        html += `<option value = "${location}"> ${location}</option>`
      }
      $("#room-selector").html(html)
  }
  );
},

  render: function() {
  }

};

