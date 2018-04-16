import Component from '@ember/component'

export default Component.extend({

  actions: {
    requestAssist (service) {
      this.sendAction('request', { service_id: service.id })
    }
  }
})
