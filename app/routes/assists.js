import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('assist')
  },

  actions: {
    // add actions within this route here
  }
})
