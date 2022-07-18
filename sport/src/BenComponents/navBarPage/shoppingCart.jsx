import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';


// [{"carid":"10","oid":"p01","id":"1","title":"123","date":"2022-07-15","time":"10:00 ~ 11:00","price":"300"},

class ShoppingCart extends Component {
    state = { 
        carData:[],
        carid:[],
        sumPrice:0,
     } 

    async componentDidMount() {
        var url = `http://localhost:80/spost/BenPHP/shoppingCartGet.php`;
        var result = await Axios.get(url);
        this.state.carData = result.data;
        console.log(this.state.carData)

        this.state.sumPrice=0;
        for(var i=0;i<this.state.carData.length;i++){
            this.state.sumPrice += Number(this.state.carData[i].price);
        }
        this.setState({});

    }
    deleCar= async (e)=>{
        // 取得點擊商品的value.carid的數字
        const carID = e.target.getAttribute('data_car');

        // 將值送進PHP資料庫當作刪除的唯一key(carid)值  (用QS 或者改用from表單傳送)
        // 使用QS傳送字串到PHP內
        const Qs = require('qs')
        let tempData ='';   //新增變數初始化字串
        await Axios.post(`http://localhost:/spost/BenPHP/shoppingCartDele.php`,Qs.stringify({ carID:carID}))
        .then((response)=>{
            // console.log(response.data); //查看回傳的內容是個字串
            tempData = response.data;      //放到外層變數,用於外層判斷
            // this.setState({});    
        })
        // 查看撈回來的資料是陣列,所以要使用while、for、map、forEach做尋訪,前兩者要自己寫索引值所以不推薦
        // 在下方判斷後做新增或刪除處理,最後在下setState更新內容
        this.state.carData.map((elm,idx)=>{
            // console.log(elm)  //在裡面看是物件,但是要處理的是外面的值(陣列),所以沒關係
            // console.log('tenp :' + tempData) 

            // 要做到php刪除資料後連同React畫面更新,將回傳的carid做判斷,當==時做刪除
            if (tempData == elm.carid){
                this.state.sumPrice -= elm.price  // -=刪除金額時更新狀態
                // console.log(idx);
                // console.log(this.state.carData[idx]) //這邊查看的是外部陣列[0,1,2,3]
                this.state.carData.splice(idx,1)
                this.setState({})
            }
            // console.log("NO")
            console.log(this.state.sumPrice)
            
        })

    };

    checkOKAlert=()=>{
        // alert("OK");
    }
    
    
    render() { 

        return (
            <>
                <div className='mt-6 container'>
                        <h3>購物車:</h3>
                        <hr />
                

                {this.state.carData.map((value,index)=>{
                    return(
                        <>
                        <div className='container border-bottom' >
                            <div className='row mt-2 '>
                                <div className="cartitle col">
                                    <h5>{value.title}</h5>

                                </div>
                                <div className="cardata col" style={{lineHeight:"0.2"}}>
                                <p >{value.date}</p>
                                <a >{value.time}</a>
                                    
                                    </div>
                                <div className="carprice col">NT${value.price}</div>
                                {/* {this.state.sumPrice = this.state.carData[0].price} */}
                                {/* {value.carid} 點擊時對應當與資料庫中的carid */}
                                
                                <button className='col-1 btn' name="deleCar" onClick={this.deleCar} type="button" data_car={value.carid} ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg></button>
                            

                                
                            </div>
                        </div>
                        </>
                    )
                })}
   
                    <div className='mt-3 d-md-flex justify-content-md-end text-danger' >
                        <h5>總金額:NT${this.state.sumPrice}</h5>
                    </div> 
       


                <div className=' d-md-flex justify-content-md-end row cols-2'>
 
                    <div className='col-12'>
                        <a>選擇付款方式:</a>
                        <select>
                            <option value="creditCard">信用卡付款</option>
                            <option value="moneyTransfer">銀行轉帳</option>
                        </select>
                    </div>
                </div>

                <div className='mt-3 d-md-flex justify-content-md-end'>
                    <NavLink to="/" className="">
                        <a className='btn btn-outline-dark me-md-2' onClick={this.checkOKAlert}>購買更多</a>
                    </NavLink>
                    <NavLink to="/checkoutPage" className="">
                        <button className='btn btn-outline-dark me-md-2' onClick={this.checkOKAlert}>前往結帳</button>
                    </NavLink>
                    </div>

                </div>


            </>
        );
    }
}
 
export default ShoppingCart;