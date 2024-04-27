let result = document.getElementById("result");

let calc = (btn) => {
  let btnValue = btn.innerHTML;
  console.log(btnValue)
  
  $(document).ready(function(){
    $(".btn").click(function(){
      let value = $("#result").text();
      let lastValue = value.slice(-1);
      if((lastValue == "+"||lastValue== "-"||lastValue=="*"||lastValue=="/"||lastValue==".")&&
        (btnValue == "+"||btnValue== "-"||btnValue=="*"||btnValue=="/"||btnValue==".")){
          console.log("重複")
          // let modi = (value.slice(0,-2) + value.slice(-1));
          let modi = (value.slice(0,-2) + btnValue);

          $("#result").text(modi);
        }
    })
  });
  

  if(btnValue === "AC"){
    result.innerHTML = 0;
  } else if(btnValue == "="){
    result.innerHTML = eval(result.innerHTML);
  } else{
    if(result.innerHTML == "0"){
      result.innerHTML = btnValue;
    } else{
      result.innerHTML += btnValue;
    }
  }
}
