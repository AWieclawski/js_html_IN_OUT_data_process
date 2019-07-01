var diesel = 4.1;
var gas = 3.55;

document.getElementById('diesel').innerHTML = diesel;
document.getElementById('gas').innerHTML = gas;


function calculation()
{

	var type = document.getElementById('type').value;
	var quantity = document.getElementById('quantity').value;
	var quantFloat = parseFloat(quantity);
	var typeInt = parseInt(type);
	var value = 0.0;
	var price = 0.0;
	var info = '';

	console.log('type: ',type,'pice: ',price, 'quanity: ',quantity);

	if (quantFloat>0)
	{
		switch(typeInt)
		{
			case 1:
				price = gas;
			break;

			case 2:
				price = diesel;
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
		info = 'The cost of fuel purchase will be '+value.toFixed(2)+' pln'; 
	}
	document.getElementById('statement').innerHTML = info; 
}
