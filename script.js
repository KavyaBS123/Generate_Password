const passwordBox=document.getElementById("password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const special="!@#$%^&*<>?:}_{|;();";
const allchars=upperCase+lowerCase+number+special;
function createpassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=special[Math.floor(Math.random()*special.length)];

while(length>password.length){
    password+=allchars[Math.floor(Math.random()*allchars.length)];

}
passwordBox.value=password;
}
function copy(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}