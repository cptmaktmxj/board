import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PostList, TopBar } from "../../components/temp.jsx";
import { boards, posts } from "../../data/mockData.js";

function includesByType(post, keyword, searchType) {
  if (!keyword) return true;
  const normalized = keyword.toLowerCase();

  if (searchType === "title") return post.title.toLowerCase().includes(normalized);
  if (searchType === "content") return post.content.toLowerCase().includes(normalized);
  if (searchType === "author") return post.author.toLowerCase().includes(normalized);
  return `${post.title} ${post.content}`.toLowerCase().includes(normalized);
}

export default function BoardListPage() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const initialType = searchParams.get("type") || "title+content";
  const initialKeyword = searchParams.get("keyword") || "";

  const [searchType, setSearchType] = useState(initialType);
  const [searchKeyword, setSearchKeyword] = useState(initialKeyword);
  const [perPage, setPerPage] = useState(10);
  const [pageChunk, setPageChunk] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearchType(initialType);
    setSearchKeyword(initialKeyword);
    setCurrentPage(1);
  }, [initialKeyword, initialType, boardId, location.pathname]);

  const isSearchMode = location.pathname.endsWith("/search");
  const currentBoard = boards.find((board) => board.id === boardId) || boards[0];

  const filteredPosts = useMemo(() => {
    const boardFiltered = posts.filter((post) => post.boardId === boardId);
    if (!isSearchMode) return boardFiltered;
    return boardFiltered.filter((post) => includesByType(post, initialKeyword, initialType));
  }, [boardId, initialKeyword, initialType, isSearchMode]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredPosts.slice(start, start + perPage);
  }, [currentPage, filteredPosts, perPage]);

  const pageNumbers = useMemo(() => {
    const chunkStart = Math.floor((currentPage - 1) / pageChunk) * pageChunk + 1;
    const chunkEnd = Math.min(chunkStart + pageChunk - 1, totalPages);
    return Array.from({ length: chunkEnd - chunkStart + 1 }, (_, idx) => chunkStart + idx);
  }, [currentPage, pageChunk, totalPages]);

  const handleBoardChange = (nextBoardId) => {
    if (isSearchMode) {
      navigate(
        `/boards/${nextBoardId}/search?type=${encodeURIComponent(searchType)}&keyword=${encodeURIComponent(searchKeyword)}`,
      );
      return;
    }
    navigate(`/boards/${nextBoardId}`);
  };

  const handleSearch = () => {
    navigate(
      `/boards/${boardId}/search?type=${encodeURIComponent(searchType)}&keyword=${encodeURIComponent(searchKeyword)}`,
    );
  };

  return (
    <>
      <TopBar
        boards={boards}
        currentBoardId={currentBoard.id}
        onBoardChange={handleBoardChange}
        searchType={searchType}
        onSearchTypeChange={setSearchType}
        searchKeyword={searchKeyword}
        onSearchKeywordChange={setSearchKeyword}
        onSearchSubmit={handleSearch}
      />
      <PostList
        posts={paginatedPosts}
        boardName={currentBoard.name}
        boardId={currentBoard.id}
        isSearch={isSearchMode}
        searchKeyword={initialKeyword}
        perPage={perPage}
        onPerPageChange={(value) => {
          setPerPage(value);
          setCurrentPage(1);
        }}
        pageChunk={pageChunk}
        onPageChunkChange={(value) => {
          setPageChunk(value);
          setCurrentPage(1);
        }}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
