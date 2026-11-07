import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Atom, Award, BookOpen, Brain, CalendarCheck,
  CheckCircle2, ChevronRight, Compass, GraduationCap, HeartHandshake,
  MessageCircle, ShieldCheck, Sparkles, Target, Timer, TrendingUp, Users,
  Video, Leaf, Flame, NotebookPen
} from "lucide-react";

const pillars = [
  { icon: MessageCircle, title: "Doubts, without the hesitation", text: "Bring the question you are stuck on. Get a clearer way to think about it and move ahead." },
  { icon: HeartHandshake, title: "Mentorship with context", text: "Get support that considers your goals, preparation stage and the work behind your scores." },
  { icon: Target, title: "A plan you can actually follow", text: "Turn a big JEE target into manageable study priorities, revision and practice." },
  { icon: Timer, title: "Focus that feels intentional", text: "Create a calmer study rhythm with dedicated focus spaces and mindful breaks." },
];

const steps = [
  { n: "01", title: "Understand where you are", text: "Share your target, current routine and the topics that feel difficult." },
  { n: "02", title: "Find your next right step", text: "Work through doubts, plan focused practice and build a realistic weekly rhythm." },
  { n: "03", title: "Review. Refine. Repeat.", text: "Reflect on progress, learn from mock tests and adjust your preparation with purpose." },
];

