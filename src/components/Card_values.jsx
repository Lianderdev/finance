import { formatCurrency } from "../utils/formatCurrency";

export function Card_Values({ title, value, icon }) {
    return (
        <li className="min-w-52 flex flex-col gap-4 flex-1 bg-blue-300 p-4 rounded-xl">
            <div className="flex justify-between">
                <h2>{title}</h2>
                <i>{icon}</i>
            </div>
            {formatCurrency(value, 'BRL')}
        </li>
    )
}