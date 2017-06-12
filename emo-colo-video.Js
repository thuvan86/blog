document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(dummy)
{
  var d = [], i=0, def = ['comment-block','comment-body','comment-post-messages'];

  for(i=0;i<def.length;i++)
  {
	var content = document.getElementsByClassName(def[i]);
	for(var j=0;j<content.length;j++)
		d.push(content[j]);
  }
  for(var i=0;i<d.length;i++)
  {
var theText = d[i].innerHTML;
//Multimedia
     theText = theText.replace(/(\b)http:\/\/(youtu.be\/|www.youtube.com\/watch\?v\=)([A-z0-9]{1,})(\b)/g, "<iframe width='300' height='240' src='http://www.youtube.com/embed/$3?rel=0'  frameborder='0' allowfullscreen></iframe>");
      theText = theText.replace(/(\b)http:\/\/www.nhaccuatui.com\/nghe\?M\=([A-z0-9]{1,})(\b)/g,"<div style='overflow:hidden'><embed style='margin-top:-350px;width:300px;height:400px' src='http://www.nhaccuatui.com/m/$2' quality='high' flashvars='autostart=false' wmode='transparent' type='application/x-shockwave-flash'></embed></div>");
      theText = theText.replace(/(\b)http:\/\/www.nhaccuatui.com\/m\/([A-z0-9]{1,})(\b)/g,"<div style='overflow:hidden'><embed style='margin-top:-350px;width:300px;height:400px' src='http://www.nhaccuatui.com/m/$2' quality='high' flashvars='autostart=false' wmode='transparent' type='application/x-shockwave-flash'></embed></div>");
      theText = theText.replace(/(\b)http:\/\/www.nhaccuatui.com\/nghe\?L\=([A-z0-9]{1,})(\b)/g,"<div style='overflow:hidden'><embed style='margin-top:-250px;width:300px;height:400px' src='http://www.nhaccuatui.com/l/$2' quality='high' flashvars='autostart=false' wmode='transparent' type='application/x-shockwave-flash'></embed></div>");
      theText = theText.replace(/(\b)http:\/\/www.nhaccuatui.com\/l\/([A-z0-9]{1,})(\b)/g,"<div style='overflow:hidden'><embed style='margin-top:-250px;width:300px;height:400px' src='http://www.nhaccuatui.com/l/$2' quality='high' flashvars='autostart=false' wmode='transparent' type='application/x-shockwave-flash'></embed></div>");
      theText = theText.replace(/(\b)(http:\/\/[^\s\t\r\n]{1,}\.mp3)(\b)/g,"$1<audio controls><source src='horse.ogg' type='audio/ogg'><source src='$2' type='audio/mpeg'>Your browser does not support the audio element.</audio>$3");
      theText = theText.replace(/(\b)(https?:\/\/[^\<]{1,}\.)(gif|jpg|jpeg|png|bmp)(\b)/g,"$1<div style='clear:both'></div><img  style='float:left;margin:10px 0;border:1px solid #DDD;max-width:590px;background:#FFF;padding:4px' alt='com-img' src='$2$3' /><div style='clear:both'></div>$4");
//Emoticons
theText = theText.replace(/\:\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' />")
theText = theText.replace (/\:\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")
theText = theText.replace (/\:\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")
theText = theText.replace (/\~X\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif'/>")
theText = theText.replace (/\:\-h/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif'/>")
theText = theText.replace (/\:-\?/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif'/>")
theText = theText.replace (/b-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif'/>")
theText = theText.replace(/\*\-\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/58.gif'/>")
theText = theText.replace(/\~O\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/57.gif'/>")
theText = theText.replace (/\@\}\;\-/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/53.gif'/>")
theText = theText.replace(/\&gt;\:\D\&lt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' alt='>:-D<'/>")
theText =theText.replace(/\=\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='=)'/>")
theText = theText.replace (/\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif'/>")
theText = theText.replace(/\:\-\*/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' />")
theText = theText.replace(/\:D/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt=':-D'/>")
theText = theText.replace(/\[-*x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/68.gif' alt='[-X'/>")
theText = theText.replace(/\s*x\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='X('/>")
theText = theText.replace(/\:-O/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt=':-O'/>")
theText = theText.replace(/\&gt;:P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='>:P'/>") 
theText = theText.replace(/\=D&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='=D>'/>")
theText = theText.replace (/\:\@\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/49.gif'/>")
theText = theText.replace (/\:\P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")

theText = theText.replace (/\:\"\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif'/>")
theText = theText.replace(/\;;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' />")
theText = theText.replace(/\;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt=';)'/>")
theText = theText.replace(/\:x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif'alt=':X'/>")
theText = theText.replace(/\=\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='=('/>")
theText = theText.replace(/\:\-\//ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt=':-C'/>")


//Font-size & Color
      theText = theText.replace(/\[size=\"(?:(\d{1,2}))\"\]/gi,"<span style=\'font-size:$1px\'>");
      theText = theText.replace(/\[\/size\]/gi,"</span>");
      theText = theText.replace(/\[color=\"(?:([a-z]{3,}|#[a-f0-9]{3,6}))\"\]/gi,"<span style=\'color:$1\'</span>");
      theText = theText.replace(/\[\/color\]/gi,"</span>");

d[i].innerHTML = theText;

    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(function(){
addSmiley();
});