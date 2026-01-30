import { Link } from "react-router-dom";
import logo from "../data/logo.jpg";
import defaultProfileImage from "../data/default_profile.png";

export function SetCookieButton({allowCookie,blockCookie}){
    return (
        <div className="cookie-button">
            <button onClick={allowCookie}>쿠키 허용</button>
            <button onClick={blockCookie}>쿠키 차단</button>
        </div>
    )
}

export function LoginForm({onSubmit}){
    return (
        <div>
            <div className="login-form">
                <form onSubmit={onSubmit}>
                    <label htmlFor="id">아이디</label>
                    <input type="text" name="id" required/>

                    <label htmlFor="pw">비밀번호</label>
                    <input type="password" name="pw" required/>

                    <button>로그인</button>
                </form>
            </div>
            <div className="link">
                <Link to="/register">회원가입</Link>
                <Link to="/register">아이디찾기</Link>
                <Link to="/register">비밀번호찾기</Link>
            </div>
                       
        </div>
    )
}

export function RegisterForm({onSubmit}){
    return (
        <div>
            <div className="register-form">
                <form onSubmit={onSubmit}>
                    <label htmlFor="id">이름</label>
                    <input type="text" name="name" required/>
                    <label htmlFor="id">학번</label>
                    <input type="text" name="studentId" required/>
                    <label htmlFor="id">학년</label>
                    <input type="text" name="grade" required/>
                    <label htmlFor="id">동아리</label>
                    <input type="text" name="club" required/>
                    <label htmlFor="id">아이디</label>
                    <input type="text" name="id" required/>
                    <label htmlFor="pw">비밀번호</label>
                    <input type="password" name="pw" required/>

                    <button>회원가입</button> 
                </form>
            </div> 
        </div>
    )
}

export function Logo(){
    return (
        <img src={logo} alt="logo"/>
    )
}

export function SearchForm({search}){
    return (
        <div>
            <div className="profile-button">
                <a href="/users/:user_id"><img src={defaultProfileImage}/></a>
            </div>
            <div className="search-input">
                <input type="text" required/>
                <button onClick={search}>검색</button>
            </div>
            <div className="detail-search-select">
                <select>
                    <option value="제목+내용"></option>
                    <option value="제목"></option>
                    <option value="내용"></option>
                    <option value="글쓴이"></option>
                </select>
            </div>    
        </div>
    )
}

export function BoardList(){
    return (
        <div>
            <div className="tag-select">
                <select></select>
            </div>

            <div className="write-button">
                <Link to="/boards/:board_id/write">글 작성</Link>
            </div>

            <div className="post-view-select">
                <div className="posts-count"></div>
                <div className="posts-page"></div>
            </div>

            <div className="main-board">
                <div className="board-select">
                    <select>
                        <option value="족보사물함"></option>
                        <option value="질문게시판"></option>
                        <option value="정보게시판"></option>
                        <option value="자유게시판"></option>
                        <option value="공지게시판"></option>
                        <div className="board-list">
                            <ul>

                            </ul>
                        </div> 
                    </select>
                </div>
            </div>            
        </div>
    )
}

export function Footer(){
    return (
        <p>made by ...</p>
    )
}

export function WriteAndEditPost(){
    return (
        <div>
            <div className="post-contents">
                
            </div>

            <div className="write-button">

            </div>

            <div className="edit-button">
                <div className="post-size"></div>
                <div className="post-page"></div>
            </div>

            <div className="post-editer">
                <div className="post-tag-toggle">

                </div>
                <div className="file-upload-button">

                </div>
                <div className="text-style">

                </div>    
            </div>            
        </div>
    )
}

export function Profile(){
    return (
        <div>
            <div className="profile-pic">
                <select></select>
            </div>

            <div className="profile-pic-edit-button">

            </div>

            <div className="user-info-table">
                <div className="post-size"></div>
                <div className="post-page"></div>
            </div>

            <div className="user-info-edit-button">
                
            </div>            
        </div>
    )
}

export function Error(){
    return (
        <div className="error-text">
            <h1>404 Not Found</h1>
            <p>설명</p>
        </div>       
    )
}
