!function(a){a.fn.extend({monthly:function(b){function l(a,b){return 2===a?3&b||!(b%25)&&15&b?28:29:30+(a+(a>>3)&1)}function m(c,d){a("#"+e).data("setMonth",c).data("setYear",d);var f=l(c,d),m=c-1,n=new Date(d,m,1,0,0,0,0).getDay();if(a("#"+e+" .monthly-day, #"+e+" .monthly-day-blank").remove(),a("#"+e+" .monthly-event-list").empty(),a("#"+e+" .monthly-day-wrap").empty(),"event"==b.mode)for(var o=0;o<f;o++){var p=o+1,q=new Date(d,m,p,0,0,0,0).getDay();a("#"+e+" .monthly-day-wrap").append('<a href="#" class="m-d monthly-day monthly-day-event" data-number="'+p+'"><div class="monthly-day-number">'+p+'</div><div class="monthly-indicator-wrap"></div></a>'),a("#"+e+" .monthly-event-list").append('<div class="monthly-list-item" id="'+e+"day"+p+'" data-number="'+p+'"><div class="monthly-event-list-date">'+k[q]+"<br>"+p+"</div></div>")}else for(var o=0;o<f;o++){var p=o+1;(p<i&&c===g||d<h||c<g&&d==h)&&1==b.stylePast?a("#"+e+" .monthly-day-wrap").append('<a href="#" class="m-d monthly-day monthly-day-pick monthly-past-day" data-number="'+p+'"><div class="monthly-day-number">'+p+'</div><div class="monthly-indicator-wrap"></div></a>'):a("#"+e+" .monthly-day-wrap").append('<a href="#" class="m-d monthly-day monthly-day-pick" data-number="'+p+'"><div class="monthly-day-number">'+p+'</div><div class="monthly-indicator-wrap"></div></a>')}var r=a("#"+e).data("setMonth"),s=a("#"+e).data("setYear");if(r==g&&s==h&&a("#"+e+' *[data-number="'+i+'"]').addClass("monthly-today"),r==g&&s==h?a("#"+e+" .monthly-header-title-date").html(j[c-1]+" "+d):a("#"+e+" .monthly-header-title").html('<a href="#" class="monthly-header-title-date"  onclick="return false">'+j[c-1]+" "+d+'</a><a href="#" class="monthly-reset" title="Tornar a avui">↻ AVUI</a> '),"Sun"==b.weekStart&&7!=n)for(var o=0;o<n;o++)a("#"+e+" .monthly-day-wrap").prepend('<div class="m-d monthly-day-blank"><div class="monthly-day-number"></div></div>');else if("Mon"==b.weekStart&&0==n)for(var o=0;o<6;o++)a("#"+e+" .monthly-day-wrap").prepend('<div class="m-d monthly-day-blank" ><div class="monthly-day-number"></div></div>');else if("Mon"==b.weekStart&&1!=n)for(var o=0;o<n-1;o++)a("#"+e+" .monthly-day-wrap").prepend('<div class="m-d monthly-day-blank" ><div class="monthly-day-number"></div></div>');var t=a("#"+e+" .monthly-day").length,u=a("#"+e+" .monthly-day-blank").length,v=t+u,w=7*Math.ceil(v/7),x=w-v;if(v%7!=0)for(var o=0;o<x;o++)a("#"+e+" .monthly-day-wrap").append('<div class="m-d monthly-day-blank"><div class="monthly-day-number"></div></div>');if("event"==b.mode){var y=function(c){function C(){var b="";if(v){var c='<div><div class="monthly-list-time-start">'+v+" "+A+"</div>",d="";if(x)var d='<div class="monthly-list-time-end">'+x+" "+B+"</div>";var b=c+d+"</div>"}a("#"+e+' .monthly-list-item[data-number="'+G+'"]').addClass("item-has-event").append('<a href="'+p+'" class="listed-event"  data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+" "+b+"</a>")}var d="xml"==b.dataType?a(c).find("startdate").text():c.startdate,g=d.split("-"),h=g[0],i=parseInt(g[1],10),j=parseInt(g[2],10),k="xml"==b.dataType?a(c).find("enddate").text():c.enddate,l=k.split("-"),m=l[0],n=parseInt(l[1],10),o=parseInt(l[2],10),p="xml"==b.dataType?a(c).find("url").text():c.url,q="xml"==b.dataType?a(c).find("name").text():c.name,t="xml"==b.dataType?a(c).find("color").text():c.color,u="xml"==b.dataType?a(c).find("id").text():c.id,v="xml"==b.dataType?a(c).find("starttime").text():c.starttime,w=v.split(":"),x="xml"==b.dataType?a(c).find("endtime").text():c.endtime,y=x.split(":"),A="AM",B="PM";if(parseInt(w[0])>=12)var v=w[0]-12+":"+w[1],A="PM";if(0==parseInt(v))var v="12:"+w[1];if(parseInt(y[0])>=12)var x=y[0]-12+":"+y[1],B="PM";if(0==parseInt(x))var x="12:"+y[1];if(p);if(k||i!=r||h!=s){if(i==r&&h==s&&n==r&&m==s)for(var G=parseInt(j);G<=parseInt(o);G++)G==parseInt(j)?a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+"</div>"):a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'"></div>'),C();else if(n==r&&m==s&&(i<r&&h==s||h<s))for(var G=0;G<=parseInt(o);G++)1==G?a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+"</div>"):a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'"></div>'),C();else if(i==r&&h==s&&(n>r&&m==s||m>s))for(var G=parseInt(j);G<=f;G++)G==parseInt(j)?a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+"</div>"):a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'"></div>'),C();else if((i<r&&h==s||h<s)&&(n>r&&m==s||m>s))for(var G=0;G<=f;G++)1==G?a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+"</div>"):a("#"+e+' *[data-number="'+G+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+u+'" style="background:'+t+'" title="'+q+'"></div>'),C()}else{a("#"+e+' *[data-number="'+j+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator"  data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+"</div>");var D="";if(v){var E='<div><div class="monthly-list-time-start">'+v+" "+A+"</div>",F="";if(x)var F='<div class="monthly-list-time-end">'+x+" "+B+"</div>";var D=E+F+"</div>"}a("#"+e+' .monthly-list-item[data-number="'+j+'"]').addClass("item-has-event").append('<a href="'+p+'" class="listed-event"  data-eventid="'+u+'" style="background:'+t+'" title="'+q+'">'+q+" "+D+"</a>")}},z="xml"==b.dataType?b.xmlUrl:b.jsonUrl;a.get(""+z,{now:jQuery.now()},function(c){"xml"==b.dataType?a(c).find("event").each(function(a,b){y(b)}):"json"==b.dataType&&a.each(c.monthly,function(a,b){y(b)})},b.dataType).fail(function(){console.error("Monthly.js failed to import "+z+". Please check for the correct path & "+b.dataType+" syntax.")})}for(var A=a("#"+e+" .m-d"),o=0;o<A.length;o+=7)A.slice(o,o+7).wrapAll("<div class='monthly-week'></div>")}function n(){a("#"+e+" .monthly-event-list").is(":visible")&&(a("#"+e+" .monthly-cal").remove(),a("#"+e+" .monthly-header-title").prepend('<a href="#" class="monthly-cal" title="Torna al mes">☷ MES</a>'))}var c={weekStart:"Mon",mode:"",xmlUrl:"",jsonUrl:"",dataType:"xml",target:"",eventList:!0,maxWidth:!1,setWidth:!1,startHidden:!1,showTrigger:"",stylePast:!1,disablePast:!1},b=a.extend(c,b),e=a(this).attr("id"),f=new Date,g=f.getMonth()+1,h=f.getFullYear(),i=f.getDate(),j=b.monthNames||["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],k=b.dayNames||["dg.","dl.","dm.","dc.","dj.","dv.","ds."];0!=b.maxWidth&&a("#"+e).css("maxWidth",b.maxWidth),0!=b.setWidth&&a("#"+e).css("width",b.setWidth),1==b.startHidden&&(a("#"+e).addClass("monthly-pop").css({position:"absolute",display:"none"}),a(document).on("focus",""+b.showTrigger,function(b){a("#"+e).show(),b.preventDefault()}),a(document).on("click",""+b.showTrigger+", .monthly-pop",function(a){a.stopPropagation(),a.preventDefault()}),a(document).on("click",function(b){a("#"+e).hide()})),"Sun"==b.weekStart?a("#"+e).append('<div class="monthly-day-title-wrap"><div>'+k[0]+"</div><div>"+k[1]+"</div><div>"+k[2]+"</div><div>"+k[3]+"</div><div>"+k[4]+"</div><div>"+k[5]+"</div><div>"+k[6]+'</div></div><div class="monthly-day-wrap"></div>'):"Mon"==b.weekStart?a("#"+e).append('<div class="monthly-day-title-wrap"><div>'+k[1]+"</div><div>"+k[2]+"</div><div>"+k[3]+"</div><div>"+k[4]+"</div><div>"+k[5]+"</div><div>"+k[6]+"</div><div>"+k[0]+'</div></div><div class="monthly-day-wrap"></div>'):console.error("Monthly.js has an incorrect entry for the weekStart variable"),a("#"+e).prepend('<div class="monthly-header"><div class="monthly-header-title"><a href="#" class="monthly-header-title-date" onclick="return false"></a></div><a href="#" class="monthly-prev"></a><a href="#" class="monthly-next"></a></div>').append('<div class="monthly-event-list"></div>'),m(g,h),a(document.body).on("click","#"+e+" .monthly-next",function(b){var c=a("#"+e).data("setMonth"),d=a("#"+e).data("setYear");if(12==c){var f=1,g=d+1;m(f,g)}else{var f=c+1,g=d;m(f,g)}n(),b.preventDefault()}),a(document.body).on("click","#"+e+" .monthly-prev",function(b){var c=a("#"+e).data("setMonth"),d=a("#"+e).data("setYear");if(1==c){var f=12,g=d-1;m(f,g)}else{var f=c-1,g=d;m(f,g)}n(),b.preventDefault()}),a(document.body).on("click","#"+e+" .monthly-reset",function(b){a(this).remove(),m(g,h),n(),b.preventDefault(),b.stopPropagation()}),a(document.body).on("click","#"+e+" .monthly-cal",function(b){a(this).remove(),a("#"+e+" .monthly-event-list").css("transform","scale(0)"),setTimeout(function(){a("#"+e+" .monthly-event-list").hide()},250),b.preventDefault()}),a(document.body).on("click","#"+e+" a.monthly-day",function(c){if("event"==b.mode&&1==b.eventList){var d=a(this).data("number");a("#"+e+" .monthly-event-list").show(),a("#"+e+" .monthly-event-list").css("transform"),a("#"+e+" .monthly-event-list").css("transform","scale(1)"),a("#"+e+' .monthly-list-item[data-number="'+d+'"]').show();var f=document.getElementById(e+"day"+d),g=f.offsetTop;a("#"+e+" .monthly-event-list").scrollTop(g),n()}else if("picker"==b.mode){var d=a(this).data("number"),h=a("#"+e).data("setMonth"),i=a("#"+e).data("setYear");a(this).hasClass("monthly-past-day")&&1==b.disablePast?c.preventDefault():(a(""+b.target).val(h+"/"+d+"/"+i),1==b.startHidden&&a("#"+e).hide())}c.preventDefault()}),a(document.body).on("click","#"+e+" .listed-event",function(b){var c=a(this).attr("href");c||b.preventDefault()})}})}(jQuery);