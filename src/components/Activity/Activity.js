import React, { useState } from 'react'
import './Activity.css'
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Share from './den.jpg'

function Activity() {
    
    const history = useHistory();
    return (
        <div id="services" className='wrapper-all' >
            <h2 className='titel'>FAALİYET ALANLARI</h2>
            <div className='wrapper-titel' >
                <div className="a">
                    <div className='activity-titel kvkk'  >KİŞİSEL VERİLERİN KORUNMASI</div>
                    <div className="aa"  ><p onClick={() => history.push('/detail/kvkk')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel elektro'  >ELEKTRONİK TİCARET (E-TİCARET) HUKUKU </div>
                    <div className="aa" ><p onClick={() => history.push('/detail/eticaret')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel tüketici'  >TÜKETİCİ HUKUKU</div>
                    <div className="aa" ><p  onClick={() => history.push('/detail/tüketici')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel imar'  >İMAR HUKUKU </div>
                    <div className="aa"><p  onClick={() => history.push('/detail/imar')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel sözlesme'   >SÖZLEŞMELER HUKUKU </div>
                    <div className="aa"><p  onClick={() => history.push('/detail/sözlesme')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel fikir' >FİKRİ VE SINAİ MÜLKİYET HUKUKU</div>
                    <div className="aa"  ><p onClick={() => history.push('/detail/fikir')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel deniz'   >DENİZ TİCARETİ HUKUKU</div>
                    <div className="aa" ><p onClick={() => history.push('/detail/deniz')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel sirket'  >ŞİRKETLER HUKUKU</div>
                    <div className="aa" ><p onClick={() => history.push('/detail/sirket')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel tip' >TIP HUKUKU</div>
                    <div className="aa" onClick={() => history.push('/detail/tip')}><p onClick={() => history.push('/detail/tip')} className='curtain'>Detaylar....</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel vergi'  >VERGİ HUKUKU</div>
                    <div className="aa" ><p onClick={() => history.push('/detail/vergi')} className='curtain'>Detaylar....</p></div>
                </div>
            </div>
        </div>
    )
}

export default Activity

