import useModel from '../models/usersModal';
export async function getAllUser(req, res) {
  console.log('innnnnnn');
  const ret = await useModel.findAll();
  res.json(ret);
}

export async function getUserById(req, res) {
  const { id } = req.params;
  const ret = await usersModal.findOne({ where: { id } });
  res.json(ret);
}

export async function createUser(req, res) {
  await usersModal.create(req.body);
  res.json({ message: 'OK' });
}

export async function updateUser(req, res) {
  const { id } = req.body;
  await usersModal.update(req.body, { where: { id } });
  res.json({ message: 'OK' });
}

export async function deleteUser(req, res) {
  const { id } = req.body;
  console.log(id);
  await usersModal.destroy({ where: { id } });
  res.json({ message: 'OK' });
}
