/*
start with lettre underscore and $
camelCase 
undefined variable is variable without value
variables are 
1- numbers
2- strings
3-array 
4- object
5- null
6- undefined
7- symbol
8-Boolean true or false
9-Nan
concatination
output
operators
if 
conditional operators 
= assignment
== comparison value only
=== identity value and datetype
logical operators && || ! 
function
return in function
parameter in function
self invoke function
switch case
scope
events built in or customize
onclick - onkeyup - onchange - onmouseover
array constractor (iterial ways)
array.isarray
arrayname.constractor === array
length set length and get length
Tostring tolocalestring join methods
add and remove items to and from array
splice for removing (essential) for array only
sort reverse slicing concat methods
search in array index od and last index of
convert number to string
search  in string indexof last indexof search (value only)
split (seperator,limit) convert string to object in array شوف السيبيراتور بيقسم كام قطعه واطلب على اساسه
slice (start,end) dont get last letter
substr(start,limit)
substring (start,end) if start > end swap is done dont get last letter
charAt(index)
charcodeAt(index) //unicode
replace(value,new value)
string from charcode 
concat of two srings
trim and link methods
chain method 
regular expression (backward slash):letters are insensitive and global flag
repeat for star example
loop
for in used in object
to access item in object object name.property unlike array 
math methods
regular expression (i,g,(m(for multiple search line))
brackets [letter],[^letter],range[a-z],range[A-Z],[A-g],range[1-9]
quantifier e{}
Date four ways
1- new Date();
2-newDate(10000); 1 jun 1970;
3-newDate("month day, year , hour: minute:second") //Datestring
4-newDate(year,month,day,hour,minute,second,milisecond)//month index from zero
js date ignore comma
date formatting full long short iso
short (2 11 2000)
iso yyyy mmmm dddd 
Date methods
1-getdate day in month 1-31
2-getday day in week 0 sunday-6 saturday    
3-getfullyears year
4-getmounth from index 0
5-gethours
6-getminutes
7-getseconds
8-getmilliseconds
9-gettime number of milliseconds from 1 jun 1970
10-getTimezoneOffset
1-setdate day in month 1-31
2-setday day in week 0 sunday-6 saturday    
3-setfullyears year
4-setmounth from index 0
5-sethours 0-23
6-setminutes
7-setseconds
8-setmilliseconds
9- settime number of milliseconds from 1 jun 1970
now number of milliseconds from 1970 -  parse toisostring todatestring totimestring
number tostring fixedof exponential parseInt
DOM => document object model
DOM => progrmming interface for html and xml
to catch element
1-document.getelementbyid
2-document.getelementsbytagname //of index 
3-documentgetelementsbyclassname of index
4-document.queryselectorall(.test,#test)
catch elements by objects
document.title
document.image
document.forms
document.body
document.links
document.achorns
get and set in js
inner html textcontent 
change attribute value element.attributes
get attribute ad set attribute("name","value")
has attribute and remove attribute
classlist item contains
classlist.add classlist.remove classlist.toggle
childElementCount =childeren.length element only
childNodes all
first child = child ndes[0] last child
firstelement child last element child
creat elment and textnode appendchild
insertbefore (اللى عاوز ادخله , main div .firstelmentchild)
removechild(اللى عاوز ادخله , main div .firstelmentchild)
NodeName Nodevalue NodeType 1-element 2-attribute 3-text 8-comment 
clonenode(true) استنساخ
parentnode parentelement
nextsipling nextelementsipling previous sipling previous elementsipling  الاشقاء
focus and blur
click
clientheight and clientwidth  viewable area include padding no margin no border no scroll
scrollheight and scrollwidth  visible area include padding no margin no border no scroll
offsetheight and offsetwidth  viewable area include padding no margin including border including scroll
scroll top scoll left
client-left and client-top to know the size of the border top or left
styles
document.inputEncoding(utf-8)  document.lastmodified  document.url
create element create textnode create comment
create attribute (set attribute name)
event
onload onscroll onresize
onfocus onblur onsubmit
onclick ondbclick (onmouseenter = hover) (onmouseleave = gone) (oncontextmenue special with rightclick)
onkeyup onkeydown onkeypress
BOM special for browser object model
1- window
2- window.alert window.confirm(boolean) window.prompt(text , text example)
3- window.location.href
/n ينزل سطر جديد
4- settimeout(function,milliseconds) and cleartimeout(id or number of settimeout) after 3 seconds do something
setinterval clearinterval every 3 seconds do something
window.open("url","name or atribute _blank _self","specfication width , height","replace history")
window.scrollrby(x,y) window.scrollto(x,y)
stop close and focus for loading  pages
window.innerHeight window.outerHeight window.innerwidth window.outerwidth
oop consists of properiets and methods window.replace("www.google.com") =>method, window.location.hostname=>properietes
window.location=window["location"]
defination of object users = {property:value} name of the method:function(){
   what is the funnction do
}
users.firstname =>Dot notation
users["firstname"] =>bracket notation
nested object var users = {
   firstname:khaled
   addresses:{
      eg:"giza"
   }
}
the difference between dot notation and braacket notation
dot notation   لا تسمح ان idenifier يبقى رقم
another way to define object
var user = new object()
method (user.fullName = function(){

})
تعلم JavaScript OOP درس 07# - إنشاء ال Object بواسطة Object.create
use this to make each object itself with its properieties
creat object with object.assign(target,src)
علم JavaScript OOP درس 09# - تعلم ال Delete Operator delete property not object
freazed object can,t be deleted
variables can,t be deleted
const freezedobj = Object.freeze({age:21});
define property(obj,"name of property",{value:"khaled",configurable:false})
if configurable:false=> we can,t delete property
if configurable:true=> we can delete property
constructor  start with capital letter
fuction Phone(serial,color,price)
function phone1 = new phone(123,red,1200$);
forin
this => is the created object from constructor
new => make object instant of constructor
if we don,t write new object will instant of window
to add parameter to constructor
built in constructor var myDate = new Date();
var myStr = new String('kahled');
console.log(myStr.toUpperCase());

var mynum = new Number(30);
console.log(mynum.toExponential());
علم JavaScript OOP درس 16# - ال Prototype الجزء 1 - مقدمة
every function has constructor consists of (property=>constructor , value=> function)
تعلم JavaScript OOP درس 17# - ال Prototype الجزء 2 - إضافة إلى ال Prototype Chain
function user(name){
   this.firstname = name;
   this.newName=function(newname){
      return this.firstname = newname;
   }
}
let user1 = new user('khaled');
console.log(user.prototype)
console.log(user1)
user.prototype.addtitle = function(){
   return(`mr${this.firstname}`)
}
console.log(user.prototype);
user1.addtitle(); // متاح اختار add title لانه دخل على اول اوبجكت ملقاش هذه الداله فدخل على اول بروتوتييب
Object.prototype.elzero = "elzero web school";
اى اوبكت هنشاه هيكون متاح ليه البروبيرتى اللى اسمها الزيرو
*/
// ================================== javascript revision ====================================

