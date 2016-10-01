//运算表达式
var accountExpression = "";
//文本框对象
var txtScreen;

function Load(){
	txtScreen = document.getElementById("text");
	txtScreen.innerHTML = "";
}

function inputValue(input) {
	switch(input)
	{
		case 'd':
			accountExpression = accountExpression.substring(0, accountExpression.length-1)
			txtScreen.innerHTML = accountExpression;
			break;
		case 'l':
			accountExpression += "(";
			txtScreen.innerHTML = accountExpression;
			break;
		case 'r':
			accountExpression += ")";
			txtScreen.innerHTML = accountExpression;
			break;
		case 'c':
			accountExpression = "";
			txtScreen.innerHTML = accountExpression;
			break;
		case 'e':
			count();
			break;
		default:
			accountExpression += input;
			txtScreen.innerHTML = accountExpression;
	}
}

function count() {
	try {
		var result = eval(accountExpression);
		txtScreen.innerHTML = result;
		accountExpression = "";
	} catch(exception) {
			alert("输入非法字符串");
	}
}
