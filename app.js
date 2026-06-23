import { betaRoom, productDecisions } from "./data.js";

const app = document.querySelector("#app");

const getStoredFeedback = () => {
  try {
    return JSON.parse(localStorage.getItem("betaroom_feedback") || "[]");
  } catch {
    return [];
  }
};

const saveFeedback = (item) => {
  const current = getStoredFeedback();
  localStorage.setItem("betaroom_feedback", JSON.stringify([item, ...current].slice(0, 20)));
};

const allFeedback = () => [...getStoredFeedback(), ...betaRoom.feedback];

const severityClass = (value) => value.toLowerCase().replaceAll(" ", "-");

const shell = (content) => {
  app.innerHTML = content;
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
};

const statCard = (label, value, note) => `
  <article class="stat-card">
    <span>${label}</span>
    <strong>${value}</strong>
    <small>${note}</small>
  </article>
`;

const backlogCard = (item) => `
  <article class="backlog-card">
    <div class="card-topline">
      <span class="pill ${severityClass(item.priority)}">${item.priority}</span>
      <span>${item.category}</span>
      <span>${item.sources} sources</span>
      <span>${item.effort} effort</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.reasoning}</p>
  </article>
`;

function landingPage() {
  shell(`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">AI workspace for closed beta tests</p>
        <h1>Turn messy beta feedback into a clear product roadmap</h1>
        <p class="lead">
          Collect structured feedback from early users, detect repeated pain points,
          and generate a prioritized product backlog without drowning in scattered notes,
          chats, and screenshots.
        </p>
        <div class="hero-actions">
          <a class="button dark" href="#/dashboard">View demo dashboard →</a>
          <a class="button light" href="#/room">Open beta feedback form</a>
        </div>
        <div class="proof-row">
          <span>Built for indie makers</span>
          <span>AI-ready backlog</span>
          <span>Recruiter-friendly case</span>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Demo dashboard preview">
        <div class="window-bar">
          <span></span><span></span><span></span>
          <strong>${betaRoom.project.name} / Insights</strong>
        </div>
        <div class="panel-section">
          <small>AI-generated beta summary</small>
          <div class="metric-grid">
            <div><strong>${betaRoom.project.responses}</strong><span>responses</span></div>
            <div><strong>${betaRoom.project.repeatedPains}</strong><span>repeated pains</span></div>
            <div><strong>${betaRoom.project.highPriorityTasks}</strong><span>high priority</span></div>
            <div><strong>${betaRoom.project.returnScore}</strong><span>return score</span></div>
          </div>
        </div>
        <div class="summary-box">
          <small>AI summary</small>
          <p>Users understand the value after the first analysis, but the upload → result flow still feels unclear for non-technical founders.</p>
        </div>
        <div class="mini-list">
          <span>Onboarding unclear after screenshot upload <b>7×</b></span>
          <span>Need examples before signup <b>5×</b></span>
          <span>Pricing value not obvious <b>3×</b></span>
        </div>
      </aside>
    </section>

    <section class="section split">
      <div>
        <p class="eyebrow">Product idea</p>
        <h2>Built like a real SaaS, scoped like a smart MVP.</h2>
        <p>
          BetaRoom is intentionally small, but it demonstrates product thinking,
          AI workflow design, dashboard UX, and a practical user-feedback loop.
        </p>
        <a class="text-link" href="#/dashboard">Explore demo</a>
      </div>

      <div class="feature-grid">
        <article>
          <span>01</span>
          <h3>Collect structured feedback</h3>
          <p>Replace chaotic Telegram messages with a focused beta form that captures likes, confusion, missing features, and return intent.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Detect repeated pain points</h3>
          <p>Group feedback by patterns instead of reading every response from scratch when deciding what to fix next.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Generate AI backlog</h3>
          <p>Turn raw feedback into actionable product tasks with category, priority, source count, and reasoning.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Prioritize product moves</h3>
          <p>Separate activation blockers from nice-to-have ideas, so small teams can ship with focus.</p>
        </article>
      </div>
    </section>

    <section class="section">
      <p class="eyebrow">Product decisions</p>
      <h2>Why this is more than a pretty dashboard</h2>
      <div class="decision-grid">
        ${productDecisions.map((item) => `
          <article>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section story">
      <div>
        <p class="eyebrow">Workflow</p>
        <h2>From “users said stuff” to “here’s what we ship next”.</h2>
        <p>
          Great beta tests fail when feedback is collected but not converted into decisions.
          BetaRoom is designed around one job: help builders understand what matters now.
        </p>
      </div>

      <div class="workflow">
        <div class="quote-card">“I liked the idea, but I didn't understand what to do after uploading my screenshot.”</div>
        <div class="quote-card">“Show me one example before I sign up. I want to see the value first.”</div>
        <div class="quote-card">“The final roast was useful. I would pay if it also gave launch fixes.”</div>
        <div class="arrow">↓</div>
        <article class="backlog-card highlight">
          <div class="card-topline">
            <span class="pill high">High priority</span>
            <span>7 sources</span>
          </div>
          <h3>Clarify onboarding after first upload</h3>
          <p>Users do not understand whether analysis is loading, failed, or needs another input. Add progress states and a next-step hint.</p>
        </article>
      </div>
    </section>
  `);
}

function dashboardPage() {
  shell(`
    <section class="page-hero">
      <p class="eyebrow">${betaRoom.project.name} · ${betaRoom.project.status}</p>
      <h1>Product dashboard</h1>
      <p>AI-generated overview of the current beta test. Designed to help a product builder decide what to fix, cut, or double down on.</p>
      <div class="hero-actions">
        <a class="button dark" href="#/feedback">Open inbox</a>
        <a class="button light" href="#/backlog">View backlog</a>
      </div>
    </section>

    <section class="dashboard-grid">
      ${statCard("Feedback responses", betaRoom.project.responses, `+${betaRoom.project.weeklyDelta} this week`)}
      ${statCard("Repeated pain points", betaRoom.project.repeatedPains, `${betaRoom.project.activationBlockers} activation blockers`)}
      ${statCard("High-priority tasks", betaRoom.project.highPriorityTasks, "Ready for sprint")}
      ${statCard("Avg. return score", betaRoom.project.returnScore, "Strong early signal")}
    </section>

    <section class="dashboard-layout">
      <article class="insight-card">
        <div class="card-topline"><span>AI Summary</span><span>Generated insight</span></div>
        <p>${betaRoom.summary}</p>
      </article>

      <article class="insight-card">
        <div class="card-topline"><span>Top pain points</span><a href="#/feedback">See all</a></div>
        <div class="pain-list">
          ${betaRoom.painPoints.map((pain) => `
            <div>
              <span>${pain.label}</span>
              <strong>${pain.mentions} mentions</strong>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="insight-card">
        <div class="card-topline"><span>Recent feedback</span><span>Latest 3</span></div>
        <div class="feedback-stack">
          ${allFeedback().slice(0, 3).map(feedbackItem).join("")}
        </div>
      </article>

      <article class="insight-card">
        <div class="card-topline"><span>Backlog preview</span><a href="#/backlog">Open</a></div>
        ${betaRoom.backlog.slice(0, 2).map(backlogCard).join("")}
      </article>
    </section>
  `);
}

const feedbackItem = (item) => `
  <article class="feedback-item">
    <div>
      <strong>${item.id}</strong>
      <span>${item.role} · ${item.category} · score ${item.returnScore}/10</span>
    </div>
    <p>“${item.quote}”</p>
    <small>${item.pattern}</small>
  </article>
`;

function feedbackPage() {
  const feedback = allFeedback();

  shell(`
    <section class="page-hero">
      <p class="eyebrow">Inbox · ${feedback.length} responses · ${betaRoom.project.repeatedPains} detected patterns</p>
      <h1>Feedback inbox</h1>
      <p>Each response keeps the original tester language, while BetaRoom detects category, sentiment, and return intent.</p>
      <a class="button dark" href="#/room">Open public form</a>
    </section>

    <section class="toolbar">
      <button data-filter="All" class="active">All</button>
      <button data-filter="Value">Value</button>
      <button data-filter="Onboarding">Onboarding</button>
      <button data-filter="Trust">Trust</button>
      <button data-filter="Pricing">Pricing</button>
      <button data-filter="Sharing">Sharing</button>
    </section>

    <section id="feedbackList" class="feedback-list">
      ${feedback.map(feedbackItem).join("")}
    </section>
  `);

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      const value = button.dataset.filter;
      const filtered = value === "All" ? feedback : feedback.filter((item) => item.category === value);
      document.querySelector("#feedbackList").innerHTML = filtered.map(feedbackItem).join("");
    });
  });
}

