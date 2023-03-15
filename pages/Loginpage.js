import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Loginmain from '../components/Loginmain';
// import axios from 'axios';
// import {AuthContext} from '../context/AuthContext';



function Loginpage(){
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
    defaultValues:{
    username:"",
    email:"",
    number:"",
    password:"",
    birthdate:"",
    agree:"false",
    },
    mode:"onTouched",
  });
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // const navigate = useNavigate();
  // const {setAuthState} = useContext(AuthContext);

  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });

  //     if (response.ok) {
  //       // 登錄成功
  //     } else {
  //       // 登錄失敗
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
    return(
    <>
    <div className="b-box1">
      <img src="./img/301.png" alt="BCC" />
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
        <div className="form2-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" className="slide login" >會員登入</label>
            <label for="signup" className="slide signup" >註冊會員</label>
            <div className="slider-tab"></div>
          </div>
          <div className="form2-inner">
            <form action="#" className="login form2" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
              <label className='lable1'>電子信箱</label>
                <input
                type="email"
                // onChange={(e) => setEmail(e.target.value)} 
                className={`from-control ${errors.email && 'is-invalid'}`}
                name="email" 
                placeholder="電子信箱"
                {...register("email", {
                    required: {
                      value: true,
                      message: "信箱為必填",
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email格式錯誤",
                    },
                    })}/>
                {errors.email && (<div className="invalid-feedback">{errors?.email?.message}</div>)}
              </div>
              <div className="field">
              <label className='lable1'>密碼</label>
                <input 
                type="password" 
                // onChange={(e) => setPassword(e.target.value)} 
                name="password"  
                placeholder="密碼" 
                required  />
              </div>
              {/* <div className="pass-link">
                <Link to="/">忘記密碼?</Link>
              </div> */}
              <div className="field btn" >
                <div className="btn-layer"></div>
                <input type="submit" value="登入" activeItem />
              </div>
              {/* <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Google登入"/>
              </div> */}
              <div className="signup-link">沒有帳號? <Link to="/">立即註冊</Link></div>
            

            </form>
            <form action="#" className="signup form2" onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
              <label className='lable1'>用戶名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="用戶名" 
                  required />
              </div>
              <div className="field">
              <label className='lable1'>電子信箱</label>
                <input 
                  type="text" 
                  id="email" 
                  name="email" 
                  placeholder="電子信箱" 
                  required />
              </div>
              <div className="field">
              <label className='lable1'>手機電話</label>
                <input 
                  type="text" 
                  id="number" 
                  name="number" 
                  placeholder="手機電話" 
                  required />
              </div>
              <div className="field">
              <label className='lable1'>密碼</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="密碼 至少8字元" 
                  required />
              </div>
              <div className="field">
              <label className='lable1'>密碼確認</label>
                <input 
                type="password" 
                placeholder="密碼確認" 
                required />
              </div>
              <div className="field">
              <label className='lable1'>生日</label>
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
              <div className="signup-link">已有帳號? <Link to="/Loginpage">立即登入</Link></div>
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