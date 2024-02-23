import { supabaseCli } from "@/modules/supabase/init.js";


export const createUserAuth = async (email, password) => {
    try {
        let { data, error } = await supabaseCli.auth.signUp({
            email,
            password
        });
        if(error){
            throw error
        }
        return data.user.id
    } catch (error) {
        console.log("Error create auth user: ", error.message)
        throw error
    } 
};
