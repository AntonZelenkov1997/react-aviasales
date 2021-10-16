import { observer } from "mobx-react-lite";
import { FC } from "react";
import useStore from "../../hooks/useStore/useStore";
import cs from "../../utils/composeStyles";
import styles from "./FilterButton.scoped.scss";

type FilterButtonProps = {
  title: string;
  isSelected: boolean;
  id: string;
};

const FilterButton: FC<FilterButtonProps> = ({ title, isSelected, id }) => {
  const { tabsFilterStore } = useStore();

  const composedContainerStyle = () =>
    cs(
      styles.topFilterPanelButton,
      isSelected ? styles.topFilterPanelButton_active : ""
    );

  const handlerClickTopButton = () => {
    tabsFilterStore.SET_SELECTED_TAB(id);
  };

  return (
    <div onClick={handlerClickTopButton} className={composedContainerStyle()}>
      <span className={styles.topFilterPanelButtonTitle}>{title}</span>
    </div>
  );
};

export default observer(FilterButton);
