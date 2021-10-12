import { FC } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import styles from "./FilterAsideComponent.scoped.scss";

const FilterAsideComponent: FC = () => {
  return (
    <aside className={styles.filterAsideComponentContainer}>
      <div className={styles.filterAsideComponentHeaderWrapper}>
        <h1 className={styles.filterAsideComponentHeader}>
          Количество пересадок
        </h1>
      </div>
      <ul className={styles.filtersBlock}>
        <FilterCheckbox title="Все" />
        <FilterCheckbox title="Без пересадок" />
        <FilterCheckbox title="1 пересадка" />
        <FilterCheckbox title="2 пересадки" />
        <FilterCheckbox title="3 пересадки" />
      </ul>
    </aside>
  );
};

export default FilterAsideComponent;
