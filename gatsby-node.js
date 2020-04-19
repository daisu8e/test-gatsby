exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const routes = [
    { page: "/",        interface: "/home"      },
    { page: "/404",     interface: "/not-found" },
    { page: "/page-2",  interface: "/page-2"    },
  ]
  routes.forEach(it => { createPage({ path: it.page, component: require.resolve(`./src/views/interfaces${it.interface}.tsx`) }) })
}