var magic = function(str1,str2){
  if(str1 === str2){
    console.log("String one and String two are the same");
    return str1;
  }
  val = str1.length - str2.length;
  if (val === 0){
    if (str1.split("").sort().join("") != str2.split("").sort().join("")) {
      console.log("imposible");
      return false;
    }else{
      return swapLetter(str1, str2);
    }
  }else if (val > 0){
    deleteLetter(str1,str2);
  }else{
    addLetter(str1,str2);
  }
};

var swapLetter = function(str1, str2){
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  for (var i = 0; i < arr1.length; i++) {
    var temp = arr1;
    if(arr1[i] != arr2[i]){
      temp.splice(i,2,temp[i+1],temp[i]);
      console.log("swaped");
      console.log(temp.join(''));
      return temp.join('');
    }
  }
};
var deleteLetter= function(str1, str2){
  var temp = str1.split('');
  for (var i = 0; i < str1.length; i++) {
    if (temp[i] != str2[i]){
      temp.splice(i,1);
      var temp2 = temp.slice(0);
      if (temp2.sort().join("") != str2.split("").sort().join("")) {
        console.log("imposible");
        return false;
      }else{
        console.log(temp.join(""));
        return temp.join('');
      }
    }
  }
};
var addLetter= function(str1, str2){
  var temp = str1.split('');
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] != str2[i]) {
      temp.splice(i,0,str2[i]);
      var temp2 = temp.slice(0);
      if (temp2.sort().join("") != str2.split("").sort().join("")) {
        console.log("imposible");
        return false;
      }else{
        console.log(temp.join(""));
        return temp.join('');
      }
    }
  }
};

magic("hello", "hell");
magic("nice", "niece");
magic("raise", "rise");
magic("same", "same");
magic("yes", "no");
magic("from", "form");
