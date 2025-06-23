import { RoomingListStatus, AgreementType } from "../enums/index";

export type RoomingList = {
  roomingListId: number;
  eventId: number;
  eventName: string;
  hotelId: number;
  rfpName: string;
  cutOffDate: string;
  status: RoomingListStatus;
  agreement_type: AgreementType;
};

export type Booking = {
  bookingId: number;
  hotelId: number;
  eventId: number;
  guestName: string;
  guestPhoneNumber: string;
  checkInDate: string;
  checkOutDate: string;
};

export type RoomingListBooking = {
  roomingListId: number;
  bookingId: number;
};