import { supabaseCli } from "@/modules/supabase/init.js";


export const insertUser2Transcaction = async (nik, status) => {
    const {data, error} = await supabaseCli.from("transaksi_pemilu").insert({nik, status})
    
    if(error) {
        throw error
    }
    
    return data;
};
