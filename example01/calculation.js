document.getElementById('dieselType').innerHTML = dieselType;
document.getElementById('gasType').innerHTML = gasType;
document.getElementById('dieselPrice').innerHTML = dieselPrice;
document.getElementById('gasPrice').innerHTML = gasPrice;

function calculation()
{

	var type = document.getElementById('type').value;
	var quantity = document.getElementById('quantity').value;
	var quantFloat = parseFloat(quantity);
	var typeInt = parseInt(type);
	var value = 0.0;
	var price = 0.0;
	var fuelName = '';
	var info = '';

	console.log('type: ',type,'pice: ',price, 'quanity: ',quantity);

	if (quantFloat>0)
	{
		switch(typeInt)
		{
			case gasType:
				price = gasPrice;
				fuelName = 'gasoline';
			break;

			case dieselType:
				price = dieselPrice;
				fuelName = 'diesel';
			break;
			
			default:
				price = NaN;
		}
	}

	if(isNaN(price))
	{
		info = 'Please, provide a correct fuel type number!'; 
	}
	else
	{
		value = quantFloat * price;
		console.log('value: ',value);
		info = 'The cost of fuel ('+fuelName+') purchase will be '+value.toFixed(2)+' pln'; 
	}
	document.getElementById('statement').innerHTML = info; 
}
