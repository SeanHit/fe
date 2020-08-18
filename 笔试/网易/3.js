function prin(arr){  // 
  var max =Math.max.apply(null,arr);
  console.log('------------------------------------');
  console.log(max);
  console.log('------------------------------------');
  var dp=[0,1,2,4];
  for(let i = 4 ; i<=max; i++){
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
  }
  arr.forEach(element => {
    console.log('------------------------------------');
    console.log(dp[element]);
    console.log('------------------------------------');
  });
}

prin([1,2,3,5]);