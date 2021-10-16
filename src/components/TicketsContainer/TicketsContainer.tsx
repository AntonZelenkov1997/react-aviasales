import { observer } from "mobx-react-lite";
import { FC } from "react";
import useSelectedAsideFilter from "../../hooks/useSelectedAsideFilter/useSelectedAsideFilter";

import useSelectedFilterTab from "../../hooks/useSelectedFilterTab/useSelectedFilterTab";
import Ticket from "../Ticket/Ticket";
import styles from "./TicketsContainer.scoped.scss";

const TicketsContainer: FC = () => {
  const ticketsFilter = useSelectedFilterTab();
  const asideFilters = useSelectedAsideFilter(ticketsFilter);

  const asideFiltersIsEmpty = asideFilters.length === 0;

  return (
    <div className={styles.ticketsContainer}>
      {asideFilters.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}

      {asideFiltersIsEmpty && (
        <div className={styles.asideFiltersIsEmpty}>
          <span className={styles.asideFiltersIsEmptyText}>Не найдено билетов по заданным фильтрам</span>
        </div>
      )}
    </div>
  );
};

export default observer(TicketsContainer);
