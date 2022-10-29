import express, { response, Request, request } from 'express';
import resize from '../utils/sharp';
import check from '../middlewares/validating_Input';
import fs from 'fs';
import e from 'express';
const routes = express.Router();

if (!fs.existsSync('./Thumnail')) {
  fs.mkdirSync('./Thumnail');
}

routes.get('/:height/:width/:image', (req, res) => {
  //for the first part of the validation

  if (!check.val(req, res)[0]) {
    response.send('wrong input');
  } else {
    //secound part of the validation
    if (!check.val(req, res)[1]) {
      res.sendFile(`Thumnail/${req.params.image}`, { root: './' });
    } else {
      resize(req, res);
    }
  }
});

export default routes;
