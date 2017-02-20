/*window.onload = function() {
	var tb = document.getElementById("tb"); //根据id找到这个表格
	var btn = document.getElementsByClassName("btn");
	console.log(btn);
	btn[0].onclick = function() {
		alert("为被点击了");
	}
}*/
$(document).ready(function() {
	$.getJSON("js/js.json", function(data) {
		var html = "";
		var l = data.type.length;
		var c = 6;
		var rows = Math.ceil(l/c); 
		var i = 0;

		$("#TROW").attr("rowspan", rows + 2);
		$.each(data.type, function(i, c) {
			if(i % 6 == 0){
				html += "<tr>";
			}
			html += "<td width=\"15%\"><button value=\""+c.id+"\" class=\"btn\">"+c.title+"</button></td>";
			if(i % 5 == 0 && i < l-1 && i != 0){
				html += "</tr>";
			}
		})
		
		var t1 = "";
		if(l % c != 0){
			var x = c - l % c;
			for(var j=0;j<x;j++){
				t1 += "<td width=\"15%\"></td>";
			}
			t1 += "</tr>"
		}
		html += t1;
		$("#TTTT").before(html);
		$(".btn").click(function() {
			var id = $(this).val();
			var text = $(this).text();
			var html = '<tr attr-id="' + id + '">\
							<td colspan="4">' + text + '<input type="text" id="zxf" /><button onclick="del(this)"><img src="images/del.png"/></button></td>\
							<td><input type="text" name="" id="file" value="" /></td>\
							<td><input type="file" id="upload" value="选择文件上传" /></td>\
						</tr>';
			$("#TROW").attr("rowspan", parseInt($("#TROW").attr("rowspan")) + 1);
			$("#before").before(html);
		})
	})
})

function del(obj) {
	$(obj).parent().parent().remove();
	$("#TROW").attr("rowspan", parseInt($("#TROW").attr("rowspan")) - 1);
}

/*document.getElementById('btnAdd').onclick = function(){
		console.log(tb);

	if(rows % 6 == 0){
		
	}else{
		
	}
}
*/