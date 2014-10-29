Function.prototype.curry = function() {
  var params = [];
  var originalFn = this;
  var appendParameters = function() {
    for(var i in arguments) {
      params.push(arguments[i]);
    }
    if(params.length >= originalFn.length) {
      return originalFn.apply(null, params);
    } else {
      return appendParameters;
    }
  };
  return appendParameters();
};