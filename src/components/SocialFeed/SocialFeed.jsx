import React from 'react'; // useEffectは不要になったため削除
import './SocialFeed.css';

const SocialFeed = () => {
  // Lightwidgetのスクリプト読み込みはコメントアウト
  /*
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const scriptElement = document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]');
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);
  */

  return (
    <section id="social-feed" className="social-feed-section">
      <h2 className="section-title reveal">
        最新情報
        <span>LATEST</span>
      </h2>
      <div className="social-feed-container reveal delay-1">
        {/* Lightwidgetのコードはコメントアウト */}
        {/*
        <iframe
          src="//lightwidget.com/widgets/aab6d207e9045c5eb8b86efba8990049.html"
          scrolling="no"
          allowTransparency="true"
          className="lightwidget-widget"
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
        ></iframe>
        */}

        {/* 最初のシンプルなInstagram埋め込みに戻す */}
        <iframe
          title="Instagram Feed"
          src="https://www.instagram.com/uotora.ebina/embed"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          style={{ border: 0, overflow: 'hidden' }} // style属性をJSX形式に修正
        ></iframe>
      </div>

      <div className="social-links">
        <a href="https://www.facebook.com/uotora.ebina/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32px" height="32px">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.69 21.21 10.44 21.92V14.9H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.9H13.56V21.92C18.31 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </a>
        <a href="https://x.com/roku55808309" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32px" height="32px">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SocialFeed;
