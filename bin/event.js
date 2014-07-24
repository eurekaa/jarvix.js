(function() {
  var jarvix_memory, jarvix_module, jarvix_path;

  jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];

  jarvix_path = jarvix_memory.path;

  jarvix_module = jarvix_memory.module;

  jarvix_module.define(['eventify'], function(eventify) {});

  /*
     enable: ->
     on: eventify.on
     off: eventify.off
     trigger: eventify.trigger
  */


}).call(this);
