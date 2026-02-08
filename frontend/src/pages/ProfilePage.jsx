import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileCard, TopBar } from "../components/temp.jsx";
import { boards, currentUser } from "../data/mockData.js";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("title+content");
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <TopBar
        boards={boards}
        currentBoardId={boards[0].id}
        onBoardChange={(boardId) => navigate(`/boards/${boardId}`)}
        searchType={searchType}
        onSearchTypeChange={setSearchType}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={setSearchKeyword}
        onSearchSubmit={() =>
          navigate(
            `/boards/${boards[0].id}/search?type=${encodeURIComponent(searchType)}&keyword=${encodeURIComponent(searchKeyword)}`,
          )
        }
      />
      <ProfileCard user={currentUser} />
    </>
  );
}
