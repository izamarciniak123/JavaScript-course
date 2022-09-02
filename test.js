var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){

        console.log("driver name is " + this.driver);

    };
}
var myCar = new Car(70, "Iza");
var myCar2 = new Car(80, "Izunia");
var myCar3 = new Car(40, "Izabela");
var myCar4 = new Car(180, "Izus");

myCar.drive(30,5);
myCar3.logDriver();
