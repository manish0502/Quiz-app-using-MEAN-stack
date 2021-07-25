# QuizApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## Working of project (Front-End)

Open project & do `npm i` then`ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
And you will be redirect to login page and there you will have to enter the credential , given by admin
then you will be redirect to home and start the quiz. and start you will have some list of questions and you need to press submit button 
The app will automatically reload if you change any of the source files.



## Working of project (back-End)

Open project , `cd api` & do `npm i` then`npm start` for a dev server. Navigate to `http://localhost:5000/`. 
And you will be have to signup the user , even checking with the login using postman.
push the number of question using the postman 


`1. API for User-registraion(POST) , kindly use POSTMAN to

        - visit : http://localhost:5000/api/auth/signup
        - body :
                {
                    "email" : "manishk@gmail.com",
                    "name":"manish",
                    "password" :"qwertyuiop"
            
                }

        - response : 
                    {
                    "message": "New User Created",
                    "result": {
                        "marks": 0,
                        "_id": "60fcd0d486add15f2ad799d5",
                        "email": "manishk@gmail.com",
                        "name": "manish",
                        "password": "$2a$10$.ujeCkncYKI4yuN0RZTYeOG92ohecAvtOX.Nk56Q9P6fU3tJf6x06",
                        "__v": 0
                            }
                    }

2. API for User-Login(POST) , kindly use POSTMAN to

        - visit : http://localhost:5000/api/auth/login
        - body :
                {
                    "email" : "manishk@gmail.com",
                    "password" :"qwertyuiop"
            
                }

        - response : 
                {
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaGtAZ21haWwuY29tIiwidXNlcklkIjoiNjBmY2QwZDQ4NmFkZDE1ZjJhZDc5OWQ1IiwiaWF0IjoxNjI3MTgxNTQyLCJleHAiOjE2MjcxODMzNDJ9.1yGf7BLimy0rQnLUgUl3nQgD_MdA5VcKFr5IX0GbQao",
                        "email": "manishk@gmail.com",
                        "expiresIn": 1800
                }
                
  

  3. API for Adding Question(POST) , kindly use POSTMAN 

        - visit : http://localhost:5000/api/question
        - body :
                {
                    "question": "Who is best cricketer?",
                    "option1": "sachin",
                    "option2": "virat",
                    "option3": "ms Dhoni",
                    "option4": "Sehwag",
                    "answer": "sachin"
    
                 }

        - response : 
                    {
                        "message": "Question Added",
                        "result": {
                            "_id": "60fcd8ae86add15f2ad799da",
                            "question": "Who is best cricketer?",
                            "option1": "sachin",
                            "option2": "virat",
                            "option3": "ms Dhoni",
                            "option4": "Sehwag",
                            "answer": "sachin",
                            "__v": 0
                        }
                    }
                
  


  4. API for fetching Questions(GET) , kindly use POSTMAN 

        - visit : http://localhost:5000/api/question
     

        - response : 
                    {
                            "message": "Questions Fetched Successfully",
                            "questions": [
                                {
                                    "_id": "60fcd8ae86add15f2ad799da",
                                    "question": "Who is best cricketer?",
                                    "option1": "sachin",
                                    "option2": "virat",
                                    "option3": "ms Dhoni",
                                    "option4": "Sehwag",
                                    "answer": "sachin",
                                    "__v": 0
                                },
                                {
                                    "_id": "60fcd9c386add15f2ad799dc",
                                    "question": "Who is best bowler?",
                                    "option1": "murlidharan",
                                    "option2": "shane woun",
                                    "option3": "ms Dhoni",
                                    "option4": "Sehwag",
                                    "answer": "shane",
                                    "__v": 0
                                }
                            ]
                        }
                
  

  5. API for Modifing the mark (POST) , kindly use POSTMAN 

        - visit : http://localhost:5000/api/question/mark
        - body :
                {
                 "userEmail": "manishgoswami495@gmail.com",
                 "marks": 66
                 }

        - response : 
                   {
                        "message": "Marks Updated",
                        "response": {
                            "n": 0,
                            "nModified": 0,
                            "ok": 1
                        }
                    }
                
  
   6. API for get User details (GET) , kindly use POSTMAN 

        - visit : http://localhost:5000/api/leaderboard
       

        - response : 
                    {
                        "message": "Users Fetched Successfully",
                        "users": [
                            {
                                "marks": 0,
                                "_id": "60fcd0285be9a05e5d39b79d",
                                "email": "manish@gmail.com",
                                "password": "$2a$10$B4GF4tiuUjAd6nrLYhsLOusuifZDK04Z4WDiNNg8tWZw1oKI6RJvy",
                                "__v": 0
                            },
                            {
                                "marks": 0,
                                "_id": "60fcd0d486add15f2ad799d5",
                                "email": "manishk@gmail.com",
                                "name": "manish",
                                "password": "$2a$10$.ujeCkncYKI4yuN0RZTYeOG92ohecAvtOX.Nk56Q9P6fU3tJf6x06",
                                "__v": 0
                            }
                        ]
                    }`


The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
