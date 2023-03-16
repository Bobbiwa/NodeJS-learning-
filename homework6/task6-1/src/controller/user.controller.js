import usersModel from '../models/userModel';
import groupModel from '../models/groupModel';
import * as jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { login, password } = req.body;
  const ret = await usersModel.findAll({
    where: {
      login,
      password,
    },
  });
  const user = { ...ret[0], login: '', password: '' };
  //生成token
  const token = jwt.sign(user, 'hello', { expiresIn: '10h' });
  res.json({ status: 0, message: 'Success', token });
}

export async function getAllUser(req, res) {
  try {
    const ret = await usersModel.findAll();
    res.json(ret);
  } catch (error) {
    res.json(error);
    console.log('EEEEEEEEEEEEEEEE', error);
  }
}

export async function getUserById(req, res) {
  const { id } = req.params;
  const ret = await usersModel.findOne({ where: { id } });
  res.json(ret);
}

export async function createUser(req, res) {
  await usersModel.create(req.body);
  res.json({ message: 'OK' });
}

export async function updateUser(req, res) {
  const { id } = req.body;
  await usersModel.update(req.body, { where: { id } });
  res.json({ message: 'OK' });
}

export async function deleteUser(req, res) {
  const { id } = req.body;
  await usersModel.destroy({ where: { id } });
  res.json({ message: 'OK' });
}
