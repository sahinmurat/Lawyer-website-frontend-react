import React from 'react'
import './About.css'

const About = () => {
    return (
        <div id="about" className='wrapper'>
            <h2 className='aboutTitel' >HAKKIMIZDA</h2>

            <p className='start' >Erol Hukuk & Danışmanlık; güvenilir, güncel gelişmeleri yakından takip eden, müvekkil odaklı ve kaliteli hizmet anlayışı ile faaliyet göstermektedir.  Alanında uzman avukatlar ve iş ortakları ile yerli ve yabancı şirketlere, kurumlara ve bireylere en iyi şekilde hizmet sunmaktadır. Avukatlık hizmeti ve hukuki danışmanlığının sadece ihtilafları çözmek değil, aynı zamanda ihtilafların oluşmasını engellemek olduğu inancıyla yola çıkan Erol Hukuk & Danışmanlık;
            </p>
            {/*Ç Ğ I İ Ş ç ğ ı ş */}
            <p className='punkt'>•Uyuşmazlıkların çözümünde kalıplara bağlı yaklaşımın yerine geniş bir vizyon ve süratle çözümlere ulaşmak amacıyla hareket etmeyi prensip edinerek,</p>

            <p className='punkt'>•Müvekkil ile kurulacak ilişkinin ilk kuralının, mesleki ve özel hayata dair paylaşılan tüm bilgilerin gizlilik çerçevesinde, özenle saklanması gerektiği bilincine sahip olarak,</p>

            <p className='punkt' id='letzte_punkt'>•Başlanan hukuksal sürecin her aşamasında müvekkili bilgilendirme prensibiyle hareket ederek hizmet veren bir hukuk ve danışmanlık ofisidir.</p>

            {/* <p className='summary' >Erol Hukuk & Danışmanlık; Kişisel Verilerin Korunması Hukuku, Tıp Hukuku, Şirketler Hukuku, Deniz Ticaret Hukuku, Fikri ve Sınai Mülkiyet Hukuku, Sözleşmeler Hukuku, Vergi Hukuku, İmar Hukuku, Tüketici Hukuku ve Elektronik Ticaret (E-Ticaret) Hukuku alanlarında faaliyet göstermektedir.</p> */}

        </div>
    )
}

export default About
