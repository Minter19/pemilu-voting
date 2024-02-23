import { supabaseCli } from "@/modules/supabase/init.js";


export const getStatusElection = async () => {
    const {data, error} = await supabaseCli.from("transaksi_pemilu").select("*")
    
    if(error) {
        throw error
    }
    
    return data;
};
