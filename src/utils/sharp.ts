import express, { Request, Response } from 'express';
import sharp from 'sharp';

function resize(req: Request, res: Response) {
  const height1: number = parseInt(req.params.height);
  const width1: number = parseInt(req.params.width);
  const img: string = req.params.image;

  sharp(`./images/${img}`)
    .resize({ width: width1 })
    .resize({ height: height1 })
    .toFile(`./Thumnail/${img}`)
    .then((data) => {
      res.sendFile(`Thumnail/${img}`, { root: './' });
    })
    .catch((err) => {
      console.log(err);
    });
}

export default resize;
