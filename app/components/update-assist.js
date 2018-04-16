import Component from '@ember/component'

export default Component.extend({
  assist: {
    service: ''
  },

  actions: {
    updateAssist () {
      this.toggleProperty('assist.fulfilled')
      this.sendAction('update', this.get('assist'))
    }
  }
})
