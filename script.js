for (let i = 7; i > 0; i--) {
    let str = "";
    for (let k = 7; k > i; k--) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }