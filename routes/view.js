const {Router} = require("express")
const {viewController} = require("../controllers/view.js")

const viewRouter=Router()

// get ----------
viewRouter.get(	"/:page$",viewController.getPage)
viewRouter.get("*",viewController.getResource)
viewRouter.get("*",viewController.error)

module.exports={viewRouter}