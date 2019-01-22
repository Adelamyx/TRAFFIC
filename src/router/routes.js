const _routes = [
  'home',
  'detail'
]

const routes = _routes.map(router => {
  console.log(router)
  var path, name
  if (router === 'home') {
    path = '/home'
    name = 'home'
  } else {
    path = `/${router}`
    name = router
  }
  return {
    path,
    name,
    component (resolve) {
      require.ensure([], () => {
        resolve(require(`./${router}/index`))
      })
    }
  }
})

export default [
  ...routes,
  {
    path: '*', // 404 页面
    name: '404',
    component (resolve) {
      require.ensure([], () => {
        resolve(require('./404'))
      })
    }
  }
]
