import { getuserPemilu } from "@/modules/supabase/database/users_pemilu/getuserPemilu.js"

export const get_users_pemilu = async (req, res) => {
  const nik = req.query.nik
  
  if(!nik){
    res.status(400).send({message: 'nik is required'})
  }

  try {
    const data = await getuserPemilu(nik)
    if(data.length === 0){
      res.status(404).send({message: 'nik not found'})
    }else{
      res.status(200).send(data)
    }
  } catch (error) {
    res.status(500).send({message: 'Error while getting user pemilu | Internal server error'})
  }

}
