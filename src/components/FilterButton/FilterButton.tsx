import { FC } from "react";
import cs from "../../utils/composeStyles";
import styles from "./FilterButton.scoped.scss";

type FilterButtonProps = {
  title: string;
  isSelected: boolean;
};

const FilterButton: FC<FilterButtonProps> = ({ title, isSelected }) => {
  const composedContainerStyle = () =>
    cs(
      styles.topFilterPanelButton,
      isSelected ? styles.topFilterPanelButton_active : ""
    );

  return (
    <div className={composedContainerStyle()}>
      <span className={styles.topFilterPanelButtonTitle}>{title}</span>
    </div>
  );
};

export default FilterButton;
