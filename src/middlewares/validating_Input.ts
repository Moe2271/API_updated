import express, { Request, Response } from 'express';
import fs from 'fs';
import gm from 'gm';
import app from '../Main';

function val(req: Request, res: Response): boolean[] {
  const height: number = parseInt(req.params.height);
  const width: number = parseInt(req.params.width);
  const img: string = req.params.image;
  var check2: boolean = true;
  var check: boolean = true;
  var arrchecked = [];

  //---------------------------------------------------------------------
  if (width <= 0) {
    res.send('width should be more 0');
    check = false;
  }
  if (height <= 0) {
    res.send('height sjould be more 0');
    check = false;
  }
  if (!fs.existsSync(`./images/${img}`)) {
    res.send('Directory not found.');
    check = false;
  }
  //-------------------------------------------------------------------

  if (fs.existsSync(`./Thumnail/${img}`)) {
    // obtain the size of an image
    const size = gm(`./Thumnail/${img}`).size(function (err, size) {
      if (!err) {
        if (size.width == width && size.height == height) {
          console.log('the image already exists in Thumnail');
          check2 = true;
        }
        check2 = false;
      }
    });
  }
  arrchecked.push(check);
  arrchecked.push(check2);
  return arrchecked;
}

export default {
  val,
};
