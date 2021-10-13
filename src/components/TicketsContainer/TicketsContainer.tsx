import { FC } from "react"
import Ticket from "../Ticket/Ticket";
import styles from './TicketsContainer.scoped.scss';

const TicketsContainer: FC = () => {
    return (
        <div className={styles.ticketsContainer}>
            <Ticket />
            <Ticket />
        </div>
    )
}

export default TicketsContainer