var colBack = "#FFFF66";
var colFore = "#000000";
var myback = colBack;
var mycount = 0;
var h_blink = null;
var myform; //for changeBackground


function ckOnClick(par,myf) {
   if(!myf)
      myf = document.vSearch;
   if (par == 0) {
      myf.txtCity.value = "";
      myf.txtCity.style.backgroundColor = "#FFFFFF";
      myf.txtCity.style.color = "#000000";
      if (myf.touristic_area != null) myf.touristic_area.value = myf.tmp_area_tag.value;
   } else {
      if (myf.touristic_area != null) myf.touristic_area.value = "";
      if (myf.chk_city != null) {
         myf.chk_city[1].checked = true;
      }
   }
}

function PC(city,myf) {
   if(!myf)
      myf = document.vSearch;
   //window.location.href = '#top';
   C2(city,0,myf);
}

function CheckPR(myf) {
   if(!myf)
      myf = document.vSearch;

   p = myf.pval.value;
   r = myf.rval.value;
   
   if(p=='') p=0;
   if(r=='') r=0;
   
   if ((p == 0) && (r == 0)) {
      if (typeof(err_no_room_person) != 'string') {
        err_no_room_person = 'Please select the number of rooms and persons.';
      }
      alert(err_no_room_person);
      return false;
   }
   if ((p != 0) && (r == 0)) {
      alert(err_room_number);
      return false;
   }
   if ((r != 0) && (p == 0)) {
      alert(err_person_number);
      return false;
   }
   if (parseInt(r) > parseInt(p)) {
      alert(err_room_le_person);
      return false;
   }
   return true;
}

function C2(city,geoid,myf) {
   window.location.href = '#top';
   if(!myf)
      myf = document.vSearch;
   if (geoid)
      myf.geoid.value=geoid;
   if (geoid == 0){
      myf.geoid.value='';
   }
   if (myf.chk_city != null) {
      myf.chk_city[1].checked = true;
   }

   myf.city.value = city.replace(/\+/g , ' ');
   
   if (myf.find_tag != null)
      myf.find_tag.value = "0";
   
   if (go_submit) myf.submit();
}

function PA(name,myf) {
   if(!myf)
      myf = document.vSearch;
   window.location.href = '#top';
   A2(name,myf);
}

function A2(name,myf) {
   C2(name,null,myf);
   if(!myf)
      myf = document.vSearch;
   myf.find_tag.value = "1";
   myf.action = actLink2;
   if (go_submit) myf.submit();
}


function changeBackground() {
   if(!myform)
      myf1 = document.vSearch;
   else
      myf1 = myform;
   myf = myf1.txtCity;
   if (myback == colBack) {
      myf.style.backgroundColor = myback;
      myf.style.color = colFore;
      myback = colFore;
      if (mycount >= 4) window.clearInterval(h_blink);
   } else {
      myf.style.backgroundColor = myback;
      myback = colBack;
      myf.style.color = myback;
   }
   mycount++;
}

function ResetDate(myf) {
   if(!myf)
      myf = document.vSearch;
   myf.cb_sd.selectedIndex = 0;
   myf.cb_smy.selectedIndex = 0;
   myf.cb_ed.selectedIndex = 0;
   myf.cb_emy.selectedIndex = 0;
   myf.sd.value = "";
   myf.sm.value = "";
   myf.sy.value = "";
   myf.ed.value = "";
   myf.em.value = "";
   myf.ey.value = "";
}

function CheckDate(myf) {
   if(!myf)
      myf = document.vSearch;
   set_cookies_onsubmit (myf);
   if ((myf.chk_city == null) || (myf.chk_city[1].checked)){
      if (!check_city(myf)) return false;
      if (!_CheckDate(myf)) return false;
   }
   else if (!_CheckDate(myf)) return false;
   return true;
}



