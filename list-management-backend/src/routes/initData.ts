import express, { Request, Response } from "express";
import { db } from "../db";
import path from "path";
import fs from "fs";
import { RoomingList, Booking, RoomingListBooking } from "../types";
import { RoomingListStatus, AgreementType } from "../enums/index";

const router = express.Router();

function loadJSON<T>(filename: string): T {
  const filePath = path.join(__dirname, "../seed", filename);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

router.post("/", async (req: Request, res: Response) => {
  try {
    await db.RoomingListBooking.destroy({ where: {} });
    await db.Booking.destroy({ where: {} });
    await db.RoomingList.destroy({ where: {} });

    const roomingLists: RoomingList[] = loadJSON("roomingLists.json");
    const bookings: Booking[] = loadJSON("bookings.json");
    const roomingListBookings: RoomingListBooking[] = loadJSON(
      "roomingListBookings.json"
    );

      // The status values from the JSON are invalid, so I have to map them to valid enum values
    const statusMap: Record<string, RoomingListStatus> = {
      completed: RoomingListStatus.CLOSED,
      received: RoomingListStatus.ACTIVE,
      Confirmed: RoomingListStatus.ACTIVE,
      archived: RoomingListStatus.CANCELLED,
    };
    
    const validAgreementSet = new Set(Object.values(AgreementType));
    const validRoomingListIds = new Set<number>();

    const mappedRoomingLists = roomingLists
      .map((item) => ({
        ...item,
        status: statusMap[item.status] || item.status,
      }))
      .filter((item) => {
        const isValid = validAgreementSet.has(item.agreement_type);
        if (isValid) validRoomingListIds.add(item.roomingListId);
        return isValid;
      });

    const validBookingIds = new Set<number>();
    const filteredBookings = bookings.filter((item) => {
      validBookingIds.add(item.bookingId);
      return true;
    });

    await db.RoomingList.bulkCreate(mappedRoomingLists, {
      ignoreDuplicates: true,
    });
    await db.Booking.bulkCreate(filteredBookings, { ignoreDuplicates: true });

    const filteredRoomingListBookings = roomingListBookings.filter(
      (item) =>
        validRoomingListIds.has(item.roomingListId) &&
        validBookingIds.has(item.bookingId)
    );

    await db.RoomingListBooking.bulkCreate(filteredRoomingListBookings, {
      ignoreDuplicates: true,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to initialize data" });
  }
});

export default router;
