function styleFormat(x)
{
	var styleParameters ='';
	var size = document.getElementById('size').value;
	var style = document.getElementById('style').value;
	var weight = document.getElementById('weight').value;
	var transform = document.getElementById('transform').value;
	var decoration = document.getElementById('decoration').value;
	var color = String(x);

	console.log("size: ",size,", style: ",style,", color: ",color,", weight: "+weight,", transform: ",transform,", decoration: ",decoration);

	styleParameters = 'font-size:'+size+'%;font-style:'+style+';color:'+color+';font-weight:'+weight+';text-transform:'+transform+';text-decoration:'+decoration+';';

	console.log(styleParameters);

	document.getElementById('presentation').style = styleParameters; 
}
