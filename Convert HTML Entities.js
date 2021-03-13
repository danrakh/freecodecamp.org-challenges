function convertHTML(str) {
    let htmlChart = {
      '&' : '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      "'" : '&apos;'
    };

    let myArr = str.split('');

    myArr.forEach(function(element, idx) {
        if (Object.keys(htmlChart).includes(element)) {
            myArr.splice(idx, 1, htmlChart[element]);
        }
    });
    return myArr.join('');
  }
  
  convertHTML("Dolce & Gabbana");