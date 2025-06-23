const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

export async function seedDatabase() {
  const response = await fetch(`${API_URL}/init-data`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Error initializing the database");
  return response.json();
}

export async function getRoomingLists() {
  const response = await fetch(`${API_URL}/rooming-lists`);
  if (!response.ok) throw new Error("Error fetching rooming lists");
  return response.json();
}

export async function getRoomingListBookings(roomingListId: string | number) {
  const response = await fetch(
    `${API_URL}/rooming-lists/${roomingListId}/bookings`
  );
  if (!response.ok)
    throw new Error("Error fetching bookings for the rooming list");
  return response.json();
}
