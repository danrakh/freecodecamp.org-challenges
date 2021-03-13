function uniteUnique(arr) {
    let myArr = [];
    for (let i = 0; i < arguments.length; i++) {
        myArr.push(arguments[i]);
    }

    let uniqueArr = [...myArr[0]];

    for (let i = 1; i < myArr.length; i++) {
        let tempArr = uniqueArr;
        myArr[i].forEach(function(element) {
            if (uniqueArr.includes(element) == false) {
                uniqueArr.push(element);
            }
        });
    }

    console.log(uniqueArr);
    return uniqueArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);