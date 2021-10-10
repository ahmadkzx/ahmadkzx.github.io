Did you write code that can help other programmers?

so help other programmers by publishing your useful code on NPM.  

for publishing package on NPM you can easily follow these steps:  

 1. First **write useful code** and make sure it works.
for example we write sayHello function in index.js file:

        function sayHello(name) {
    	    alert('Hello ' + name)
        }
        export default sayHello

 2. Initialize NPM by `npm init` command
 3. Open package.json and add `"main": "index.js"`. this line means package main js file is index.js file.
 4. (Optional) Test package locally. for test package in your local run `npm link` and then in your test project run `npm link your-package-name` and add it in package.json dependencies. after adding package to dependencies in your app import package and test it.
 5. Signup in NPM if you have not account.
 6. Signin to your account by running `npm login` command.
 7. At least run `npm publish` to publish package.

**Note: for each publish you should increase the version number in package.json.**

Thats it!