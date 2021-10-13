import { useContext } from "react";
import store from "../../store";

const useStore = () => useContext(store)

export default useStore