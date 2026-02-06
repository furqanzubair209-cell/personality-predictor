const questions = [
  {
    q: "Do you enjoy being the center of attention, or prefer observing from the sidelines?",
    options: [
      { text: "I love being in the spotlight", trait: "Extrovert" },
      { text: "I prefer to observe quietly", trait: "Introvert" }
    ]
  },
  {
    q: "When making a tough decision, do you rely more on logic or your gut feeling?",
    options: [
      { text: "I rely on logic", trait: "Thinking" },
      { text: "I trust my feelings", trait: "Feeling" }
    ]
  },
  {
    q: "Do you often imagine “what if” scenarios about your future or past?",
    options: [
      { text: "Yes, I like reflecting on possibilities", trait: "Introvert" },
      { text: "No, I focus on the present", trait: "Extrovert" }
    ]
  },
  {
    q: "Would you rather have a detailed plan for every step of your day, or go with the flow?",
    options: [
      { text: "I like detailed plans", trait: "Judging" },
      { text: "I go with the flow", trait: "Perceiving" }
    ]
  },
  {
    q: "Do you find comfort in following rules and routines, or exploring new ways of doing things?",
    options: [
      { text: "I prefer rules and routines", trait: "Judging" },
      { text: "I love trying new ways", trait: "Perceiving" }
    ]
  },
  {
    q: "When solving problems, do you focus more on facts or possibilities?",
    options: [
      { text: "I focus on facts", trait: "Thinking" },
      { text: "I consider possibilities", trait: "Feeling" }
    ]
  },
  {
    q: "Do you gain energy from spending time alone or interacting with others?",
    options: [
      { text: "I recharge alone", trait: "Introvert" },
      { text: "I recharge with people", trait: "Extrovert" }
    ]
  },
  {
    q: "If someone disagrees with you, do you try to convince them logically or understand their feelings first?",
    options: [
      { text: "I argue with logic", trait: "Thinking" },
      { text: "I listen to their feelings", trait: "Feeling" }
    ]
  },
  {
    q: "Do you prefer finishing one task perfectly before starting another, or juggling multiple tasks?",
    options: [
      { text: "I finish one perfectly", trait: "Judging" },
      { text: "I juggle multiple tasks", trait: "Perceiving" }
    ]
  },
  {
    q: "Do you notice details that others often overlook, or focus on the big picture?",
    options: [
      { text: "I notice details", trait: "Thinking" },
      { text: "I focus on the big picture", trait: "Feeling" }
    ]
  },
  {
    q: "Do you enjoy spontaneous adventures, or prefer planned trips where everything is organized?",
    options: [
      { text: "I love spontaneity", trait: "Perceiving" },
      { text: "I like planned trips", trait: "Judging" }
    ]
  },
  {
    q: "Are you more likely to follow your heart or stick to what makes sense?",
    options: [
      { text: "I follow my heart", trait: "Feeling" },
      { text: "I stick to logic", trait: "Thinking" }
    ]
  },
  {
    q: "Do you like to think deeply about abstract concepts, or focus on practical realities?",
    options: [
      { text: "I like abstract thinking", trait: "Introvert" },
      { text: "I focus on practical realities", trait: "Extrovert" }
    ]
  },
  {
    q: "Do you trust first impressions or take time to understand someone fully?",
    options: [
      { text: "I take time to understand", trait: "Introvert" },
      { text: "I trust first impressions", trait: "Extrovert" }
    ]
  },
  {
    q: "When faced with change, do you embrace it quickly or need time to adapt?",
    options: [
      { text: "I embrace change quickly", trait: "Perceiving" },
      { text: "I need time to adapt", trait: "Judging" }
    ]
  }
];

// Render questions dynamically
function renderQuestions() {
  const form = document.getElementById('personalityForm');
  questions.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = `<p>${index + 1}. ${item.q}</p>`;
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');
    item.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${opt.trait}"> ${opt.text}`;
      optionsDiv.appendChild(label);
    });
    div.appendChild(optionsDiv);
    form.appendChild(div);
  });
}

// Calculate personality
function predictPersonality() {
  const form = document.forms['personalityForm'];
  const resultDiv = document.getElementById('result');
  const score = { Introvert: 0, Extrovert: 0, Thinking: 0, Feeling: 0, Judging: 0, Perceiving: 0 };

  for (let i = 0; i < questions.length; i++) {
    const answer = form['q' + i].value;
    if (!answer) {
      alert('Please answer all questions!');
      return;
    }
    score[answer]++;
  }

  const personality = [];
  personality.push(score['Introvert'] >= score['Extrovert'] ? 'Introvert' : 'Extrovert');
  personality.push(score['Thinking'] >= score['Feeling'] ? 'Thinking' : 'Feeling');
  personality.push(score['Judging'] >= score['Perceiving'] ? 'Judging' : 'Perceiving');

  resultDiv.textContent = "Your Personality Type: " + personality.join('-');
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderQuestions);
document.getElementById('predictBtn').addEventListener('click', predictPersonality);
