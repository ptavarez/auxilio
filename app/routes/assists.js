import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),

  model () {
    return this.get('store').findAll('assist')
  },

  actions: {
    createAssist (assist) {
      this.get('store').createRecord('assist', assist)
        .save()
        .then(() => {
          this.get('toast').success('Aux Submitted!')
        })
        .catch(() => {
          this.get('toast')
            .error('There was a problem. Please try again.')
        })
    }
  }
})
