export const validateData = (email, password) => {
    const isEmailValid = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
   
    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "Password is not valid";
}