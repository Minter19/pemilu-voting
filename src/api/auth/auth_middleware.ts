import { supabaseAuthMiddleware } from "@/modules/supabase/auth/supabaseAuthMiddleware.js"

export const auth_middleware = async (req, res, next) => {
  // Complete function
  await supabaseAuthMiddleware(req, res, next);
}
