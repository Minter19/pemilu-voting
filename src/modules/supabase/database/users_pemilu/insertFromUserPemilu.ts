import { supabaseCli } from "@/modules/supabase/init.js";
import { getuserPemilu } from "./getuserPemilu.js";

type userData = {
    id_paslon: Text,
    nik_pemilih: Text,
    token: Text
}

export const insertFromUserPemilu = async (userData:userData) => {
    
    //check is user exist
    const checkUser = await getuserPemilu(userData.nik_pemilih);
    if(checkUser.length===0){
        throw new Error("User is not Registered in Database")
    }

    const isTokenValid = checkUser[0].token === userData.token ? true : false;
    if(!isTokenValid){
        throw new Error("Token Invalid")
    }

    const {id_paslon, nik_pemilih} = userData

    //insert data to table
    const {data,error} = await supabaseCli.from("hasil_pemilu").insert({id_paslon, nik_pemilih});
    if(error){
        if(error.code === "23505"){
            throw new Error("This NIK Has Already Been Inserted")
        }
        else{
            throw error
        } 
    }
    
    //update status transaksi user pemilu to true
    await supabaseCli.from("transaksi_pemilu").update({status:true}).eq("nik", nik_pemilih);
    return data
    
};
