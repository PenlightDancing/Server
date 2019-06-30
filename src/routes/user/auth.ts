import { Response, Request, NextFunction } from 'express'

const auth = {
    signin: async (req: Request, res: Request, next: NextFunction) => {
        res.send('assdadasd')
    },
    signup: async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export { auth }