import { authLogin } from "../modules/supabase/auth/authLogin.js";
export const post_login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const reqLogin = await authLogin({ email, password });
        res.status(200).send({ message: 'Login success', data: reqLogin });
    }
    catch (error) {
        console.log("error while login: ", error);
        res.status(500).send({ message: 'Error while Login | Internal server error' });
    }
};
//# sourceMappingURL=post_login.js.map