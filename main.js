let result = document.getElementById("result");

let calc = (btn) => {
  let btnValue = btn.innerHTML;
  let lastResult = result.innerHTML.slice(-1)
  // 小数点"."がすでにあるかどうかを判定
  const period = result.innerHTML.indexOf(".");

  // console.log(btnValue)
  
  // $(document).ready(function(){
  //   $(".btn").click(function(){
  //     let value = $("#result").text();
  //     let lastValue = value.slice(-1);
  //     if((lastValue == "+"||lastValue== "-"||lastValue=="*"||lastValue=="/"||lastValue==".")&&
  //       (btnValue == "+"||btnValue== "-"||btnValue=="*"||btnValue=="/"||btnValue==".")){
  //         console.log("重複")
  //         let modi = (value.slice(0,-2) + btnValue);
  //         $("#result").text(modi);
  //       }
  //   })
  // });

  if(btnValue === "AC"){
    result.innerHTML = "0";
  } else if(btnValue == "="){
      result.innerHTML = eval(result.innerHTML);
  } else if(btnValue == "00"){
      if(lastResult == "+"||lastResult == "-"||lastResult == "*"||lastResult == "/"){
       result.innerHTML += "0";
      } else if(result.innerHTML == "0"){
        result.innerHTML = "0";
      } else{
        result.innerHTML += btnValue;
      }
   // 表示されている式の一番右が演算子（+-*/）の場合に、続けて入力された演算子（+-*/）を上書きする(一番右をカットして新たに入力された値を足す)
  } else if(btnValue =="+"||btnValue == "-"||btnValue == "*"||btnValue == "/"){
      if(lastResult == "+"||lastResult == "-"||lastResult == "*"||lastResult == "/"){
        result.innerHTML = result.innerHTML.slice(0,-1) + btnValue;
      } else{
        result.innerHTML += btnValue;
      }
  // 小数点がすでにある時は、小数点をこれ以上入力できないようにする
  } else if(btnValue == "."){
      if(period !== -1){
        result = result;
      } else if(period === -1){
        result.innerHTML += btnValue;
      }
  } else{
      if(result.innerHTML == "0"){
        result.innerHTML = btnValue;
      } else{
        result.innerHTML += btnValue;
      }
  }
}
