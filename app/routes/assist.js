import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  notification: service('toast'),

  model (params) {
    return this.get('store').findRecord('assist', params.assist_id)
  },
  actions: {
    updateAssist (assist) {
      console.log('updateAssist')
      assist.save()
        .then(() => this.transitionTo('assists'))
        .then(() => {
          this.get('notification').success('Aux Updated!')
        })
        .catch(() => {
          this.get('notification')
            .danger('There was a problem. Please try again.')
        })
    },
    deleteAssist (assist) {
      console.log('Delete', assist)
      assist.destroyRecord()
        .then(() => this.transitionTo('assists'))
        .then(() => {
          this.get('notification').success('Aux Deleted!')
        })
        .catch(() => {
          this.get('notification')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
