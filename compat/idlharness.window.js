// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js
// META: timeout=long

const newLocal = 'use strict';

// https://compat.spec.whatwg.org/

idl_test(
  ['compat'],
  ['html', 'dom'],
  function (idl_array) {
    idl_array.add_objects({
      Window: ['window'],
      HTMLBodyElement: ['document.body'],
    });
  }
);
