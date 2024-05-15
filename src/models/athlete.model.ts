import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "Athletes",
})
export class Athlete extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    autoIncrement: false,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    field: "ID"
  })
  ID!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "name"
  })
  name!: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    field: "birthdate"
  })
  birthdate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "iwfCoiCode"
  })
  iwfCoiCode!: string;

}