// js is lossely typed (you don,t need to define number or string
//only write var or let)
// consol.log is web Api
// var my_name = "khaled";
// var age = 21;

// console.log("hello " + my_name + " you are welcome");
// console.log(`hello ${my_name} you are welcome`);

// console.log(typeof age);
// console.log(typeof my_name);
// console.log(typeof {name : "khaled" , age : 21});
// comparsion between var and let and const
// var a = 1;
// var a = 2;
// 1- console.log(a); //result will be 2 and this wrong it should tell you that you have declared this variable before


//2 -  access before declearing(undefined)

// 3- any var will be found in window object and this cause variable Drama scope

// console.log(a) // the result will be there is an error identifer has already been declared
// let a = 2;
// access before declearing(error you can,t access variable before declearing it)
// any let not find in window object
// let writer = "khaled";
// let html = `
// <div class = "parent">
// <div class = "child>
// <h1>hello ecmascript6 i love you</h1>
// <p>writer is ${writer}</p>
// </div>
// </div>
// `
// document.write(html);
// console.log(" %chello world " , "color : red") directive c
// unary operator (+ , -) return number from string
// let a = "100";
// let b = 200;
// let c = true
// console.log(+a+b+c)

//type casting convert from string to number using unary operator

// console.log(Number(a)) //type casting
// age  = 21;
// console.log(age);
// console.log(String(age)) // type casting
// console.log(100)      //number
// console.log((100).toString())
// console.log(String(100))
// console.log(100.567839)
// console.log(100.567839.toFixed(2))     //convert number to string

