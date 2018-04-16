import Component from '@ember/component'

export default Component.extend({
  assist: {
    service: 'Test Service'
  },

  actions: {
    requestAssist () {
      this.sendAction('request', this.get('assist'))
    }
  }
})
