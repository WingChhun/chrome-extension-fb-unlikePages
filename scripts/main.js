/*
 NOTE(s):
 * This is the script that runs when the extension is actually open
 * So I should see if I can manipulate the current page
 *  ? The current page might depend on using the background.js script, to get the URL and do pattern matching
 *
*/

/*
 TODO(s):
 * Check the current Window
 * Design and build the UI
 * Check the current URL
 * Implement the script to unlike all pages
 * Think of edge cases and possible upgrades
 * Test on Chrome Developer Extension - Dev mode


*/

//? Console.log( window.document URL get the full URL

const {URL, baseURL} = window.document;

//* Debug show the URLs
console.log('URL', URL);

//TODO: Add a on Document Load listener



/*
TODO(s)

 * Need a way to pattern check what page currently on
 * Make sure storing data works correctly
 * Clicking the button should fire off an event to start the program

*/
class DriverProgram
{
    constructor()
    {}

    start() {

        const {URL, baseURL} = window.document;

        //* debug message
        console.log('driver.start()');

        console.log("window", window);

        console.log('URL', URL);


    }





}(function mainProgram() {

    const driver = new DriverProgram();

    console.log("mainProgram loaded");

    document.addEventListener("DOMContentLoaded", driver.start);

})();