// console.log("100") //string
// console.log(+"100")
// console.log(Number("100"))
// console.log(parseInt("100"))


// console.log(isNaN(100)) // 100 is number so result is false
// ======================================= Math object ============================

// console.log(Math.round(9.2)) // before 5 result = 9
// console.log(Math.round(9.5)) // after or equal 5 result = 10
// console.log(Math.floor(9.5)) // 9
// console.log(Math.ceil(9.5)) // 10
// console.log(Math.pow(2,3)) //8
// string methods 
// trim remove spaces from string 
// console.log(myName[3]) = console.log(myName.charAt(3))
// myName.length length of string
// let title  = "i love python and i love php"
// console.log(title.indexOf("love")) // 2
// console.log(title.lastIndexOf("love")) // 20
// console.log(title.slice(1 , -1)) // (start , end=> optional)end not include
//  result =>  love python and i love ph

// let age = document.querySelector("input");
// let button = document.querySelector("button");
// button.addEventListener("click" , function(){
//    age.value = age.value.slice(0,-1) //  هاتلى القطعه من صفر للاخير والاخير مش معانا
// })
   
// split depend on seperator convert string to array
// let myName = "khaled | tarek | fathy"
// console.log(myName.split("|"))


// let myName = "khaled tarek"
// console.log(myName.slice(5 , 2)) // مبيسمحش ان البدايه اكبر من النهايه


//  let myName = "khaled tarek"
//  console.log(myName.substring(5 ,  2)) //(start end not) included but make swap if start > end
//  console.log(myName.substring(2 , 5)) //(start end not) included but make swap if start > end
// console.log(myName.substring(0)) 
// let myName = "khaled tarek"
// console.log(myName.substr(0 ,  2))  //kh (start , number of  steps)


// let myName = "khaled tarek"
// console.log(myName.substr(-2 ,  2))   result => ek

// ====================== important comaprison ====================
//slice (start , end not included)
//substring (start , end not included) make swap if start > end no negative allowed
//substr (start , # of  steps) make swap if start > end negative allowed
// let myName = "khaled tarek"
// console.log(myName.includes("khaled")) //true startt from 0
// console.log(myName.includes("khaled" , 6)) //false start from 6
// let myName = "khaled tarek"
// console.log(myName.startsWith("khaled")) //true start from 0

// let myName = "khaled tarek"
// console.log(myName.endsWith("tarek" , 12 )) // length true
// console.log(myName.endsWith("khaled" , 6 )) // length true
// bers point to with this length

// logical operator null undefind false value 0 is false value
// ?? nulish coalasing operator  null undefined

// let price = 0 
// console.log(`price is ${price ?? 300}`)
// console.log(`price is ${price || 300}`)

// let myName = "mona"
// let gender = "female"
// let question = gender === "male" ? "mr": "miss"
// console.log(`hello ${question} ${myName} you are welcome`)

// let users = {
//    name : "khaled" , 
//    1 : 21,
//    getInfo : function(){
//       return ` name is ${users.name} and age is ${users["1"]}`
//    }
// }
// console.log(users.name)
// console.log(users["1"])
// console.log(users.getInfo())

// let userwomen = new Object()
// userwomen.name = "mona"
// userwomen.age = 22
// userwomen.getInfo = ()=>{
//   return  `name ${userwomen.name} and age is ${userwomen.age}`
// }
// console.log(userwomen.name)
// console.log(userwomen.age)
// console.log(userwomen.getInfo())


// function gazPrcices(gazType){
//    switch (gazType){
//       case("banzen82"):
//          console.log(" gaz price is " + 180 + "pounds");
//          break;
//       case("banzen89"):
//          console.log(" gaz price is " + 380 + "pounds");
//          break;
//       case("banzen92"):
//          console.log(" gaz price is " + 580 + "pounds");
//          break;
//       default:
//          console.log(" enter right type ");
//    }
        
// }
// gazPrcices("banzen82");


// for(i = 0 ; i<admins.length;i++){
//    console.log(i + "=>" + admins[i]);
// }

// var users = {
//    name : "khaled",
//    age : 21,
//    getInfo : function(){
//       return `name is ${users.name} and age is ${users.age}`
//    }
// }
// console.log(users["name"]);
// console.log(users.name);
// console.log(users.getInfo())
//delete operator for rmoving object property not working if object is freezing or object.defineProperty(obj , "name" , {value : "khaled"} , configurable : false)

