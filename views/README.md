# Views
<!-- EACH ONE OF THESE WILL HAVE ITS OWN VIEW FILE -->

GET - "/" - home

---

GET - "/login" - login form

POST - "/api/users/login" - Authenticate Existing User

---

GET - "/signup" - Registration Form

POST - "/api/users/" - Create New user

---

GET - "/dashboard" - user dashboard

---

GET - "/dashboard/new" - Create Post view

POST - "/api/posts" - Create New Post View

---

GET - "/post/:postId" - View single post

GET - "/dashboard/edit/:postId" - Edit Post

PUT - "/api/posts/:postId" - Edit Post API 

DELETE - "/api/posts/:postId" - Delete Post API

<!-- API Routes -->
<!-- Request methods become the verbs in a restful API -->
POST - "/api/users/logout" - Authenticate Existing User

