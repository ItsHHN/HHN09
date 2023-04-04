function unloadHandler(e)
{
	
	if (GetCookie("hhn2007survey") == "donedone")
	{
		var i=1;
	}
	else 
	{
		var ev = e;
		launchSurveyWindow(ev,"Universal_Orlando","http://www.visitorsatisfaction.com/hhnweb05a","534","435","yes","yes");
		SetCookie("hhn2007survey","donedone");
	}
}

function getCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function SetCookie(name, value) {
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = "Thu, 1 Nov 2007 20:00:00 UTC";
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	var cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires)) +
	((path == null) ? "; path=/" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
	document.cookie = cookie;
}

function initializePage()
{
	//Set cookies for survey
	Delete_Cookie('HHNID', '/', '');	
	Set_Cookie( 'HHNID', 'HHN', 30, '/', '', '' );
}

/* --------------------- START UTILITY METHODS ------------------- */
function launchSurveyWindow(e,title, url, width, height, scrollbars, resizable)
{
	//IE
	if(window.event)
	{
		if (window.event.clientX < 0 || window.event.clientY < 0){
				window.open(url,title,'location=no,scrollbars=' + scrollbars + ',title=no,width=' + width + ',height=' + height + ',resizable=' + resizable);			
				//Cleanup	
				Delete_Cookie('HHNID', '/', '');
			
		}
	}
	else //Everyone else
	{
		if(e.target == null)
		{
			window.open(url,title,'location=no,scrollbars=' + scrollbars + ',title=no,width=' + width + ',height=' + height + ',resizable=' + resizable);			
			//Cleanup	
			Delete_Cookie('HHNID', '/', '');
		}
	}
}

function getCurrentPageName()
{
	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	return sPage;
}

function Set_Cookie( name, value, expires, path, domain, secure ) 
{
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );

	/*
	if the expires variable is set, make the correct expires time, the current script below will set 
	it for x number of days, to make it for hours, delete * 24, for minutes, delete * 60 * 24
	*/
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}

function Get_Cookie( name ) {
	
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) )
	{
		return null;
	}
	
	if ( start == -1 ) return null;
	
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}

function Delete_Cookie( name, path, domain ) {
	if ( Get_Cookie( name ) ) document.cookie = name + "=" + ( ( path ) ? ";path=" + path : "") + ( ( domain ) ? ";domain=" + domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}
/* --------------------- END UTILITY METHODS --------------------- */


// --------------------
// MAIN 
// --------------------

//initializePage();
//window.onbeforeunload = unloadHandler;