
export const checkValidData=(email, password, name)=>{

const isEmailValid=  /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/. test(email);
const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
const isNameValid= name? /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name) : true
if(!isEmailValid) return "Email is not valid"
if(!isPasswordValid) return "Password is not valid"
if(!isNameValid) return "Name is not valid"

return null;
}
