import { Router } from "./router.js"
import { boldOnChangePage } from "./boldOnChangePage.js"
import Events from "./events.js"

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/exploration', '/pages/exploration.html')
router.add('/universe', '/pages/universe.html')
router.add(404, '/pages/404.html')

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()
// ao mudar a página por meio das setas de navegação, executar a função handle()

const boldOnChange = boldOnChangePage()
Events(boldOnChange)