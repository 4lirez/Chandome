'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
chrome.runtime.onMessage.addListener(
    function(request) {
        chrome.browserAction.setIcon({
            path: request.newIconPath
        });
    }
);
chrome.windows.onCreated.addListener(function() {
    var date = new Date();
    let houres = 24 - date.getHours() - 1;
    let minutes = 60 - date.getMinutes();
    let timeTo = houres*60 + minutes;
    chrome.alarms.create("Start", { delayInMinutes:timeTo});
    chrome.browserAction.setIcon({
        path:"icons/"+date.toLocaleDateString('fa-IR').split('/')[2]+".png"
    });
});
chrome.alarms.onAlarm.addListener(function(alarm){
    var date = new Date();
    chrome.browserAction.setIcon({
        path:"icons/"+date.toLocaleDateString('fa-IR').split('/')[2]+".png"
    });
});