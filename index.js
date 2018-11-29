const core = require('discipl-core')

const DISCIPL_4SACAN_ALLOW = 'allow'
const DISCIPL_4SACAN_REQUIRE = 'require'

const allow = (ssid, dids) => {
  return core.claim(ssid, DISCIPL_4SACAN_ALLOW, {dids:dids})
}

const require = (ssid, predicate, dids) => {
  return core.claim(ssid, DISCIPL_4SACAN_REQUIRE, {predicate:predicate, dids:dids})
}

module.exports = {
  allow,
  require
}
