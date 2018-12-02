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

//* Message to tell me where if this has loaded in the console
console.log("Hello world main.js");

//* Debug inspect what is possible in the document
console.log("document", document);

//* Inspect what is workable in the window
console.log("window", window);

//? Console.log( window.document URL get the full URL

const {URL, baseURL} = window.document;

//* Debug show the URLs
console.log('URL', URL);
