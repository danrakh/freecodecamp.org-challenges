function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

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

    // każdy obiekt w collection musi być sprawdzony czy zawiera wszystkie klucze z source i czy ich wartość jest taka sama
    // czyli na pewno collection.forEach(e => zawiera wszystkie klucze ? sprawdź czy ich wartość sie zgadza : null)
    // Object.keys(collection[e]).every(funkcjaSprawdzającaKluczeSource)
    // potrzebna będzie temp tablica do zbierania sprawdzeń dla każdego klucza Source i na koniec jeśli wszystkie są true to arr.push(obiekt)
    
    // collection.forEach(function(element) {
    //     Object.keys(source).forEach(function(key) {
    //         if (element.hasOwnProperty(Object.keys(source)) && element[key] == source[key]) {
    //             arr.push(element);
    //         }
    //     });
    //  });
    
    // for (let colIdx = 0; colIdx < collection.length; colIdx ++) {
    //     for (let srcIdx = 0; srcIdx < Object.keys(source).length; srcIdx ++) {
    //       if (Object.keys(collection[colIdx]).includes(Object.keys(source)[srcIdx])) {
    //         arr.push(collection[colIdx]);
    //       }
    //     }
    //   }
    
    // if (element.hasOwnProperty(Object.keys(source)) && element[Object.keys(source)] == Object.values(source)) {
    //     arr.push(element);
    // }
    console.log(arr);
    // Only change code above this line
    return arr;
  }
  
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });