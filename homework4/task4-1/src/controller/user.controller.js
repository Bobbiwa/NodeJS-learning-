import usersModel from '../models/userModel';
import groupModel from '../models/groupModel';


export async function getAllUser(req, res) {
  const ret = await usersModel.findAll({ include: [{ model: groupModel }] });
  res.json(ret);
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
