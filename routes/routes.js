import express from "express";
import{
    getAccount,
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount
} from "../controllers/Account.js";

const router = express.Router();

router.get('/accounts', getAccount);
router.get('/accounts/:id', getAccountById);
router.post('/account', createAccount);
router.put('/account/:id', updateAccount);
router.delete('/account', deleteAccount);

export default router;