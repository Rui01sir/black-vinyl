import React from 'react'
import { Link } from 'react-router-dom';
import Loginmain from '../components/Loginmain';
// import firebase from '../utils/Firebase';


function Loginpage(){
  // const history = useHistory();
  // const [activeItem] = React.useState('register');
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
    
  // function onSubmit(){
  //     if(activeItem === 'register'){
  //       firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(()=>{
  //         history.push('/');
  //       });
  //   }else if(activeItem === 'signin'){
  //     firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
  //       history.push('/');
  //     });
  //   }
  // }

    return(
    <>
    <div className="b-box1">
      <img src="./img/301.png" alt="BCC"/>
      {/* <!-- 會員登入 --> */}
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">
            <Link to="/"><img src="./img/logo.svg" alt="logo" /></Link>
          </div>
          <div className="title signup">
            <Link to="/"><img src="./img/logo.svg" alt="logo" /></Link>
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" className="slide login" >會員登入</label>
            <label for="signup" className="slide signup" >註冊會員</label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className="login">
              <div className="field">
                <input type="text" 
                // value={email} 
                // onChange={(e) => setEmail(e.target.value)} 
                name="email" 
                placeholder="電子信箱"
                required />
              </div>
              <div className="field">
                <input type="password" 
                // value={password}
                // onChange={(e) => setPassword(e.target.value)} 
                name="password"  
                placeholder="密碼" 
                required  />
              </div>
              <div className="pass-link">
                <Link to="/">忘記密碼?</Link>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="登入" activeItem/>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Google登入"/>
              </div>
              <div className="signup-link">沒有帳號? <Link to="/">立即註冊</Link></div>
            </form>
            <form action="#" className="signup">
              <div className="field">
                <input type="text" id="name" name="name" placeholder="用戶名" required />
              </div>
              <div className="field">
                <input type="text" id="email" name="email" placeholder="電子信箱" required />
              </div>
              <div className="field">
                <input type="password" id="password" name="password" placeholder="密碼 至少8字元" required />
              </div>
              <div className="field">
                <input type="password" placeholder="密碼確認" required />
              </div>
              <div className="field">
                <input
                  type='date'
                  id="birthday"
                  name="birthday"
                  placeholder="生日       西元年/月/日"
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="註冊會員" />
              </div>
              <div className="signup-link">已有帳號? <Link to="/">立即登入</Link></div>
            </form>
          </div>
        </div>
      </div>
      <Loginmain/>
    </div>
    </>
    )
}

export default Loginpage;