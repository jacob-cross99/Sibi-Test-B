import { Router } from 'express';

import db from '../../../database';

const router = Router();
const { Contact } = db;

router.route('/')
  .post((req, res) => {
    const { first_name, last_name, email, company, message } = req.body;

    if(!first_name || !last_name || !email || !message) return res.json({ error: 1, message: 'Please fill out all required fields' });

    Contact.create({
      first_name,
      last_name,
      email,
      company,
      message
    }).then(contact => {
      res.json({});
    }).catch(err => {
      res.json({ error: 1, message: 'An error has occured within the database, please try again later or contact support' });
    });
  });

export default router;