function calculation()
{

	var type = document.getElementById('type').value;
	var quantity = document.getElementById('quantity').value;
	var quantFloat = parseFloat(quantity);
	var typeInt = parseInt(type);
	var value = 0.0;
	var price = NaN;
	var fuelName = '';
	var info = '';

	for (let i=0;i<catalogue.length;i++)
	{
		if(parseInt(catalogue[i][1])==typeInt)
		{
			price=catalogue[i][2];
			fuelName=catalogue[i][0];
		}
	}

	console.log('type: ',type,'price: ',price, 'quanity: ',quantity);

	if(isNaN(price))
	{
		info = 'Please, provide a correct fuel type number!'; 
	}
	else
	{
		value = quantFloat * parseFloat(price);
		info = 'The cost of fuel ('+fuelName+') purchase will be '+value.toFixed(2)+' pln'; 
	}
	document.getElementById('statement').innerHTML = info; 
}
