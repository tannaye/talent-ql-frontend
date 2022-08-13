## How does it work?

This is an HTML table that get's data from a url in bits and as the page increases, makes api calls to populate the new page with data gotten from the API.

### How was it implemented?

Designs were implemented with HTML and CSS, Integration was implemented with Typescript and parcel builds the application.
Every page makes an API Call to get the necessary data for it. The call is triggered by clicking either the "next" or "previous" button. In the case of the first page, the "previous" button is disabled.
