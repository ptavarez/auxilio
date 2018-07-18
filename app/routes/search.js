import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const searchQuery = params.searchQuery

    return this.get('store').query('service', {
      search: searchQuery
    })
    .then((results) => {
      if (results.get('lastObject') === undefined) {
        results = false
        console.log('Service(s) not found')
      } else {
        console.log('Service(s) found!', results)
      }
      return results
    })
  },

  actions: {
  }
})
