function styleFormat(x)
{
	var styleParameters ='';
	var size = document.getElementById('size').value;
	var style = document.getElementById('style').value;
	var weight = document.getElementById('weight').value;
	var color = String(x);

	console.log("size: ",size,"style: ",style,"color: ",color,"weight: "+weight);

	styleParameters = 'font-size:'+size+'%;font-style:'+style+';color:'+color+';font-weight:'+weight+';';

	console.log(styleParameters);

	document.getElementById('presentation').style = styleParameters; 
}
