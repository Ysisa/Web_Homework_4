//运算表达式
var accountExpression = "";
//文本框对象
var txtScreen;

function Load(){
    txtScreen = document.getElementById("txtScreen");
    var count = txtScreen.innerHTML;
    var result = eval(txtScreen.innerHTML);
    txtScreen.innerHTML = count + " = " + result;
}