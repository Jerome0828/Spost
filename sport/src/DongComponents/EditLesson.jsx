import React, { Component } from 'react';
import Axios from 'axios';
import Citys from './Citys';
import InesrtSportList from './InesrtSportList';
import '../scss/all.css';
import pic from '../imgs/user1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
class EditLesson extends Component {
    state = {
        sportList: [{ id: 1, value: '其他', cName: '其他', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 2, value: '重量訓練', cName: '重量訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 3, value: '有氧訓練', cName: '有氧訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 4, value: '高強度間歇訓練', cName: '高強度間歇訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 5, value: '混合健身', cName: '混合健身', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 6, value: '瑜珈', cName: '瑜珈', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 7, value: '皮拉提斯', cName: '皮拉提斯', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 8, value: '懸吊運動', cName: '懸吊運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 9, value: '舞蹈', cName: '舞蹈', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 10, value: '拳擊格鬥', cName: '拳擊格鬥', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 11, value: '球類運動', cName: '球類運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 12, value: '極限運動', cName: '極限運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },],
        // 其他 重量訓練 有氧訓練 高強度間歇訓練 混合健身 瑜珈 皮拉提斯 懸吊運動 舞蹈 拳擊格鬥 球類運動 極限運動

        peopleList: [{ key: 0, checked: false, value: '一對一課程', className: 'd-none text-success', labelClass: 'w-100 p-1 shadow rounded border border-danger text-center mt-1' },
        { key: 1, checked: false, value: '團體課程', className: 'd-none text-success', labelClass: 'w-100 p-1 shadow rounded border border-danger text-center mt-1' }],

        agreeBox: [{ spanClass: '', pClass: 'text-danger', iconClass: 'd-none', labelClass: 'text-center shadow rounded border border-danger w-100 p-1' }],
        src: [pic, pic, pic],

        weekTime: [{ eName: 'monTime', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' },
        { eName: 'tuesTime', cName: '週二', required: false, timeBegin: 'tuesBegin', timeEnd: 'tuesEnd' },
        { eName: 'wedTime', cName: '週三', required: false, timeBegin: 'wedBegin', timeEnd: 'wedEnd' },
        { eName: 'thurTime', cName: '週四', required: false, timeBegin: 'thurBegin', timeEnd: 'thurEnd' },
        { eName: 'friTime', cName: '週五', required: false, timeBegin: 'friBegin', timeEnd: 'friEnd' },
        { eName: 'satTime', cName: '週六', required: false, timeBegin: 'satBegin', timeEnd: 'satEnd' },
        { eName: 'sunTime', cName: '週日', required: false, timeBegin: 'sunBegin', timeEnd: 'sunEnd' }],

        data:[],addr:[]
    }
    style = {
        'width': '15%'
    }
    agreeStyle = {
        'width': '15%'
    }
    async componentDidMount() {
        let resdata = [];
        await Axios.post("http://localhost/spost/DongPHP/editLesson.php", this.props.match.params.lid )
        .then( (response) => {
            resdata = response.data;
        });
        // console.log(resdata);
        this.state.data = resdata;
        

        this.state.addr = this.state.data[0] && this.state.data[0].addr;
        this.setState({});
    }
    // 運動類別變更
    sportListOnclick = (e) => {
        let sportList = this.state.sportList
        sportList.map(elm => {
            if (e.target.id == elm.value) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                    elm.class = 'rounded border border-success shadow p-1 mx-2 mt-2';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    elm.chkicon = faTimes;
                    elm.color = 'text-danger';
                    elm.class = 'rounded border border-danger shadow p-1 mx-2 mt-2';
                }
                this.setState({});
            }
        })
    }

    // 人數更動
    setPeople = (e) => {
        this.state.peopleList.map((elm) => {
            if (e.target.value == elm.value) {
                elm.checked = true;
                elm.className = 'text-success';
                elm.labelClass = 'w-100 p-1 shadow rounded border border-success text-center mt-1';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
                elm.labelClass = 'w-100 p-1 shadow rounded border border-danger text-center mt-1'
            }
        })
        this.setState({})
    }

    // 價格預覽
    spanPrice = (e) => {
        document.getElementById('spanPrice').innerHTML = `${e.target.value}`;
    }
    // debug
    spanTimes = (e) => {
        document.getElementById('spanTimes').innerHTML = e.target.value;
    }

    // 圖片預覽
    fileInput = () => {
        
        const file1 = document.getElementById('imgInput1').files;
        const file2 = document.getElementById('imgInput2').files;
        const file3 = document.getElementById('imgInput3').files;
        // console.log(file3);
        if (file1) {
            this.state.src[0] = URL.createObjectURL(file1[0]);
            this.setState({});
        }
        if (file2) {
            this.state.src[1] = URL.createObjectURL(file2[0]);
            this.setState({});
        }
        if (file3) {
            this.state.src[2] = URL.createObjectURL(file3[0]);
            this.setState({});
        }
        
    }

    // 星期+時間
    weekTimeChange = (e) => {
        if (e.target.checked) {
            e.target.parentElement.parentElement.childNodes[1].className = 'mt-3';
            e.target.parentElement.parentElement.childNodes[1].children[0].required = true;
            e.target.parentElement.parentElement.childNodes[1].children[2].required = true;
        } else {
            e.target.parentElement.parentElement.childNodes[1].className = 'mt-2 d-none';
            e.target.parentElement.parentElement.childNodes[1].children[0].required = false;
            e.target.parentElement.parentElement.childNodes[1].children[2].required = false;
            e.target.parentElement.parentElement.childNodes[1].children[0].value = '';
            e.target.parentElement.parentElement.childNodes[1].children[2].value = '';
        }
    }


    render() {
        let selectedOptionId = '';
        return (
            <div className="container mt-6">
                <h3>編輯課程</h3>
                <hr />
                <form id='beCoach' className="was-validated form-group" enctype="multipart/form-data"
                    action="http://localhost/spost/form.php" method='POST'>


                    {/* 上傳圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上傳圖片 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-3 mb-3 d-flex">
                            <input name='img1' id='imgInput1' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control" required />
                        </div>
                        <div className="col-3 mb-3 d-flex">
                            <input name='img2' id='imgInput2' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control"/>
                        </div>
                        <div className="col-3 mb-3 d-flex">
                            <input name='img3' id='imgInput3' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control"/>
                        </div>
                    </div>


                    {/* 預覽圖 */}
                    <div className="row">
                        {this.state.data.map((elm, idx) => {
                            return (
                                <div className="col-3">
                                    <img style={{
                                        width: '260px',
                                        height: '280px',
                                        background: 'white',
                                        objectFit: 'contain'
                                    }} src={`data:image/jpeg;base64,${elm.img}`} className="mt-3 mx-2" />
                                </div>
                            )
                        })}
                    </div>

                    <hr />
                    {/* 課程名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程名稱 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <input name="title" type="text" defaultValue={this.state.data[0] && this.state.data[0].title} className="rounded shadow form-control" required />
                    </div>
                    <hr />

                    {/* 課程簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程介紹 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <textarea name="info" className="rounded shadow form-control" rows="3" defaultValue={this.state.data[0] && this.state.data[0].info} required></textarea>
                    </div>
                    <hr />

                    {/* 上課地點 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上課地點 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50" >
                        <input name="addr" type="text" defaultValue={this.state.data[0] && this.state.addr} className="rounded shadow mt-2 form-control" placeholder="請請輸入地址" required={false} />
                    </div>
                    <hr />

                    {/* 開課時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>開課時間 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-4 d-flex flex-wrap">
                        {this.state.weekTime.map(elm => {
                            // { eName: 'monTime', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' }
                            return (
                                <div className="mb-3 mx-1">
                                    <div className="mx-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id={elm.eName} onChange={this.weekTimeChange} />
                                        <label className="form-check-label" htmlFor={elm.eName}>{elm.cName}</label>
                                    </div>
                                    <div name={elm.eName} className="mt-2 d-none">
                                        <select name={elm.timeBegin} defaultValue={selectedOptionId} className="rounded shadow form-control" required={elm.required}>
                                            <option value=''></option>
                                            <option value='00:00'>00:00</option><option value='01:00'>01:00</option><option value='02:00'>02:00</option><option value='03:00'>03:00</option>
                                            <option value='04:00'>04:00</option><option value='05:00'>05:00</option><option value='06:00'>06:00</option><option value='07:00'>07:00</option>
                                            <option value='08:00'>08:00</option><option value='09:00'>09:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option>
                                            <option value='12:00'>12:00</option><option value='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option>
                                            <option value='16:00'>16:00</option><option value='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option>
                                            <option value='20:00'>20:00</option><option value='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option>
                                        </select>
                                        <p className="mt-2 mb-2">至</p>
                                        <select name={elm.timeEnd} defaultValue={selectedOptionId} className="rounded shadow form-control" required={elm.required}>
                                            <option value=''></option>
                                            <option value='00:00'>00:00</option><option value='01:00'>01:00</option><option value='02:00'>02:00</option><option value='03:00'>03:00</option>
                                            <option value='04:00'>04:00</option><option value='05:00'>05:00</option><option value='06:00'>06:00</option><option value='07:00'>07:00</option>
                                            <option value='08:00'>08:00</option><option value='09:00'>09:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option>
                                            <option value='12:00'>12:00</option><option value='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option>
                                            <option value='16:00'>16:00</option><option value='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option>
                                            <option value='20:00'>20:00</option><option value='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option>
                                        </select>
                                    </div>
                                </div>

                            )
                        })}
                        {/* <div className="mb-3 mx-1">
                            <div className="mx-3 form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="monTime" onChange={this.weekTimeChange} />
                                <label className="form-check-label" htmlFor="monTime">週一</label>
                            </div>
                            <label className='mt-2'>
                                <input name="monTime" type="time" className="rounded shadow form-control" required={false} />
                            </label>
                            <p className="mt-2 mb-2">至</p>
                            <label>
                                <input name="monTime" type="time" className="rounded shadow form-control" required={false} />
                            </label>
                        </div>*/}
                    </div>
                    <hr />

                    {/* 分類 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>分類 :</b>
                        </li>
                    </ul>
                    <InesrtSportList datas={this.state.sportList}
                        sportListOnclick={(e) => this.sportListOnclick(e)}
                        clearSportType={this.clearSportType} />
                    <hr />

                    {/* 上課時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程時間長度 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="form-group mb-3">
                        <label>
                            <select className="custom-select rounded shadow form-control" name="timeLength" required>
                                <option value="" className='d-none'>請選擇課程長度</option>
                                <option value="30">30</option>
                                <option value="60">60</option>
                                <option value="90">90</option>
                                <option value="120">120</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>(分鐘)</p>
                    </div>
                    <hr />

                    {/* 人數 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>模式 :</b>
                        </li>
                    </ul>
                    {this.state.peopleList.map(elm => {
                        return (
                            <div style={this.style}>
                                <label name='mode' className={elm.labelClass}>
                                    <input onClick={this.setPeople} key={elm.key} value={elm.value} type="radio" name='mode' className='form-control d-none' checked={elm.checked} required />
                                    <span><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.value}</label><br />
                            </div>
                        )
                    })}
                    <hr />


                    {/* 價錢 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>價錢 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <label>
                            <input name='price' onInput={this.spanPrice} type="number" className="rounded shadow form-control" placeholder="請輸入價錢" required />
                            <select name="pricePerTime" onInput={this.spanTimes} className="mt-2 rounded shadow form-control" defaultValue={selectedOptionId} required>
                                <option name="" value=""></option>
                                <option name="perTimes" value="1次">1次</option>
                                <option name="perMin" value="1分鐘">1分鐘</option>
                                <option name="perThirtyMin" value="30分鐘">30分鐘</option>
                                <option name="perHour" value="60分鐘">60分鐘</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>$ <span id='spanPrice'> </span> / <span id='spanTimes'></span></p>
                    </div>
                    <hr />

                    {/* 送出表單 */}
                    <button type="submit" className="btn btn-outline-success">送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                </form>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default EditLesson;