import { Response, Request, NextFunction } from 'express'

interface iUser {
    name : String,
    id:  String,
    token: String,
    passwd: String,
}
const auth = {
    signin: async (req: Request, res: Request, next: NextFunction) => {
        let newUser: iUser = req.body
    },
    signup: async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export { auth }