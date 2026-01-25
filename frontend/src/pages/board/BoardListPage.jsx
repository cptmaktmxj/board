import { useNavigate } from "react-router-dom";
import BoardLayout from "../../layout/BoardLayout.jsx";

export default function BoardListPage(){
    /*현재 선택된 tag랑 board도 상태로 추가, 또는 data로 분리하는것도 고려*/
    const tags=[]
    const boards=[contentbox,qna,info,free,noti]
    const navigate=useNavigate()

    function handleSearch(){
        navigate("/boards/:board_id/search")
    }

    return (
        <BoardLayout search={handleSearch}/>
    )
}
