import { FC, useState } from "react";
import filterPanel from "../../mock/filterPanel";
import FilterButton from "../FilterButton/FilterButton";
import styles from "./TopFilterPanel.scoped.scss";

type filterStatusType = {};

const TopFilterPanel: FC = () => {
  const [filterStatus, setFilterStatus] = useState(filterPanel);

  return (
    <div className={styles.topFilterPanelContainer}>
      {filterStatus.map((item) => (
        <FilterButton key={item.id} title={item.title} isSelected={item.isSelected} />
      ))}
    </div>
  );
};

export default TopFilterPanel;