function _CheckDate(myf) {

   var today = new Date();
   var day = today.getDate();
   var month = today.getMonth() + 1 ;
   var year = today.getFullYear();
   if(!myf)
      myf = document.vSearch;

   sel_sd   = myf.cb_sd;
   sel_smy  = myf.cb_smy;
   sel_ed   = myf.cb_ed;
   sel_emy  = myf.cb_emy;
   sel_pval = myf.pval;
   sel_rval = myf.rval;

   if (typeof(err_wrong_ci_date) != 'string') {
      err_wrong_ci_date = 'The check-in date you entered is not valid.';
   }
   if (typeof(err_wrong_co_date) != 'string') {
      err_wrong_co_date = 'The check-out date you entered is not valid.';
   }
   if (typeof(err_wrong_ci_90max) != 'string') {
      err_wrong_ci_90max = 'The maximum length of your stay cannot exceed 90 days.';
   }
   if (typeof(err_co_before_ci) != 'string') {
      err_co_before_ci = 'The check-in date must be before the check-out date.';
   }
   
   if(!((sel_sd.selectedIndex ==0)&&(sel_smy.selectedIndex ==0)&&(sel_ed.selectedIndex ==0)&&(sel_emy.selectedIndex ==0)&&(sel_pval.selectedIndex ==0)&&(sel_rval.selectedIndex ==0)))
   {
      //check people and rooms
      if (!CheckPR(myf)) return false;
      
      //check-in
      var start_day     = sel_sd.value;
      var tmp_smy       = new String(sel_smy.value).split('/');
      var start_month   = new Number(tmp_smy[0]);
      var start_year    = new Number(tmp_smy[1]);
      var mysd          = sel_sd.selectedIndex;
      var mysm          = tmp_smy[0];
      var mysy          = tmp_smy[1];

      //check-out
      var end_day       = sel_ed.value;
      var tmp_emy       = new String(sel_emy.value).split('/');
      var end_month     = new Number(tmp_emy[0]);
      var end_year      = new Number(tmp_emy[1]);
      var myed          = sel_ed.selectedIndex;
      var myem          = tmp_emy[0];
      var myey          = tmp_emy[1];

      //no check-in
      if (mysd == 0 || sel_smy.selectedIndex == 0) {
         alert(err_wrong_ci_date);
         return false;
      }
   
      //no check-out
      if (myed == 0 || sel_emy.selectedIndex == 0) { 
         alert(err_wrong_co_date);
         return false;
      }

      //check-in wrong date
      if (  (start_day == 31 && ((start_month == 4) || (start_month == 6) || (start_month == 9) || (start_month == 11))) 
         || ((start_day > 29) && (start_month == 2))
         || ((start_year %4 != 0) && (start_month == 2) && (start_day > 28))) {
         alert(err_wrong_ci_date);
         return false;
      } 
      if (start_month == month && start_year == year && start_day < day){ //check-in before today
         alert(err_wrong_ci_date);
         return false;
      }
   
      //check-out wrong date
      if (  (end_day == 31) && ((end_month == 4) || (end_month == 6) || (end_month == 9) || (end_month == 11))
         || ((end_day > 29) && (end_month == 2)) 
         || ((end_year %4 != 0) && (end_month == 2) && (end_day > 28))) {
         alert(err_wrong_co_date);
         return false;
      } 

      
      // extra check on start - end date range 
      var startDate = new Date(start_year, start_month-1, start_day);
      var endDate = new Date(end_year,end_month-1,end_day);    
      var maxDelta = 90 * 24 * 3600 * 1000; // 3 months
      if( endDate.getTime() - startDate.getTime() > maxDelta ) { //max 3 month reservation
         alert(err_wrong_ci_90max);
         return false;
      } else if( endDate.getTime() - startDate.getTime() <= 0 ) { //check-out date before check-in date
         alert(err_co_before_ci);
         return false;
      }
      
         
      //set html select values
      myf.sd.value = mysd;
      myf.sm.value = mysm;
      myf.sy.value = mysy;
   
      myf.ed.value = myed;
      myf.em.value = myem;
      myf.ey.value = myey;
      return true;
      
   }
   
   return true;
}

function clearAll( form ) {
   form.cb_sd.selectedIndex = 0;
   form.cb_smy.selectedIndex = 0;
   form.cb_ed.selectedIndex = 0;
   form.cb_emy.selectedIndex = 0;
   form.pval.selectedIndex = 0;
   form.rval.selectedIndex = 0;

}

function checkSelNum( cb ) {
   if( cb != null && cb.selectedIndex == 0 ) { clearAll(cb.form); return true; }
}

