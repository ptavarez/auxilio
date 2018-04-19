import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),
  stripe: service(),

  model (params) {
    return this.get('store').findRecord('service', params.service_id)
  },

  actions: {
    requestAssist (assist) {
      this.get('store').createRecord('assist', assist)
        .save()
        .then(() => this.get('toast').success('Aux Requested'))
        .then(() => this.transitionTo('pending-assists'))
        .catch(() => {
          this.transitionTo('sign-in')
          this.get('toast')
          .error('There was a problem. Please try again later.')
        })
    },
    processStripeToken ({card, email, id}) {
      this.get('stripe').charge(card, email, id)
    }
  }
})
