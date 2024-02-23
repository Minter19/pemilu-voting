import { supabaseCli } from "@/modules/supabase/init.js";


export const getTotalDataPemilih = async () => {
    const {data, error} = await supabaseCli.from("view_data_total_pemilih").select("*")

    if(error){
        throw error
    }

    return data
};
