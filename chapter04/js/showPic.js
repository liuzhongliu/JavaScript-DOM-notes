function showPic (whichpic) {
	var source = whichpic.getAttribute("href");
	// 获取节点的'href'属性

	var placeholder = document.getElementById("placeholder");
	// 声明变量，并将对象赋值于变量

	placeholder.setAttribute("src", source);
	// 改变对象节点属性

	var text = whichpic.getAttribute("title");
	// 获取节点的'title'属性

	var description = document.getElementById("description");

	description.firstChild.nodeValue = text;
	// 将节点的'title'属性赋值给对象节点的第一个子节点的值
	
}

// function countBodyChildren(){
// 	var body_element = document.getElementsByTagName("body")[0];
// 	alert(body_element.childNodes.length);
// 	var txt = "";
// 	var c = body_element.childNodes;
// 	for (i=0; i<c.length; i++){
//   		txt=txt + c[i].nodeName;
//   	};
//   	alert(txt);
// }
// 	window.onload = countBodyChildren;
// 获取body的全部节点并遍历此集合
