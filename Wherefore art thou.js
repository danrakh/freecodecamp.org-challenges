function whatIsInAName(collection, source) {
    var arr = [];

    collection.forEach(function(element) {
        var tempArr =[];
        Object.keys(source).forEach(function(key) {
            if (Object.keys(element).includes(key) && element[key] == source[key]) {
                tempArr.push(true);
            }
        });
        if (tempArr.length == Object.keys(source).length) {
            arr.push(element);
        }
    });

    return arr;
  }
  
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });