import { FC } from "react";
import TopFilterPanel from "../TopFilterPanel/TopFilterPanel";
import styles from './SectionSalesBlock.scoped.scss'

const SectionSalesBlock: FC = () => {
    return (
        <section className={styles.sectionSalesBlockContainer}>
            <TopFilterPanel />
        </section>
    )
}

export default SectionSalesBlock;