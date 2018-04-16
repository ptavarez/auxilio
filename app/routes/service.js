import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('service', params.service_id)
  },
  actions: {
    // add actions within this route here
  }
})
