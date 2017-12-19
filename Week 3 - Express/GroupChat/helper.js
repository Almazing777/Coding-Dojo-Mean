module.exports = {
    objToString: function(data){
      let str = "{";
      for (const key in data){
        if (str !== "{"){
          str += ", ";
        }
        str += key + ": " + data[key];
      }
      str += "}";
      return str;
    }
}