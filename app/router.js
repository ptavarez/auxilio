import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('services', function () {})
  this.route('service', { path: '/services/:service_id' })
  this.route('assists')
  this.route('assist', { path: '/assists/:assist_id' })
  this.route('landing', { path: '/' })
  this.route('delivery', { path: '/services/delivery' })
  this.route('automotive', { path: '/services/automotive' })
  this.route('handiwork', { path: '/services/handiwork' })
  this.route('housekeeping', { path: '/services/housekeeping' })
  this.route('cosmetics', { path: '/services/cosmetics' })
  this.route('geek', { path: '/services/geek' })
  this.route('lawncare', { path: '/services/lawncare' })
})

export default Router
