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
### Profile
### Friend Request
### Posts
