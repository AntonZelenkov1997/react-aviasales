import { FC } from "react";

import styles from './EmptyTicketsContainer.scoped.scss'

const EmptyTicketsContainer: FC = () => {
    return (
        <div className={styles.emptyTicketsContainer}>
            <span className={styles.emptyTicketsContainerText}>Билетов не найдено :'(</span>
        </div>
    )
}

export default EmptyTicketsContainer