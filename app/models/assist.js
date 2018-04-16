import DS from 'ember-data'

export default DS.Model.extend({
  service_id: DS.attr(),
  service: DS.attr(),
  fulfilled: DS.attr('boolean'),
  created_at: DS.attr('date'),
  editable: DS.attr('boolean')
})
