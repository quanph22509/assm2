import instance from ".";
import { IProduct, SigninForm, SignupForm,signinSchema, updateForm, uploadUsers } from "../models";

export const getAllUsers = () => {
    const uri = "/users"
    return instance.get(uri)
}
export const getByIdUsers = (id: String) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const deleteIdUsers = (id:String) =>{
    return instance.delete("/users" + id)
}
export const signupUsers = (data:uploadUsers) =>{   1
    return instance.post("/signup",data)
}
export const signinUsers = (data:SigninForm) =>{
    return instance.post("/signin",data)
}
