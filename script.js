const display = document.getElementById('display');
const themeSelect = document.getElementById('theme-select');

function appendValue(val) {
  display.value += val;

  // Check for secret code
  if (display.value.includes('007')) {
    activateSecretTheme();
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Theme selector
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  document.body.className = selectedTheme;
});

// Secret Hacker Theme
function activateSecretTheme() {
  document.body.className = 'hacker';
  alert("🕵 Secret Agent Mode Activated");
  themeSelect.disabled = true;
  themeSelect.style.opacity = "0.5";
}

function resetTheme() {
    const selectedTheme = themeSelect.value || 'light';
    document.body.className = selectedTheme;
    themeSelect.disabled = false;
    themeSelect.style.opacity = "1";
    alert("🎉 Secret Mode Deactivated");
  }
  