// const express = require('express');
import express from "express";
const router = express.Router();
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser
} from '../controller/userController.js';

router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
