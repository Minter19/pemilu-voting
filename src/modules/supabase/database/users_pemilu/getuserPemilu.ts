import { supabaseCli } from "@/modules/supabase/init.js";

export const getuserPemilu = async (nik) => {
  const {data, error} = await supabaseCli.from("users_pemilu").select("*").eq("nik",nik)
  
  if(error) {
    throw error
  }
  
  return data;
};
