import express, { Request, Response } from "express";
import { db } from "../db";
import { RoomingList, Booking } from "../types";

const router = express.Router();

type GroupedRoomingLists = {
  eventId: number;
  eventName: string;
  roomingLists: Omit<RoomingList, "eventId" | "eventName">[];
};

type RoomingListWithBookings = RoomingList & { bookings: Booking[] };

// GET /api/rooming-lists
router.get("/", async (req: Request, res: Response) => {
  try {
    const lists = await db.RoomingList.findAll();

    // Agrupar por eventId
    const grouped: Record<number, GroupedRoomingLists> = {};
    for (const rl of lists) {
      if (!grouped[rl.eventId]) {
        grouped[rl.eventId] = {
          eventId: rl.eventId,
          eventName: rl.eventName,
          roomingLists: [],
        };
      }
      const { eventId, eventName, ...rest } = rl.toJSON();
      grouped[rl.eventId].roomingLists.push(rest);
    }

    res.status(200).json(Object.values(grouped));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error getting the rooming list" });
  }
});

// GET /api/rooming-lists/:id/bookings
router.get("/:id/bookings", async (req: Request, res: Response) => {
  try {
    const roomingList = await db.RoomingList.findByPk(req.params.id, {
      include: {
        model: db.Booking,
        as: "Bookings",
        through: { attributes: [] },
      },
    });
    res
      .status(200)
      .json((roomingList as unknown as RoomingListWithBookings).bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error getting bookings for rooming list" });
  }
});

export default router;
