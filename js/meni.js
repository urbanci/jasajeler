$(document).ready(function halo(){
	
//	CE JE INDEX.php
	if (window.location.href.indexOf("index") > -1 || window.location.href.indexOf("") > -1 ) {
		$( "#vsebina2" ).hide();
		$( "#vsebina3" ).hide();
		$( "#vsebina4" ).hide();
		$( "#vsebina1" ).show();
	}
	
//	CE JE meni1.php
	if (window.location.href.indexOf("meni1") > -1) {
		$( "#vsebina1" ).hide();
		$( "#vsebina3" ).hide();
		$( "#vsebina4" ).hide();
		$( "#vsebina2" ).show();
	}
//	CE JE meni2.php
	if (window.location.href.indexOf("meni2") > -1) {
		$( "#vsebina2" ).hide();
		$( "#vsebina1" ).hide();
		$( "#vsebina4" ).hide();
		$( "#vsebina3" ).show();
	}
//	CE JE meni3.php
	if (window.location.href.indexOf("meni3") > -1) {
		$( "#vsebina2" ).hide();
		$( "#vsebina3" ).hide();
		$( "#vsebina1" ).hide();
		$( "#vsebina4" ).show();
	}
	
//	KLIKI NA MENI -------------------------------------------------------------------------------------------------------
//	CE STISNES INDEX
	$("#index").click(function seos(){
		$( "#vsebina2" ).finish().fadeOut(400);
		$( "#vsebina3" ).finish().fadeOut(400);
		$( "#vsebina4" ).finish().fadeOut(400);
		$( "#vsebina1" ).finish().delay(500).fadeIn(700);
		if (!$("H1:contains('INDEX')").length) {
			$("h1").finish().fadeOut(400, function(){
				$("h1").fadeIn(700).text("INDEX");
			});
			
			$('#zgornjiMeni').finish().fadeTo('slow', 0.3, function(){
			    $(this).css('background-image', 'url("slike/jasa.jpg")');
			}).fadeTo('slow', 1);
		}
	});
	
//	CE STISNES meni1
	$("#meni1").click(function seos(){
		$( "#vsebina1" ).finish().fadeOut(400);
		$( "#vsebina3" ).finish().fadeOut(400);
		$( "#vsebina4" ).finish().fadeOut(400);
		$( "#vsebina2" ).finish().delay(500).fadeIn(700);
		if (!$("H1:contains('MENI1')").length) {
			$("h1").finish().fadeOut(400, function(){
				$("h1").fadeIn(700).text("MENI1");
			});
			
			$('#zgornjiMeni').finish().fadeTo('slow', 0.3, function(){
			    $(this).css('background-image', 'url("slike/jasa1.jpg")');
			}).fadeTo(2000, 1);
		}
	});
	
//	CE STISNES meni2
	$("#meni2").click(function seos(){
		$( "#vsebina2" ).finish().fadeOut(400);
		$( "#vsebina1" ).finish().fadeOut(400);
		$( "#vsebina4" ).finish().fadeOut(400);
		$( "#vsebina3" ).finish().delay(500).fadeIn(700);
		if (!$("H1:contains('MENI2')").length) {	
			$("h1").finish().fadeOut(400, function(){
				$("h1").fadeIn(700).text("MENI2");
			});
		}
	});
	
//	CE STISNES meni3
	$("#meni3").click(function seos(){
		$( "#vsebina2" ).finish().fadeOut(400);
		$( "#vsebina1" ).finish().fadeOut(400);
		$( "#vsebina3" ).finish().fadeOut(400);
		$( "#vsebina4" ).finish().delay(500).fadeIn(700);
		if (!$("H1:contains('MENI3')").length) {
			$("h1").finish().fadeOut(400, function(){
				$("h1").fadeIn(700).text("MENI3");
			});			
		}
	});
	
//	SPREMINJANJE LINKOV -------------------------------------------------------------------------------------------------
//	za index
	$("#index").click(function seos(){
		var data = "index.php";
		  history.pushState(null, null, data);
	});
	
//	za meni1
	$("#meni1").click(function seos(){
		var data = "meni1.php";
		  history.pushState(null, null, data);
	});
	
//	za meni2
	$("#meni2").click(function seos(){
		var data = "meni2.php";
		  history.pushState(null, null, data);
	});
	
//	za meni3
	$("#meni3").click(function seos(){
		var data = "meni3.php";
		  history.pushState(null, null, data);
	});
	
});//konec document.ready