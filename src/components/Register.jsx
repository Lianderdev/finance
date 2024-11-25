import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { formatCurrency } from "../utils/formatCurrency"

export function Register() {
    const { value, setValue, setEntries } = useContext(AppContext)

    // pega o valor do input
    const handleValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    
    // Envia para o card determinado
    const handleAddValue = () => {
        const valueFormated = formatCurrency(value, 'BRL')
        setEntries(valueFormated)
    }

    return (
        <div className="w-full bg-red-200">
            <input type="text" value={value} onChange={handleValue} className="bg-blue-400 rounded-lg"/>
            <button className="bg-green-500" onClick={handleAddValue}>Add</button>
        </div>
    )
}