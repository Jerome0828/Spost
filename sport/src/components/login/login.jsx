import React, { Component } from 'react';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends Component {
  state = {
    opacity: [0, 1, 0, 0], display: ['', '', '', ''], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden'],
    class: "", fontcolor: "red",
    // 載入特效, 文字提示顏色,  
    passwordCheck: "", summit: [],
    // 密碼暫存
    aeh: '', vec: '',  pwd: '',
    // 帳號or信箱不存在, 驗證碼錯誤, 兩次密碼不相同
    aew: '',  pwr: '',  
    // 帳號or信箱錯誤, 密碼錯誤
    adr: '',  emr: '', cel: '', ada: '6位數，且使用一個英文字母和數字', pwa: '6位數，且使用一個英文字母和數字', naa: ''
    // 帳號已註冊, 信箱已註冊, 電話提示, 帳號提示, 密碼提示, 姓名提示
  }

  // 正規檢查 //
  // Email正規檢查
  reE = (e) => {
    let eml = new RegExp(/^[a-za-z0-9_-]+@[a-za-z0-9_-]+(\.[a-za-z0-9_-]+)+$/);
    if ( eml.test(e.target.value) ) { this.setState({ emr: ""}) }
    else if ( e.target.value.length == 0 ) { this.setState({ emr: ""})}
    else{ this.setState({ emr: "請輸入正確Email"}) };
  }
  // 帳號正規檢查
  reA = (e) => {
    let add = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
    if ( e.target.value.length >= 6 ) {
      if ( add.test( e.target.value ) == false ) {
        this.setState({ ada: '帳號格式錯誤' })
      }else {
        this.setState({ ada: '' })
      }
    }else {
      this.setState({ ada: '6位數，且使用一個英文字母和數字' })
    }
  }

// ---------------------------------
  // (註冊 & 忘記密碼) 重複檢查 & 正規檢查 //
  passwordCheck1 = (e) => {
    let pws = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
    if ( e.target.value.length < 6 ) {
      this.setState({ pwa: '最少6個位數，且最少使用一個英文字母和一個數字' })
    }else {
      if ( pws.test( e.target.value ) ) {
        this.setState({ passwordCheck: e.target.value, pwa: '', pwr: '' })
        }else {
          this.setState({ pwa: '', pwr: '密碼格式錯誤' })
        };
    };

  }
  passwordCheck2 = (e) => {
    if ( this.state.passwordCheck.length <= e.target.value.length ) {
      if ( this.state.passwordCheck == e.target.value) {
        this.setState({ pwd: ""})
      }else {
        this.setState({ pwd: "兩次密碼不相同" })
      }
    }
    else { this.setState({ pwd: "" }) }
  }


//------------------------------
  // 畫面滑動 //
  back = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [1, 0, 0, 0], marginLeft: ['50vw', '-0', '0', '0'], visibility: ['','hidden','hidden','hidden'],
      class: "animate__animated animate__slideInRight"})
    }
    else if ( this.state.opacity[2] == 1 ) { 
      this.setState({ opacity: [0, 1, 0, 0], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
    else { 
      this.setState({ opacity: [0, 1, 0, 0], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
  }
  next = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [0, 0, 1, 0], marginLeft: ['-20vw', '-50vw', '20vw', '30vw'], visibility: ['hidden','hidden','','hidden'] })
    }
    else if ( this.state.opacity[2] == 1 ) {
      this.setState({ opacity: [0, 0, 0, 1], marginLeft: ['0', '-60vw', '-30vw', '0'], visibility: ['hidden','hidden','hidden','']})
    }
    else { 
      this.setState({ opacity: [0, 1, 0, 0],  marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
  }

//---------------------------
  // 確認表單填入完整 //
  checkForm = () => {
    let inp = Array.from(document.querySelectorAll('form input'))
    let x = [];
    for ( var i=0 ; i<inp.length-2 ; i++) {
      if ( inp[i].value != 0 ) {
        x.push(inp[i].value)
      }
    }
    console.log(this.state.summit)
    if ( x.length == 6 ){ 
      this.state.summit.push(x);
      this.setState({})
      this.next()
      return true
    }else {
      return false
    }
  }

  // componentDidUpdate() 


  render() {
    return (
      <div className="loginA row" id='all'>
        {/* -- Forgot password -- */}
        <div className='login text-center ' 
          style={{ opacity: this.state.opacity[0], marginLeft: this.state.marginLeft[0], visibility: this.state.visibility[0] }}>
          <h2 className='mt-4 text-center' > 忘記密碼 </h2>
          <span className='text-center w-100 my-0' style={{color: 'red'}}>
             {this.state.aeh} &nbsp; {this.state.vec} &nbsp; {this.state.pwd}
          </span>
          <div className='text-center mt-0' style={{width: "125%"}}>
            <div>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <img className='icon mx-3 my-1' src={require('../icon/profile.png')} />
                  <input className="input" type="text" placeholder="帳號 or Email" />
                  <button className='buttonL'>發送驗證碼</button>
                  <span className='text'></span>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal ">
                  <li className={`list-group-item w-100 ${this.state.class}`}>
                    <img className='icon mx-3 my-1' src={require('../icon/question.png')} />
                    <input className="input" type="e-mal" placeholder="請輸入驗證碼" />
                  </li>
              </ul>
              <ul className="list-group list-group-horizontal " >
                <li className={`list-group-item w-50 ${this.state.class}`}>
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input" type="password" onChange={this.passwordCheck1} placeholder="密碼"/><br />
                  <span>{this.state.pwa}</span>
                </li>
                <li className={`list-group-item w-50 ${this.state.class}`}>
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input" type="password" onChange={this.passwordCheck2} placeholder="再次輸入密碼" />
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-3'>
          <button type="submit" className='button my-2 mx-3' onClick={this.back}>確認變更</button>
            <button type="submit" className='button my-2 mx-3' onClick={this.back}>回到登入頁面</button>
          </div>
        </div>

        {/* -- Login -- */}
        <div className='login text-center' 
          style={{ opacity: this.state.opacity[1], marginLeft: this.state.marginLeft[1], visibility: this.state.visibility[1]}}>
          <div className="animate__animated animate__fadeInDown">
            <h2 className='my-4 text-center'>Login</h2>
            <p className='text-center w-100' style={{color: 'red'}}>
              {this.state.aew} &nbsp; {this.state.pwr}
            </p>
            <div className='container'>
              <div className="row">
                <div className='container mt-4 '>
                  <img className='icon mx-3 my-3' src={require('../icon/profile.png')} />
                  <input autoFocus="autofocus" className="input col-6 m-0" type="text" placeholder="帳號 or Email" /><br />
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input col-6 m-0" type="password" placeholder="請輸入密碼"/><br />
                </div>
              </div>
            </div>
            <div className='mt-5'>
                <button type="submit" className='button my-2 mx-3' >登入</button>
                <button type="submit" className='button my-2 mx-3' onClick={this.next}>註冊</button>
            </div>
            <button type="submit" className='buttonL m-3' onClick={this.back}>忘記密碼 ?</button>
          </div>
          
        </div>
        {/* <div style={{backgroundColor: 'red', width: '300px', height: '300px '}}>aaa</div> */}

        {/* -- Sign up -- */}
        <div className='login text-center' 
            style={{ opacity: this.state.opacity[2], marginLeft: this.state.marginLeft[2], visibility: this.state.visibility[2]}}>
          <div className="row w-100 my-0">
            <button id='bti' className='col-1' onClick={this.back}><img id='icon1' src={require('../icon/left.png')} /></button>
            <h2 className='col-10 text-center'>註冊</h2>
            <p className='text-center w-100'></p>
          </div >
          <form className='' style={{width: "130%"}} onSubmit={(e) => {this.checkForm(); e.preventDefault();}} >
              <ul className="list-group list-group-horizontal">
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/profile.png')} />
                      <input className="input " type="text" placeholder="帳號" onChange={this.reA} required="required"/><br />
                      <span> &nbsp; {this.state.adr} {this.state.ada}</span>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/email.png')} />
                      <input className="input " type="e-mail" placeholder="Email" onChange={this.reE} required="required"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/><br />
                      <span> &nbsp; {this.state.emr}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal " >
                <li class={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/password.png')} />
                      <input className="input" type="password" onChange={this.passwordCheck1} placeholder="密碼" required="required"
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/><br />
                      <span style={{color: ''}}> {this.state.pwa} {this.state.pwr}</span>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/password.png')} />
                      <input className="input" type="password" onChange={this.passwordCheck2} placeholder="再次輸入密碼" required="required"
                        /><br />
                      <span style={{color: 'red'}}> &nbsp; {this.state.pwd}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/account.png')}/>
                      <input className="input" type="text" onChange={this.reN} placeholder="真實姓名" required="required"/><br />
                      <span style={{color: 'red'}}> &nbsp; {this.state.naa}</span>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100  ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/mobile-app.png')} />
                      <input className="input" type="text" placeholder="連絡電話" required="required" 
                        pattern="^[0-9]{10}$" maxLength="10" /><br />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/identity-card.png')} />
                      <input className="input" type="text" placeholder="暱稱 (選填)"/><br />
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/sex.png')} />
                      <select className='input text-center' name="性別" >
                          <option value="b">男</option>
                          <option value="g">女</option>
                          <option value="s">秘密</option>
                      </select>
                    </div>
                  </div>
                </li>
              </ul>
              <input type="submit" className='button' id='buts' value='確認註冊' /> 
          </form>
        </div>

        {/* -- Email 信箱驗證 -- */}
        <div className='login text-center' 
            style={{ opacity: this.state.opacity[3], marginLeft: this.state.marginLeft[3], visibility: this.state.visibility[3]}}>
          <div className="row my-4">
            <h2>Email 已送出</h2>
          </div >
          <div className={`container ${this.state.class}`}>
              <p className='m-5' >已向您的信箱 xxx 送出驗證信，請至您的信箱查收並完成驗證 </p>
              <p className='mt-5'>沒收到驗證信 ?</p>
              <button type="submit" className='buttonL mb-4'>再寄送一次</button>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-5 mx-3' id='buts' onClick={this.next}>回到登入頁面</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login ;
