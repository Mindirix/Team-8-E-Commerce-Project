import { config } from '../config'
import {Request ,Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

const userToken = (req: Request, res: Response, next:NextFunction) => {
    try {
        const authorizationHeader:string|undefined = req.headers.authorization!
        const token: string = authorizationHeader.split(' ')[1] 
            verify(<string>token, <string>config.tokenSecret)
        next()
    } catch (err) {
        res.status(401)
        res.json( `could not access,  your token is invalid . Error${err}`)
    }
}

export default userToken;

