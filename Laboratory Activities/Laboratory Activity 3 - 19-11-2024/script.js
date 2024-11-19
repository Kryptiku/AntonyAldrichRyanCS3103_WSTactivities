const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');

textInput.addEventListener('input', updateCounts);

function updateCounts() {
    const text = textInput.value.trim();
    
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.length > 0);
    const sentenceCount = sentences.length;

    wordCountDisplay.textContent = `Words: ${wordCount}`;
    sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
}