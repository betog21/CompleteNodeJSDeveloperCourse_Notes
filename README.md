Notes app from the course: ["The Complete Node.js Developer Course (3rd Edition)"](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/)

To run the project with nodemon locally:
```
npx nodemon app.js
```

## Notes:
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