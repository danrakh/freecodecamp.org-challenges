function pairElement(str) {

    let myArr = str.split("");
    let pairedArr = [];

    myArr.forEach(function(element) {
        let tempArr = [];

        if (element == 'G') {
            tempArr.push('G','C');
        }

        else if (element == 'C') {
                tempArr.push('C','G');
        }

        else if (element == 'T') {
                tempArr.push('T','A');
        }

        else if (element == 'A') {
                tempArr.push('A','T');
        }

        pairedArr.push(tempArr);
    });
    return pairedArr;
  }
  
  pairElement("GCG");