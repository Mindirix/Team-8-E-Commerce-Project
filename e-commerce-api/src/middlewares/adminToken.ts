import {Request ,Response, NextFunction} from 'express'

const adminToken = (req: Request, res: Response, next:NextFunction) => {
    try {
        if (!req.body.isAdmin) {
            return res.status(401).send("You Are Not User Admin")
        }
        next()
    } catch (err) {
        res.status(401)
        res.json( `could not access,  your token is invalid . Error${err}`)
    }
}

export default adminToken;