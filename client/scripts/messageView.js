var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `),

    userUndefined: _.template(`
    <div class="chat">
      <div class="username">undefined</div>
      <div><%- text %></div>
    </div>
  `)

};