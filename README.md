### Start the application locally

First install npm dependencies by:

`npm install`

Start the server on `http://localhost:3000` with:

`npm run serve`

Feel free to use curl or any REST client against API endpoints.

### How to test specific parts of the article?

There are 4 major commits inside this repo:

- step 1 -> codebase state after setting up Express server, in-memory database and CRUD endpoints
- step 2 -> codebase state after adding split and introducing feature flag branching
- step 3 -> codebase state after moving split logic into service
- step 4 -> codebase state after making treatment service a dependecy of albums service

Feel free to checkout any of these commits to test behaviour according to certain part of the tutorial.