// let user = Object.freeze({
//    name : "khaled" , 
//    age : 21
// })
// let info = {
//    age : 21,
// };
// Object.defineProperty(info , "name" , {value : "ali" , configurable : true ,enumerable : true,writable : true})

// for(let prop in info){
//    console.log(prop + "=>" +info[prop])
// }
   
// console.log(user)
// console.log(user.name)
// console.log(delete user.name)
// console.log(user)
// console.log(user.name)

// info.name ="ibrahim"
// console.log(info)
// console.log(info.name)
// console.log(delete info.name)
// console.log(info)
// console.log(info.name)


// let user = {
//    name : "ali" , 
//    age : 21,
//    country : "eg"
// }
// let info = ""

// for(let i in user){
//    // console.log(` ${i} is ${user[i]} `)
//    info += `<div> ${i} is ${user[i]} </div>`
// }
// console.log(info)

//constructor function


// function Phone(serial , color , price){
//    this.serial = serial;
//    this.color = color;
//    this.price = price;
// }

// let phone1 = new Phone(1 , "red" , 2000)
// console.log(phone1)
// let phone2 = new Phone(2 , "blue" , 4000)
// console.log(phone2)

// function User(name , age){
//    this.name = name,
//    this.age = age,
//    this.getFullInfo = function(){
//       return this.name + this.age
//    }
// }

// let employee = new User("khaled" , 21)
// console.log(employee)
// console.log(employee.name)
// console.log(employee.age)
// console.log(employee.getFullInfo())


// function UserInfo(name , age){
//    this.name = name;
//    this.age = age;
//    this.updateName = function(newname){
//      this.name = newname;
//      return `old name is ${this.name} and new name is ${newname}`
//    }
// }

// let employeeInfo = new UserInfo("hema" , 21);
// console.log(employeeInfo.name)
// console.log(employeeInfo.updateName("goda"))
// console.log(employeeInfo.name)

// let clientInfo = new UserInfo("ahmed" , 25);

// every funcion has prototype is about object key is constructor and value is name of function 
// so constructor function has prototype iside it all methods and properties if you make instance from constructor will has access to all these properties and methds

// let arr = new Array(1,2,3,4,5)
// console.log(Array.prototype)
// console.log(arr.reverse())


// function User(name , age){
// this.age = age
// this.name = name
// }
// User.prototype.gender = "male"

//prototype of constructor has all properties and functions childeren can access

// let employee = new User("ali" , 21)
// console.log(employee.age)
// console.log(employee)

// console.log(employee.gender)

// String.prototype.sayHello = function() {
//    return ` hello ${this}`
// }

// console.log("ali".sayHello())

// String.prototype.zfill = function(width){
//    let theResult = this
//    while(theResult.length<width){
//       theResult = `0${theResult}`
//    }
//    return theResult.toString()
// }

// console.log("123".zfill(12))

// function User(name){
// this.name = name
// if(!new.target){
// // throw new Error("can,t take instance from user constructor without new keyword")
// console.log("can,t take instance from user constructor without new keyword")
// }
// }
// let person = User("ali")
// console.log(person)

//get and set theri only function is to convert method to property for better code


// class UserInfo{
//    static counter = 0;
//    constructor(name , age){
//       this.name = name;
//       this.age = age;
//       UserInfo.counter++;
//    }
//    get sayHello(){
//       return  `hello ${this.name}`
//    }
//    static counterCount = function(){
//       return `${this.counter} objects created`
//    }

//    updateName(newname){
//       return `old name is ${this.name} and new name is ${newname}`
//       this.name = newname;
//    }
  
// }

// class Admin extends UserInfo{
//    constructor(name , age){
//       super(name , age)
//    }
   
//    set calaulateAgeInDays(bd){
//       this.age = bd
//    }
// }
  


// let employeeInfo = new UserInfo("hema" , 21);
// let employee2 = new UserInfo("hema" , 21);

// console.log(employeeInfo.name)
// console.log(employeeInfo.updateName("goda"))
// console.log(employeeInfo.name)
// console.log(UserInfo.counterCount())

// let admin1 = new Admin("khaled" , 21)
// let admin2 = new Admin("ali" , 24)

