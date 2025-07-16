document.addEventListener('dblclick', async (event) => {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;

  // Remove any existing popup
  const existingPopup = document.getElementById('dictionary-popup');
  if (existingPopup) existingPopup.remove();

  // Show loading popup
  showPopup(event.pageX, event.pageY, "Loading...");

  // Fetch definition and example from dictionary API
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`);
    const data = await response.json();
    
    // Remove loading popup
    const loadingPopup = document.getElementById('dictionary-popup');
    if (loadingPopup) loadingPopup.remove();

    if (data.title === "No Definitions Found") {
      showPopup(event.pageX, event.pageY, "No definition or example found for this word.");
      return;
    }

    // Get definition
    const definition = data[0].meanings[0].definitions[0].definition || "No definition available.";

    // Get example sentence (check all meanings for an example)
    let example = "No example available.";
    for (const meaning of data[0].meanings) {
      if (meaning.definitions[0].example) {
        example = meaning.definitions[0].example;
        break;
      }
    }

    // Combine definition and example
    const popupContent = `
      <strong>Definition:</strong> ${definition}<br><br>
      <strong>Example:</strong> ${example}
    `;
    showPopup(event.pageX, event.pageY, popupContent);
  } catch (error) {
    // Remove loading popup
    const loadingPopup = document.getElementById('dictionary-popup');
    if (loadingPopup) loadingPopup.remove();

    showPopup(event.pageX, event.pageY, "Error fetching definition or example.");
    console.error("Dictionary API error:", error);
  }
});

function showPopup(x, y, text) {
  const popup = document.createElement('div');
  popup.id = 'dictionary-popup';
  popup.innerHTML = text;
  popup.style.position = 'absolute';
  popup.style.left = `${x}px`;
  popup.style.top = `${y + 20}px`;
  popup.style.maxWidth = '300px';
  popup.style.zIndex = '10000';
  popup.className = 'dictionary-popup animate-popup';
  document.body.appendChild(popup);

  // Remove popup on click
  document.addEventListener('click', () => popup.remove(), { once: true });
}