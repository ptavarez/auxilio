import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('service')
  },

  actions: {
    // add actions within this route here
  }
})