function StartDateCheck( cb ) {

   if( cb != null && cb.selectedIndex == 0 ) { clearAll(cb.form); return true; }

   var myf = !cb ? document.vSearch : cb.form;
   if(!myf) myf = document.vSearch;
   var today = new Date();
   var day = today.getDate();
   var month = today.getMonth() + 1 ;
   var year = today.getFullYear();

   var mysd = myf.cb_sd.selectedIndex;
   if (mysd == 0) { return true; }

   var tmp = myf.cb_smy.selectedIndex;
   if (tmp == 0) { return true; }
   
   var smy = new String(myf.cb_smy[tmp].value).split('/');
   var mysm = new Number(smy[0]);
   var mysy = new Number(smy[1]);

   if (mysd == 31) {
      if ((mysm == 4) || (mysm == 6) || (mysm == 9) || (mysm == 11)) mysd = 30;
   }
   if ((mysd > 29) && (mysm == 2)) mysd = 29;
   if ((mysy %4 != 0) && (mysm == 2) && (mysd > 28)) mysd = 28;
   
   
   //bug 2396
   if (mysm == month && mysy == year){
      if (mysd < day)
         mysd = day
   }// end bug 2396
   
   myf.cb_sd.selectedIndex = mysd;
   
   var myed = mysd + 1;
   var myem = mysm;
   var myey = mysy;
   if (myed > 31) myed = -1;
   if (myed == 31) {
      if ((myem == 4) || (myem == 6) || (myem == 9) || (myem == 11)) myed = -1;
   }
   if ((myed > 29) && (myem == 2)) myed = -1;
   if ((myey %4 != 0) && (myem == 2) && (myed > 28)) myed = -1;
   
   if (myed == -1) { myed = 1;   tmp = tmp + 1; }
   if (tmp >= myf.cb_emy.options.length) {
      myed = myf.cb_sd.selectedIndex
      tmp  = myf.cb_smy.selectedIndex;
   }

   myf.cb_ed.selectedIndex = myed;
   myf.cb_emy.selectedIndex = tmp;

   // set default person and room value
   if( myf.cb_sd.selectedIndex > 0 && myf.cb_smy.selectedIndex &&
       myf.cb_ed.selectedIndex > 0 && myf.cb_emy.selectedIndex > 0 &&
       myf.pval.selectedIndex == 0 && myf.rval.selectedIndex == 0 )
   {
        myf.pval.selectedIndex = 2;
        myf.rval.selectedIndex = 1;
   }
      
}



function EndDateCheck( cb ) {
   if( cb != null && cb.selectedIndex == 0 ) { clearAll(cb.form); return true; }

   var today   = new Date();
   var day     = today.getDate();
   var month   = today.get = today.getMonth() + 1 ;
   var year    = today.getFullYear();
   if(!cb)
      myf = document.vSearch;
   else
      myf = cb.form;
   if(!myf) myf = document.vSearch;

   myed = myf.cb_ed.selectedIndex;
   if (myed == 0) return true;

   tmp = myf.cb_emy.selectedIndex;
   if (tmp == 0) return true;

   var emy = new String(myf.cb_emy[tmp].value).split('/');
   var myem = new Number(emy[0]);
   var myey = new Number(emy[1]);

   if (myed == 31) {
      if ((myem == 4) || (myem == 6) || (myem == 9) || (myem == 11)) myed = 30;
   }
   if ((myed > 29) && (myem == 2)) myed = 29;
   if ((myey %4 != 0) && (myem == 2) && (myed > 28)) myed = 28;

   if (myem == month && myey == year){
      if (myed < day)
         myed = day
   }
   
   // extra check on start - end date range 
   var smy = new String(myf.cb_smy.value).split('/');
   var sm  = new Number(smy[0]);
   var sy  = new Number(smy[1]);
   var sd = myf.cb_sd.value;
   var startDate = new Date(sy,sm-1,sd);
   var endDate = new Date(myey,myem-1,myed);    
   var maxDelta = 90 * 24 * 3600 * 1000; // 3 months
   if( endDate.getTime() - startDate.getTime() > maxDelta ) { //max 3 month reservation
      endDate.setTime( startDate.getTime()+maxDelta );
      myed = String(endDate.getDate()); while( myed.length < 2 ) myed = String("0") + myed;
      myem = String(endDate.getMonth()+1); while( myem.length < 2 ) myem = String("0") + myem;
      myey = String(endDate.getFullYear());
      // reset month / year combo box
      myf.cb_emy.value = String(myem) + "/" + myey;
   } 
   
   myf.cb_ed.selectedIndex = myed;

}

