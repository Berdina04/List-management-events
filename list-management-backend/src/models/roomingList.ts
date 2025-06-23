import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import {RoomingListStatus, AgreementType} from "../enums/index"
import { RoomingList as RoomingListAttributes } from "../types/index";


export interface RoomingListCreationAttributes extends Optional<RoomingListAttributes, "roomingListId"> {}

export class RoomingList extends Model<RoomingListAttributes, RoomingListCreationAttributes>
  implements RoomingListAttributes {
  public roomingListId!: number;
  public eventId!: number;
  public eventName!: string;
  public hotelId!: number;
  public rfpName!: string;
  public cutOffDate!: string;
  public status!: RoomingListStatus;
  public agreement_type!: AgreementType;
}

export default function (sequelize: Sequelize) {
  RoomingList.init(
    {
      roomingListId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rfpName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cutOffDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(RoomingListStatus)),
        allowNull: false,
      },
      agreement_type: {
        type: DataTypes.ENUM(...Object.values(AgreementType)),
        allowNull: false,
      },
    },
    {
      tableName: "rooming_lists",
      sequelize,
      timestamps: false,
    }
  );
  return RoomingList;
}