// console.log(admin1.sayHello)
// admin1.calaulateAgeInDays  = 20;
// console.log(admin1.calaulateAgeInDays)

// function Character(name , strength , health){
//    this.name = name
//    this.strength = strength
//    this.health  = health
//    this.attackBtn = document.querySelector(`#${this.name}-attack`)
//    this.recoverBtn = document.querySelector(`#${this.name}-recover`)
//    this.progress = document.querySelector(`#${this.name}-progress`)
//    this.write = document.querySelector(`#${this.name}-write`)
//    this.effect = document.querySelector(`.${this.name}-effect`)
  
// }
// Character.prototype.attack = function(opponent){
//    opponent.health -= this.strength
//    if(opponent.health >= 0){
//       opponent.progress.style.width = `${opponent.health}%`
//    }else{
//       opponent.attackBtn.remove()
//       opponent.recoverBtn.remove()
//       opponent.write.innerHTML = `Game over ${this.name} is the wiiner and ${opponent.name} is the loser`
//       opponent.write.style.color = "fff"
//       opponent.effect.style.backgroundColor = "rgb(0,0,0,.6)"
//    }
//    // console.log(opponent.health)
// }
// Character.prototype.recover = function(){
//    if(this.health < 100){
//       this.health+=10
//       this.progress.style.width = `${this.health}%`
//    }else if(this.health > 100){
//       this.health = 100
//    }

// }
// Character.prototype.status = function(){
//    console.log(`Name is ${this.name}`)
//    console.log(`health is ${this.health}`)
//    console.log(`strength is ${this.strength}`)
// }


// let narato = new Character("naruto" , 10 , 100)
// let sassaki = new Character("Sasaki" , 10 , 100)

// narato.attackBtn.addEventListener("click" , function(){
//    narato.attack(sassaki)
//    console.log(narato.status())
//    console.log(sassaki.status())
// })
// sassaki.attackBtn.addEventListener("click" , function(){
//    sassaki.attack(narato)
//    console.log(narato.status())
//    console.log(sassaki.status())
// })

// narato.recoverBtn.addEventListener("click" , function(){
//    narato.recover()
// })
// sassaki.recoverBtn.addEventListener("click" , function(){
//    sassaki.recover()
// })

// let reloadBtn = document.getElementById("reload")
// reloadBtn.addEventListener("click" , function(){
//    setTimeout(function(){
//       window.location.reload()
//    } , 1000)
  
// })



// let text = "Hello world!";
// let result = text.slice(3);
// console.log(result)

// function dataLoading(){
//    let xhttp  = new XMLHttpRequest();
//    xhttp.onreadystatechange = function(){
//       if(this.readyState == 4 && this.status == 200){
//          console.log (JSON.parse((this.responseText)))
//       }
//    }
//    xhttp.open("Get" , "https://jsonplaceholder.typicode.com/posts" , true)
//    xhttp.send()
// }
// dataLoading()

let images = Array.from(document.querySelectorAll("img"));
let lyr = document.querySelector(".lyr");
let img_show = document.querySelector(".img-show");
let closeBtn = document.querySelector(".close");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let current_index;

images.map((img , index)=>{
   current_index = index;
   img.addEventListener("click" , ()=>{
      lyr.classList.replace("d-none" , "d-flex")
      img_show.style.backgroundImage = `url(${img.src})`
   })
})

closeBtn.addEventListener("click" , closing)

prev.addEventListener("click" , ()=>{
   slideleft()
})
next.addEventListener("click" , ()=>{
  slideright()
   
})

function closing (){
      lyr.classList.replace("d-flex" , "d-none")
}


document.addEventListener("keydown" , (e)=>{
   if(e.key == "ArrowRight"){
      slideright()
   }
})
document.addEventListener("keydown" , (e)=>{
   if(e.key == "ArrowLeft"){
      slideleft()
   }
})
document.addEventListener("keydown" , (e)=>{
   if(e.key == "Escape"){
      closing()
   }
})

function slideright(){
   if(current_index == images.length){
      current_index = 0;
   }
      var nextImage = images[current_index++].src;
      img_show.style.backgroundImage =`url(${nextImage})`
}
function slideleft(){
   if(current_index == -1){
      current_index = images.length-1;
   }
      var lastImg = images[current_index--].src;
      img_show.style.backgroundImage = `url(${lastImg})`
}