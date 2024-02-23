import { supabaseCli } from "@/modules/supabase/init.js";


export const deleteAuthUser = async (authId) => {
    try{
        const {error} = await supabaseCli.auth.admin.deleteUser(authId)
        if(error){
            return error;
        }   
        return {message: "User deleted successfully!"}
    }catch(err){
        throw new Error("Error deleting user: " + err);
    }
};
