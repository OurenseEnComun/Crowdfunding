/******************
* Guanyem Web Team
* bcomu-crowdfunding-plugins-js
* Please put all external js libraries here
*******************/

/**
 * Helper methods
 * @Author: Omitsis SL
 * @Author URI: http://www.omitsis.com
 *
**/
// get number with 'size' leading zeros
function pad(num, size) {
  var s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}
 
//strips pixels from measure
function stripMagnitude(measure){
  var index = measure.indexOf('px');
  if (index != -1) return parseInt(measure.substring(0,index));
  return -1;
}

// get a value from an url get parameter
function getURLParameter(name, url) {
  //location.search
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(url)||[,null])[1]
  );
}

// cookies management
function setCookie(c_name,value,exdays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name) {
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++)
  {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name)
      {
      return unescape(y);
      }
    }
  return "";
}