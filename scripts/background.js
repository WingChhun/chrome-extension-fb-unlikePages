// NOTE: This background script has to be inspected through the chrome:extensions
// page

//NOTE: Add an event listener as soon as the extension is installed
chrome
    .runtime
    .onInstalled
    .addListener(function () {
        chrome
            .storage
            .sync
            .set({
                color: '#3aa757'
            }, function () {
                console.log("The color is green.");
            });
    });