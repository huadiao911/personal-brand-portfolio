/**
 * Interface reference board — intentionally isolated from the formal homepage.
 * Identity: cross-disciplinary content partner, not filmmaker as a job title.
 */
import { ArrowUpRight, Check, ChevronRight, Compass, FlaskConical, Layers3, Mail, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import "./reference.css";

const assetBase = import.meta.env.BASE_URL + "assets/";

type Direction = "partner" | "lab" | "archive";

const directionData: Record<Direction, { label: string; title: string; subtitle: string; color: string; icon: typeof Compass; promise: string; strengths: string[] }> = {
  partner: { label: "A / CONTENT PARTNER", title: "把复杂的事，变成能被理解、参与和传播的内容。", subtitle: "为中小企业、品牌与文化项目，做内容策略、IP 表达与制作协作", color: "partner", icon: Compass, promise: "适合需要把品牌、老板和项目说清楚的合作方。", strengths: ["合作价值清晰", "商业转化直接", "个人气质温暖可靠"] },
  lab: { label: "B / CONTENT LAB", title: "正在做什么，比已经完成什么更接近真实的我。", subtitle: "IP 实验 · 短剧写作 · AI 影像 · 在地观察", color: "lab", icon: FlaskConical, promise: "最适合长期积累你的研究、试验和跨领域创作。", strengths: ["持续更新空间大", "能容纳 AI 与短剧", "更有个人表达"] },
  archive: { label: "C / PROJECT ARCHIVE", title: "把经验变成可被信任的证据。", subtitle: "项目管理 · 影视协作 · 内容执行 · 结果复盘", color: "archive", icon: Layers3, promise: "最适合合作方快速判断你的经验、角色与执行能力。", strengths: ["专业判断快速", "案例结构清楚", "适合复杂项目"] },
};

export default function Reference() {
  const [active, setActive] = useState<Direction>("partner");
  const data = directionData[active];
  const Icon = data.icon;

  return <main className={`reference-page ref-${active}`}>
    <header className="reference-nav"><a href="/" className="reference-wordmark"><span>〔</span> B·B·J <span>〕</span><b>界面参考 / 未确认稿</b></a><a className="reference-back" href="#compare">先比较方向 <ChevronRight size={15} /></a></header>

    <section className="reference-intro"><div className="reference-intro-copy"><p className="ref-eyebrow"><Sparkles size={14} /> PERSONAL BRAND INTERFACE STUDY</p><h1>不是选择一个职业，<br /><em>而是选择一种被理解的方式。</em></h1><p>这是一份独立的界面参考稿。它不修改正式网站，只用来比较三种更准确的个人品牌表达：内容合作者、内容实验室、项目档案。</p></div><div className="ref-index">REF<br /><strong>03</strong><span>SCROLL TO<br />COMPARE</span></div></section>

    <section className="client-fit"><span className="client-fit-label">适合正在找谁</span><div><b>需要把品牌说清楚的老板</b><small>定位 / 栏目 / 表达训练</small></div><div><b>需要内容共创的品牌团队</b><small>策划 / 脚本 / 拍摄协作</small></div><div><b>需要可靠执行力的文化项目</b><small>制片 / 现场 / 故事开发</small></div></section>

    <section className="fieldwork-lead"><div className="fieldwork-copy"><p className="ref-eyebrow">FIELDWORK / HOW I LOOK</p><h2>先进入现场，<br /><em>再决定如何表达。</em></h2><p>我关心的不只是一个项目最后长什么样，也关心人如何相遇、地方如何留下痕迹，以及那些尚未被说清楚的经验，怎样变成可以继续发生的内容。</p><div className="fieldwork-notes"><span><b>01</b>进入现场</span><span><b>02</b>观察关系</span><span><b>03</b>转译经验</span></div></div><div className="fieldwork-image"><img src={assetBase + "interest-walk.webp"} alt="田野观察与行走记录" /><span>FIELD NOTE / 018<br />观察不是旁观</span></div></section>

    <section className="compare-section" id="compare"><div className="compare-head"><div><p className="ref-eyebrow">THREE WAYS TO BE UNDERSTOOD</p><h2>先看我如何工作，<br />再决定如何合作。</h2></div><p>三种方向都不把你包装成单一职业。影视项目是能力证据，而 IP、内容、写作、AI 和田野共同构成你可以持续发展的合作能力。</p></div><div className="direction-switcher">{(Object.keys(directionData) as Direction[]).map((key) => { const item = directionData[key]; const DirectionIcon = item.icon; return <button className={active === key ? "is-active" : ""} key={key} onClick={() => setActive(key)}><DirectionIcon size={17} /><span>{item.label}</span><small>{item.promise}</small></button>; })}</div></section>

    <section className={`direction-preview preview-${active}`}><div className="preview-rail"><span>0{active === "partner" ? 1 : active === "lab" ? 2 : 3}</span><span>{data.label}</span><span className="preview-rail-line" /><span>BINGJING<br />BIAN</span></div><div className="preview-main"><div className="preview-hero"><div className="preview-hero-copy"><p className="preview-label"><Icon size={14} /> {data.label}</p><h2>{data.title}</h2><p>{data.subtitle}</p><div className="preview-actions"><span>查看项目 <ArrowUpRight size={14} /></span><span>谈一个合作 <ArrowUpRight size={14} /></span></div></div><div className="preview-hero-art"><div className="art-frame"><img src={assetBase + "editorial-hero.webp"} alt="界面参考主视觉" /><span>FIELD NOTE / 014<br />泉州 · 2024.06</span></div><div className="art-circle" /><div className="art-word">B·B·J</div></div></div><div className="preview-proof"><span>合作方可以找我做什么</span><div><strong>01</strong><b>老板 IP 起号与表达培训</b><small>把个人经验变成可持续的内容系统</small></div><div><strong>02</strong><b>品牌内容与新媒体项目</b><small>从策略、脚本到现场与发布协作</small></div><div><strong>03</strong><b>影视协作、短剧与 AI 实验</b><small>把故事、人物和新工具放进真实项目</small></div></div><div className="preview-projects"><div className="preview-section-title"><span>SELECTED PROJECTS</span><a href="#contact">全部项目 <ArrowUpRight size={13} /></a></div><div className="preview-project-grid"><article className="preview-project project-feature"><div className="project-visual visual-red"><span>01</span><b>《台魁巷》</b><small>纪录片 / 跟组制片与录音</small></div><p>长期进入现场，把地方经验转成可以被观看的内容。<br /><small>我的角色：跟组制片 / 录音协作</small></p></article><article className="preview-project"><div className="project-visual visual-photo"><img src={assetBase + "project-archive.webp"} alt="项目过程参考" /><span>02</span></div><p>老板 IP 起号与培训<br /><small>内容策略 / 表达训练 / 陪跑</small></p></article><article className="preview-project"><div className="project-visual visual-green"><span>03</span><b>枫林游魂</b><small>实景互动游戏 / 村庄联动</small></div><p>把地方、故事与参与感放进一次真实体验。<br /><small>项目类型：实景互动游戏 / 村庄联动</small></p></article></div></div><div className="preview-lower"><div><span className="preview-kicker">FIELD NOTES / LONG VIEW</span><h3>从地方经验与现场观察，<br />走到内容、IP与 AI 实验。</h3></div><div className="preview-timeline"><span>2017—2022</span><b>地方项目与影视现场</b><span>2023—现在</span><b>IP 主理与跨领域内容</b><span>接下来</span><b>短剧、AI 与新的合作</b></div></div><div className="preview-contact" id="contact"><div><span className="preview-kicker">OPEN INVITATION</span><h3>如果你有一个<br /><em>需要被说清楚的问题，</em><br />可以来聊聊。</h3></div><a href="mailto:875569322@qq.com"><Mail size={17} /> 875569322@qq.com <ArrowUpRight size={16} /></a></div></div></section>

    <footer className="reference-footer"><span>界面参考稿 / 只用于确认方向</span><span>选择方向后，再进入正式网站重构</span><a href="mailto:875569322@qq.com">反馈你的偏好 <ArrowUpRight size={14} /></a></footer>
  </main>;
}
