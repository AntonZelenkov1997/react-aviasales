import { FC } from "react";
import styles from "./Ticket.scoped.scss";

import S7_logo from "../../assets/images/S7_Logo.png";

const Ticket: FC = () => {
  return (
    <article className={styles.ticketCard}>
      <div className={styles.ticketHeader}>
        <strong className={styles.ticketPrice}>13 400 Р</strong>
        <div className={styles.ticketSponsorLogoWrapper}>
          <img
            src={S7_logo}
            alt="Not Found"
            className={styles.ticketSponsorLogo}
          />
        </div>
      </div>

      <div className={styles.ticketShedule}>
        <div className={styles.ticketSheduleRow}>
          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>MOW – HKT</p>
            <time className={styles.ticketSheduleColumnBottom}>
              10:45 – 08:00
            </time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>В пути</p>
            <time className={styles.ticketSheduleColumnBottom}>21ч 15м</time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>2 пересадки</p>
            <time className={styles.ticketSheduleColumnBottom}>HKG, JNB</time>
          </div>
        </div>

        <div className={styles.ticketSheduleRow}>
          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>MOW – HKT</p>
            <time className={styles.ticketSheduleColumnBottom}>
            11:20 – 00:50
            </time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>В пути</p>
            <time className={styles.ticketSheduleColumnBottom}>13ч 30м</time>
          </div>

          <div className={styles.ticketSheduleColumn}>
            <p className={styles.ticketSheduleColumnTop}>1 пересадка</p>
            <time className={styles.ticketSheduleColumnBottom}>HKG</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Ticket;
