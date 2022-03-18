Notes app from the course: ["The Complete Node.js Developer Course (3rd Edition)"](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

## Setup:
1. Clone the code.
2. Run: 
```
npm i
```
3. To manage tasks:
```sh
# To list the list:
node app.js list 

# To add a new Task:
node app.js add --title="NewTask" --body="TestTask"

# To remove a Task:
node app.js remove --title="NewTask"

# To read a Task:
node app.js read --title="NewTask"

```

## Notes:

To run the project with nodemon locally:
```
npx nodemon app.js
```
---
This code works:
```js
const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest list for: ' + this.name)
        this.guestList.forEach((guest)=> {
            console.log(guest + ' is attending ' + this name)
        })
    }
}
```

This shows undefined
```js
const event = {
    name: 'Birthday party',
    printGuestList: function(){
        console.log('Guest list for: ' + this.name)
    }
}
```