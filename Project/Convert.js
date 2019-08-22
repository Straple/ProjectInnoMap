

function Convert(Type,valNum) 
{
	if(Type == 'F')
	{
		document.getElementById("Meters").innerText = Number(valNum / 3.2808);
		document.getElementById("Feet").innerText = Number(valNum);		
		document.getElementById("Inches").innerHTML=Number(valNum*12);
		document.getElementById("Cm").innerHTML=Number(valNum / 0.032808);
		document.getElementById("Yards").innerHTML=Number(valNum * 0.33333);
		document.getElementById("Km").innerHTML=Number(valNum / 3280.8);
		document.getElementById("Mil").innerHTML=Number(valNum * 0.00018939);
	}
	else if(Type == 'M')
	{
		document.getElementById("Feet").innerText = Number(valNum * 3.2808);			
		document.getElementById("Meters").innerText = Number(valNum);
		document.getElementById("Inches").innerHTML=Number(valNum*39.370);
		document.getElementById("Cm").innerHTML=Number(valNum/0.01);
		document.getElementById("Yards").innerHTML=Number(valNum*1.0936);
		document.getElementById("Km").innerHTML=Number(valNum/1000);
		document.getElementById("Mil").innerHTML=Number(valNum*0.00062137);
	}
	else if(Type == 'I')
	{
		document.getElementById("Feet").innerText = Number(valNum *0.083333);						
		document.getElementById("Meters").innerText = Number(valNum /39.370);
		document.getElementById("Inches").innerHTML=Number(valNum);
		document.getElementById("Cm").innerHTML=Number(valNum/0.39370);
		document.getElementById("Yards").innerHTML=Number(valNum*0.027778);
		document.getElementById("Km").innerHTML=Number(valNum/39370	);
		document.getElementById("Mil").innerHTML=Number(valNum*0.000015783);
	}
	else if(Type == 'Cm')
	{
		document.getElementById("Feet").innerText = Number(valNum *0.032808);						
		document.getElementById("Meters").innerText = Number(valNum /100);
		document.getElementById("Inches").innerHTML=Number(valNum);
		document.getElementById("Cm").innerHTML=Number(valNum*0.39370);
		document.getElementById("Yards").innerHTML=Number(valNum*0.010936);
		document.getElementById("Km").innerHTML=Number(valNum /100000	);
		document.getElementById("Mil").innerHTML=Number(valNum*0.0000062137);
	}
	else if(Type == 'Yards')
	{
		document.getElementById("Feet").innerText = Number(valNum *3);						
		document.getElementById("Meters").innerText = Number(valNum /1.0936);
		document.getElementById("Inches").innerHTML=Number(valNum *36);
		document.getElementById("Cm").innerHTML=Number(valNum/0.010936);
		document.getElementById("Yards").innerHTML=Number(valNum);
		document.getElementById("Km").innerHTML=Number(valNum /1093.6);
		document.getElementById("Mil").innerHTML=Number(valNum*0.00056818);
	}
	else if(Type == 'Km')
	{
		document.getElementById("Feet").innerText = Number(valNum *3280.8);						
		document.getElementById("Meters").innerText = Number(valNum *1000);
		document.getElementById("Inches").innerHTML=Number(valNum *39370);
		document.getElementById("Cm").innerHTML=Number(valNum*100000);
		document.getElementById("Yards").innerHTML=Number(valNum *1093.6);
		document.getElementById("Km").innerHTML=Number(valNum);
		document.getElementById("Mil").innerHTML=Number(valNum*0.62137);
	}
	else if(Type == 'Mil')
	{
		document.getElementById("Feet").innerText = Number(valNum*5280);						
		document.getElementById("Meters").innerText = Number(valNum /0.00062137);
		document.getElementById("Inches").innerHTML=Number(valNum *63360);
		document.getElementById("Cm").innerHTML=Number(valNum/0.0000062137);
		document.getElementById("Yards").innerHTML=Number(valNum *1760);
		document.getElementById("Km").innerHTML=Number(valNum /0.62137);
		document.getElementById("Mil").innerHTML=Number(valNum);
	}
  
}