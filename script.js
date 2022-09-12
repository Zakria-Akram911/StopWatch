/*.......................................................................
When we know that the function will be used in more than one constructor
by 'CALL() METHOD' we do not build function inside the construtor rather
we make it seperately like we made 'showRadius()' in the code below and
call them by the 'CALL() METHOD'.
..........................................................................*/

function Circle1(radius){
    this.radius = radius;
    
    console.log('hello');
}

function showRadius(nameOfCircle){
    console.log (`Radius of Circle${nameOfCircle} is : ${this.radius}`);
}

function Circle2(radius){
    this.radius = radius;
}

//Function Borrowing by call
const circle1 = new Circle1(2);
console.log(circle1);
showRadius.call(circle1 , '1');

const circle2 = new Circle2(3);
console.log(circle2);
showRadius.call(circle2 , '2');

/*............................................................................................... 
We can dynamically add or delete properties from the objects. This is used to add/delete 
some data at certain time or at the certain veiw. (OOP course by Mosh Video 8 of Objects-folder)
.................................................................................................*/

//To add a property to an object
circle1.location  = {x: 2};

//To delete a property from the object
delete circle1.location;

console.log(circle1);

//Getters and Setters

function Circle3(radius){
    this.radius = radius;

    let defaultLocation = {x:1 , y:2};

    Object.defineProperty(this, 'defaultLocation' , {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Input');
            defaultLocation = value;
        }
    });
}

const circle3 = new Circle3(10);
circle3.defaultLocation = 2;