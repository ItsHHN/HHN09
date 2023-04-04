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
