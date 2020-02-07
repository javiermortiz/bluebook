# bluebook
Bluebook is a facebook clone. It is a web app with full authentication features where you can sign up, log in with your credentials, and have your own profile with pictures and personal information. Build your social network by sending friend requests to different users and approving or declining received requests. Once a friendship is confirmed by both parties, you can post messages on each other's profiles. Also, receive notifications about the most recent site activity of the members of your social circle.

## Demo
Live demo: https://bluebookdemo.herokuapp.com/

## Technologies used
Bluebook's back end is built on [Ruby on Rails](https://rubyonrails.org/). The database holds the information for the main entities of the site such as users, posts, friendship requests, and confirmed friendships. I created models for each of these entities. This allowed me to set up validations to carefully craft error messages and to establish associations between the different models. Once the data was fetched by the controller I formatted it using [jbuilder](https://github.com/rails/jbuilder).

The front end of the site was built with [React](https://reactjs.org/) along with [Redux](https://redux.js.org/) to manage the app's state. Using both technologies I created connected components that could keep different pieces of data simultaneously, allowing me to render the current user data on one component while visiting and rendering other user's profile.

## Site
### Landing Page
<img width="1280" alt="bluebook-homepage" src="https://user-images.githubusercontent.com/19655779/74054205-6bbfb480-4992-11ea-8988-84b880d17f08.png">

The main challenge with the landing page was rendering the errors and styling them. Since I didn't want multiple sources of truth for errors I had to tell the state what type of error I was getting. The solution I came up with was the following. In the signup and login action, once the ajax request had already returned, I unshifted the type of error to the errors array. Now in the component I could check for index 0 in the array as a condition for rendering the errors. Furthermore that created a new className that got chained to the input elements of the form in order to style them accordingly.

```javascript
let errorsClass;
let errorsMessage;

if (this.props.errors[0] === 'login') {
  errorsClass = "errors";
  errorsMessage = (
    <div className="errors-box" id="login-errors-box">
      <div className="login-arrow-right"></div>
      <ul className="login-errors-message">
        {this.props.errors.slice(1).map(error => {
          return <li>{error}</li>
        })}
      </ul>
    </div>
  )
}
```

### Profile
<img width="1264" alt="bluebook-profile" src="https://user-images.githubusercontent.com/19655779/74054336-b17c7d00-4992-11ea-906d-4d991ceafcbf.png">

### Friend Request
<img width="353" alt="bluebook-request" src="https://user-images.githubusercontent.com/19655779/74054430-ea1c5680-4992-11ea-80b6-41e13b99601c.png">

### Posts
<img width="1261" alt="bluebook-posts" src="https://user-images.githubusercontent.com/19655779/74054517-10da8d00-4993-11ea-9098-5b52f559fa9c.png">
