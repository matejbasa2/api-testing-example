# api-testing-example

## Early testing a 3rd party integration

### a) What kind of testing methodologies are applicable here?

    Mostly functional but also non-functional testing methodologies can be used. Most applicable here are:
    Security, Performance, Usability, API

### b) What kind of testing should be performed?

    At first functional. Authentication with the API, field validations, input/output data validations and the
    API response checking correctness (valid/invalid response).
    After all test cases are covered, performance tests should be done to ensure the API is scalable.

### c) Describe in detail your approach to testing theCatAPI integration from early to later after release phases.

    Since this project is in the early stage of integration the API testing should be done from the ground up.

    I would firstly try to understand the functionality of the API and clearly define the scope of the program.
    After that I would apply testing techniques such as equivalence classes, boundary value analysis, and error handling.
    It makes sense to test server-side validation and error handling.
    Input Parameters for the API need to be planned and defined appropriately.

    Make tests easy to maintain and slowly progress trough discovery, usability, security to performance tests.

    In the release phase some automated tests should already be made and run regularly along with some optional smoke tests for releasing.

### d) Write down an example of testing scope.

    1. Authenticate,
    2. Server response for incorrectly input parameter is as expected
    3. GET all cat breeds, check if format of data is ok and if certain cat exists.
    4. Filter the breeds and check if number of breeds returned changed and the breeds actually are correctly filtered.

### e.) How would you approach automation testing? You can suggest flows, tools, etc...

    I would preffer a hybrid or a data driven framework. I would determine the scope of automation, 
    what are the building blocks of the API and what can or rather has to be tested 
    (like excluding some browsers or operating systems with low usage rates from testing).
 
    Since I am testing an API without the UI in early stages, I hope to catch a lot of 
    issues that we can fix early on.
 
    I would clarify my test automation approach and setup an automated testing environment
    using the appropriate tools.
 
    Easing my work would be Postman, axios, chai, mocha and similar. I would also make test cases of usual user
    interactions as well as edge cases and each individual component (standardized test idioms.
 
    Setup a continuous integration tool that would trigger the automated tests. Also pay close attention
    to reproductivity of tests and most importantly reusability of testing function a.k.a. code. 
 
    Make tests change resistant in order to keep maintainability.

## 2. Evaluating a product fit

### a) Write down requirements for review based on user story
	
	If a user searches cat properties like adaptability, energy level, grooming, shedding and similar are added to the search input parameters, return cats most matching that criteria.
		
### b) Review if API satisfies user story and justify arguments
	
	Technically the user story can be satisfied with a bit more response data manipulation but the 
	API does not satisfy the user story, since you can not search by cat properties but only by breed and category.
	The API is inconsistent when using it for searching images, categories, breeds etc. with bad parameters
	and endpoints, since it allows listing and searching on some endpoints and not on others.
	The endpoint /breeds has wrong url defined in the documentation for listing the cat breeds...

### c) Create a simple script solution to verify that TheCatAPI can fulfill user story requirements

    1. Install the necessary dependencies using npm install,
    2. Run the tests using: `npm test`









