import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findAll('assist')
    .then(dev => dev.filter((tru) => {
      return tru.get('fulfilled') === false
    }))
  }
})
