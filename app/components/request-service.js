import Component from '@ember/component'

export default Component.extend({

  actions: {
    requestAssist (service) {
      console.log('Service is', service.id)
      this.sendAction('request', { service_id: service.id })
    }
  }
})
