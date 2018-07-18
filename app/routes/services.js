import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  toast: service(),

  model () {
    return this.get('store').findAll('service', 'assist')
  },

  didInsertElement () {
    this.set('searchQuery', '')
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
    },
    search (searchQuery) {
      console.log(searchQuery)
      this.transitionTo('search', searchQuery)
    }
  }
})
