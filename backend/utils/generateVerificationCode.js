export const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();
//up logic is to generate a random 6 digit number
//the logic works like this:
//Math.random() generates a random number between 0 and 1
//Math.random() * 900000 generates a random number between 0 and 900000
//Math.floor(100000 + Math.random() * 900000) generates a random number between 100000 and 999999
//.toString() converts the number to a string
//this package didn't use anywhere just for my learning