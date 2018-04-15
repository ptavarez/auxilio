import DS from 'ember-data'

export default DS.Model.extend({
  service: DS.attr('string'),
  fulfilled: DS.attr('boolean')
})
