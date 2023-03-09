import { Request, Response } from "express";
import datasource from "../../database/dataSource";
import User, { Gender } from '../../database/entities/User'
import { v4 as uuid } from 'uuid';
import UserRole, { Role } from "../../database/entities/UserRole";

export interface IAddUser {
    firstName: string
    lastName: string
    email: string
    gender: Gender
}

class UserController {
    // constructor(parameters) {
        
        // }
        
    createBlog = async (data: object): Promise<any | null> => {
        const result = await User.insert(data);
    
        if (!result) {
          return null;
        }
        return result;
      };

      /**
       * registerUser
       */
      public registerUser = async (req:Request,res:Response) => {
        res.send("User register successfully")
      }
    
    /**
     * addUser
     */
    public addUser = async (req:Request,res:Response) => {
       
        const data:IAddUser = req.body;
        const user = new User()
        user.id = uuid()
        user.firstName = data.firstName
        user.lastName = data.lastName
        user.email = data.email
        user.gender = data.gender

        const userRole = new UserRole() 
        userRole.id = uuid()
        userRole.role = Role.ADMIN
        userRole.user = user
        // const resp = await User.insert(data);
        const resp = await datasource.getRepository(User).save(user);
        const resrole = await datasource.getRepository(UserRole).save(userRole);
        console.log('/---------user--------/',resp,'/----------');
        console.log('/--------role---------/',resrole,'/----------');
        
        res.json(resp);

    }
}
export default UserController