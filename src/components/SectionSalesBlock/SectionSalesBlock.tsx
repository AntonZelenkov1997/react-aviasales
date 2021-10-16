import { FC } from "react";
import { observer } from "mobx-react-lite";

import useStore from "../../hooks/useStore/useStore";
import AppButton from "../AppButton/AppButton";
import TicketsContainer from "../TicketsContainer/TicketsContainer";
import TopFilterPanel from "../TopFilterPanel/TopFilterPanel";
import styles from "./SectionSalesBlock.scoped.scss";
import EmptyTicketsContainer from "../EmptyTicketsContainer/EmptyTicketsContainer";

const SectionSalesBlock: FC = () => {
  const { ticketsStore } = useStore();

  const buttonOnClick = async () => {
    await ticketsStore.SET_TICKETS();
  };

  return (
    <section className={styles.sectionSalesBlockContainer}>
      <TopFilterPanel />

      {ticketsStore.GET_TICKETS_IS_EMPTY && <EmptyTicketsContainer />}
      {!ticketsStore.GET_TICKETS_IS_EMPTY && <TicketsContainer />}

      {!ticketsStore.GET_SEARCH_IS_COMPLETED && (
        <div className={styles.buttonWrapper}>
          <AppButton title="Показать ещё билеты!" onClick={buttonOnClick} />
        </div>
      )}
    </section>
  );
};

export default observer(SectionSalesBlock);
