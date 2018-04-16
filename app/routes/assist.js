import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('assist', params.assist_id)
  },
  actions: {
    updateAssist (assist) {
      console.log('updateAssist')
      assist.save()
    }
  }
})
