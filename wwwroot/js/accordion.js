// Write your JavaScript code.

//Gets elements with a class of "accordion" and stores them in a variable called "accordion"
var accordion = document.getElementsByClassName("accordion");
//Declares the variable "i"
var i;

//For loop used to loop through all elements with the class name "accordion"
//An eventlistener, listening to click is added to all accordion-elements and a class of "active" is added when the elements are clicked
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        //"nextElementSibling" which is the content of the accordion is stored in a variable called "mainContent"
        //If mainContent is visible a maxHeight of null is applied to hide it
        //If mainContent is hidden a maxHeight of the scroll height of the element is added to show the content
        var mainContent = this.nextElementSibling;
        if (mainContent.style.maxHeight) {
            mainContent.style.maxHeight = null;
        } else {
            mainContent.style.maxHeight = mainContent.scrollHeight + "px";
        }
    });
}
