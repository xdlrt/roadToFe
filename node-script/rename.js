/* 批量修改当前文件夹内所有文件名前六个字 */
var fs = require('fs');
fs.readdir("./",function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach(function(file){ 	
		if(file !== "rename.js"){
			fs.rename(file,'CC Design'+file.slice(6),function(err){
				if (err){
					console.log('ERROR: ' + err);
				}
			});
		}
	});
});