function CheckSearchForm(form) {
   sel_sd   = myf.cb_sd.selectedIndex;
   sel_smy  = myf.cb_smy.selectedIndex;
   sel_ed   = myf.cb_ed.selectedIndex;
   sel_emy  = myf.cb_emy.selectedIndex;
   sel_pval = myf.pval.selectedIndex;
   sel_rval = myf.rval.selectedIndex;
   
}

function Sel(city,id,type,myf) {

   if(!myf)
      myf = document.vSearch;
   if (city == '') {
      myf.city.value = myf.txtCity.value;
      var i=0;
      if (myf.myc){ //code to delete???
         do {
            myf.myc[i].checked = false;
         } while (++i < myf.myc.length);
      }
      myf.city.value = myf.txtCity.value;
   }
    else {
      myf.city.value = city;
      myf.txtCity.value = city;
   }

   if (type == 'selgeoid')
      myf.geoid.value = id;

   myf.geoid.value = id;
}

function set_null(myf){
   if(!myf)
      myf = document.vSearch;
   myf.geoid.value = 0;
}

function set_null_selgeoid(myf){
   if(!myf)
      myf = document.vSearch;
   myf.geoid.value = '';
}

function check_city(myf){
   if(!myf)
      myf = document.vSearch;
   if (myf.txtCity.value.length == 0) {
      alert(err_textcity);
      return false;
   }
   return true;
 }



 // Functions to realize check cookies for surf with values
