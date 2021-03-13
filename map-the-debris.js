function orbitalPeriod(arr) {
    let myArr = [];
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    arr.forEach(element => {
      let orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(element.avgAlt+earthRadius, 3)/GM)));
      let myObj = {
        name : element.name,
        orbitalPeriod : orbitalPeriod
      };
      myArr.push(myObj);
    });

    return myArr;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);