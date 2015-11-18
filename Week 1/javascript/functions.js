	
	  function showValues() {
		var currentYear = (new Date).getFullYear();
		var voornaam = $("#voornaam").val();
		var achternaam = $("#achternaam").val();
		var geboortejaar = $("#geboortejaar").val();
		geboortejaar = currentYear - geboortejaar
		str = "Welkom "+voornaam+" "+achternaam+". Volgens mijn berekening ben jij "+geboortejaar+" jaar oud"
		$( "#resultsopdracht1" ).text( str );
	  }
	  
$(function() {
  var txtTemp;
 $('#btnCtoF').click(function(e) {
	 CToF();
	
 });
 
 $('#btnFtoC').click(function(e) {
	FtoC();
 });
 
});

 function CToF() {
  txtTemp = $('#tempbox');
 var tempInC = Math.round((((212 - 32) / 100) * txtTemp.val() + 32) * 100) / 100;
 	$( "#resultsopdracht2" ).text('Dat is: ' + tempInC + ' fahrenheit');
 }

 function FtoC() {
  txtTemp = $('#tempbox');
 var tempInF = Math.round(((100 / (212 - 32)) * (txtTemp.val() - 32)) * 100) / 100;
	$( "#resultsopdracht2" ).text('Dat is: ' + tempInF + ' celcius'); 

 }
 
   function checkScores() {
		var team1 = $("#team1").val();
		var team2 = $("#team2").val();
		if (team1 > team2){
			str = "Team 1 wint!"
		}else if (team1 < team2) {
			str = "Team 2 wint!"
		} else {
			str = "Gelijkspel!"
		}
		$( "#resultsopdracht3" ).text( str );
	  }
	
	function checkAankoop() {
		var aankoop = $("#aankoop").val();
		if (aankoop >= 25) {
			str = "de kosten zijn " + aankoop + ". je heb geen verzend kosten "
		}else{
			aankoop = (parseFloat(aankoop) + 3.95);
			str = "de kosten zijn " + aankoop + ". je heb 3,95 verzend kosten "
		}
			$( "#resultsopdracht4" ).text( str );
	}
	  