import { getTotalDataPemilih } from "@/modules/supabase/database/users_pemilu/getTotalDataPemilih.js"

export const get_total_data_pemilih = async (req, res) => {
  try{
    const data = await getTotalDataPemilih()
    res.status(200).send(data)
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Error while getting total data pemilih'+err})
  }
}
