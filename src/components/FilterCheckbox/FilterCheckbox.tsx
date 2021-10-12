import { FC, useState } from "react";
import styles from "./FilterCheckbox.scoped.scss";

type FilterCheckboxProps = {
  title: string;
};

const FilterCheckbox: FC<FilterCheckboxProps> = ({ title }) => {
  const [statusCheckbox, setStatusCheckbox] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setStatusCheckbox((prev) => !prev);
  };

  return (
    <li className={styles.filterItem} onClick={toggleCheckbox}>
      <label
        className={styles.containerCheckbox}
        onClick={(e) => e.preventDefault()}
      >
        <input type="checkbox" checked={statusCheckbox} readOnly />
        <span className={styles.checkmark} />
        { title }
      </label>
    </li>
  );
};

export default FilterCheckbox;
