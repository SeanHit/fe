// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var obj = {};
for(var i = 0;i < n; i++){
    lines = readline()+'';
    obj[lines]?obj[lines]=1:obj[lines]++;
}
function getNums(total,objj){
  let pinlv = total*0.1;
  let res=0;
  Object.keys(objj).forEach(element => {
    if(obj[element]>=pinlv){
      res++;
    }
  });
  return res;
}

print(getNums(n,obj));
