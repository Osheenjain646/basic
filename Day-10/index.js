// Perfect Gemini Chat Clone - Fixed API + Responsive UI
// Hardcoded user API key, no prompts, mobile-ready

const API_KEY = 'AIzaSyDuetfdZoryFAoBJTYcaotv-Cxg3Wnl7Q0';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const input = document.getElementById('input-search');
const sendBtn = document.getElementById('send-btn');
const clearBtn = document.getElementById('clear-btn');
const responseSection = document.getElementById('response-section');
const messagesContainer = document.querySelector('#messages') || responseSection.querySelector('div');
const welcomeMessage = document.querySelector('.welcome-message');

let chatHistory = [];

// Load history from localStorage
function loadHistory() {
  const saved = localStorage.getItem('geminiChatHistory');
  if (saved) {
    chatHistory = JSON.parse(saved).slice(-10);
    chatHistory.forEach(msg => appendMessage(msg.sender, msg.text));
  }
  if (chatHistory.length === 0) {
    welcomeMessage.style.display = 'block';
  } else {
    welcomeMessage.style.display = 'none';
  }
  responseSection.scrollTop = responseSection.scrollHeight;
}

// Save history
function saveHistory() {
  localStorage.setItem('geminiChatHistory', JSON.stringify(chatHistory.slice(-10)));
}

// Append message
function appendMessage(sender, text) {
  chatHistory.push({sender, text});
  saveHistory();

  const messageEl = document.createElement('div');
  messageEl.className = `message message--${sender}`;

  const formattedText = text.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');

  if (sender === 'user') {
    messageEl.innerHTML = `<div class="message-bubble">${formattedText}</div>`;
  } else {
    messageEl.innerHTML = `
      <div class="message-avatar">✦</div>
      <div class="message-content">${formattedText}</div>
    `;
  }

  messagesContainer.appendChild(messageEl);
  responseSection.scrollTop = responseSection.scrollHeight;
  welcomeMessage.style.display = 'none';
}

// Send message
async function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  try {
    appendMessage('ai', 'Typing...');
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 500 }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      
      let errorMsg = `API Error ${response.status}`;
      if (response.status === 429) errorMsg = 'Quota exceeded. Try later.';
      else if (response.status === 403) errorMsg = 'API access issue';
      else if (response.status === 400) errorMsg = 'Bad request';
      
      throw new Error(errorMsg);
    }

    const data = await response.json();
    const aiReply = data.candidates[0].content.parts[0].text;

    // Remove typing
    messagesContainer.lastElementChild.remove();
    appendMessage('ai', aiReply);
  } catch (error) {
    console.error('Error:', error);
    messagesContainer.lastElementChild.remove();
    appendMessage('ai', `❌ ${error.message}`);
  }
}

// Events
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

sendBtn.addEventListener('click', sendMessage);

clearBtn.addEventListener('click', () => {
  messagesContainer.innerHTML = welcomeMessage.outerHTML;
  chatHistory = [];
  saveHistory();
  input.focus();
});

// Init - Show welcome first
loadHistory();
input.focus();

