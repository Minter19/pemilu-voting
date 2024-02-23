export const root_get = async (req, res) => {
  return res.status(200).send({
    message: 'Hello im active!'
  });
}
