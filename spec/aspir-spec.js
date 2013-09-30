var aspir = require('../');

describe('#aspir', function() {

  var obj = {
    root: 'root'
  , nested: {
      foo: 'bar'
    }
  };

  var lobj = {
    root: 'root'
  , nested: {
      foo: 'bar'
    , very: {
        nested: 'nested'
      }
    }
  };

  var aobj = {
    root: 'root'
  , foo: [
      'zero'
    , 'one'
    , 'two'
    ]
  };

  it('should find single level nested property values', function() {
    var bar = aspir(obj, 'nested.foo');

    expect(bar).toEqual('bar');
  });

  it('should accept an array of properties', function() {
    var bar = aspir(obj, ['nested', 'foo']);

    expect(bar).toEqual('bar');
  });

  it('should find multiple level nested property values', function() {
    var nested = aspir(lobj, 'nested.very.nested');

    expect(nested).toEqual('nested');
  });

  it('should find array index', function() {
    var one = aspir(aobj, 'foo[1]');

    expect(one).toEqual('one');
  });
});