import { FC } from 'react'
import FilterAsideComponent from '../../components/FilterAsideComponent/FilterAsideComponent'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import SectionSalesBlock from '../../components/SectionSalesBlock/SectionSalesBlock'
import styles from './MainPage.scoped.scss'

const MainPage: FC = () => {
    return (
        <>
            <HeaderComponent />
            <main className={styles.mainPageContainer}>
                <FilterAsideComponent />
                <SectionSalesBlock />
            </main>
        </>
    )
}

export default MainPage