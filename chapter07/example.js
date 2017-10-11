window.onload = function () {
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello World!")
	testdiv.appendChild(txt);
}

window.onload = function () {
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode("content.");
	para.appendChild(txt1);
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	para.appendChild(txt3);
	var testdiv.document.getElementById(testdiv);
	testdiv.appendChild(para);
}
// window.onload = function () {
// 	var para = document.createElement("p");
// 	var txt = document.createTextNode("Hello World!")
// 	para.appendChild(txt);
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.appendChild(para);
// }
// 等价于上面的效果