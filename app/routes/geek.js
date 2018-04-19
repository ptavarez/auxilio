import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),

  model (params) {
    return this.get('store').findAll('service')
    .then(dev => dev.filter((tru) => {
      return tru.get('category') === 'Geek'
    }))
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
          .error('Please Sign In.')
        })
    }
  }
})
