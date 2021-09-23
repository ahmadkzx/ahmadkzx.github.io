Most of you had much problem before with objects validation like this:  
`if (obj.avatar && obj.avatar.small && obj.avatar.small.url) {}`  
in old way you should write so dirty and long conditions to validate object.  

Question is how we can solve it?  

Answer is **Optional Chaining**. 
Optional Chaining is one of the best Javascript features released in ES2020. mission of this features is solve long and dirty object conditions.  

lets take a look how it works:
Without Optional Chaining:  

`if (obj.avatar && obj.avatar.small && obj.avatar.small.url) {}` 

 
With Optional Chaining:  

`if (obj?.avatar?.small?.url) {}`  

with Optional Chaining we only wrote one condition instead of three diffrent conditions.
when you put `?` sign after property name and before `.` actually you say if the proptery is doesn't exist break the condition by throwing `undefined`.  

Look at this example:  

`let obj = {  
  avatar: null  
}`  

`console.log(obj.avatar.small.url) // TypeError: Cannot read properties of undefined`

`console.log(obj.avatar?.small?.url) // undefined`

in summary Optional Chaining checks every property and if that is `null` or `undefined` will break and throws undefined.