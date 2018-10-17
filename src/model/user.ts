import { Table, Column, Model, HasMany, AutoIncrement, PrimaryKey, CreatedAt,
UpdatedAt,Default,HasOne,ForeignKey,BelongsTo,
DeletedAt, } from 'sequelize-typescript';


@Table({ tableName: "user",timestamps:true })

export class User extends Model<User> {

  @PrimaryKey
  @AutoIncrement
  @Column
  userid: number;
  
  @Column
  name: string; 

  @Column
  email: string;

  @Column
  mobile: string;

    @CreatedAt
  CRT_TS: Date;

  @UpdatedAt
  MOD_TS: Date;


  @DeletedAt
  IS_DEL: Date;

  @Default(true)
  @Column
  IS_ACTV: boolean;

 


  @Column
  get CRT_BY(): string {
     return this.getDataValue("CRT_BY");
   }
  set CRT_BY(value: string) {
     this.setDataValue('CRT_BY', value);
   }

  @Column
  get MOD_BY(): string {
     return this.getDataValue("MOD_BY");
   }
  set MOD_BY(value: string) {
     this.setDataValue('MOD_BY', value);
   }
}

