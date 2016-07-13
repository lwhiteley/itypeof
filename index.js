var getClassName = function(klass) {
  var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((klass).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
}
var itypeof = function(val){
  return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
}
module.exports = function (val, strict) {
  if(strict === true && itypeof(val) === 'object' ){
    var result = getClassName(val);
    if(result !== 'Object'){
      return result;
    }
    return result.toLowerCase();
  }
  return itypeof(val);
};
