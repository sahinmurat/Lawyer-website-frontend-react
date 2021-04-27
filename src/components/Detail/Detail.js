import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Eticaret, Kvkk, Tip, Sirket, Deniz, Fikir, Sözlesme, Vergi, Imar, Tüketici } from './Content';
import "./Detail.css"

function Detail() {
    const { area } = useParams();
    return (
        <div className='containerr' style={{minHeight:"85vh"}}>
            <Navbar color='detail' />
            {area === 'kvkk' ? <Kvkk /> : null}
            {area === 'eticaret' ? <Eticaret /> : null}
            {area === 'tip' ? <Tip /> : null}
            {area === 'sirket' ? <Sirket /> : null}
            {area === 'deniz' ? <Deniz /> : null}
            {area === 'fikir' ? <Fikir /> : null}
            {area === 'sözlesme' ? <Sözlesme /> : null}
            {area === 'vergi' ? <Vergi /> : null}
            {area === 'imar' ? <Imar /> : null}
            {area === 'tüketici' ? <Tüketici /> : null}
        </div>
    )
}

export default Detail
