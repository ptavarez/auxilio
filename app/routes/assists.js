import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('assist')
  },

  actions: {
    createAssist (assist) {
      this.get('store').createRecord('assist', assist)
        .save()
    }
  }
})
