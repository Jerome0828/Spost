import React, { Component } from 'react';
import Citys from './Citys';
import InesrtSportList from './InesrtSportList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
class RentPlace extends Component {
    state = { 
        sportList: [{ id: 1, value: 'yoga', cName: '瑜珈', chkicon: faTimes, color: 'text-balck' },
        { id: 2, value: 'workout', cName: '健身', chkicon: faTimes, color: 'text-black' },
        { id: 3, value: 'workout3', cName: '健身333333333', chkicon: faTimes, color: 'text-black' },
        { id: 4, value: 'workout4', cName: '健身4', chkicon: faTimes, color: 'text-black' },
        { id: 5, value: 'workout5', cName: '健身55555', chkicon: faTimes, color: 'text-black' }]
     }
     sportListOnclick = (e) => {
        let sportList = this.state.sportList

        sportList.map(elm => {
            if (e.target.id == elm.value) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
                    elm.chkicon = faTimes;
                    elm.color = 'text-black';
                }
                this.setState({});
            }
        })
    }
    render() {
        // 我還沒給價錢設定
        return (
            <div className="container mt-3">
                <h3>上傳場地</h3>
                <form className="was-validated form-group">

                    {/* 上傳圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上傳圖片 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3">
                        <input type="file" className="rounded shadow form-control" required />
                    </div>

                    {/* 場地名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地名稱 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <input type="text" className="rounded shadow form-control" placeholder="請輸入場地名稱" required/>
                    </div>

                    {/* 場地地址 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>地址 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1" >
                        <Citys />
                        <input type="text" className="rounded shadow mt-2 form-control" placeholder="請請輸入地址" required />
                    </div>

                    {/* 場地簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地介紹 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <textarea class="rounded shadow form-control" rows="3" placeholder="輸入場地簡介" required></textarea>
                    </div>

                    {/* 人數限制 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地人數限制 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <label>
                            <input type="number" className="rounded shadow form-control" placeholder="請輸入人數限制" required />
                        </label>
                    </div>

                    {/* 適用課程類別 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>適用課程類別 :</b>
                        </li>
                    </ul>
                    {/* 運動類別 */}
                    
                    <InesrtSportList datas={this.state.sportList}
                                sportListOnclick={(e) => this.sportListOnclick(e)}
                                clearSportType={this.clearSportType}/>

                    {/* 刊登日期 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>刊登日期 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3">
                        <label>
                            <input type="date" className="rounded shadow form-control" required />
                        </label>
                        <p className="mt-3 mb-3">至</p>
                        <label>
                            <input type="date" className="rounded shadow form-control" required />
                        </label>
                    </div>


                    {/* 我同意 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>是否同意 :</b>
                        </li>
                    </ul>
                    
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                        <label className="form-check-label" htmlFor="myCheck">I agree on....</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </div>

                    <button type="submit" className="btn btn-outline-success">送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                </form>
            </div>
        );
    }
}

export default RentPlace;