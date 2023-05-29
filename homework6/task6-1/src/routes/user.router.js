import express from 'express';
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login
} from '../controller/user.controller';

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);
router.post('/login',login)

export default router;
