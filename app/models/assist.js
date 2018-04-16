import DS from 'ember-data'

export default DS.Model.extend({
  service: DS.attr('string'),
  fulfilled: DS.attr('boolean'),
  created_at: DS.attr('date'),
  editable: DS.attr('boolean')
})
