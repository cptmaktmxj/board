import { Link } from "react-router-dom";
import logo from "../data/logo.jpg";
import defaultProfileImage from "../data/default_profile.png";

export function AuthForm({ title, fields, submitLabel, onSubmit, footerLinks }) {
  return (
    <section className="auth-card">
      <img src={logo} alt="Board logo" className="auth-logo" />
      <h1>{title}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
        }}
      >
        {fields.map((field) => (
          <label key={field.name} className="form-row">
            <span>{field.label}</span>
            <input type={field.type} name={field.name} required={field.required} />
          </label>
        ))}
        <button type="submit">{submitLabel}</button>
      </form>
      <div className="inline-links">
        {footerLinks.map((item) => (
          <Link key={item.to + item.label} to={item.to}>
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function TopBar({
  boards,
  currentBoardId,
  onBoardChange,
  searchType,
  onSearchTypeChange,
  searchKeyword,
  onSearchKeywordChange,
  onSearchSubmit,
}) {
  return (
    <header className="top-bar">
      <img src={logo} alt="Board logo" className="top-logo" />
      <div className="search-wrap">
        <select value={searchType} onChange={(e) => onSearchTypeChange(e.target.value)}>
          <option value="title+content">제목+내용</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="author">작성자</option>
        </select>
        <input
          value={searchKeyword}
          onChange={(e) => onSearchKeywordChange(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="button" onClick={onSearchSubmit}>
          검색
        </button>
      </div>
      <div className="board-switch">
        <span>게시판</span>
        <select value={currentBoardId} onChange={(e) => onBoardChange(e.target.value)}>
          {boards.map((board) => (
            <option key={board.id} value={board.id}>
              {board.name}
            </option>
          ))}
        </select>
      </div>
      <Link to="/profile" className="profile-link">
        <img src={defaultProfileImage} alt="프로필" />
      </Link>
    </header>
  );
}

export function PostList({ posts, boardName, isSearch, searchKeyword }) {
  return (
    <section className="page-card">
      <div className="list-head">
        <h2>{isSearch ? `검색 결과: ${searchKeyword || "전체"}` : boardName}</h2>
      </div>
      {posts.length === 0 ? (
        <p className="empty">조건에 맞는 게시글이 없습니다.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/boards/${post.boardId}/posts/${post.id}`} className="post-item">
                <p className="title">{post.title}</p>
                <p className="meta">
                  {post.author} | {post.createdAt} | 조회 {post.views}
                </p>
                <p className="tags">{post.tags.join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function PostDetail({ post }) {
  if (!post) {
    return <p className="empty">게시글을 찾을 수 없습니다.</p>;
  }

  return (
    <section className="page-card">
      <h2>{post.title}</h2>
      <p className="meta">
        {post.author} | {post.createdAt} | 조회 {post.views}
      </p>
      <p className="content">{post.content}</p>
      <div className="actions">
        <Link to={`/boards/${post.boardId}/posts/${post.id}/edit`}>
          <button type="button">게시글 편집</button>
        </Link>
      </div>
    </section>
  );
}

export function PostEditor({ post, onSubmit }) {
  if (!post) {
    return <p className="empty">수정할 게시글이 없습니다.</p>;
  }

  return (
    <section className="page-card">
      <h2>게시글 편집</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event);
        }}
        className="editor-form"
      >
        <label className="form-row">
          <span>제목</span>
          <input name="title" defaultValue={post.title} required />
        </label>
        <label className="form-row">
          <span>내용</span>
          <textarea name="content" rows={10} defaultValue={post.content} required />
        </label>
        <button type="submit">저장</button>
      </form>
    </section>
  );
}

export function ProfileCard({ user }) {
  return (
    <section className="page-card">
      <h2>프로필</h2>
      <div className="profile-card">
        <img src={defaultProfileImage} alt="프로필 이미지" />
        <div>
          <p>
            <strong>이름</strong>: {user.name}
          </p>
          <p>
            <strong>이메일</strong>: {user.email}
          </p>
          <p>
            <strong>학번</strong>: {user.studentId}
          </p>
          <p>
            <strong>학년</strong>: {user.grade}
          </p>
          <p>
            <strong>동아리</strong>: {user.club}
          </p>
          <p>{user.bio}</p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer className="footer">board frontend prototype</footer>;
}

export function ErrorPage() {
  return (
    <section className="page-card">
      <h1>404 Not Found</h1>
      <p>요청한 페이지를 찾을 수 없습니다.</p>
      <Link to="/login">로그인으로 이동</Link>
    </section>
  );
}
