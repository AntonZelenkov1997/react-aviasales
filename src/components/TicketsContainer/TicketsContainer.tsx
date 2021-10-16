import { observer } from "mobx-react-lite";
import { FC } from "react";
import useSelectedAsideFilter from "../../hooks/useSelectedAsideFilter/useSelectedAsideFilter";

import useSelectedFilterTab from "../../hooks/useSelectedFilterTab/useSelectedFilterTab";
import Ticket from "../Ticket/Ticket";
import styles from "./TicketsContainer.scoped.scss";

const TicketsContainer: FC = () => {
  const ticketsFilter = useSelectedFilterTab();
  const asideFilters = useSelectedAsideFilter(ticketsFilter);
  
  return (
    <div className={styles.ticketsContainer}>
      {asideFilters.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
};

export default observer(TicketsContainer);
