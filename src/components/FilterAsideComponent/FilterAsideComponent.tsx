import { observer } from "mobx-react-lite";
import { FC } from "react";
import useStore from "../../hooks/useStore/useStore";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import styles from "./FilterAsideComponent.scoped.scss";

const FilterAsideComponent: FC = () => {

  const { asideStopsFilterStore } = useStore();

  return (
    <aside className={styles.filterAsideComponentContainer}>
      <div className={styles.filterAsideComponentHeaderWrapper}>
        <h1 className={styles.filterAsideComponentHeader}>
          Количество пересадок
        </h1>
      </div>
      <ul className={styles.filtersBlock}>
        {asideStopsFilterStore.GET_ASIDE_STOPS_FILTERS.map((asideFilter) => <FilterCheckbox key={asideFilter.id} asideFilter={asideFilter} />)}
      </ul>
    </aside>
  );
};

export default observer(FilterAsideComponent);
