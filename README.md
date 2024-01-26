# wwd230


## Errors Fixed and how
Javascript wouldn't load and even looking at webdev it didn't show any proper errors. Eventually with help we found it was because I had it as "<link rel="stylesheet" href="styles/base.css">" NOT "<script src="scripts/getdate.js" defer></script>"

The defer is impotant especially if we put the script/link in the header. It tells the code to read it later after everything else has loaded.
