import { supabaseCli } from "@/modules/supabase/init.js";


export const createUserPemilu = async (userData) => {

    const {data, error} = await supabaseCli.from("users_pemilu").insert(userData)
    
    if(error){
        if(error.code === "23505"){
            throw new Error("User already exists")
        }
        else{
            throw error
        } 
    }
    return data
};
