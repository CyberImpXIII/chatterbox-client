var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    var html = "";
    Parse.readAll((data)=>{

      Rooms = new Set(["New Room", "Main Lobby", ..._.pluck(data["results"], "roomname")])
      for(var location of Rooms){
        html += `<option value = "${location}">${location}</option>`;
      }
      $("#room-selector").html(html)
    });
  RoomsView.$select.on('change', RoomsView.render);
  },

  render: function() {
    // Check what select option is ticked 
      Parse.readAll((data)=>{
        let html = "";
      //_.filter(dataresults, function(element){ return element[roomname]=== blah });
      for(message of _.filter(data.results, element=>element["roomname"] === $("#rooms select option:selected").html())){
        if(message["username"]===undefined) { message["username"] = "anonymous" };
        if(message["text"]===undefined) { message["text"] = "" };
        if(message["roomname"]===undefined) { message["roomname"] = "Main Lobby" };
        // if(message["roomname"].length > 30) { message["roomname"] = "Main Lobby" };
        html += MessageView.render(message);
        }
      $("#chats").html(html);
    });
    // filter the body by room name
    // if main lobby or new room are ticked, display all
    // if new room is ticked, create a form to add a room name to the room set
  }

};
/* 
$( "select" )
  .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "div" ).text( str );
  })
  .trigger( "change" );
*/
