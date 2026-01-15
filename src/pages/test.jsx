import "./test.css";

export default function Test() {
  return (
    <div className="official-page">
      <p className="breadcrumb">— Home</p>

      <div className="header">
        <div className="header-icon">📚</div>
        <h1>Official Questions</h1>
        <p>Select training module and mode</p>
      </div>

      <div className="cards">
        <ModuleCard title="General Syllabus" icon="📘" />
        <ModuleCard title="Specific Syllabus" icon="📕" />
        <ModuleCard title="Practice Tests" icon="📝" />
        <ModuleCard title="Random Mix" icon="🔀" />
      </div>

      <div className="mode-info practice">
        <strong>Practice Mode</strong>
        <p>
          Instant feedback. Repeat until mastered. Builds muscle memory.
        </p>
      </div>

      <div className="mode-info exam">
        <strong>Exam Mode</strong>
        <p>
          No instant feedback. Final evaluation at the end.
        </p>
      </div>
    </div>
  );
}

function ModuleCard({ title, icon }) {
  return (
    <div className="module-card">
      <div className="module-header">
        <span className="module-icon">{icon}</span>
        <h3>{title}</h3>
      </div>

      <div className="module-actions">
        <button className="btn outline">
          📖 Practice Mode
        </button>
        <button className="btn primary">
          🔥 Exam Mode
        </button>
      </div>
    </div>
  );
}
