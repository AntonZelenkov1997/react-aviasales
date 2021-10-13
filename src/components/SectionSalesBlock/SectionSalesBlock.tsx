import { FC } from "react";
import {observer} from 'mobx-react-lite';

import useStore from "../../hooks/useStore/useStore";

import AppButton from "../AppButton/AppButton";
import TicketsContainer from "../TicketsContainer/TicketsContainer";
import TopFilterPanel from "../TopFilterPanel/TopFilterPanel";
import styles from "./SectionSalesBlock.scoped.scss";

const SectionSalesBlock: FC = () => {
  const { ticketsStore } = useStore();

  const buttonOnClick = () => {
    console.log(ticketsStore.GET_TICKETS);
     
  };

  return (
    <section className={styles.sectionSalesBlockContainer}>
      <TopFilterPanel />
      <TicketsContainer />
      <div className={styles.buttonWrapper}>
        <AppButton title="Показать еще 5 билетов!" onClick={buttonOnClick} />
      </div>
    </section>
  );
};

export default observer(SectionSalesBlock);
