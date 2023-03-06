import { Request, Response, Application } from "express";
import UserController from "../controllers/userController/UserController";

const user = new UserController()
class Routes {
    /**
     * @author Aman kumar Choudhary
     */
    public router = (app: Application) => {
        app.get('/prashant', (req: Request,res: Response) => {
            res.send("yes")
        })
        app.post('/addUser', user.addUser)
    }
}

export const route = new Routes().router;