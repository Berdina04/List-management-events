import React, { useMemo } from "react";
import Card from "../Card";
import { useAppContext } from "../../context/AppContext";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./index.scss";

const EventList: React.FC = () => {
  const { roomingList, search } = useAppContext();

  const filteredList = useMemo(() => {
    if (!search) return roomingList;
    return roomingList
      .map((event) => {
        // Filtrar los roomingLists que coinciden
        const filteredRoomingLists = event.roomingLists.filter(
          (rl) =>
            rl.rfpName.toLowerCase().includes(search.toLowerCase()) ||
            rl.agreement_type.toLowerCase().includes(search.toLowerCase())
        );
        // Solo incluir el evento si hay roomingLists que coinciden
        if (filteredRoomingLists.length > 0) {
          return { ...event, roomingLists: filteredRoomingLists };
        }
        return null;
      })
      .filter(Boolean);
  }, [roomingList, search]);

  return (
    <div className="EventList">
      {filteredList.length > 0 ? (
        filteredList.map((event) => (
          <div className="event-container" key={event?.eventId}>
            <div className="event-separator">
              <div className="event-line left"></div>
              <div className="event-name">
                <span className="event-name-span">{event?.eventName}</span>
              </div>
              <div className="event-line right" />
            </div>
            <div className="event-rooming-list">
              {event && event.roomingLists?.length > 3 ? (
                <ScrollMenu>
                  {event.roomingLists.map((rooming, cardIdx) => (
                    <Card
                      card={{
                        rfpName: rooming.rfpName,
                        agreement: rooming.agreement_type,
                        cutOffDate: rooming.cutOffDate,
                      }}
                      key={cardIdx}
                      itemId={String(cardIdx)}
                    />
                  ))}
                </ScrollMenu>
              ) : (
                event?.roomingLists.map((rooming, cardIdx) => (
                  <Card
                    card={{
                      rfpName: rooming.rfpName,
                      agreement: rooming.agreement_type,
                      cutOffDate: rooming.cutOffDate,
                    }}
                    key={cardIdx}
                    itemId={String(cardIdx)}
                  />
                ))
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="no-event-message">No events to display</div>
      )}
    </div>
  );
};

export default EventList;
