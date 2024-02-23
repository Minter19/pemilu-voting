import { getResultPemilu } from "@/modules/supabase/database/users_pemilu/getResultPemilu.js";

export const get_result_pemilu = async (req, res) => {

  try {
    const data = await getResultPemilu();
    res.status(200).send(data)
  } catch (error) {
    console.log("error while getting result pemilu: ", error)
    res.status(500).send({message: 'Error while getting result pemilu | Internal server error'})
  }
}
