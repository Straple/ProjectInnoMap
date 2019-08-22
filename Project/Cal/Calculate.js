let G  // считывает текст из ответа
	, LastG
	,A
	 ,S;

G = "0";



function viewDiv(Type)
{
	if(document.getElementById(Type).style.display == "none")
	{
	 	document.getElementById(Type).style.display= "block";
	}
	else
	{
		document.getElementById(Type).style.display ="none";
	}
};







function digit(D) 
{
	G += String(D);

	Out();
}


function operator(O) 
{
	LastG = G;
	G 	  = "0";
	S 	  = String(O);

	Out();
}

function Del(B) 
{
	G = "0";
	if(B === true)
	{
		LastG = S = "0";
	}

	Out();
}

function fact() 
{
	let Q = Number(G) , k;

	k = 1;

	while(Q > 0)
	{
		k *= Q;
		Q--;
		if(k == Infinity)
		{
			break;
		}
	}
	G = k;

	Out();
}

function D() 
{
	G = String( Number(G) );

	G = G.substr(0, G.length - 1);

	Out();
}

function Pow(N) 
{
	G = Math.pow(Number(G) , N);

	Out();
}

function Abs()
{
	G = String( Math.abs(Number(G)) );

	Out();
}

function qrt(B)
{
	if(B === true)
	{
		G = Math.sqrt(Number(G));	
	}
	else
	{
		G = Math.cbrt(Number(G));
	}
	
	Out();
}

function Drob()
{
	G = 1 / Number(G);
	Out();
}

function Plusm() 
{
	G = Number(G) * (-1);
	Out();
}

function Touch()
{
	G += "."
	Out();
}



function Res()
{
	

		if(S == '+')
		{
			G = Number(LastG) + Number(G);
		}
		else if(S == '-')
		{
			G = Number(LastG) - Number(G);
		}
		else if(S == '*')
		{
			G = Number(LastG) * Number(G);
		}
		else if(S == '%')
		{
			G = Number(LastG) % Number(G);
		}
		else if(S == '/')
		{
			G = Number(LastG) / Number(G);
		}
		else if(S == 'P')
		{
			G = Math.pow(Number(LastG) , Number(G));

		}
		LastG = S = "";

	

	Out();

}


function Out() 
{
	A = Number(G);
	if(A == Infinity)
	{
		A = "∞";
	}

	document.getElementById('result').value = A;
}
