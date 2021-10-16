import { useEffect } from "react"

type useAsyncEffectType = (callback: () => Promise<void>, arrayOfDeps: Array<any>) => void

const useAsyncEffect: useAsyncEffectType = async (callback, arrayOfDeps) => {
    useEffect(() => {
        callback()
    }, arrayOfDeps)
}

export default useAsyncEffect;