function sayHello(person: string): string {
    return "Hello, " + person;
   }
   var user = "Super Student";
   document.getElementById("para").innerHTML = sayHello(user);

//    class Employee implements IEmployeeOptions{
// 	public Name: string;
// 	public Age: string;
// 	public phoneNumber: string;
//     public Location: string;
//     public hourlyWage : string;
// 	constructor(name: string, age: string, phonenumber: string, location: string, wage: string){
// 	this.Name = name;
// 	this.Age = age;
// 	this.phoneNumber = phonenumber;
//     this.Location = location;
//     this.hourlyWage = wage;
//     }
    
//     function employee(employee: Employee){
//     return this.Name + "is " + this.Age + "years old." + "and lives at " + this.Location + "the persons phone number is " + this.phoneNumber +
//     "and makes " + this.hourlyWage + " dollars an hour. "
//     }
    
    
     
//     var user = { Name: "Yusuf", Age: "26" , phoneNumber: "6143278257" ,Location: "Columbus,OH", hourlyWage: "30"



// };
//     document.body.innerHTML = employee(user);




// interface IEmployeeOptions{
//     public Name: string;
// 	public Age: string;
// 	public phoneNumber: string;
//     public Location: string;
//     public hourlyWage : string;
    
// }



class Employee {
    employee: string;
    constructor(
        public Name: string,
        public Age: string,
        public phoneNumber: string,
        public Location: string,
        public hourlyWage : string
    ) {

        this.employee = this.Name + "is " + this.Age + "years old." + "and lives at " + this.Location + "the persons phone number is " + this.phoneNumber +
            "and makes " + this.hourlyWage + " dollars an hour. "
            };
    }


interface Person {
     Name: string,
     Age: string,
     phoneNumber: string,
     Location: string,
     hourlyWage : string
}

function greeter(person : Person) {
    return "Hello, " +person.Name + " is " + person.Age + " years old." + " and lives at " + person.Location + " the persons phone number is " + person.phoneNumber +
    " and makes " + person.hourlyWage + " dollars an hour. " ;
}

var user1 = new Employee("Yusuf", "26", "6143278257","Columbus,OH ", "30" );

 

document.body.innerHTML = greeter(user1);