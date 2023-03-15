import groupModel from '../models/groupModel';

export async function getAllGroup(req, res) {
  const ret = await groupModel.findAll();
  res.json(ret);
}
export async function getGroupById(req, res) {
  const { id } = req.params;
  const ret = await groupModel.findOne({ where: { id } });
  res.json(ret);
}
export async function createGroup(req, res) {
  const ret = await groupModel.create(req.body);
  if (ret) res.json({ message: 'OK' });
}
export async function updateGroupById(req, res) {
  const { id } = req.params;
  const ret = await groupModel.update(req.body, { where: { id } });
  if (ret) res.json({ message: 'OK' });
}
export async function fullDelete(req, res) {
  const { id } = req.body;
  const ret = await groupModel.destroy({ where: { id } });
  if (ret) res.json({ message: 'OK' });
}
