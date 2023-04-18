import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';

class CategoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    try {
      await schema.validateSync(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { name } = req.body;
    const { filename: path } = req.file;

    const categoryExists = await Category.findOne({
      where: { name },
    });
    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    const { id } = await Category.create({ name, path });

    return res.status(201).json({ name, id });
  }

  async index(req, res) {
    const category = await Category.findAll();

    res.json(category);
  }

  async delete(req, res) {
    const { admin: isAdmin } = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res.status(401).json();
    }

    const { id } = req.params;
    try {
      await Category.destroy({ where: { id } });
      
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(204).json();
  }
}

export default new CategoryController();
