import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findAll('service')
    .then(dev => dev.filter((tru) => {
      return tru.get('category') === 'Geek'
    }))
  }
})
