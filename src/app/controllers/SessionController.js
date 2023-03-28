import * as Yup from 'yup';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    const userIncorrect = () => {
      return res
        .status(400)
        .json({ error: 'Make sure your password or email are correct' });
    };

    if (!schema.isValid(req.body)) userIncorrect();

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) userIncorrect();

    if (!(await user.checkPassword(password))) userIncorrect();

    return res.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
      token: jwt.sign({ id: user.id, name:user.name }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
