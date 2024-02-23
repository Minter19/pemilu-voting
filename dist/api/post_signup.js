import { createUserAuth } from "../modules/supabase/auth/createUserAuth.js";
import { createDbuser } from "../modules/supabase/database/users/createDbuser.js";
export const post_signup = async (req, res) => {
    try {
        //insert a new user into supabase auth
        let { email, password, nik, name, token } = req.body;
        const authId = await createUserAuth(email, password);
        //insert a new user into table "users"
        await createDbuser({ nik, name, auth_id: authId, token });
        res.status(201).send({ message: 'User created' });
    }
    catch (error) {
        console.log("error while signing up: ", error);
        res.status(500).send({ message: 'Internal server error' });
    }
};
//# sourceMappingURL=post_signup.js.map