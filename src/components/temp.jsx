
const [cookie,setCookie]=useCookie(false)

export default function setCookieButton(){
    return (
        <div className="cookie-button">
            <input type="button" value="쿠키 허용" onClick={enableCookies}/>
            <input type="button" value="쿠키 차단" onClick={disableCookies}/>
        </div>
    )
}

export default function loginForm(){
    return (
        <div>
            <div className="login-form">
                <form value="로그인">
                    <label for="id">아이디</label>
                    <input type="text" name="id" required/>

                    <label for="pw">비밀번호</label>
                    <input type="password" name="pw" required/>

                    <button value="로그인" onClick={login}/>   
                </form>
            </div>
            <div className="signup-link">
                <input type="button" value="회원가입" onClick={goToSignUp}/>
            </div>
                       
        </div>
    )
}

export default function registerForm(){
    return (
        <div>
            <div className="login-form">
                <form value="로그인">
                    <label for="id">아이디</label>
                    <input type="text" name="id" required/>

                    <label for="pw">비밀번호</label>
                    <input type="password" name="pw" required/>

                    <button value="로그인" onClick={login}/>   
                </form>
            </div>
            <div className="signup-link">
                <input type="button" value="회원가입" onClick={goToSignUp}/>
            </div>
                       
        </div>
    )
}

export default function logo(){
    return (
        <img src=""/>
    )
}

export default function searchForm(){
    return (
        <div>
            <div className="search-input">
                <input type="text" required/>
                <button value="검색" onClick={search}/>   
            </div>
            <div className="detail-search-toggle">
                <select></select>
            </div>    
        </div>
    )
}

export default function boardList(){
    return (
        <div>
            <div className="tag-toggle">
                <select></select>
            </div>

            <div className="write-button">

            </div>

            <div className="post-view-toggle">
                <div className="post-size"></div>
                <div className="post-page"></div>
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

export default function footer(){
    return (
        <p>made by</p>
    )
}

export default function WriteAndEditPost(){
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

export default function Profile(){
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

export default function error(){
    return (
        <div className="error-text">
            <h1>404 Not Found</h1>
            <p></p>
        </div>       
    )
}