export default function Home() {
  return (
    <main className="shell jee-home">
      <section className="jee-hero">
        <div className="jee-hero-glow" />
        <div className="container jee-hero-grid">
          <div className="jee-hero-copy">
            <div className="jee-kicker"><span className="jee-kicker-star"><Sparkles size={13}/></span> YOUR JEE JOURNEY, WITH DIRECTION</div>
            <h1>Big dreams need<br/><em>the right guidance.</em></h1>
            <p className="jee-hero-lead">JEE preparation is more than solving questions. Build clarity, consistency and confidence with a mentorship space designed around the student behind the score.</p>
            <div className="jee-hero-actions">
              <Link href="/signup" className="btn btn-primary">Begin your journey <ArrowUpRight size={17}/></Link>
              <Link href="/guidance" className="jee-text-link">Explore the Guidance Room <ArrowRight size={16}/></Link>
            </div>
            <div className="jee-hero-assurances">
              <span><CheckCircle2 size={15}/> Student-first</span>
              <span><CheckCircle2 size={15}/> Mentorship-led</span>
              <span><CheckCircle2 size={15}/> Progress at your pace</span>
            </div>
          </div>
          <div className="jee-visual" aria-label="Illustration of a student's preparation dashboard">
            <div className="jee-visual-orbit orbit-a"/><div className="jee-visual-orbit orbit-b"/>
            <div className="jee-floating-chip chip-top"><span className="chip-icon"><Atom size={17}/></span><span><b>Concept clarity</b><small>One idea at a time</small></span></div>
            <div className="jee-floating-chip chip-side"><span className="chip-icon chip-icon-gold"><Flame size={17}/></span><span><b>Keep showing up</b><small>Consistency over intensity</small></span></div>
            <div className="jee-dashboard-card">
              <div className="jee-dashboard-head"><div><span className="mini-overline">YOUR PREPARATION SPACE</span><h3>Today's direction</h3></div><span className="jee-dashboard-mark"><GraduationCap size={20}/></span></div>
              <div className="jee-focus-task"><span className="task-dot"/><div><b>Make concepts stick</b><small>Physics · Mechanics</small></div><span className="task-arrow"><ChevronRight size={17}/></span></div>
              <div className="jee-progress-label"><span>Weekly rhythm</span><b>Build it day by day</b></div>
              <div className="jee-week"><i className="done"/><i className="done"/><i className="today"/><i/><i/><i/><i/></div>
              <div className="jee-dashboard-foot"><span><BookOpen size={14}/> Learn with intent</span><span><Leaf size={14}/> Take a breath</span></div>
            </div>
            <div className="jee-visual-caption"><span className="caption-spark">✳</span> A little progress, every day.</div>
          </div>
        </div>
        <div className="jee-hero-bottom"><div className="container jee-hero-bottom-inner"><span>CLARITY <b>·</b> CONSISTENCY <b>·</b> CONFIDENCE</span><span>For the journey to JEE Main & Advanced</span></div></div>
      </section>

      <section className="jee-intro container">
        <div className="jee-intro-mark"><Compass size={22}/></div>
        <div><div className="eyebrow">A better way to prepare</div><h2>Because your JEE journey deserves more than a timetable.</h2></div>
        <p>There will be tough chapters, unexpected mock scores and days when motivation runs low. You deserve a place that helps you find perspective, ask freely and keep moving forward.</p>
      </section>

      <section className="jee-pillars-section">
        <div className="container">
          <div className="jee-section-heading"><div><div className="eyebrow">Support for the whole journey</div><h2>Everything works better<br/><em>when it works together.</em></h2></div><p>Not another pile of features. A connected ecosystem to help you learn, focus and grow with intention.</p></div>
          <div className="jee-pillar-grid">{pillars.map(({icon:Icon,title,text},i)=><article className="jee-pillar-card" key={title}><div className={`jee-pillar-icon tone-${i}`}><Icon size={21}/></div><span className="jee-card-index">0{i+1}</span><h3>{title}</h3><p>{text}</p><Link href={i===0?"/guidance":i===1?"/mentors":i===2?"/dashboard":"/focus-room"}>Discover more <ArrowUpRight size={14}/></Link></article>)}</div>
        </div>
      </section>

      <section className="jee-method-section container">
        <div className="jee-method-art"><div className="method-leaf leaf-one">✳</div><div className="method-leaf leaf-two">✳</div><div className="method-center"><span>IQ</span><small>ASPIRANTS</small></div><div className="method-note note-one"><Target size={16}/> Your goal</div><div className="method-note note-two"><NotebookPen size={16}/> Your plan</div><div className="method-note note-three"><TrendingUp size={16}/> Your progress</div></div>
        <div className="jee-method-copy"><div className="eyebrow">Small steps. Meaningful momentum.</div><h2>Make preparation feel <em>more manageable.</em></h2><p>Strong outcomes are built through repeatable habits: understanding concepts, practising deliberately, reviewing mistakes and asking for help when you need it.</p><div className="jee-steps">{steps.map(s=><div className="jee-step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div><Link href="/signup" className="btn btn-primary">Create your student space <ArrowUpRight size={16}/></Link></div>
      </section>

      <section className="jee-guidance-band">
        <div className="container jee-guidance-inner"><div className="jee-guidance-copy"><div className="eyebrow">You don't have to figure it all out alone</div><h2>One question can change<br/>the way you see a topic.</h2><p>Step into the Guidance Room to explore student discussions, share what you're working through and find a more thoughtful way forward.</p><Link href="/guidance" className="btn jee-light-btn">Visit the Guidance Room <ArrowUpRight size={16}/></Link></div><div className="jee-guidance-art"><div className="guidance-chat chat-one"><span className="chat-avatar">S</span><div><b>Can someone explain this differently?</b><small>Physics · Concept discussion</small></div></div><div className="guidance-chat chat-two"><span className="chat-avatar mentor-avatar"><GraduationCap size={16}/></span><div><b>Let's break it down, step by step.</b><small>A clearer approach starts here</small></div></div><div className="guidance-chat chat-three"><MessageCircle size={17}/><span>Curiosity is always welcome.</span></div><div className="guidance-orbit-ring"/></div></div>
      </section>

      <section className="jee-values container"><div className="eyebrow">A space that sees the student</div><h2>Ambition, with room to breathe.</h2><p className="jee-values-lead">Your worth is not a mock-test score. We believe in serious preparation, kind conversations and sustainable progress.</p><div className="jee-values-grid"><div><ShieldCheck/><b>A thoughtful community</b><span>Respectful conversations and a student-first environment.</span></div><div><Brain/><b>Learn beyond the answer</b><span>Build understanding, not just a habit of chasing solutions.</span></div><div><Video/><b>Support that connects</b><span>Bring your questions and connect with the wider learning experience.</span></div><div><Award/><b>Celebrate the process</b><span>Recognise consistency, reflection and every meaningful step.</span></div></div></section>

      <section className="container jee-final-cta"><div className="jee-final-card"><div className="jee-final-orb"/><div className="jee-final-content"><span className="jee-final-kicker"><Sparkles size={14}/> YOUR NEXT CHAPTER</span><h2>Start with where you are.<br/><em>Grow into where you want to be.</em></h2><p>Take the first step towards a more supported JEE preparation journey.</p><div className="jee-final-actions"><Link href="/signup" className="btn jee-final-button">Get started <ArrowUpRight size={17}/></Link><Link href="/signin" className="jee-final-signin">Already a member? Sign in <ArrowRight size={15}/></Link></div></div><div className="jee-final-flower">✳</div></div></section>

      <footer className="footer"><div className="container" style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}><span>© 2026 IQ Aspirants</span><span>Learn with direction. Grow with purpose.</span></div></footer>
    </main>
  );
}
