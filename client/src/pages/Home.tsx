/**
 * Personal archive homepage: documentary field notes, selected work and public screening links.
 */
import { ArrowUpRight, MapPin, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";

const assetBase = import.meta.env.BASE_URL + "assets/";

const projects = [
  {
    number: "01",
    type: "纪录片 / 跟组制片 / 录音",
    title: "《台魁巷》：在一个地方待得足够久",
    description:
      "腾讯人文纪录片泉州组跟组制片与录音员。参与田野调研、地方资源联络、拍摄方案讨论、素材整理与粗剪，陪伴一部90分钟人文观察纪录片从现场走向上线。",
    result: "腾讯视频上线 · 90分钟人文纪录片",
    image: assetBase + "editorial-hero.webp",
    tone: "wide",
    watchUrl:
      "https://m.v.qq.com/play.html?vid=i0035ylhzmo&cid=mzc00200uie2ke8",
  },
  {
    number: "02",
    type: "IP操盘 / 内容培训 / 新媒体",
    title: "让老板本人，成为品牌最可信的入口",
    description:
      "最近3个月与朋友合作，为中小企业老板做IP起号与培训：从定位、内容栏目到拍摄表达，帮助真实的人找到适合自己的公开表达方式。",
    result: "老板IP起号 · 内容策略 · 培训陪跑",
    image: assetBase + "project-archive.webp",
    tone: "portrait",
  },
  {
    number: "03",
    type: "副导演 / 执行制片 / 现场统筹",
    title: "在有限预算里，把难拍的场面拍下来",
    description:
      "在《弥漫在空中的时间》剧组担任副导演及部分执行制片，负责顺场景表、分场景表、通告制作、群演招募与现场指挥，完成光明茶馆60人群演与真实茶客共处的复杂场景。",
    result: "NYU研究生短片 · 现场执行 · 群演调度",
    image: assetBase + "interest-walk.webp",
    tone: "portrait",
  },
];

const featureScreenings = [
  {
    number: "01",
    platform: "腾讯视频",
    title: "《天时·戊戌志》之《台魁巷》",
    detail: "第 4 集 · 泉州篇｜跟组制片与录音",
    href: "https://m.v.qq.com/play.html?vid=i0035ylhzmo&cid=mzc00200uie2ke8",
  },
  {
    number: "02",
    platform: "腾讯视频",
    title: "《江河记忆》",
    detail: "抗疫纪录片｜剪辑助理与素材梳理",
    href: "https://m.v.qq.com/play.html?vid=o3162wqwtbb&ptag=v_qq_com%23v.play.adaptor%233",
  },
  {
    number: "03",
    platform: "央视网",
    title: "《土地，我们的故事》",
    detail: "西藏克松村｜导演助理 / 执行导演",
    href: "https://tv.cctv.com/2021/10/03/VIDEGGCMl36unRacaX4ufLQK211003.shtml?spm=C55953877151.P6jz8iicGNuM.0.0",
  },
];

const shortFormScreenings = [
  { label: "2019 自主拍摄剪辑 / 01", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDQwODU3MTYxNg==.html" },
  { label: "2019 自主拍摄剪辑 / 02", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDQwODU1ODg4NA==.html" },
  { label: "2019 自主拍摄剪辑 / 03", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDM5OTA3NTEwMA==.html" },
  { label: "2019 自主拍摄剪辑 / 04", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDMxMzA3OTUyNA==.html" },
  { label: "2020 自主拍摄剪辑 / 01", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDk4MDM2NDQ1Ng==.html" },
  { label: "2020 自主拍摄剪辑 / 02", platform: "优酷", href: "https://v.youku.com/v_show/id_XNDc3MjE3OTM0OA==.html" },
  { label: "端午 · 长乐三溪夜赛龙舟纪实", platform: "抖音", href: "https://v.douyin.com/iMGEVgpV/" },
  { label: "勤佛 · 泉州开元寺", platform: "抖音", href: "https://v.douyin.com/iMGoy1DC/" },
  { label: "一茶书房小助手 · 内容笔记", platform: "小红书", href: "http://xhslink.com/JRNHyR" },
  { label: "人物短片 · 编导与剪辑", platform: "抖音", href: "https://v.douyin.com/iP1twNoQ/" },
];

const timeline = [
  { year: "现在", title: "IP操盘手 / 短剧写作者 / AI研究者", copy: "为中小企业老板提供IP起号与培训；持续写短剧剧本，研究AI如何进入剧本、影像与内容生产。" },
  { year: "2023—至今", title: "泉州四时好风光 · IP主理人", copy: "负责品牌短视频、视频号与小红书内容，参与研学课程、空间运营、宣传物料与直播团队协作。" },
  { year: "2021—2022", title: "导演 / 编导 / 创意部主管", copy: "在完美映像负责企宣片策划、脚本、现场执行、制片与短视频质量把控，并组织内部内容培训。" },
  { year: "2017—2021", title: "纪录片与影视现场", copy: "参与《台魁巷》《前浪》《江河记忆》《海鲜英雄》等项目，承担制片、录音、剪辑助理、商务制片与地方协调。" },
  { year: "2014—2016", title: "从人和地方开始观察", copy: "从旅游、自然教育、社区关系与研学项目进入内容行业，后来把田野经验带进纪录片和品牌内容。" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell future-home">
      <aside className="side-rail">
        <div className="rail-top">
          <a href="#top" className="monogram" aria-label="回到首页"><img src={assetBase + "editorial-mark.webp"} alt="卞冰晶个人品牌标志" /></a>
          <span className="rail-kicker">PERSONAL<br />ARCHIVE / 26</span>
        </div>
        <div className="rail-middle">
          <p className="rail-wordmark"><span>〔</span> B·B·J <span>〕</span></p>
          <p className="rail-name">卞冰晶</p>
          <p className="rail-role">内容策划与制作<br />IP操盘 / 影视协作 / AI实验</p>
        </div>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#about"><span>01</span>我是谁</a>
          <a href="#film"><span>02</span>电影项目</a>
          <a href="#screenings"><span>03</span>视频作品</a>
          <a href="#work"><span>04</span>代表项目</a>
          <a href="#story"><span>05</span>经历轨迹</a>
          <a href="#contact"><span>07</span>一起工作</a>
        </nav>
        <div className="rail-bottom"><span>SCROLL TO EXPLORE</span><span className="rail-line" /><a className="rail-contact" href="mailto:875569322@qq.com">CONTACT / EMAIL</a><span>© 2026 BINGJING BIAN</span></div>
      </aside>

      <div className="mobile-topbar">
        <a href="#top" className="mobile-brand"><img src={assetBase + "editorial-mark.webp"} alt="" /> 卞冰晶</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "关闭菜单" : "打开菜单"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        {menuOpen && <nav className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>01 / 我是谁</a>
          <a href="#film" onClick={() => setMenuOpen(false)}>02 / 电影项目</a>
          <a href="#screenings" onClick={() => setMenuOpen(false)}>03 / 视频作品</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>04 / 代表项目</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>05 / 经历轨迹</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>07 / 一起工作</a>
        </nav>}
      </div>

      <div className="content-column" id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="red-dot" /> 内容策划与制作 / IP操盘 / 影视协作</p>
            <h1>我在内容、IP<br />与影像之间<br /><em>工作。</em></h1>
            <p className="hero-intro">从纪录片的田野与现场，到老板IP的起号和培训；从短剧剧本写作，到 AI 影像实验。我喜欢把复杂的人和事，整理成可以被看见、被理解、也能继续发生的内容。</p>
            <div className="hero-actions"><a className="primary-cta" href="#work">查看代表项目 <MoveUpRight size={17} /></a><a className="text-cta" href="#contact">聊聊你的项目 <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="hero-image-wrap"><img src={assetBase + "editorial-hero.webp"} alt="桌面上的个人创作档案与编辑材料" /><span className="image-note">FIELD NOTE / 001<br />QUANZHOU · 2024.06<br />MAKE THE INVISIBLE CLEAR</span></div>
          <div className="hero-index">B—01<br /><span>CONTENT / IP<br />/ IMAGE</span></div>
        </section>

        <section className="film-section section-pad" id="film">
          <div className="film-archive-mark">B—02<br /><span>FILM / FIELD<br />NOTE / 2026</span></div>
          <div className="film-heading">
            <div>
              <div className="section-label"><span>02</span><span>OFFICIAL SELECTION / 影展入围</span></div>
              <h2>从一块黑色的石头，<br /><em>开始一部电影。</em></h2>
              <div className="film-roles"><span>跟组制片</span><span>现场协调</span><span>声音记录</span><span>主创档案</span></div>
            </div>
            <p className="film-summary">电影《黑豆》入围 <strong>Toronto International Film Festival 2026</strong>。这里收录一张入围海报，以及开机现场留下的第一张合影。</p>
          </div>
          <div className="film-gallery">
            <a className="film-poster" href="/manus-storage/official-selection-poster_5f0ef0a6.jpg" target="_blank" rel="noreferrer"><img src="/manus-storage/official-selection-poster_5f0ef0a6.jpg" alt="电影《黑豆》多伦多国际电影节入围海报" /><span className="film-caption">POSTER / OFFICIAL SELECTION <ArrowUpRight size={15} /></span></a>
            <a className="film-still" href="/manus-storage/behind-the-scenes_2cf97118.jpg" target="_blank" rel="noreferrer"><img src="/manus-storage/behind-the-scenes_2cf97118.jpg" alt="电影《黑豆》开机现场主创团队合影" /><span className="film-caption">ON SET / FIRST DAY <ArrowUpRight size={15} /></span></a>
          </div>
          <div className="film-meta"><span>《黑豆》 / A FILM BY TENZIN SEDON</span><span>入围 · 多伦多国际电影节 2026</span><span>ARCHIVE 02 / POSTER + ON-SET EVIDENCE</span></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-label"><span>01</span><span>ABOUT / 我是谁</span></div>
          <div className="intro-grid">
            <h2>我不只负责<br /><span>“做出来”。</span></h2>
            <div className="intro-body"><p>我更在意事情为什么值得做、应该从哪里开始，以及怎样让一个想法在真实世界里产生作用。</p><p>我有11年工作经验，其中6—8年持续在纪录片、TVC、新媒体和内容制作现场工作。做过执行制片、商务制片、导演、编导、录音、剪辑助理，也做过空间运营、研学课程和品牌IP。</p><p>这些看起来不同的经验，最后都指向同一件事：在真实的人、地方、组织和目标之间建立连接。</p><EditorialTags /></div>
          </div>
          <div className="proof-strip"><div><strong>11</strong><span>年工作经验</span></div><div><strong>6—8</strong><span>年影视与内容制作</span></div><div><strong>194万</strong><span>项目方案获得经费</span></div><div><strong>01</strong><span>部参与制作并入围圣丹斯的影片</span></div></div>
        </section>

        <section className="screening-section section-pad" id="screenings">
          <div className="screening-heading">
            <div className="section-label"><span>03</span><span>WATCH LIST / 作品放映入口</span></div>
            <h2>不只写进档案，<br /><em>也可以直接观看。</em></h2>
            <p>所有按钮均会在新标签页打开原平台的播放页面。已收录纪录片、电视栏目与个人短视频作品。</p>
          </div>
          <div className="feature-screenings">
            {featureScreenings.map((video) => <article className="feature-screening" key={video.href}>
              <div><span className="screening-number">{video.number}</span><p className="screening-platform">{video.platform}</p><h3>{video.title}</h3><p className="screening-detail"><span>ROLE / </span>{video.detail}</p></div>
              <a className="watch-link" href={video.href} target="_blank" rel="noreferrer">观看视频 <ArrowUpRight size={16} /></a>
            </article>)}
          </div>
          <div className="short-form-index">
            <div className="short-form-title"><span>SHORT FORM / 自主影像与新媒体</span><p>2019—2024，自拍自剪、品牌内容与人物短片。</p></div>
            <div className="short-form-links">{shortFormScreenings.map((video) => <a href={video.href} target="_blank" rel="noreferrer" key={video.href}><span>{video.label}</span><i>{video.platform}</i><ArrowUpRight size={15} /></a>)}</div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div className="section-label"><span>04</span><span>SELECTED WORK / 代表项目 / FIELD TRACE</span></div><p>我做过的事情不止一种，<br />但都从一个真实问题出发。</p></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-number">{project.number}</span></div><div className="project-meta"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-result">{project.result}</p>{project.watchUrl && <a className="project-watch" href={project.watchUrl} target="_blank" rel="noreferrer">观看《台魁巷》 <ArrowUpRight size={15} /></a>}<EditorialTags compact /></div></article>)}</div>
          <div className="archive-footer"><span>影展入围 / 现场执行 / IP培训 / 内容研究 / 泉州观察</span><a href="#screenings">查看全部视频作品 <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="story-section section-pad" id="story"><div className="section-label"><span>05</span><span>THE LONG VIEW / 经历轨迹</span></div><div className="story-layout"><div className="story-lead"><h2>我走过的路，<br /><em>还在影响我怎么工作。</em></h2><p>经历不是一串职位名称，而是一次次面对不确定性时，留下来的判断。</p><div className="story-note">“我习惯先到现场，再决定应该怎样讲述。”<small>FIELD TRACE / 泉州 · 人物 · 关系</small></div></div><div className="timeline">{timeline.map((item) => <div className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div></div></section>

        <section className="interests-section section-pad"><div className="section-label"><span>06</span><span>OFF THE CLOCK / 兴趣与研究</span></div><div className="interest-grid"><div><h2>工作之外，<br />我在继续研究<br /><em>什么？</em></h2><p>我看过1000多部电影，保持日均阅读，关注文史哲、心理学、管理与商业；也持续参与泉州在地文化、社区营造与田野调查。最近，我在研究AI如何改变剧本、影像和内容生产。</p><div className="interest-list"><span>电影与短剧剧本</span><span>AI影像实验</span><span>泉州在地文化</span><span>田野与社区营造</span><span>阅读与做笔记</span><span>自然教育与旅行</span></div></div><img src={assetBase + "interest-walk.webp"} alt="沿着海边散步的日常观察" /></div></section>

        <section className="contact-section section-pad" id="contact"><div className="contact-top"><div className="section-label"><span>07</span><span>OPEN INVITATION / 一起工作</span></div><span className="contact-stamp">LET'S MAKE<br />SOMETHING<br /><i>WORTH KEEPING.</i></span></div><h2>如果你正在为一个人、<br />一个品牌或一个故事<br /><em>寻找更好的表达，</em><br />我们可以聊聊。</h2><div className="contact-bottom"><a className="email-link" href="mailto:875569322@qq.com">875569322@qq.com <ArrowUpRight size={19} /></a><div className="contact-links"><a href="#top">回到顶部 <ArrowUpRight size={14} /></a><a href="mailto:875569322@qq.com">发邮件 <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div></div></section>
        <footer><span>〔 B·B·J 〕/ 卞冰晶 / PERSONAL ARCHIVE</span><span>Content, IP &amp; image — still in progress.</span><span><MapPin size={13} /> 泉州 / 福州 / 可协作</span></footer>
      </div>
    </main>
  );
}

function EditorialTags({ compact = false }: { compact?: boolean }) {
  return <div className={`editorial-tags ${compact ? "compact" : ""}`}><span>{compact ? "我的角色" : "现场感"}</span><span>{compact ? "关键判断" : "叙事力"}</span><span>{compact ? "结果证据" : "执行力"}</span></div>;
}
