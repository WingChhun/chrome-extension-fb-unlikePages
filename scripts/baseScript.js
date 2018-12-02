Note:
   * In order to unlike all pages, paste the following code in the developer tools by the listed steps
   * Copy all the code here,
   * Open Chrome Developer Tools
   *   Windows (CTRL + SHIFT + I)
   *    MAC (CMD + SHIFT +I)
   *  (Or Right click and Inspect)
   * Navigate to Console
   * Paste all this code into console
*/

/*
@function startRemoval()
@params: void
@desc:
 * Call the services in order using a interval to remove liked pages
*/
const startRemoval = () => {

    // Variables

    let likedButtons = null;
    let unlikedButtons = null;

    //Note: Get liked buttonsQuery
    likedButtons = getLikedButtons();

    // ! If no more Liked Buttons, then clear the interval stop code from executing
    // anymore
    if (!likedButtons) {
        console.warn("No more buttons to unlike!");

        //! End ! Stop the interval
        clearInterval(removalInterval);
      
      alert("Completed!")
    }

    // ! Check - Liked Buttons exist now click all so the unliked Buttons exist on
    // the DOM
    if (likedButtons.length != 0) {

        clickLikedButtons(likedButtons);

        console.log("Shoudl call getUnlikedbuttons");
        unlikedButtons = getUnlikedButtons();

        //! if unlikedButtons
        if (unlikedButtons.length != 0) {

            clickUnLikeButtons(unlikedButtons);
        }
    }

    //TODO: Possible: scroll down the page?
}

/*
@function: getLikedButtons
@params: void
@desc:
  * Get all current liked pages on the page
  * From personal experience page only loads 32
  * uses pagination to load more
  * So must keep running this,
  *
*/
const getLikedButtons = () => {

    const likedButtons = document.querySelectorAll(".PageLikedButton");

    return likedButtons;

}

const getUnlikedButtons = () => {

    const unlikedButtons = document.querySelectorAll(".InterestListMenuDisconnect a");

    //* DEBUG

    return unlikedButtons;

}

const clickLikedButtons = (likedButtons) => {

    //* Convert from NodeList to Array
    const arrayLikedButtons = [...likedButtons];

    arrayLikedButtons.forEach(button => button.click());
}

const clickUnLikeButtons = (unlikeButtons) => {

    console.log("Call clickUnlikedButtons");
    const arrayunlikeButtons = [...unlikeButtons];

    arrayunlikeButtons.forEach(button => button.click());

}

//*Actually main

//NOTE: Single iteration startRemoval();

//* Run interval every 15 seconds; should self clear otherwise done
const removalInterval = setInterval(startRemoval, 5 * 1000);