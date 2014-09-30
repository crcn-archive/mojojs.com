var Application = require("mojo-application"),
uuid = require("uuid");

var ChatroomApplication = Application.extend({
  config: {
    pubnub: {
      subscribe_key: "sub-c-9535ac96-4823-11e4-aaa5-02ee2ddab7fe",
      publish_key: "pub-c-55ed0f2b-6b2e-455a-977e-9530bb287d2f"
    }
  },
  plugins: [
    require("mojo-views"),
    require("mojo-paperclip@0.5.6"),
    require("mojo-models"),
    require("mojo-event-bus"),
    require("mojo-pubnub@0.0.10"),
    require("./views"),
    require("./models")
  ]
});

exports.run = function (element) {

  var app = new ChatroomApplication();
  app.eventBus.publish("/initializePubnub", uuid.v4());
  app.eventBus.publish("/joinChannel", "chatroom");

  element.appendChild(app.views.create("main", {
    messages: app.models.create("messages")
  }).render());

};