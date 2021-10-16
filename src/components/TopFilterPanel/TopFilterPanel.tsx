import { observer } from "mobx-react-lite";
import { FC } from "react";
import useStore from "../../hooks/useStore/useStore";
import FilterButton from "../FilterButton/FilterButton";
import styles from "./TopFilterPanel.scoped.scss";

const TopFilterPanel: FC = () => {
  const { tabsFilterStore } = useStore();

  return (
    <div className={styles.topFilterPanelContainer}>
      {tabsFilterStore.GET_FILTER_TABS.map((item) => (
        <FilterButton key={item.id} title={item.title} isSelected={item.isSelected} id={item.id} />
      ))}
    </div>
  );
};

export default observer(TopFilterPanel);
