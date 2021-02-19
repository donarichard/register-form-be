import { Router } from "express";
import { Joi, celebrate, Segments, errors } from "celebrate";
import { register } from "../../services/user";

/**
 * This router to auth
 */
export default (app) => {
  const router = Router();
  app.use("/auth", router);

  router.route("/signup").post(
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    register
  );
  app.use(errors());
};
