import { supabaseCli } from "@/modules/supabase/init.js";


export const createDbuser = async (userData) => {
    try{
        const  {data, error} = await supabaseCli.from("users").insert(userData);
        if(error) {
            throw error
        }
        return data
    }catch(err){
        console.log("Error creating user: ", err)
        throw err
    }
};
