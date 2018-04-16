import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('service', 'assist')
  },

  actions: {
    requestAssist (assist) {
      this.get('store').createRecord('assist', assist)
        .save()
    }
  }
})
