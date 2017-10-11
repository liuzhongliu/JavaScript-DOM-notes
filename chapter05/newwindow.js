window.onload = function() {
	if(!document.getElementsByTagName) {
		return false;
	}
	// 判断浏览器兼容性

	var links = document.getElementsByTagName("a");
	// 获取a元素数组

	for (var i = 0; i < links.length; i++) {
		// 遍历数组

	 	if(links[i].getAttribute("class") == "popup"){
	 		// 判断a元素class属性值是否为popup

	 		links[i].onclick = function() {
	 			popUp(this.getAttribute("href"));
	 			return false;
	 		}
	 		// 执行事件函数
	 	}
	 } 
}

function popUp (winURL) {
	window.open(winURL,"popUp","width=320,height=480");
}
