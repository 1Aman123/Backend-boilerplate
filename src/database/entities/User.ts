import { Entity, PrimaryColumn, Column, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import UserRole from "./UserRole";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

@Entity("User")
export class User extends BaseEntity {
    @PrimaryColumn({ type: 'varchar', length: 64 })
    public id: string;

  @Column({
    type: "varchar",
    length: 150,
    unique: true,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  firstName: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  lastName: string;

  @Column({
    type: "enum",
    enum: Gender,
  })
  gender: Gender;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
   roles: UserRole[];

   @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

}

export default User;
