import React, { useRef, useLayoutEffect, useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import './Info.css';

function Info() {
  const detailsRef = useRef(null);
  const [mapHeight, setMapHeight] = useState(0);

  useLayoutEffect(() => {
    if (detailsRef.current) {
      setMapHeight(detailsRef.current.clientHeight - 10);
    }
  }, []);

  return (
    <section id="info" className="info-section">
        <h2 className="reveal">
            店舗情報
            <span className="section-subtitle">INFORMATION</span>
        </h2>

        <div className="info-header-details reveal delay-1">
          <h3>魚とら</h3>
          <a href="tel:046-206-5531" className="phone-button" aria-label="魚とらに電話をかける（046-206-5531）">
            <FiPhone className="phone-icon" /> 046-206-5531
          </a>
        </div>

        <div className="info-content reveal delay-2">
            <div className="map-container" style={{ height: mapHeight > 0 ? `${mapHeight}px` : 'auto' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.0627505262237!2d139.39043552462454!3d35.45324089246654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601855653eea39bf%3A0x34efe3156da566!2z6a2a44Go44KJ!5e0!3m2!1sja!2sjp!4v1759758956081!5m2!1sja!2sjp"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="info-details" ref={detailsRef}>
              <dl>
                  <dt>住所</dt>
                  <dd>〒243-0432 <br />神奈川県海老名市中央1-14-26 <span style={{ display: 'inline-block' }}>オアシス2</span></dd>
                  <dt>アクセス</dt>
                  <dd>JR・小田急・相鉄線海老名駅より徒歩5分</dd>
                  <dt>駐車場</dt>
                  <dd>一台有り</dd>
                  <dt>席数</dt>
                  <dd>カウンター 8席<br />テーブル 3卓（4〜5名席 / 8名席 / 3名席）</dd>
                  <dt>営業時間</dt>
                  <dd>17:00～23:00 (日曜日のみ17:00～22:00) <br />※ラストオーダーは閉店一時間前</dd>
                  <dt>定休日</dt>
                  <dd>毎週火曜日</dd>
              </dl>
            </div>
        
        </div>
    </section>
  );
}

export default Info;