function backlogPage() {
  shell(`
    <section class="page-hero">
      <p class="eyebrow">AI backlog · Prioritized from feedback</p>
      <h1>Product backlog</h1>
      <p>Actionable tasks generated from repeated beta patterns. Each item includes priority, category, source count, effort, and product reasoning.</p>
      <div class="hero-actions">
        <a class="button dark" href="#/feedback">View sources</a>
        <a class="button light" href="#/dashboard">Dashboard</a>
      </div>
    </section>

    <section class="backlog-list">
      ${betaRoom.backlog.map(backlogCard).join("")}
    </section>
  `);
}

function roomPage() {
  shell(`
    <section class="room-layout">
      <div>
        <p class="eyebrow">Public beta room · /r/roastmyapp</p>
        <h1>RoastMyApp Beta</h1>
        <p>This is the public tester form. In the real product, founders would share this link with early users and collect structured feedback.</p>
        <a class="text-link" href="#/dashboard">Back to dashboard</a>

        <div class="ask-card">
          <h2>What we ask testers</h2>
          <ul>
            <li><strong>What worked?</strong> Find real product value, not just compliments.</li>
            <li><strong>What was confusing?</strong> Surface activation blockers and UX friction.</li>
            <li><strong>Would they return?</strong> Measure intent with a simple 1–10 score.</li>
          </ul>
        </div>
      </div>

      <form id="betaForm" class="beta-form">
        <label>
          Your role
          <select name="role" required>
            <option>Founder</option>
            <option>Designer</option>
            <option>Developer</option>
            <option>Student founder</option>
            <option>Marketer</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          What did you like?
          <textarea name="liked" required placeholder="The most useful part was..."></textarea>
        </label>

        <label>
          What was confusing?
          <textarea name="confusing" required placeholder="I was confused when..."></textarea>
        </label>

        <label>
          What annoyed you?
          <textarea name="annoyed" placeholder="The annoying part was..."></textarea>
        </label>

        <label>
          What was missing?
          <textarea name="missing" placeholder="I expected to see..."></textarea>
        </label>

        <label>
          How likely are you to return? <span id="scoreLabel">7</span>/10
          <input name="score" type="range" min="1" max="10" value="7" />
        </label>

        <button class="button dark" type="submit">Submit feedback</button>
        <p id="formStatus" class="form-status" role="status"></p>
      </form>
    </section>
  `);

  const score = document.querySelector('input[name="score"]');
  const scoreLabel = document.querySelector("#scoreLabel");
  score.addEventListener("input", () => (scoreLabel.textContent = score.value));

  document.querySelector("#betaForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    saveFeedback({
      id: `LOCAL-${Date.now().toString().slice(-4)}`,
      role: data.role,
      sentiment: "New",
      returnScore: Number(data.score),
      category: "User input",
      quote: data.confusing || data.liked,
      pattern: "Local demo feedback added from the public beta form.",
    });
    document.querySelector("#formStatus").textContent =
      "Feedback added to the local demo inbox. Open Feedback to see it.";
    event.currentTarget.reset();
    scoreLabel.textContent = "7";
  });
}

function notFoundPage() {
  shell(`
    <section class="page-hero">
      <p class="eyebrow">404</p>
      <h1>Route not found</h1>
      <p>This demo uses hash-based routing. Go back to the landing page.</p>
      <a class="button dark" href="#/">Back home</a>
    </section>
  `);
}

const routes = {
  "/": landingPage,
  "/dashboard": dashboardPage,
  "/feedback": feedbackPage,
  "/backlog": backlogPage,
  "/room": roomPage,
};

function render() {
  const hash = window.location.hash.replace("#", "") || "/";
  const page = routes[hash] || notFoundPage;
  page();
}

window.addEventListener("hashchange", render);
render();
