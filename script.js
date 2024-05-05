// question 1
const person = (name, lastname) => {
  const box = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = name;
  p1.style.color = "red";
  p1.style.textDecorationLine = "underline";

  root.append(box, p1);

  p2.style.fontSize = "50px";
  p2.style.border = "2px solid black";
  p2.textContent = lastname;

  root.append(p2);
};
person("yarin", "medina");

// question 2

const resultsDiv = document.getElementById("search-results");
const priceInput = document.getElementById("m-price");

const products = [
  { name: "milk", price: 5, description: "this is a milk" },
  { name: "bread", price: 3, description: "this is a bread" },
  { name: "cheese", price: 7, description: "this is a cheese" },
  { name: "butter", price: 9, description: "this is a butter" },
  { name: "tomato", price: 2, description: "this is a tomato" },
];

function priceList(){
    resultsDiv.innerHTML = null
    const price = Number(priceInput.value);

    products.forEach((p) => ){
        if (p.price <= price){
            const para = document.createElement('p')
            para.textContent = `${p.name} ${p.price} ${p.description}`
            resultsDiv.append(para)
        }
    }
}

// question 3

class Drive{
    constructor(name,date,kmDriven){
        this.name = name;
        this.date = date;
        this.kmDriven = kmDriven
    }
}


let drive1 = new Drive("Eitan","8.2",25000)
let drive2 = new Drive("Mishel","13.3",5000)
let drive3 = new Drive("Noa","1.4",100000)

class Car{
    constructor(manufacturer,model){
        this.manufacturer = manufacturer;
        this.model = model;
    }
    drivesArr = [] 
    status = true;
    totalKm = 0;

    sumTotalKm(){
        let sum = 0;
        this.drivesArr.forEach( val => sum += val.kmDriven)
        return this.totalKm = sum
    }
    addNewDrive(drive){
        this.drivesArr.push(drive)
        this.status = false;
        this.totalKm += drive.kmDriven
        return this.totalKm
    }
    
}

let car1 = new Car("Toyota","Corolla")
let car2 = new Car("Honda","Civic")
let car3 = new Car("Skoda","Octavia")
let carFree = new Car("BMW","X5")

car1.addNewDrive(drive1)
car1.addNewDrive(drive2)
car2.addNewDrive(drive2)
car3.addNewDrive(drive3)

class CompanyCar{
    constructor(rental){
        this.rental = rental
    }
    allCarsArr = []

    addNewCar(car){
        this.allCarsArr.push(car)
    }
 
    highestKm(){
        let max = this.allCarsArr[0] 
        this.allCarsArr.forEach(val=>{     
            if(max.totalKm < val.totalKm){
                max = val
            }
        })
          return max
    }

    getAvailableCars(){
        this.allCarsArr.forEach(val=>{
            if(val.status == true) console.log(val)
        })
    }

    addDrive = (manufacturer,ride) =>{
        this.allCarsArr.forEach((val)=>{
            if(val.manufacturer == manufacturer){
                val.addNewDrive(ride)
                return;
            }
        })
    }


}

let company = new CompanyCar("Avis")
company.addNewCar(car1)
company.addNewCar(car2)
company.addNewCar(car3)
company.addNewCar(carFree)


let newDrive = new Drive("Rodion","2.5",70000)
company.addDrive("Honda",newDrive)

company.getAvailableCars()