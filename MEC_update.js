function wpb_demo_shortcode31() {   	
    // Things that you want to do.
    $message = '
    <style>
      #more {display: none;}  
      #notifyA {
        position: absolute;
        width: 55px;
        height: 55px;
        text-align: center;
        background-color: white;     
        top: 15px;
        left: 25px;   
        z-index: 999;
      }
     #notifyDay {
        top: 10px;
        color: blakck;
        font-size: 30px;
    }         
    #datetext
    {
        type: hidden;
        value: "";
    }
      #middemec {
        float: left;
        width: 10%
        margin-left: 20px;
        margin-top: -5px;
        text-align: right;
      }
      #middemecD {
        float: left;
        width: 10%
        margin-left: 20px;
        margin-top: -5px;
        text-align: right;
      }
      #middemecH {
        float: left;
        width: 10%
        margin-left: 20px;
        margin-top: -5px;
        text-align: right;
      }
      #middemecM {
        float: left;
        width: 10%
        margin-left: 20px;
        margin-top: -5px;
        text-align: right;
      }
      #middemecS {
        float: left;
        width: 10%
        margin-left: 20px;
        margin-top: -5px;
        text-align: right;
      }
      #rightmec {
        float: left;
        text-align: right;
        width: 20%;        
        margin-top: -5px;
      }      
      .row:after {
        content: "";
        display: table;
        clear: both;
        height: 15px;
      }   
      #myBar {
        width: 40%;
        height: 5px;
        background-color: #0096FF;
        line-height: 30px;
        color: white;
      }
      #myBarD {
        width: 40%;
        height: 5px;
        background-color: #0096FF;
        line-height: 30px;
        color: white;
      }
      #myBarH {
        width: 40%;
        height: 5px;
        background-color: #0096FF;
        line-height: 30px;
        color: white;
      }
      #myBarM {
        width: 40%;
        height: 5px;
        background-color: #0096FF;
        line-height: 30px;
        color: white;
      }
      #myBarS {
        width: 40%;
        height: 5px;
        background-color: #0096FF;
        line-height: 30px;
        color: white;
      }      
      #myProgress {
        float: left;
        width: 70%;
        background-color: #DEDEDE;
      }
    </style>
    <script type="text/javascript">
        function addElement(pareetnDiv,currentDiv,addText) {            
            const newP = document.createElement("p");
            const newSpan = document.createElement("span");
            const newIcon = document.createElement("icon");
            const newSpan1 = document.createElement("span");            
            const newContent = document.createTextNode(" " + addText);
            newSpan1.appendChild(newContent);
            newIcon.classList.add("mec-sl-clock");     
            newSpan.appendChild(newIcon);
            newSpan.classList.add("default");            
            newP.appendChild(newSpan);
            newP.appendChild(newSpan1);
            newP.style.color = "black";
            currentDiv.parentNode.insertBefore(newP, currentDiv);
            }
        function addMap(currentDiv,addText) {            
            const newP = document.createElement("p");
            const newSpan = document.createElement("span");
            const newIcon = document.createElement("icon");
            const newSpan1 = document.createElement("span");            
            const newContent = document.createTextNode(" " + addText);
            newSpan1.appendChild(newContent);
            newIcon.classList.add("mec-sl-map-marker");     
            newSpan.appendChild(newIcon);        
            newP.appendChild(newSpan);
            newP.appendChild(newSpan1);
            newP.style.color = "black";
            currentDiv.parentNode.insertBefore(newP, currentDiv);
            }
        function addProebressBar(currentDiv,y1,m1,d1,hh1,mm1)
        {
            var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
            today=new Date()
            var daypro = 0;
            var hourpro = 0;
            var minpro = 0;
            var secpro = 0;
            var eventday=new Date(y1,m1-1,d1,hh1,mm1);            
            var one_day=1000*60*60*24;
            var eventtime = eventday.getTime();
            var todaytime = today.getTime();
            var difftime = eventtime - todaytime;
            var diffdays = Math.floor(difftime/one_day);
            var hdiff1 = 0;
            var mdiff1 = 0;
            var sdiff1 = 0;                        
            if (diffdays >= 7 )
            {
                daypro = 100;
                hourpro = Math.floor(hh1 * 100 / 24);
                minpro = Math.floor(mm1 * 10 / 6);
            }            
            else if (diffdays >= 0)
            {
                daypro = Math.floor(diffdays / 7 * 100);
                var hdiff = difftime - diffdays * one_day;
                hdiff1 = Math.floor(hdiff / (1000*60*60));
                hourpro = Math.floor(hdiff1 * 25 / 12);
                var mdiff = hdiff - hdiff1 * 1000 * 60 * 60;
                mdiff1 = Math.floor(mdiff / (1000 * 60 ));
                minpro = Math.floor(mdiff1 * 10 / 6);
                var sdiff = mdiff - mdiff1 * 1000 *60;
                sdiff1 = Math.floor(sdiff / 1000);
                secpro = sdiff1 * 10 / 6;
            }
            else
            {
                diffdays = 0;
            }            
            const newDiv = document.createElement("div");
            newDiv.classList.add("row");
            const newCol1 = document.createElement("div");            
            newCol1.setAttribute("id","myProgress");
            const newProgress = document.createElement("div");
            newProgress.setAttribute("id","myBarD");
            newProgress.style.width = ""+ daypro + "%";
            newCol1.appendChild(newProgress);
            const newCol2 = document.createElement("div");            
            const newtext1 = document.createTextNode(diffdays.toString().padStart(2,"0"));
            newCol2.appendChild(newtext1);
            const newCol3 = document.createElement("div");
            const newtext2 = document.createTextNode("Days");            
            newCol3.appendChild(newtext2);
            newCol2.setAttribute("id","middemecD");
            newCol3.setAttribute("id","rightmec");
            newDiv.appendChild(newCol1);
            newDiv.appendChild(newCol2);
            newDiv.appendChild(newCol3);
            currentDiv.parentNode.insertBefore(newDiv, currentDiv);
            const newDivH = document.createElement("div");
            newDivH.classList.add("row");
            const newColH1 = document.createElement("div");            
            newColH1.setAttribute("id","myProgress");
            const newProgressH = document.createElement("div");
            newProgressH.setAttribute("id","myBarH");
            newProgressH.style.width = ""+ hourpro + "%";
            newColH1.appendChild(newProgressH);
            const newColH2 = document.createElement("div");            
            const newtextH1 = document.createTextNode(hdiff1.toString().padStart(2,"0"));            
            newColH2.appendChild(newtextH1);
            const newColH3 = document.createElement("div");
            const newtextH2 = document.createTextNode("Hrs");            
            newColH3.appendChild(newtextH2);
            newColH2.setAttribute("id","middemecH");
            newColH3.setAttribute("id","rightmec");
            newDivH.appendChild(newColH1);
            newDivH.appendChild(newColH2);
            newDivH.appendChild(newColH3);
            currentDiv.parentNode.insertBefore(newDivH, currentDiv);
            const newDivM = document.createElement("div");
            newDivM.classList.add("row");
            const newColM1 = document.createElement("div");            
            newColM1.setAttribute("id","myProgress");
            const newProgressM = document.createElement("div");
            newProgressM.setAttribute("id","myBarM");
            newProgressM.style.width = ""+ minpro + "%";
            newColM1.appendChild(newProgressM);
            const newColM2 = document.createElement("div");            
            const newtextM1 = document.createTextNode(mdiff1.toString().padStart(2,"0"));            
            newColM2.appendChild(newtextM1);
            const newColM3 = document.createElement("div");
            const newtextM2 = document.createTextNode("Min");            
            newColM3.appendChild(newtextM2);
            newColM2.setAttribute("id","middemecM");
            newColM3.setAttribute("id","rightmec");                      
            newDivM.appendChild(newColM1);
            newDivM.appendChild(newColM2);
            newDivM.appendChild(newColM3);            
            currentDiv.parentNode.insertBefore(newDivM, currentDiv);
            const newDivS = document.createElement("div");
            newDivS.classList.add("row");
            const newColS1 = document.createElement("div");            
            newColS1.setAttribute("id","myProgress");
            const newProgressS = document.createElement("div");
            newProgressS.setAttribute("id","myBarS");
            newProgressS.style.width = ""+ secpro + "%";
            newColS1.appendChild(newProgressS);
            const newColS2 = document.createElement("div");            
            const newtextS1 = document.createTextNode(sdiff1.toString().padStart(2,"0"));            
            newColS2.appendChild(newtextS1);
            const newColS3 = document.createElement("div");
            const newtextS2 = document.createTextNode("Sec");            
            newColS3.appendChild(newtextS2);
            newColS2.setAttribute("id","middemecS");
            newColS3.setAttribute("id","rightmec");
            newDivS.appendChild(newColS1);
            newDivS.appendChild(newColS2);
            newDivS.appendChild(newColS3);
            currentDiv.parentNode.insertBefore(newDivS, currentDiv);
            const newDivDate = document.createElement("input");
            newDivDate.setAttribute("id","datetext");
            strDate = y1 + "-" + m1 + "-" + d1 + "-" + hh1 + "-" + mm1;
            newDivDate.setAttribute("value",strDate);            
            currentDiv.parentNode.insertBefore(newDivDate, currentDiv);
            const newDivA = document.createElement("div");
            newDivA.setAttribute("id","notifyA");
            const newTextA1 = document.createElement("div");            
            const newTextA11 = document.createTextNode(months[m1-1]);
            newTextA1.appendChild(newTextA11);
            const newTextA2 = document.createElement("div");
            newTextA2.setAttribute("id","notifyDay");
            const newTextA21 = document.createTextNode(d1);
            newTextA2.appendChild(newTextA21);
            newDivA.appendChild(newTextA2);
            newDivA.appendChild(newTextA1);  
            currentDiv.parentNode.parentNode.parentNode.insertBefore(newDivA,currentDiv.parentNode.parentNode);
            newDivA.style.position = "absolute";
            newDivDate.style.display = "none";
        }
        function UpdateProgressBar(content)
        {         
            var elementdate = content.querySelector("#datetext");            
            var date1 = elementdate.value;
            var barD = content.querySelector("#myBarD");
            var barH = content.querySelector("#myBarH");
            var barM = content.querySelector("#myBarM");
            var barS = content.querySelector("#myBarS");
            var barTD = content.querySelector("#middemecD");
            var barTH = content.querySelector("#middemecH");
            var barTM = content.querySelector("#middemecM");
            var barTS = content.querySelector("#middemecS");
            today=new Date()
            var daypro = 0;
            var hourpro = 0;
            var minpro = 0;
            var secpro = 0;
            var dayL = date1.split("-");
            var eventday=new Date(dayL[0],dayL[1]-1,dayL[2],dayL[3],dayL[4]);            
            var one_day=1000*60*60*24;
            var eventtime = eventday.getTime();
            var todaytime = today.getTime();
            var difftime = eventtime - todaytime;
            var diffdays = Math.floor(difftime/one_day);
            var hdiff1 = 0;
            var mdiff1 = 0;
            var sdiff1 = 0;                        
            if (diffdays >= 7 )
            {
                daypro = 100;
                hourpro = Math.floor(hh1 * 100 / 24);
                minpro = Math.floor(mm1 * 10 / 6);
            }            
            else if (diffdays >= 0)
            {
                daypro = Math.floor(diffdays / 7 * 100);
                var hdiff = difftime - diffdays * one_day;
                hdiff1 = Math.floor(hdiff / (1000*60*60));
                hourpro = Math.floor(hdiff1 * 25 / 12);
                var mdiff = hdiff - hdiff1 * 1000 * 60 * 60;
                mdiff1 = Math.floor(mdiff / (1000 * 60 ));
                minpro = Math.floor(mdiff1 * 10 / 6);
                var sdiff = mdiff - mdiff1 * 1000 *60;
                sdiff1 = Math.floor(sdiff / 1000);
                secpro = sdiff1 * 10 / 6;
            }
            else
            {
                diffdays = 0;
            }
            barD.style.width = ""+ daypro + "%";
            barH.style.width = ""+ hourpro + "%";
            barM.style.width = ""+ minpro + "%";
            barS.style.width = ""+ secpro + "%";   
            barTD.innerText = diffdays.toString().padStart(2,"0");   
            barTH.innerText = hdiff1.toString().padStart(2,"0");
            barTM.innerText = mdiff1.toString().padStart(2,"0");
            barTS.innerText = sdiff1.toString().padStart(2,"0");
        }
        var idTimer = setInterval(frame,300);
        function frame(){
            var mecroot = document.getElementById("mec_skin_20784");            
            var w = Math.floor(window.innerWidth/3);
            var titles = mecroot.getElementsByClassName("mec-event-title");
            for (var i  = 0; i < titles.length; i++)
            {             
               titles[i].style.textTransform = "initial";              
            }
            var contextAry = mecroot.getElementsByClassName("mec-event-content");
            var alreadyShow = []
            for (i  = 0; i < contextAry.length; i++)
            {
                contextAry[i].style.textAlign = "left";                              
                contextAry[i].style.backgroundColor = "#FFFFE4";                             
            }
            var footary = mecroot.getElementsByClassName("mec-event-footer");
            for (i = 0; i < footary.length; i++)
            {
                footary[i].style.display = "none";
            }
            var imgary = mecroot.getElementsByClassName("mec-event-image");
            for (i = 0; i < imgary.length; i++)
            {
                var imgtags = imgary[i].getElementsByTagName("img");
                for (var j = 0; j < imgtags.length; j++)
                {
                    imgtags[j].width = w;
                    imgtags[j].height = w/2;
                }            
            }
            var eventdate = mecroot.getElementsByClassName("mec-event-date");
            var eventlocations = mecroot.getElementsByClassName("mec-grid-event-location");            
            for (i = 0; i < eventdate.length; i++)
            {
                var strtime = "";                                
                if (eventlocations[i].style.display != "none")
                {                    
                    var eventtime = eventdate[i].innerText;    
                    eventtime = eventtime.trim();                    
                    var elements = eventtime.split("\n");                    
                    var date1 = elements[0];
                    date1 = date1.trim();
                    var time1 = elements[1];
                    time1 = time1.trim();
                    var len1 = date1.length;
                    var datefrom = [0,0,0,0,0,0,0];
                    var strtemp ="";
                    var k = 0;  
                    var t = 0;                  
                    var bf = 0;
                    for (var j = 0; j < len1; j++)
                    {                           
                        var c = date1[j];   
                        if (c >= "0" && c <= "9")
                        {                            
                            strtemp = strtemp + c;
                            bf = 1;
                        }
                        else
                        {
                            if (bf == 1)
                            {
                                datefrom[k] = strtemp;
                                strtemp = "";
                                k = k + 1;
                                bf = 0;
                            }
                        }
                    }   
                    if (k == 4)
                    {
                        datefrom.splice(3,0,datefrom[0],dateform[1]);
                    }
                    strtemp = "";
                    bf = 0;
                    var timefrom = [];
                    k = 0;
                    for (j = 0; j < time1.length; j++)
                    {                  
                        c = time1[j];      
                        if (c >= "0" && c <= "9")
                        {
                          timefrom[k] = time1.slice(j,5);
                          k = k + 1; 
                          j = j + 5;
                        }                        
                    }
                    strtime = datefrom[0] + "-" + datefrom[1] + "-" + datefrom[2];
                    var timehh = [0,0];
                    if (timefrom.length > 0)
                    {
                        var am1 = "AM";
                        var am2 = "AM";
                        if (timefrom[0].charAt(0) == "1")
                        {
                            am1 = "PM";
                        }
                        if (timefrom[1].charAt(0) == "1")
                        {
                            am2 = "PM";
                        }
                        strtime = strtime + "@" + timefrom[0] + am1 + " - " + datefrom[3] + "-" + datefrom[4] + "-" + datefrom[5] + "@" + timefrom[1] + am2;
                        timehh=timefrom[0].split(":");
                    }
                    else{
                         strtime = strtime + " - "  + datefrom[3] + "-" + datefrom[4] + "-" + datefrom[5];
                    }                        
                        eventdate[i].style.display = "none";
                        var ltext = eventlocations[i].innerText;                                        
                        addElement(mecroot,eventlocations[i],strtime);
                        addMap(eventlocations[i],ltext);
                        addProebressBar(eventlocations[i],datefrom[0],datefrom[1],datefrom[2],timehh[0],timehh[1]);
                        eventlocations[i].style.display = "none";                                  
                } 
                else
                {
                    UpdateProgressBar(contextAry[i]);
                }               
              }
              clearInterval(idTimer);
              idTimer = setInterval(frame,3000);
        }	
    </script>';   
    // Output needs to be return
    return $message;
    }
    // register shortcode
    add_shortcode('drawmecs', 'wpb_demo_shortcode31');
    
    
    
    