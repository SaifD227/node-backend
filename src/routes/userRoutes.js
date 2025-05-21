import expresss from "express";
import { Router } from "express";
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} from "../controllers/userController";

router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

const router = Router();


module.exports = router;