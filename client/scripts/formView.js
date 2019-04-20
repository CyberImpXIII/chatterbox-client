var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    // Stop the browser from submitting the form
    let CurrentMessage = { 
        username: App.username,
        text: $('#message').val(),
        roomname: RoomsView.$select.val()
    }; 
   console.log(CurrentMessage)

    Parse.create(CurrentMessage, ()=>{MessagesView.initialize(); console.log("THIS RAN!")}); 

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

