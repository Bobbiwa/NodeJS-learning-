import app from '../../app'
import usersModel from '../models/userModel';
import groupModel from '../models/groupModel';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()
const {SECRET} = process.env
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
  const token = jwt.sign(user, SECRET, { expiresIn: '10h' });
  res.json({ status: 0, message: 'Success', token });
}

export async function getAllUser(req, res) {
  let token = req.headers.authorization;
  token = token.split(' ')[1]
  console.log(token);
  if (!token) {
    res.status(401).send('token不能为空');
    return;
  }
  wt.verify(token, SECRET, (err, decoded) => {
    console.log('decoded',decoded);
    if (err) {
      if (err.name == 'TokenExpiredError') {
        //token过期
        let str = {
          iat: 1,
          exp: 0,
          msg: 'token过期',
        };
        return str;
      } else if (err.name == 'JsonWebTokenError') {
        //无效的token
        let str = {
          iat: 1,
          exp: 0,
          msg: '无效的token',
        };
        return str;
      }
    } else {
      return decoded;
    }
  });

  try {
    const ret = await usersModel.findAll();
    res.json(ret);
  } catch (error) {
    res.json(error);
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
