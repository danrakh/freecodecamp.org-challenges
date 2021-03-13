function fearNotLetter(str) {
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let myArr = str.split("");
    let missLetter;

    if (str == "abcdefghijklmnopqrstuvwxyz") {
        return missLetter;
    } else {
        let missIdx = 0;
        let startIdx = abc.findIndex(e => myArr[0] == e);

        for (let i = 0; i < myArr.length; i++) {
            if (myArr[i] != abc[startIdx+i]) {
                missLetter = abc[startIdx+i];
                break;
            }
        } 
    }

    return missLetter;
  }
  
  fearNotLetter("stvwx");