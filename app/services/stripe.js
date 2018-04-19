import Service, { inject as service } from '@ember/service'

export default Service.extend({
  ajax: service(),

  charge (card, email, id) {
    return this.get('ajax').post('/charges', {
      data: {
        card,
        email,
        id
      }
    })
  }
})
