function translatePigLatin(str) {

    const vowels = ["a","e","i","o","u"];
    let piglatined = [];

    if (vowels.includes(str[0])) {
        piglatined.push(str + "way");
    }
    
    else if (vowels.some(v => str.split("").includes(v)) == false) {
        piglatined.push(str + "ay");
    }
    
    else {
        let reg = /^(.*?)(?=[aeiou])/;
        let splitArr = str.trim().split(reg);
        let leftower = splitArr.shift();
        let part = splitArr.shift();
        piglatined.push(splitArr + part + "ay");
    }

    return piglatined.join("");
  }

translatePigLatin("rhythm");
// jeśli wyraz przed przeróbką zaczyna się samogłoską wówczas na końcu ma być 'way'
// jeśli spółgłoską to 'ay'
// let reg = /^(.?[B-DF-HJ-NP-TV-XZb-df-hj-np-tv-xz])/;