export const transactions_middleware = async (req, res, next) => {
  req.headers.authorization = process.env.SUPABASE_SECRET_ROLE_KEY;
  next();
}
