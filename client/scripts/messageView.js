var MessageView = {

  render: _.template(`
      <div class="chat <%- roomname %>">
        <div class="username"><%- JSON.stringify(username) %></div>
        <div><%- text %></div>
      </div>
    `)

};