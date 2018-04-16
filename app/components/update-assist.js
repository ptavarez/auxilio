import Component from '@ember/component'

export default Component.extend({
  assist: {
    service: ''
  },

  actions: {
    updateAssist () {
      this.sendAction('update', this.get('assist'))
      this.set('assist', {})
    }
  }
})
