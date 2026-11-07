import Link from "next/link";
import { ArrowUpRight, BookOpen, Users, MessageCircle } from "lucide-react";

export default function ExamExperience() {
  return (
    <section className="exam-switch-section">
      <div className="container exam-switch-wrap">
        <div className="exam-switch-copy">
          <div className="eyebrow">A journey shaped around your goals</div>
          <span className="exam-tag">Personalised student guidance</span>
          <h2>Get the guidance you need to move forward.</h2>
          <p>
            Ask doubts, organise your preparation and learn from mentors who
            understand the challenges of a student journey. Find thoughtful
            support, whatever your academic goal.
          </p>
          <div className="exam-topic-list">
            <span>Concept clarity</span>
            <span>Preparation support</span>
            <span>Mentor guidance</span>
          </div>
          <Link href="/guidance" className="btn btn-primary">
            Explore Guidance Room <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="exam-preview">
          <div className="exam-preview-top">
            <span>IQ ASPIRANTS · GUIDANCE</span>
            <span className="live-dot">Student-first</span>
          </div>
          <h3>Welcome to your Guidance Room</h3>
          <p>
            Browse public threads, ask questions and connect with people who
            can help you make progress.
          </p>
          <div className="exam-preview-row">
            <span><MessageCircle /> Trending doubts</span>
            <b>Explore →</b>
          </div>
          <div className="exam-preview-row">
            <span><Users /> Your mentors</span>
            <b>Meet mentors →</b>
          </div>
          <div className="exam-preview-row">
            <span><BookOpen /> Preparation topics</span>
            <b>Browse →</b>
          </div>
        </div>
      </div>
    </section>
  );
}
