import { FC } from 'react'

import FilterAsideComponent from '../../components/FilterAsideComponent/FilterAsideComponent'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import SectionSalesBlock from '../../components/SectionSalesBlock/SectionSalesBlock'
import useAsyncEffect from '../../hooks/useAsyncEffect/useAsyncEffect'
import useStore from '../../hooks/useStore/useStore'
import styles from './MainPage.scoped.scss'

const MainPage: FC = () => {

    const { ticketsStore } = useStore();

    useAsyncEffect( async () => {
        await ticketsStore.SET_SEARCH_ID_FOR_TICKETS();
        await ticketsStore.SET_TICKETS();
    }, [])
    
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