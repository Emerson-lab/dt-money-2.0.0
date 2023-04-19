import { MagnifyingGlass } from "phosphor-react";
import { SeacrhFormContiner } from "./styles";

export function SearchForm() {
  return (
    <SeacrhFormContiner>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SeacrhFormContiner>
  )
} 