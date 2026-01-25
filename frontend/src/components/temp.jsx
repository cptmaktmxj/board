import { Link } from "react-router-dom";


export function SetCookieButton(){
    return (
        <div className="cookie-button">
            <button onClick={allowCookie}>쿠키 허용</button>
            <button onClick={blockCookie}>쿠키 차단</button>
        </div>
    )
}

export function LoginForm(){
    return (
        <div>
            <div className="login-form">
                <form onSubmit={login}>
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

export function RegisterForm(){
    return (
        <div>
            <div className="register-form">
                <form>
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
        <img src="./data/logo.jpg"/>
    )
}

export function SearchForm(){
    return (
        <div>
            <div className="profile-button">
                <a href="/users/:user_id"><img src="./data/default_profile.png"/></a>
            </div>
            <div className="search-input">
                <input type="text" required/>
                <button>검색</button>
            </div>
            <div className="detail-search-toggle">
                <select></select>
            </div>    
        </div>
    )
}

export function BoardList(){
    return (
        <div>
            <div className="tag-toggle">
                <select></select>
            </div>

            <div className="write-button">

            </div>

            <div className="post-view-toggle">
                <div className="posts-count"></div>
                <div className="posts-page"></div>
            </div>

            <div className="main-board">
                <div className="board-toggle">

                </div>
                <div className="board-list">

                </div>    
            </div>            
        </div>
    )
}

export function Footer(){
    return (
        <p>made by</p>
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
