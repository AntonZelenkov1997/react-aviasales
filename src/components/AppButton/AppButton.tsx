import { FC } from "react";
import styles from "./AppButton.scoped.scss";

type AppButtonProps = {
  title: string;
  onClick: () => void;
};

const AppButton: FC<AppButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={styles.appButton}>
      {title}
    </button>
  );
};

export default AppButton;
