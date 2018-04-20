import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),

  model (params) {
    return this.get('store').findRecord('assist', params.assist_id)
  },
  actions: {
    updateAssist (assist) {
      assist.save()
        .then(() => {
          this.get('toast').success('Aux Updated!')
        })
        .then(() => this.transitionTo('completed-assists'))
        .catch(() => {
          this.get('toast')
            .error('There was a problem. Please try again.')
        })
    },
    deleteAssist (assist) {
      assist.destroyRecord()
        .then(() => this.transitionTo('assists'))
        .then(() => {
          this.get('toast').success('Aux Deleted!')
        })
        .catch(() => {
          this.get('toast')
            .error('There was a problem. Please try again.')
        })
    }
  }
})
