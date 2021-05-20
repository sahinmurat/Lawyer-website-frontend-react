import React, { useState } from 'react'
import './Activity.css'
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Share from './den.jpg'

function Activity() {
    const [curtain, setCurtain] = useState(false);
    const url = {
        share: {
            link: "https://sharewithreact.vercel.app/",
            github: "https://github.com/abdullahclarusway/React_Share",
        },
        netflix: {
            link: "https://netflix-clone-with-react.vercel.app/",
            github: "https://github.com/abdullahclarusway/Netflix_Clone_with_React",
        },
        job: {
            link: "https://job-search-abdullahclarusway.vercel.app/",
            github: "https://github.com/abdullahclarusway/Job_Search_with_React",
        },
        clothing: {
            link: "https://lighthouse-clothing.vercel.app/",
            github:
                "https://github.com/abdullahclarusway/Lighthouse_Clothing_E_Commerce",
        },
        linkedIn: {
            link: "https://my-linkedln-abdullahclarusway.vercel.app/",
            github:
                "https://github.com/abdullahclarusway/Linkedln_Clone_with_REACT.JS",
        },
        facebook: {
            link: "https://facebook-clone-abdullahclarusway.vercel.app/",
            github: "https://github.com/abdullahclarusway/Facebook_Clone_with_REACT",
        },
    };
    const history = useHistory();
    const { savedjobs } = useParams();
    return (
        <div id="services" className='wrapper-all' >
            <h2 className='titel'>FAALİYET ALANLARI</h2>
            <div className='wrapper-titel' >
                <div className="a">
                    <div className='activity-titel kvkk' onClick={() => history.push('/detail/kvkk')}  >KİŞİSEL VERİLERİN KORUNMASI</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel elektro' onClick={() => history.push('/detail/eticaret')} >ELEKTRONİK TİCARET (E-TİCARET) HUKUKU </div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel tüketici' onClick={() => history.push('/detail/tüketici')} >TÜKETİCİ HUKUKU</div>
                </div>
                <div className="a">
                    <div className='activity-titel imar' onClick={() => history.push('/detail/imar')} >IMAR HUKUKU </div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel sözlesme' onClick={() => history.push('/detail/sözlesme')}  >SÖZLEŞMELER HUKUKU </div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel fikir' onClick={() => history.push('/detail/fikir')} >FİKRİ VE SINAİ MÜLKİYET HUKUKU</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel deniz' onClick={() => history.push('/detail/deniz')}  >DENİZ TİCARETİ HUKUKU</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel sirket' onClick={() => history.push('/detail/sirket')} >ŞİRKETLER HUKUKU</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel tip' onClick={() => history.push('/detail/tip')} >TIP HUKUKU</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
                <div className="a">
                    <div className='activity-titel vergi' onClick={() => history.push('/detail/vergi')} >VERGI HUKUKU</div>
                    <div className="aa"><p>Detaylar...</p></div>
                </div>
            </div>
        </div>
    )
}

export default Activity

