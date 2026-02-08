export const boards = [
  { id: "notice", name: "공지 게시판" },
  { id: "free", name: "자유 게시판" },
  { id: "qna", name: "질문 게시판" },
  { id: "info", name: "정보 게시판" },
];

export const currentUser = {
  id: "user-1",
  name: "홍길동",
  email: "hong@example.com",
  studentId: "20241234",
  grade: "2학년",
  club: "개발 동아리",
  bio: "프론트엔드와 백엔드 연결 작업 중입니다.",
};

export const posts = [
  {
    id: "1",
    boardId: "notice",
    title: "서비스 점검 안내",
    author: "관리자",
    createdAt: "2026-02-05",
    views: 145,
    tags: ["중요"],
    content: "2월 10일 오전 2시부터 4시까지 서버 점검이 진행됩니다.",
  },
  {
    id: "2",
    boardId: "free",
    title: "프론트엔드 상태 공유",
    author: "홍길동",
    createdAt: "2026-02-06",
    views: 72,
    tags: ["개발"],
    content: "로그인, 회원가입, 게시판 기본 화면을 먼저 구현했습니다.",
  },
  {
    id: "3",
    boardId: "qna",
    title: "JWT 저장 위치 추천 부탁드립니다",
    author: "김코딩",
    createdAt: "2026-02-07",
    views: 51,
    tags: ["인증", "질문"],
    content: "보안과 구현 편의성 기준으로 추천 패턴이 궁금합니다.",
  },
  {
    id: "4",
    boardId: "info",
    title: "React Router 7 정리",
    author: "박리액트",
    createdAt: "2026-02-07",
    views: 98,
    tags: ["react", "router"],
    content: "중첩 라우팅과 URL 파라미터 활용 예제를 정리했습니다.",
  },
];
