import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  toast: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('application'))
        .then(() => this.get('toast').success('Thanks for signing in!'))
        .catch(() => {
          this.get('toast')
          .error('There was a problem. Please try again.')
        })
    }
  }
})
