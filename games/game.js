const grid = document.getElementById('grid');
const cards = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓'].sort(() => Math.random() - 0.5);
let flipped = [], matched = 0;

cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = function() {
        if (flipped.length < 2 && !this.classList.contains('flipped')) {
            this.textContent = card; this.classList.add('flipped');
            flipped.push(this);
            if (flipped.length === 2) {
                if (flipped[0].textContent === flipped[1].textContent) {
                    matched += 2; flipped = [];
                    if (matched === 8) window.parent.postMessage({ type: 'game-over' }, '*');
                } else {
                    setTimeout(() => { 
                        flipped.forEach(c => { c.textContent = ''; c.classList.remove('flipped'); });
                        flipped = [];
                    }, 1000);
                }
            }
        }
    };
    grid.appendChild(div);
});