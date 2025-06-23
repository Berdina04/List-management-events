import React from "react";
import "./index.scss";
import bookEventIco from "../../assets/book-event-ico.svg";
import calendarEventIco from "../../assets/calendar-ico.jpg";

type CardProps = {
  card: {
    rfpName: string;
    agreement: string;
    cutOffDate: string;
  };
  itemId: string;
};

export const Card: React.FC<CardProps> = ({ card }) => {
  const { rfpName, agreement, cutOffDate } = card;

  const [cutOffYear, cutOffMonth, cutOffDay] = cutOffDate.split("-");

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-text-section">
          <div className="card-rfp-name">{rfpName}</div>
          <div className="card-agreement">
            Agreement: <span className="card-agreement-value">{agreement}</span>
          </div>
        </div>
        <div className="card-cutoff">
          <div className="card-cutoff-box">
            <div className="card-cutoff-month">{cutOffMonth}</div>
            <div className="card-cutoff-day">{cutOffDay}</div>
          </div>
          <div className="card-cutoff-label">Cut-Off Date</div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-dates">
          <div className="card-date">
            <img
              src={calendarEventIco}
              alt="card calendar ico"
              className="card-calendar-icon"
            />
            <span className="card-dates-info">{1}</span>
          </div>
        </div>
        <div className="card-buttons">
          <button className="card-button card-button-primary">
            View Bookings
          </button>
          <button className="card-button card-button-icon">
            <img
              src={bookEventIco}
              alt="card book icon"
              className="card-book-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
