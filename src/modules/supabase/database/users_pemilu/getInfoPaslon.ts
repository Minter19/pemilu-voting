import { supabaseCli } from "@/modules/supabase/init.js";

export const getInfoPaslon = async () => {
    const {data, error} = (await supabaseCli.from("paslon_pemilu").select("*"));
    if(error){
        throw error
    }
    return data
};
