import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  notification: service('toast'),

  model () {
    return this.get('store').findAll('assist')
  },

  actions: {
    createAssist (assist) {
      this.get('store').createRecord('assist', assist)
        .save()
        .then(() => {
          this.get('notification').success('Aux Submitted!')
        })
        .catch(() => {
          this.get('notification')
            .danger('There was a problem. Please try again.')
        })
    }
  }
})