function getday(obj) {
         var delta = 2;

         var todayR = new Date();
         var year = todayR.getYear ();
          if (year < 1000)  year +=  1900;
         var today = new Date(year,todayR.getMonth(),todayR.getDate()+1);
         var year = today.getYear ();
          if (year < 1000)  year +=  1900;

         var nextdate = new Date(year,today.getMonth(),today.getDate()+delta);
         var nyear = nextdate.getYear ();
          if (nyear < 1000)  nyear +=  1900;

         var _cb_sd = today.getDate();
         var _cb_smy = (today.getMonth()+1) +'/'+ year ;
         var _cb_sm = today.getMonth()+1;
         if ((today.getMonth()+1)<10) _cb_smy ='0' +_cb_smy;
         if (_cb_sd < 10)  _cb_sd ='0'+_cb_sd;

         var _cb_ed = nextdate.getDate();
         var _cb_emy = (nextdate.getMonth()+1) +'/'+ nyear ;
         var _cb_em = nextdate.getMonth()+1;
         if ((nextdate.getMonth()+1)<10) _cb_emy ='0'+_cb_emy;
         if (_cb_ed < 10)  _cb_ed ='0'+_cb_ed;
            setvalues (obj,_cb_sd,_cb_smy,_cb_ed,_cb_emy,2,1);
         setvalues_hidden (obj,_cb_sd,_cb_sm,year,_cb_ed,_cb_em,nyear,2,1);
            SetCookie(_cb_sd,_cb_smy,_cb_ed,_cb_emy,2,1);
}

      function setvalues (obj,sd,smy,ed,emy,pv,rv){
         obj.cb_sd.value = sd;
         obj.cb_smy.value = smy;
         obj.cb_ed.value = ed;
         obj.cb_emy.value = emy;
         obj.pval.value = pv;
         obj.rval.value = rv;
      }

      function setvalues_hidden (obj,sd,sm,sy,ed,em,ey,pv,rv){
         obj.sd.value = sd;
         obj.sm.value = sm;
         obj.sy.value = sy;
         obj.ed.value = ed;
         obj.em.value = em;
         obj.ey.value = ey;
         obj.pval.value = pv;
         obj.rval.value = rv;
      }

      function SetCookie(sd,smy,ed,emy,pv,rv){
         now = new Date();
         expire = new Date();
         expire.setHours(now.getHours()+1);
         expire.setMinutes(now.getMinutes());
         expire.setSeconds(now.getSeconds());

         document.cookie = "savail[_sd]"  + "=" + sd  + " ; domain=.venere.com ; path=/ ; expires="+expire;
         document.cookie = "savail[_smy]" + "=" + smy + " ; domain=.venere.com ; path=/ ; expires="+expire;
         document.cookie = "savail[_ed]"  + "=" + ed  + " ; domain=.venere.com ; path=/ ; expires="+expire;
         document.cookie = "savail[_emy]" + "=" + emy + " ; domain=.venere.com ; path=/ ; expires="+expire;
         document.cookie = "savail[_pv]"  + "=" + pv  + " ; domain=.venere.com ; path=/ ; expires="+expire;
         document.cookie = "savail[_rv]"  + "=" + rv  + " ; domain=.venere.com ; path=/ ; expires="+expire;
      }

      function getCookieVal (offset){
          var endstr = document.cookie.indexOf (";", offset);
         if (endstr == -1)
             endstr = document.cookie.length;
          return document.cookie.substring(offset, endstr);
      }

      function GetCookie (name){
         var arg = name + "=";
         var alen = arg.length;
         var clen = document.cookie.length;
         var i = 0;
         while (i < clen){
              var j = i + alen;
              if (document.cookie.substring(i, j) == arg)
              return getCookieVal (j);
              i = document.cookie.indexOf(" ", i) + 1;
              if (i == 0)
             break;
         }
         return null;
      }


      function getArgs() {
        var args = new Object();
        var query = location.search.substring(1);
        var pairs = query.split("&");
        for(var i = 0; i < pairs.length; i++)
        {
            var pos = pairs[i].indexOf('=');
            if (pos == -1) continue;
            var argname = pairs[i].substring(0,pos);
            var value = pairs[i].substring(pos+1);
            args[argname] = value;
         }
         return args;
      }


      function check_cookies_onload (obj){

        query_params=getArgs();
        if (query_params.sd || query_params.checkin) {

               sd    =   query_params.sd; while( sd.length<2 ) { sd = '0' + String(sd); }
               smy   =   query_params.sm +'/'+ query_params.sy ;
               ed    =   query_params.ed; while( ed.length<2 ) { ed = '0' + String(ed); }
               emy   =   query_params.em +'/'+ query_params.ey ;
               pv    =   query_params.pval;
               rv    =   query_params.rval;
               setvalues (obj,sd,smy,ed,emy,pv,rv);
        }else{
            if(visit = GetCookie("savail[_sd]")) {
               sd =  GetCookie("savail[_sd]");
               smy =  GetCookie("savail[_smy]");
               ed =  GetCookie("savail[_ed]");
               emy =  GetCookie("savail[_emy]");
               pv =  GetCookie("savail[_pv]");
               rv =  GetCookie("savail[_rv]");
               setvalues (obj,sd,smy,ed,emy,pv,rv);
            }
        }
      }

      function set_cookies_onsubmit (obj){
         sd = obj.cb_sd.value;
         smy = obj.cb_smy.value;
         ed = obj.cb_ed.value;
         emy = obj.cb_emy.value;
         pv = obj.pval.value;
         rv = obj.rval.value;
         SetCookie(sd,smy,ed,emy,pv,rv);
      }

function check_email(e) {
   ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";

   for(i=0; i < e.length ;i++){
      if(ok.indexOf(e.charAt(i))<0){ 
         return (false);
      }   
   } 

   if (document.images) {
      re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
      re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!e.match(re) && e.match(re_two)) {
         return (-1);      
      } 
   }
}
function check_form(f) { // f is the form (passed using the this keyword)
   if(!check_email(f.email.value)){
      alert("Invalid email detected, please retype it!");
      f.email.focus(); 
// if the browser is Netscape 6 or IE
      if(document.all || document.getElementByID){
// change the color of text field
         f.email.style.background = "yellow";
      }
// make sure the form is not submitted
      return false;
   }
}


function OC(name_form,check_type,lg,mese,anno,mday,mese,anno)
{
   WOpen('/cgi/ihr/vcom/calendar.php?name_form='+name_form+'&inout='+check_type+'&lg='+lg+'&mese='+mese+'&anno='+anno+'&gi=0&load=1&dg='+mday+'&dm='+mese+'&da='+anno,'','top=300,left=300,location=0,height=158,width=150,scrollbars=0,status=0,resizable=0');
   void(0);
}
