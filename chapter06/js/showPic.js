function prepareGallery() {
	if(!document.getElementsByTagName) 	return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	// 检查当前文档中是否有id为imagegallery的元素
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function () {
			// 添加事件处理方法并指定一个匿名函数
			return !showPic(this) ? false : true;
			// 调用showPic函数，this这里是指links[i]，showPic返回值为true取反，取消onclick默认行为。
			// links[i].onkeypress = links[i].onclick;   //onkeypress在某些浏览器里可能每按下都会触发
		}
	}
}

function showPic (whichpic) {
	if (!document.getElementById("placeholder")) return flase;
	// 检查placeholder元素
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	// 检查placeholder元素是否为图片
	placeholder.setAttribute("src", source);
	// 改变对象节点属性
	if(document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		// 获取节点的'title'属性
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
			// 将节点的'title'属性值赋值给对象节点的第一个子节点
		}
	}
	return false;
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
// 共享onload事件,此函数的参数为需要在页面加载完执行的函数
addLoadEvent(prepareGallery);
// 调用函数


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
// 获取body的全部节点并遍历此集合,获取给个子元素节点的类型
