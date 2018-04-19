import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  stripe: service(),

  actions: {
    processStripeToken ({card, email, id}) {
      this.get('stripe').charge(card, email, id)
    }
  }
})
