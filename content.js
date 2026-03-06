function copyTranscript() {

    let phrases = document.querySelectorAll(".rc-Phrase span");
    
    // Try second selector if first one fails
    if (!phrases.length) {
        phrases = document.querySelectorAll("span.css-4s48ix");
    }

    if (!phrases.length) {
        const msg = document.createElement('div');
        msg.textContent = '✗ No transcript found';
        msg.style.cssText = 'position:fixed;top:20px;right:20px;background:#f44336;color:white;padding:12px 20px;border-radius:4px;z-index:999999;font-family:sans-serif;font-size:14px;box-shadow:0 2px 5px rgba(0,0,0,0.2)';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 2000);
        return;
    }

    let transcript = "";

    phrases.forEach(p => {
        transcript += p.innerText.trim() + " ";
    });

    navigator.clipboard.writeText(transcript.trim());

    // Show simple confirmation message
    const msg = document.createElement('div');
    msg.textContent = '✓ Copied!';
    msg.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:12px 20px;border-radius:4px;z-index:999999;font-family:sans-serif;font-size:14px;box-shadow:0 2px 5px rgba(0,0,0,0.2)';
    document.body.appendChild(msg);
    
    setTimeout(() => msg.remove(), 2000);
}

copyTranscript();