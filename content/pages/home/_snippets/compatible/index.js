var marked = require("marked");

mojo.application.paperclip.modifier("markdown", marked);

var MarkedView = mojo.views.Base.extend({
    paper: require("./template.pc")
});

module.exports = function (element) {
    var view = new MarkedView({
        content: "Hello *world*, I'm **Markdown**!"
    });
    element.appendChild(view.render());
}