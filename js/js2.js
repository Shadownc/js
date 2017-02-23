$(document).ready(function() {
	$.getJSON("js/js.json", function(data) {
		var html = "";
		var l = data.type.length;
		var c = 6;
		var rows = Math.ceil(l / c);
		var i = 0;

		$(".TROW").attr("rowspan", rows + 2); //给td设置rowspan
		$.each(data.type, function(i, c) {
			if(i % 6 == 0) {
				html += "<tr>";
			}
			html += "<td width=\"15%\"><button value=\"" + c.id + "\" class=\"btn\">" + c.title + "</button></td>";
			if(i % 5 == 0 && i < l - 1 && i != 0) {
				html += "</tr>";
			} //遍历json数据 动态生成td里的按钮
		})

		var t1 = "";
		if(l % c != 0) {
			var x = c - l % c;
			console.log(x);
			for(var j = 0; j < x; j++) {
				t1 += "<td width=\"15%\"></td>";
			}
			t1 += "</tr>"
		}
		html += t1;
		$(".TTTT").before(html);
		bindEvent();
	})
	$("#addbtn").click(function() {

		$("#xx").before($("#tb").prop("outerHTML"));
		bindEvent();
	})
})

function bindEvent() {
	$(".btn").unbind("click");
	$(".btn").click(function() {
		var id = $(this).val();
		var text = $(this).text();
		var html = '<tr attr-id="' + id + '">\
						<td colspan="4">' + text + '<input type="text" id="zxf" /><button onclick="del(this)"><img src="images/del.png"/></button></td>\
						<td><input type="text" name="" id="file" value="" /></td>\
						<td><input type="file" id="upload" value="选择文件上传" /></td>\
					</tr>';
		var tb = $(this).parent().parent().parent().parent();
		var trow = tb.find("#TROW");
		trow.attr("rowspan", parseInt(trow.attr("rowspan")) + 1);
		tb.find("#before").before(html);
	})
}

function del(obj) {
	var tb = $(obj).parent().parent().parent().parent();
	var trow = tb.find("#TROW");
	trow.attr("rowspan", parseInt(trow.attr("rowspan")) - 1);
	$(obj).parent().parent().remove();
}