import { supabaseCli } from "@/modules/supabase/init.js";


export const authLogin = async ({ email, password }) => {
    try {
        let { data, error } = await supabaseCli.auth.signInWithPassword({
            email,
            password
        });
        if(error){
            throw error
        }
        return data
    } catch (error) {
        console.log("Error login auth user: ", error.message)
        throw error
    }
};
