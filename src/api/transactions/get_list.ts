import { getStatusElection } from "@/modules/supabase/database/users_pemilu/getStatusElection.js"

export const get_list = async (req, res) => {
  try {
    const data = await getStatusElection();
    res.status(200).send(data)
  } catch (error) {
    console.log("error while getting list: ", error)
    res.status(500).send({message: 'Error while getting list | Internal server error'})
  }
  
}
