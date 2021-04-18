import React from 'react'
import './Activity.css'

function Activity() {
    return (
        <div className='wrapper-all' >
            <h2 className='titel'>FAALİYET ALANLARI</h2>
            <div className='wrapper-titel' >
                <div className='activity-titel elektro' >ELEKTRONİK TİCARET (E-TİCARET) HUKUKU </div>
                <div className='activity-titel tüketici' >TÜKETİCİ HUKUKU</div>
                <div className='activity-titel imar' >İMAR HUKUKU</div>
                <div className='activity-titel vergi' >VERGİ HUKUKU </div>
                <div className='activity-titel sözlesme' >SÖZLEŞMELER HUKUKU </div>
                <div className='activity-titel fikir' >FİKRİ VE SINAİ MÜLKİYET HUKUKU</div>
                <div className='activity-titel deniz' >DENİZ TİCARETİ HUKUKU</div>
                <div className='activity-titel sirket' >ŞİRKETLER HUKUKU</div>
                <div className='activity-titel tip' >TIP HUKUKU</div>
                <div className='activity-titel kvkk' >KİŞİSEL VERİLERİN KORUNMASI</div>
            </div>
        </div>
    )
}

export default Activity
