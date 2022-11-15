import Home from '../pages/Home'
import Sub from '../pages/Sub'
import About from '../pages/About'

export default class Router {
  constructor() {
    this.model = {
      pathName: location.pathname,
    }

    this.initRouting()
  }

  initRouting() {
    const pathName = this.model.pathName
    switch (pathName) {
      case '/':
        new Home()
        new Sub()
        break
      case '/about':
        new About()
        break
      default:
        break
    }
  }
}
