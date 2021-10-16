import { FC } from "react";
import styles from "./Ticket.scoped.scss";

import useSegment from "../../hooks/useSegment/useSegment";


type TicketProps = {
  ticket: Ticket
}

const Ticket: FC<TicketProps> = ({ ticket }) => {

  const { carrier, price, segments } = ticket;

  const [ firstSegment, secondSegment ] = segments;

  const firstSegmentData = useSegment(firstSegment);
  const secondSegmentData = useSegment(secondSegment);

  return (
    <article className={styles.ticketCard}>
      <div className={styles.ticketHeader}>
        <strong className={styles.ticketPrice}>{price.toLocaleString()} Р</strong>
        <div className={styles.ticketSponsorLogoWrapper}>
          <img
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            alt="Not Found"
            className={styles.ticketSponsorLogo}
          />
        </div>
      </div>

      <div className={styles.ticketShedule}>
        <div className={styles.ticketSheduleRow}>
          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>{firstSegmentData.origin} – {firstSegmentData.destination}</p>
            <time className={styles.ticketSheduleColumnBottom}>
              {firstSegmentData.startTime} – {firstSegmentData.endTime}
            </time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>В пути</p>
            <time className={styles.ticketSheduleColumnBottom}>{firstSegmentData.parsedDuration}</time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>{firstSegmentData.countOfStops}</p>
            <time className={styles.ticketSheduleColumnBottom}>{firstSegmentData.stops}</time>
          </div>
        </div>

        <div className={styles.ticketSheduleRow}>
          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>{secondSegmentData.origin} – {secondSegmentData.destination}</p>
            <time className={styles.ticketSheduleColumnBottom}>
            {secondSegmentData.startTime} – {secondSegmentData.endTime}
            </time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>В пути</p>
            <time className={styles.ticketSheduleColumnBottom}>{secondSegmentData.parsedDuration}</time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>{secondSegmentData.countOfStops}</p>
            <time className={styles.ticketSheduleColumnBottom}>{secondSegmentData.stops}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Ticket;
