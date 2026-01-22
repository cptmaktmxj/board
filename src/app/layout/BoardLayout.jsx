import { Outlet } from 'react-router-dom'
import Temp from "../../components/temp.jsx";

export default function BoardLayout() {
  return (
    <div>
      <Logo />
      <SearchForm/>
      <nav>
        <Link to="/boards/:board_id">BoardList</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}