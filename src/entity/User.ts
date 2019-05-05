import { Community } from './Community';
import * as bcrypt from "bcryptjs";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToOne
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  firstName: string;

  @Column("varchar", { length: 255 })
  lastName: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text") password: string;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @OneToOne(() => Community, community => community.user)
  community: Community;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
