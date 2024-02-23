import { supabaseCli } from "@/modules/supabase/init.js";


export const getUserByAuthId = async (authId) => {
    try{
        const  {data, error} = await supabaseCli.from("users").select("*").eq("auth_id", authId).single();
        if(error) {
            throw error
        }
        return data
    }catch(err){
        console.log("Error getting user by auth id: ", err)
        throw err
    }
};
