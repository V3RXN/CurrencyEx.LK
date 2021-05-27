$(document).ready(function () {

	$.getJSON("https://api.coinbase.com/v2/time",function (result) {
			$("#update").text(result.data.iso);
		});
				
	$.getJSON("https://api.coinbase.com/v2/exchange-rates",function (result) {
			USD = parseFloat(result.data.rates.LKR);
			var parsedusd = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#usdlkr").text(parsedusd);		
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=BTC",function (result) {
			BTC = parseFloat(result.data.rates.LKR);
			var parsedbtc = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#btclkr").text(parsedbtc);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=JPY",function (result) {
			JPY = parseFloat(result.data.rates.LKR);
			var parsedjpy = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#jpylkr").text(parsedjpy);
		});
					
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=EUR",function (result) {
			EUR = parseFloat(result.data.rates.LKR);
			var parsedeur = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#eurlkr").text(parsedeur);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=GBP",function (result) {
			GBP = parseFloat(result.data.rates.LKR);
			var parsedgbp = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#gbplkr").text(parsedgbp);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=AUD",function (result) {
			AUD = parseFloat(result.data.rates.LKR);
			var parsedaud = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#audlkr").text(parsedaud);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=INR",function (result) {
			INR = parseFloat(result.data.rates.LKR);
			var parsedinr = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#inrlkr").text(parsedinr);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=CAD",function (result) {
			CAD = parseFloat(result.data.rates.LKR);
			var parsedcad = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#cadlkr").text(parsedcad);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=CHF",function (result) {
			CHF = parseFloat(result.data.rates.LKR);
			var parsedchf = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#chflkr").text(parsedchf);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=RUB",function (result) {
			RUB = parseFloat(result.data.rates.LKR);
			var parsedrub = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#rublkr").text(parsedrub);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=MXN",function (result) {
			MXN = parseFloat(result.data.rates.LKR);
			var parsedmxn = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#mxnlkr").text(parsedmxn);
		});
				
		$.getJSON("https://api.coinbase.com/v2/exchange-rates?currency=CNY",function (result) {
			CNY = parseFloat(result.data.rates.LKR);
			var parsedcny = parseFloat(result.data.rates.LKR).toFixed(2);
			$("#cnylkr").text(parsedcny);
		});
		
			
		$("#convertbtn").click(function(){

				var baseCurrency = document.getElementById("baseCurrency").value;
				var baseAmount = parseFloat(document.getElementById("baseAmount").value);
				var result;
				

				if(baseCurrency === 'USD'){
					
					result = USD*baseAmount;
					
				} 
				else if(baseCurrency === 'BTC'){
					
					result = BTC*baseAmount;
						
				}
				else if(baseCurrency === 'JPY'){
					
					result = JPY*baseAmount;
						
				}
				else if(baseCurrency === 'EUR'){
					
					result = EUR*baseAmount;
						
				}
				else if(baseCurrency === 'GBP'){
					
					result = GBP*baseAmount;
						
				}
				else if(baseCurrency === 'AUD'){
					
					result = AUD*baseAmount;
						
				}
				else if(baseCurrency === 'INR'){
					
					result = INR*baseAmount;
						
				}
				else if(baseCurrency === 'CAD'){
					
					result = CAD*baseAmount;
						
				}
				else if(baseCurrency === 'MXN'){
					
					result = MXN*baseAmount;
						
				}
				else if(baseCurrency === 'CHF'){
					
					result = CHF*baseAmount;
						
				}
				else if(baseCurrency === 'RUB'){
					
					result = RUB*baseAmount;
						
				}
				else if(baseCurrency === 'CNY'){
					
					result = CNY*baseAmount;
						
				}

				document.getElementById("result").value = result; 
			});
});