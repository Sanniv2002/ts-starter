"use strict";
import { Response, Request, NextFunction } from "express";

export const health = (_: Request, res: Response) => {
    res.json({
        message: 'Server is healthy'
    })
}