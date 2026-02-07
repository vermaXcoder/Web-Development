class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    

    static createId(){
        return `2123`
    }
}

const Rishabh = new User("Rishabh")
// console.log(Rishabh.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email= email
        
    }
}

const iphone= new Teacher("iphone","I@phone.com")

iphone.createId()