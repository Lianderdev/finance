import { Card_Values } from "./Card_values";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

import { FiTrendingUp, FiTrendingDown, FiArchive } from "react-icons/fi";

export function Header() {
    const { entries, expenses, total } = useContext(AppContext)

    return (
        <header className="flex flex-col gap-4 mt-4">
            <h1 className="text-3xl font-bold">Finances</h1>

            <ul className="w-full flex flex-wrap gap-4">
               <Card_Values title='Entradas' value={entries} icon={<FiTrendingUp />}/>
               <Card_Values title='Saídas' value={expenses} icon={<FiTrendingDown />}/>
               <Card_Values title='total' value={total} icon={<FiArchive />}/>
            </ul>

        </header>
    )
}