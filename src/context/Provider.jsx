import { useState } from "react";
import { AppContext } from "./AppContext";

export function Provider({children}) {
    const [entries, setEntries] = useState(10)
    const [expenses, setExpenses] = useState(100)
    const [total, setTotal] = useState(0)
    const [value, setValue] = useState('')

    return (
        <AppContext.Provider value={{ entries, setEntries, expenses, setExpenses, total, setTotal, value, setValue }}>
            {children}
        </AppContext.Provider>
    )
}