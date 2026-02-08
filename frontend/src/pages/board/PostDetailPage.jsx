import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostDetail, TopBar } from "../../components/temp.jsx";
import { boards, posts } from "../../data/mockData.js";

export default function PostDetailPage() {
  const navigate = useNavigate();
  const { boardId, postId } = useParams();
  const [searchType, setSearchType] = useState("title+content");
  const [searchKeyword, setSearchKeyword] = useState("");

  const post = posts.find((item) => item.id === postId && item.boardId === boardId);
  const currentBoard = boards.find((board) => board.id === boardId) || boards[0];

  return (
    <>
      <TopBar
        boards={boards}
        currentBoardId={currentBoard.id}
        onBoardChange={(nextBoardId) => navigate(`/boards/${nextBoardId}`)}
        searchType={searchType}
        onSearchTypeChange={setSearchType}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={setSearchKeyword}
        onSearchSubmit={() =>
          navigate(
            `/boards/${boardId}/search?type=${encodeURIComponent(searchType)}&keyword=${encodeURIComponent(searchKeyword)}`,
          )
        }
      />
      <PostDetail post={post} />
    </>
  );
}
