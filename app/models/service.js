import DS from 'ember-data'

export default DS.Model.extend({
  category: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  name: DS.attr('string')
})
