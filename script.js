function stringChop(str, size) {
  let ans = [];
  if(str.length===0)
  {
	  return ans;
  }
  for (let i = 0; i < str.length; i += size) {
    let temp = "";
    for (let j = i; j < i + size && j < str.length; j++) {
      temp += str[j];
    }
    ans.push(temp);
  }
  
  return ans;
}


// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
