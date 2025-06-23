import { Sequelize } from "sequelize";
import RoomingListFactory, { RoomingList } from "./roomingList";
import BookingFactory, { Booking } from "./booking";
import RoomingListBookingFactory, { RoomingListBooking } from "./roomingListBooking";

export function initModels(sequelize: Sequelize) {
  const RoomingListModel = RoomingListFactory(sequelize);
  const BookingModel = BookingFactory(sequelize);
  const RoomingListBookingModel = RoomingListBookingFactory(sequelize);

  // Associations
  RoomingListModel.belongsToMany(BookingModel, {
    through: RoomingListBookingModel,
    foreignKey: "roomingListId",
    otherKey: "bookingId",
  });
  BookingModel.belongsToMany(RoomingListModel, {
    through: RoomingListBookingModel,
    foreignKey: "bookingId",
    otherKey: "roomingListId",
  });

  return {
    RoomingList: RoomingListModel,
    Booking: BookingModel,
    RoomingListBooking: RoomingListBookingModel,
  };
}

export { RoomingList, Booking, RoomingListBooking };