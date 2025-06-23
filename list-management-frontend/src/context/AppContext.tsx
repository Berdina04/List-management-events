import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getRoomingLists,
  getRoomingListBookings,
  seedDatabase,
} from "../endpoints/index";
import { RoomingListResponse, Booking } from "../types/index";

type AppContextType = {
  roomingList: RoomingListResponse[];
  bookings: Booking[];
  selectedListId: number;
  search: string;
  setRoomingLists: React.Dispatch<React.SetStateAction<RoomingListResponse[]>>;
  refreshRoomingLists: () => Promise<void>;
  refreshBookings: () => Promise<void>;
  selectList: (id: number) => void;
  seed: () => Promise<void>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [roomingList, setRoomingLists] = useState<RoomingListResponse[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedListId, setSelectedListId] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const refreshRoomingLists = async () => {
    const lists = await getRoomingLists();
    setRoomingLists(lists);
    localStorage.setItem("roomingList", JSON.stringify(lists));
  };

  const refreshBookings = async () => {
    if (selectedListId) {
      const data = await getRoomingListBookings(selectedListId);
      setBookings(data);
    } else {
      setBookings([]);
    }
  };

  const selectList = (id: number) => {
    setSelectedListId(id);
  };

  const seed = async () => {
    await seedDatabase();
    const list = await getRoomingLists();
    setRoomingLists(list);
    setBookings([]);
    setSelectedListId(0);
  };

  useEffect(() => {
    const stored = localStorage.getItem("roomingList");
    if (stored) {
      setRoomingLists(JSON.parse(stored));
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        roomingList,
        bookings,
        selectedListId,
        search,
        setRoomingLists,
        refreshRoomingLists,
        refreshBookings,
        selectList,
        seed,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
};
