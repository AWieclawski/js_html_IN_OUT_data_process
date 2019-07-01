var testText='This is an example of a paragraph, that can be formatted by Java Script';

function styleFormat(x)
{
	var styleParameters ='';
	var size = document.getElementById('size').value;
	var style = document.getElementById('style').value;
	var weight = document.getElementById('weight').value;
	var color = String(x);

	console.log("size: ",size,"style: ",style,"color: ",color);

	styleParameters = 'font-size:'+size+'%;font-style:'+style+';color:'+color+';font-weight:'+weight+';';

	console.log(styleParameters);

	document.getElementById('presentation').style = styleParameters; 
}
