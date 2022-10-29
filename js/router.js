export class Router {
  routes = {}

  add (routeName, page) {
    this.routes[routeName] = page
  } 

  route(event) {
    event = event || window.event
    // só para garantir que pegou o evento
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)
    // adiciona o pushState por causa do enent.preventDefault()
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        // dentro do html presente no #app, adicionar o html presente no data
      })
  }
}