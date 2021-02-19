import { BAD_REQUEST, CREATED, OK } from "http-status";
import { register_user } from "../controller/user";

export const register = async (req, res, next) => {
    try {
      const user = await register_user(req.body);
      return res.status(CREATED).send({
        message: 'User created successfully',
        status: true,
        user: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(BAD_REQUEST).send({ status: false, error });
    }
  };
