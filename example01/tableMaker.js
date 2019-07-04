var tbodyHtml ='';

for (let i =0; i<catalogue.length;i++)
{
	 tbodyHtml += '<tr><th>'+catalogue[i][0]+'</th><td>'+catalogue[i][1]+'</td><td>'+catalogue[i][2]+'</td></tr>';
}

console.log(tbodyHtml);

document.getElementById('priceList').innerHTML = tbodyHtml;
