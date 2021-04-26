import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Eticaret, Kvkk, Tip, Sirket, Deniz, Fikir, Sözlesme, Vergi, Imar, Tüketici  } from './Content';

const a = [ 'Eticaret', 'Kvkk', 'Tip', 'Sirket', 'Deniz', 'Fikir', 'Sözlesme', 'Vergi', 'Imar', 'Tüketici']
function Detail() {
    const { area } = useParams();
    
    
    return (
        <div>
            {area == 'Kvkk'  ?  <Kvkk/> : null }
            {area == 'Eticaret'  ?  <Eticaret/> : null }
            {area == 'Tip'  ?  <Tip/> : null }
            {area == 'Sirket'  ?  <Sirket/> : null }
            {area == 'Deniz'  ?  <Deniz/> : null }
            {area == 'Fikir'  ?  <Fikir/> : null }
            {area == 'Sözlesme'  ?  <Sözlesme/> : null }
            {area == 'Vergi'  ?  <Vergi/> : null }
            {area == 'Imar'  ?  <Imar/> : null }
            {area == 'Tüketici'  ?  <Tüketici/> : null }
        </div>
    )
}

export default Detail
