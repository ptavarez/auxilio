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
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('toast')
          .success('Successfully changed your password!')
        })
        .then(() => {
          this.get('toast').warning('You have been signed out.')
        })
        .catch(() => {
          this.get('toast')
          .error('There was a problem. Please try again.')
        })
      } else {
        this.get('toast')
        .error('Your new passwords must match.')
      }
    }
  }
})
