var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data)=>{
      let html = "";
      for(message of data["results"]){
        if(message["username"]===undefined) { message["username"] = "anonymous" };
        if(message["text"]===undefined) { message["text"] = "empty string" };
        html += MessageView.render(message);
        }
      $("#chats").append(html);
    });

   //setTimeout(MessageView.initialize, 30000); 
  },

  render: function() {
  }

};