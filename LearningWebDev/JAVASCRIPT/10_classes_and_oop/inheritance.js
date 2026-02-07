class User{
    constructor (username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username                             )
        this.email= email
        this.password= password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const Bhai = new Teacher("Bhai","Bhai@gamil.com","123")


Bhai.logMe();

const terabhai = new User("terabhai")

terabhai.logMe()



console.log(Bhai instanceof User);
console.log(Bhai instanceof terabhai);
