window.onload=function(){
var date = new Date();
    chrome.runtime.sendMessage({ "newIconPath" : "icons/"+date.toLocaleDateString('fa-IR').split('/')[2]+".png" });
}
var d = new Date();
var day = d.toString().split(" ")[0];
document.getElementById("day").innerHTML = toFarsi(day);

function toFarsi(day){
    switch (day) {
        case "Mon":
            return "دوشنبه";

        case "Tue":
            return "سه‌شنبه";

        case "Wed":
            return "چهارشنبه";

        case "Thu":
            return "پنج‌شنبه";

        case "Fri":
            return "جمعه";

        case "Sat":
            return "شنبه";

        case "Sun":
            return "یک‌شنبه";    
        default:
            break;
    }
}
