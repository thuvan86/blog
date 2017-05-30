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
  var d = [], i=0, def = ['comment-block','comment-post-messages'];

  for(i=0;i<def.length;i++)
  {
	var content = document.getElementsByClassName(def[i]);
	for(var j=0;j<content.length;j++)
		d.push(content[j]);
  }
  for(var i=0;i<d.length;i++)
  {

d[i].innerHTML = d[i].innerHTML.replace(/\:\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' />")
d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\~X\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-h/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\?/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/b-\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\*\-\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/58.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\~O\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/57.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\@\}\;\-/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/53.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\&gt;\:\D\&lt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif' alt='>:-D<'/>")
d[i].innerHTML =d[i].innerHTML.replace(/\=\)\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='=)'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\-\*/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' />")
d[i].innerHTML = d[i].innerHTML.replace(/\:D/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt=':-D'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\[-*x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/68.gif' alt='[-X'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\s*x\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='X('/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:-O/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt=':-O'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\&gt;:P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='>:P'/>") 
d[i].innerHTML = d[i].innerHTML.replace(/\=D&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='=D>'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\@\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/49.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\"\&gt;/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\;;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' />")
d[i].innerHTML = d[i].innerHTML.replace(/\;\)/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt=';)'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:x/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif'alt=':X'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\=\(\(/ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='=('/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\-\//ig,"<img style='border: 0; padding:0'  src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt=':-C'/>")


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