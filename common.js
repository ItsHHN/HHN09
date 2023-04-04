function printing() {
	window.print();
}

function genericpopwin(windowURL, windowWidth, windowHeight, scrollBars, reSizable)	{
	
	if (scrollBars)	{
		//
	} else	{
		scrollBars = 'no'
	}
	
	if (reSizable)	{
		//
	} else	{
		reSizable = 'no'
	}
	
	var windowName = "generic" + Math.round(Math.random(1)*1000);
	
	var windowOptions = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=" + scrollBars + ",resizable=" + reSizable + ",width=" + windowWidth + ",height=" + windowHeight;
	
	var mywin = window.open(windowURL,windowName,windowOptions);
}

function genericpopwin2(windowURL, windowWidth, windowHeight, scrollBars, reSizable)	{
	
	if (scrollBars)	{
		//
	} else	{
		scrollBars = 'yes'
	}
	
	if (reSizable)	{
		//
	} else	{
		reSizable = 'no'
	}
	
	var windowName = "generic" + Math.round(Math.random(1)*1000);
	
	var windowOptions = "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=" + scrollBars + ",resizable=" + reSizable + ",width=" + windowWidth + ",height=" + windowHeight;
	
	var mywin = window.open(windowURL,windowName,windowOptions);
}

function openInParentWin(url) {
	window.opener.location.href = url;
	window.close();
}


 function FlashPop(){ 
  newWin=window.open('/flashvideopreview_popup.html', 'screenchooser', 'height=505, width=610, scrollbars=no, menubar=no, toolbar=no, status=no'); 
  }
  
  function FlashPopSource(source){ 
  newWin=window.open('/flashvideopreview_popup.html?__source='+source, 'screenchooser', 'height=505, width=610, scrollbars=no, menubar=no, toolbar=no, status=no'); 
  }



/*
	Standards Compliant Rollover Script
	Author : Daniel Nolan
	http://www.bleedingego.co.uk/webdev.php
*/

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'roImg') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_over'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_over'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

function sendtoafriend() {
	var tmphref = window.location.href;
	genericpopwin('send_a_friend.php?link='+tmphref,375,250);
}

window.onload = initRollovers;

function initBookingDateTime() {

	//Initialize time variables
	var millisecond=1;
	var second=millisecond*1000;
	var minute=second*60;
	var hour=minute*60;
	var day=hour*24;
	var year=day*365;

	//Initialize current date/time variables
	var num_days_add = 30;
	var initial_date = new Date();
	var current_date = new Date(initial_date.valueOf() + (day * num_days_add));
	var current_month = current_date.getMonth();
	var current_day = current_date.getDate();
	var current_year = current_date.getFullYear();

	//Initialize future date/time variables
	var num_days_in_future = 3;
	var future_date = new Date(current_date.valueOf() + (day * num_days_in_future))
	var future_month = future_date.getMonth();
	var future_day = future_date.getDate();
	var future_year = future_date.getFullYear();

	//Set check-in month
	for(var i=0; i < document.avail.doa_mm.options.length; i++) {
		if(document.avail.doa_mm.options[i].value == current_month) {
			document.avail.doa_mm.options[i].selected = true;
		}
	}

	//Set check-in day
	for(var i=0; i < document.avail.doa_dd.options.length; i++) {
		if(document.avail.doa_dd.options[i].value == current_day) {
			document.avail.doa_dd.options[i].selected = true;
		}
	}

	//Set check-out month
	for(var i=0; i < document.avail.dod_mm.options.length; i++) {
		if(document.avail.dod_mm.options[i].value == future_month) {
			document.avail.dod_mm.options[i].selected = true;
		}
	}

	//Set check-out day
	for(var i=0; i < document.avail.dod_dd.options.length; i++) {
		if(document.avail.dod_dd.options[i].value == future_day) {
			document.avail.dod_dd.options[i].selected = true;
		}
	}
}

///////////////////////////////////////////////////////////
// Purpose: validates submitted booking dates/months
//
///////////////////////////////////////////////////////////
/*
function valBookingDateTime() {
	var doa = new Date();
		doa.setMonth(document.avail.doa_mm.value);
		doa.setDate(document.avail.doa_dd.value);

	var dod = new Date();
		dod.setMonth(document.avail.dod_mm.value);
		dod.setDate(document.avail.dod_dd.value);

	if(doa > dod) {
		alert('Please note that the Check-Out Date must occur later than Check-In Date.');
		return false;
	}
}*/