import Component from '@ember/component'

export default Component.extend({
  assist: {
    service: ''
  },

  actions: {
    createAssist () {
      this.sendAction('create', this.get('assist'))
      this.set('assist', {})
    }
  }
})
