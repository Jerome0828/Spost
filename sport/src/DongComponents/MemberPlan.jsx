import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/core/locales-all"
import "./calender.css"
// import "@fullcalendar/core/main.css"
// npm install --save @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/core

class MemberPlan extends Component {
    state = {}
    componentDidMount() {

    }
    eclick=()=>{

    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-9 mt-5 shadow '>
                        <FullCalendar
                            initialView="dayGridMonth"
                            plugins={[dayGridPlugin, timeGridPlugin]}
                            locales='zh-tw'
                            timeZone='UTC-8'
                            navLinks='true'
                            headerToolbar={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                            }}
                            events={[
                                { id:'1',title: 'event',start: '2022-07-16T06:00:00',end: '2022-07-16T08:00:00',
                                url: `http://localhost/spost/DongPHP/test.php?id=5`,backgroundColor:'#2C3E50',borderColor:'#2C3E50',textColor:'#ffffff' },
                                { id:'1',title: 'event',start: '2022-07-17T06:00:00',end: '2022-07-17T08:00:00',
                                backgroundColor:'#2C3E50',borderColor:'#2C3E50',textColor:'#ffffff' }
                            ]}
                        />
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default MemberPlan;