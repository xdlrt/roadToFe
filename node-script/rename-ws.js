var fs = require('fs');
var root_path=process.argv[2];
var w_file='res.lst';
var num = 1;
function getAllFiles(root){
var res = [] , files = fs.readdirSync(root);
files.forEach(function(file){
	var pathname = root+'/'+file
	var stat = fs.lstatSync(pathname);
	console.log(pathname.slice(0,-4));
	if(pathname.slice(-4) === ".asf"){
		// console.log(file);
		fs.rename(pathname,root+'/'+'ws'+num+pathname.slice(-4),function(err){
			if (err){
				console.log('ERROR: ' + err);
			}
		});
		num++;
	}
	if (!stat.isDirectory()){
		res.push(pathname.replace(root_path,'.'));
	} 
	else {
		res = res.concat(getAllFiles(pathname));
	}
});
return res;
}
getAllFiles(root_path).join('\n');