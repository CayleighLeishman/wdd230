// used the professors website to help, but I did type it out myself//

const date = new Date();

const yearString= date.toLocaleDateString('en-US', {
    year: 'numeric'
});
document.querySelector("#copyrightYear").innerHTML = yearString;
document.querySelector("#lastModified").innerHTML = 'Last Modified: ${document.lastModified}';