module.exports = function check(str, bracketsConfig) {
  let stack = str.split("");

  for(let i = 0; i < stack.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(bracketsConfig[j][0] === stack[i] && bracketsConfig[j][1] ===stack[i + 1]){
        stack.splice(i,2);
        i = -1;
        console.log(stack);
      }
    }
  }

  console.log(stack);
  if(stack.length == 0) {
    return true;
  }else{
    return false;
  }

}

