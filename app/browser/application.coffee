CommonApplication = require "../common/application"

class BrowserApplication extends CommonApplication

  ###
  ###

  supportsSSL: location?.protocol is "https:"

  ###
  ###

  plugins: [
    require("./template"),
    require("./commands"),
    require("./_commonModules")
  ]

module.exports = BrowserApplication