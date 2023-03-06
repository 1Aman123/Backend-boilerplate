import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

@Entity("UserRole")
class UserRole extends BaseEntity {
  @PrimaryColumn({ type: "varchar", length: 64 })
  public id: string;

  @ManyToOne(() => User, (user) => user.roles, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "userId" })
  public user: User;

  @Column({ type: "enum", enum: Role })
  public role: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}

export default UserRole;
