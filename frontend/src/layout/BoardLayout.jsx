import { Outlet } from 'react-router-dom'
import {Logo,SearchForm,Footer,BoardList} from "../components/temp.jsx";

export default function BoardLayout() {
  return (
    <div>
      <Logo />
      <SearchForm/>
      <BoardList/>
      <Footer />
    </div>
  )
}