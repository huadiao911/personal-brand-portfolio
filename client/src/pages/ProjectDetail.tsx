/**
 * Project detail: field notes, role clarity and evidence before decoration.
 */
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import FieldworkCarousel, { type FieldworkSlide } from "@/components/FieldworkCarousel";

const assetBase = import.meta.env.BASE_URL + "assets/";

const projectData = {
  taikuixiang: {
    eyebrow: "PROJECT NOTE / 01",
    title: "《台魁巷》：在一个地方待得足够久",
    type: "纪录片 / 跟组制片 / 录音",
    intro: "进入泉州现场，把地方经验、人物关系和生活节奏，慢慢整理成一部可以被观看的内容。",
    role: "跟组制片与录音员",
    result: "腾讯视频上线 · 90分钟人文观察纪录片",
    slides: [
      { src: assetBase + "editorial-hero.webp", alt: "泉州纪录片现场材料（待替换为真实照片）", place: "泉州 · 台魁巷", date: "2021", label: "ON LOCATION / QUANZHOU", caption: "先在地方里待下来，故事才会慢慢出现。" },
      { src: assetBase + "interest-walk.webp", alt: "泉州街巷观察（待替换为真实照片）", place: "泉州 · 田野观察", date: "2021", label: "FIELD NOTE / STREET", caption: "观察人如何生活，也观察一个地方如何说话。" },
      { src: assetBase + "project-archive.webp", alt: "纪录片项目材料（待替换为真实照片）", place: "纪录片现场 · 项目材料", date: "2021", label: "PRODUCTION / ARCHIVE", caption: "把现场信息接住，再把它转译成团队可以使用的材料。" },
    ] as FieldworkSlide[],
    steps: ["田野调研与地方资源联络", "拍摄方案讨论与现场协作", "素材整理、录音与粗剪支持"],
  },
  "ip-training": {
    eyebrow: "PROJECT NOTE / 02",
    title: "让老板本人，成为品牌最可信的入口",
    type: "IP操盘 / 内容培训 / 新媒体",
    intro: "为中小企业老板做 IP 起号与培训，从定位、栏目到镜头前的表达，陪伴一个真实的人找到适合自己的公开表达方式。",
    role: "IP操盘与内容培训",
    result: "定位策略 · 栏目设计 · 表达训练 · 陪跑",
    slides: [
      { src: assetBase + "project-archive.webp", alt: "老板IP项目材料（待替换为真实照片）", place: "中小企业 · IP项目", date: "2026", label: "IP PRACTICE / FIELD NOTE", caption: "不是制造一个人设，而是找到一个人真正能持续表达的入口。" },
      { src: assetBase + "editorial-hero.webp", alt: "内容策略现场（待替换为真实照片）", place: "内容培训 · 现场", date: "2026", label: "WORKSHOP / CONTENT", caption: "把复杂经验拆成栏目、脚本和可以执行的拍摄动作。" },
      { src: assetBase + "interest-walk.webp", alt: "真实人物观察（待替换为真实照片）", place: "品牌现场 · 观察", date: "2026", label: "OBSERVATION / PERSON", caption: "好的内容从真实关系开始，而不是从模板开始。" },
    ] as FieldworkSlide[],
    steps: ["梳理人物经验与品牌问题", "建立内容定位、栏目和表达方式", "陪跑拍摄、复盘并形成可持续节奏"],
  },
  "film-production": {
    eyebrow: "PROJECT NOTE / 03",
    title: "在有限预算里，把难拍的场面拍下来",
    type: "副导演 / 执行制片 / 现场统筹",
    intro: "在《弥漫在空中的时间》剧组，负责顺场景表、分场景表、通告制作、群演招募与现场指挥，把一个复杂的拍摄日变成所有人都能协作的现场。",
    role: "副导演与部分执行制片",
    result: "NYU研究生短片 · 60人群演现场执行",
    slides: [
      { src: assetBase + "interest-walk.webp", alt: "影视现场协作（待替换为真实照片）", place: "片场 · 现场统筹", date: "2022", label: "ON SET / ASSISTANT DIRECTOR", caption: "现场不是控制，而是让每个人知道下一步要发生什么。" },
      { src: assetBase + "project-archive.webp", alt: "拍摄计划与现场材料（待替换为真实照片）", place: "剧组 · 通告与分场", date: "2022", label: "CALL SHEET / PRODUCTION", caption: "把纸面上的场景，变成现场可以执行的路径。" },
      { src: assetBase + "editorial-hero.webp", alt: "片场观察（待替换为真实照片）", place: "光明茶馆 · 拍摄现场", date: "2022", label: "FIELD NOTE / TEA HOUSE", caption: "复杂场面里，最重要的是人与人的关系不被丢掉。" },
    ] as FieldworkSlide[],
    steps: ["顺场景表、分场景表与通告制作", "群演招募、调度和现场指挥", "协调主创、演员、场地与拍摄节奏"],
  },
} as const;

type ProjectKey = keyof typeof projectData;

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projectData[slug as ProjectKey] ?? projectData.taikuixiang;

  return <main className="project-detail-page">
    <header className="project-detail-nav"><a href="/" className="detail-back"><ArrowLeft size={15} /> 返回个人档案</a><span>PROJECT DETAIL / FIELD ARCHIVE</span><a href="mailto:875569322@qq.com">谈一个合作 <ArrowUpRight size={15} /></a></header>
    <section className="project-detail-hero">
      <div className="project-detail-hero-copy"><p className="ref-eyebrow">{project.eyebrow} / {project.type}</p><h1>{project.title}</h1><p>{project.intro}</p><div className="project-detail-facts"><span><b>我的角色</b>{project.role}</span><span><b>结果 / 证据</b>{project.result}</span></div></div>
      <div className="project-detail-marker"><MapPin size={14} /> FIELD NOTE<br /><strong>泉州 / 现场 / 观察</strong></div>
    </section>
    <FieldworkCarousel slides={project.slides} />
    <section className="project-detail-body"><div><p className="ref-eyebrow">MY WORK / WHAT I HELD</p><h2>我在现场，<br /><em>具体负责什么。</em></h2></div><div className="project-detail-steps">{project.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><p>{step}</p></div>)}</div></section>
    <section className="project-detail-note"><p className="ref-eyebrow">FIELD NOTE / THE LONG VIEW</p><blockquote>“好的内容不是把真实变得漂亮，而是让真实有机会被理解。”</blockquote><a href="mailto:875569322@qq.com">如果你有一个正在发生的项目，来聊聊 <ArrowUpRight size={15} /></a></section>
  </main>;
}
