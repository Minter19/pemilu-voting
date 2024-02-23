import { supabaseCli } from "@/modules/supabase/init.js";
import { error } from "console";


export const getResultPemilu = async () => {
    const {data, error} = await supabaseCli.from("view_hasil_pemilu_v1").select('*');
    
    if(error){
        return error
    }

    return data;
    
};
