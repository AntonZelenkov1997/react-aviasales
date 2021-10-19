import { observer } from "mobx-react-lite";
import { FC } from "react";
import useStore from "../../hooks/useStore/useStore";
import { asideStopsFiltersType } from "../../types/asideStopsFilter";
import styles from "./FilterCheckbox.scoped.scss";

type FilterCheckboxProps = {
  asideFilter: asideStopsFiltersType;
};

const FilterCheckbox: FC<FilterCheckboxProps> = ({ asideFilter }) => {
  const { asideStopsFilterStore } = useStore();

  const { title, isSelected, id } = asideFilter;

  const toggleCheckbox = () => {
    asideStopsFilterStore.SET_TOGGLE_ASIDE_STOPS_FILTER(id);
  };

  return (
    <li className={styles.filterItem} onClick={toggleCheckbox}>
      <label
        className={styles.containerCheckbox}
        onClick={(e) => e.preventDefault()}
      >
        <input type="checkbox" checked={isSelected} readOnly />
        <span className={styles.checkmark} />
        {title}
      </label>
    </li>
  );
};

export default observer(FilterCheckbox);
