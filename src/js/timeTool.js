function getNowTime() {
	var date = new Date();
	var year = date.getFullYear(); //获取当前年份   
	var month = date.getMonth() + 1; //获取当前月份   
	var dat = date.getDate(); //获取当前日   
	var day = date.getDay(); //获取当前星期几   
	var hour = date.getHours(); //获取小时   
	var minutes = date.getMinutes(); //获取分钟   
	var second = date.getSeconds(); //获取秒   
	var timer = document.getElementById('timer');
	let timeStr = year + '年' + month + '月' + dat + '日' + '星期' + day + ' ' + hour + ':' + minutes + ':' +
		second;
	return timeStr;
}
