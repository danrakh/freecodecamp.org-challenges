function myReplace(str, before, after) {
    let myArr = str.split(" ");
    let i = myArr.findIndex(x => x == before);

    if (myArr[i][0] == myArr[i][0].toLowerCase() && after[0] == after[0].toLowerCase() || myArr[i][0] == myArr[i][0].toUpperCase() && after[0] == after[0].toUpperCase()) {
      myArr.splice(i, 1, after);
    }

    else if (myArr[i][0] == myArr[i][0].toLowerCase() && after[0] == after[0].toUpperCase()) {
      myArr.splice(i, 1, after[0].toLowerCase().concat(after.slice(1)));
    }

    else {
      myArr.splice(i, 1, after[0].toUpperCase().concat(after.slice(1)));      
    }

    console.log(myArr.join(" "));
    return myArr.join(" ");
  }
  
  myReplace("His name is Tom", "Tom", "john");