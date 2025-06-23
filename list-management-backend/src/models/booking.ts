import { DataTypes, Model, Sequelize, Optional } from "sequelize";

export interface BookingAttributes {
  bookingId: number;
  hotelId: number;
  eventId: number;
  guestName: string;
  guestPhoneNumber: string;
  checkInDate: string;
  checkOutDate: string;
}

export interface BookingCreationAttributes extends Optional<BookingAttributes, "bookingId"> {}

export class Booking extends Model<BookingAttributes, BookingCreationAttributes> implements BookingAttributes {
  public bookingId!: number;
  public hotelId!: number;
  public eventId!: number;
  public guestName!: string;
  public guestPhoneNumber!: string;
  public checkInDate!: string;
  public checkOutDate!: string;
}

export default function (sequelize: Sequelize) {
  Booking.init(
    {
      bookingId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      guestName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guestPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      checkInDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      checkOutDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: "bookings",
      sequelize,
      timestamps: false,
    }
  );
  return Booking;
}