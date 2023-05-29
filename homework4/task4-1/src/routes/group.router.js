import express from 'express';
import {
  getAllGroup,
  getGroupById,
  createGroup,
  updateGroupById,
  fullDelete,
} from '../controller/group.controller';

const router = express.Router();

router.get('/', getAllGroup);
router.get('/:id', getGroupById);
router.post('/', createGroup);
router.put('/:id', updateGroupById);
router.delete('/', fullDelete);

export default router;
