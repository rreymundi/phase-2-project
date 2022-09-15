# Phase 2 Project: Bookmarked

An online library with all your favorite books!

## App Requirements 

- A single page application (only one index.html file) created using create-react-app
- At least 5 components
- At least 3 client-side routes using React Router and a nav bar or other UI element that allows users to navigate between routes
- Use a json-server to create a RESTful API for the backend and make both a GET and a POST request to the json server.
- Use a form to make the POST request–specifically a controlled form/component.
- Elements should have some CSS styling

## Introduction

Bookmarked lets you keep track of your favorite books. Use the nav bar to search the database for books either by title or author. Can't find what you're looking for? Simply add a book with the "Add a book" form! Use the "Save" button to add a book to your library. 

## App Functionality

Bookmarked is an MVP version of the app. The REACT component hierarchy is as follows:

App
- NavBar
- Home
- Discover
    - BookList
        - BookCard
- SavedBooks
    - SavedBookList
        - BookCard
- NewBook

The backend was set up using json-server to create a RESTful API. The "App" component is making use of the useEffect and useState hooks to GET data from the db and set the "books" state. The useEffect dependency array is set to run only once upon render. 

The "App" will first load the "NavBar" which is set to handle the routes for each component housed within it and contains a search bar. The "Home" component is rendered when the route is set to "/". Clicking the "BookMarked" link in the "NavBar" sets the route to "/" and renders the "Home" component. The "App" component makes use of a "search" state, which is determined by the value of the "NavBar" search bar input–a controlled input. "Home" simply displays a welcome message.

Clicking the "Discover" link within the NavBar sets the route to "/books/discover" and renders the "Discover" component. This component houses a "BookList" component which is where the search filter logic is handled for that component. The "unfilteredBooks" variable renders a "BookCard" component for each book in my "books" array, while the "myFilteredBooks" variable renders a "BookCard" for each book in an array filtered based on "search". Both variables pass down the book data as a prop. The end result is that if "search" state is an empty string, the "BookList" component will render "unfilteredBooks", otherwise it will render "myFilteredBooks".

The "BookCard" component takes the book data which was passed down as a prop and renders the book image, title, and author. It also renders two buttons: one for "Save" and another for "Delete". The "Save" button has an onClick event listener that will run a "handleSaveClick" function if the book.saved property equals false or a "handleUnsaveClick" function if the book.saved property equals true. These two functions will toggle the book.saved property and send a callback up to the "App" component in order to re-render the book card so that the button text correctly reflects the book.saved value (i.e. button renders as "Saved" if book.saved = true or "Unsave" if book.saved = false). The "Delete" button has an onClick event listener that will run a DELETE request, effectively deleting the book from the db.

Clicking the "My Library" link in the NavBar sets the route to "/books/saved" and renders the "SavedBooks" component, which in turn renders the "SavedBookList" component. The main difference here is that the "books" array is filtered into a "savedBooks" array that only contains books which have the book.saved property set to "true". This "savedBooks" is filtered based on the "search" state an displays "BookCard" components based on that. Because the books have the book.saved property set to "true", they will display an "Unsave" button. Clicking that button will set the book.saved property to "false" and remove the card from the "SavedBookList" component.

Lastly, clicking the "Add a Book" link in the "NavBar" sets the route to "/books/new" and it renders the "NewBook" compoment. This component contains a form which allows adding books to the db. Any books submitted will be rendered as a "BookCard" in the "BookList" component of "Discover". The form's inputs are required and validation is set up to prevent submitting a book with missing data.

## App demo

Click [this](https://drive.google.com/file/d/1828o4F5dIAGuM1kJhhFoCF0AJgujOR0X/view?usp=sharing) following link to access a demo of the app!

**Thanks for reading!**



