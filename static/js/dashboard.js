function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();



// Chart

const ctx=document.getElementById("threatChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Threat Score",

data:[12,20,18,25,16,14,18],

borderWidth:3,

fill:false,

tension:0.4

}]

}

});




// Terminal Feed

const logs=[

"Firmware Integrity Verified",

"Secure Boot Enabled",

"Boot Files Checked",

"No Rootkits Detected",

"Hash Verification Successful",

"BIOS Version Validated",

"System Scan Complete"

];

let i=0;

setInterval(()=>{

const terminal=document.getElementById("terminal");

const line=document.createElement("div");

line.innerHTML="✔ "+logs[i];

terminal.appendChild(line);

terminal.scrollTop=terminal.scrollHeight;

i++;

if(i>=logs.length){

i=0;

}

},1500);




// Scan Button

document.getElementById("scanBtn").onclick=function(){

alert("BootShield Scan Started");

}
