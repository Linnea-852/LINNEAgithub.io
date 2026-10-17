import { useState } from 'react'

export default function Contact() {
  const [wechatOpen, setWechatOpen] = useState(false)

  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <div className="airmail" aria-hidden="true">
          AIR
          <br />
          MAIL
        </div>

        <div className="contact-copy">
          <p className="ready">
            <span className="ping" aria-hidden="true" />
            READY TO CHAT?
          </p>
          <h2>来和我聊聊想法，或是喝杯咖啡 ☕</h2>
          <p>不管是项目合作、设计咨询，还是单纯交流手绘技巧，都欢迎随时写信！</p>
        </div>

        <div className="contact-pills">
          <a className="pill" href="mailto:linnea.design@studio.io">
            <span className="material-symbols-outlined">drafts</span>
            linnea.design@studio.io
          </a>
          <a className="pill" href="https://github.com" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>
          <div className={wechatOpen ? 'wechat is-open' : 'wechat'}>
            <button type="button" className="pill" onClick={() => setWechatOpen((open) => !open)}>
              <span className="material-symbols-outlined">chat</span>
              微信 (WeChat)
            </button>
            <p className="wechat-tip" role="status">
              WeChat ID: Linnea_Creative
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
