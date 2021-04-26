import React from 'react'
import './Activity.css'
import { useHistory, useParams } from 'react-router-dom';

function Activity() {
    const history = useHistory();
    const { savedjobs } = useParams();
    return (
        <div id="services" className='wrapper-all' >
            <h2 className='titel'>FAALİYET ALANLARI</h2>
            <div className='wrapper-titel' >
                <div className='activity-titel elektro'  onClick={() => history.push('/detail/Eticaret')} >ELEKTRONİK TİCARET (E-TİCARET) HUKUKU </div>
                <div className='activity-titel tüketici' onClick={() => history.push('/detail/Tüketici')} >TÜKETİCİ HUKUKU</div>
                <div className='activity-titel imar'  onClick={() => history.push('/detail/Imar')} >IMAR HUKUKU </div>
                <div className='activity-titel sözlesme' onClick={() => history.push('/detail/Sözlesme')}  >SÖZLEŞMELER HUKUKU </div>
                <div className='activity-titel fikir' onClick={() => history.push('/detail/Fikir')} >FİKRİ VE SINAİ MÜLKİYET HUKUKU</div>
                <div className='activity-titel deniz' onClick={() => history.push('/detail/Deniz')}  >DENİZ TİCARETİ HUKUKU</div>
                <div className='activity-titel sirket' onClick={() => history.push('/detail/Sirket')} >ŞİRKETLER HUKUKU</div>
                <div className='activity-titel tip'  onClick={() => history.push('/detail/Tip')} >TIP HUKUKU</div>
                <div className='activity-titel kvkk' onClick={() => history.push('/detail/Kvkk')}  >KİŞİSEL VERİLERİN KORUNMASI</div>
            </div>
        </div>
    )
}

export default Activity
