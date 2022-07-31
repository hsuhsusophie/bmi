// 程式碼寫在這裡！

function bmi(height, weight){
var w = parseInt(weight);
var h = parseInt(height) / 100;
return (w / (h * h)).toFixed(2);


}




function calculateBMI() {
 var height = document.querySelector('#bodyHeight').value;
 var weight = document.querySelector('#bodyWeight').value;
 var result = document.querySelector('#resultText');
 var remind = document.querySelector('#remindText');


 
//  console.log(bmi(height, weight));
 
if ((height != "") && (weight != '')){
result.innerHTML = bmi(height, weight);
} else {
    alert('請輸入身高體重！')
}

if(bmi(height , weight) > 24 ){
    remind.innerHTML = "記得多多運動喔";
} else if (bmi(height, weight) < 19 ){
    remind.innerHTML = "請努力多吃點！";
} else{
    remind.innerHTML = "請多保持完美身材！";
}


}