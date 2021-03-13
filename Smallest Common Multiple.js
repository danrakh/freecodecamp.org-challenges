function smallestCommons(arr) {

    //Sort input array and create a new array with range of numbers starting from smallest number from original array ending on biggest umber from original array
    let arrNums = arr.sort((first,next) => first - next);
    let range = [];
    for (let ix = arrNums[0]; ix <= arrNums[1]; ix++) {
        range.push(ix);
    }

    //Euclidian algorithm for calculating greatest common divisor
    function euclideanAlgorithm(first, next) {
        if (next === 0) {
            return first;
        }
        const remainder = first % next;
        return euclideanAlgorithm(next, remainder);
    }

    //Calculating smallest common multiple for the range by using greatest common divisor
    let smallestCommonMultiple = range[0];
    for (let ix = 1; ix < range.length; ix++) {
      let greatestCommonDivisor = euclideanAlgorithm(smallestCommonMultiple, range[ix]);
      smallestCommonMultiple = (smallestCommonMultiple * range[ix]) /greatestCommonDivisor;
    }

    return smallestCommonMultiple;

  }
  
  console.log(smallestCommons([10,2]));