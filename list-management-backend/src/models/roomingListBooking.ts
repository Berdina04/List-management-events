import { DataTypes, Model, Sequelize } from "sequelize";

export interface RoomingListBookingAttributes {
  roomingListId: number;
  bookingId: number;
}

export class RoomingListBooking
  extends Model<RoomingListBookingAttributes>
  implements RoomingListBookingAttributes
{
  public roomingListId!: number;
  public bookingId!: number;
}

export default function (sequelize: Sequelize) {
  RoomingListBooking.init(
    {
      roomingListId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      bookingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "rooming_list_bookings",
      sequelize,
      timestamps: false,
    }
  );
  return RoomingListBooking;
}
