



export function connect() {
    console.log("Connect Modules...");
};

export function gameLoop(fps) {
    let gameLoop = setInterval(() => {
        
        
        // Infos Game

        let points = 0;

        let x = 0;
        let y = 0;

        window.addEventListener(('keypress'), (e) => {
            if(e.key === 'w') {
                y -= 10;
                return y;
            };
            if(e.key === 'a') {
                x -= 10;
                return x;
            };
            if(e.key === 's') {
                y += 10;
                return y;
            };
            if(e.key === 'd') {
                x += 10;
                return x;
            };
        });

        renderPlayer(x,y);
    }, 1000 / fps);
};

function renderPlayer(x,y) {
    let player = document.querySelector('.player');

    player.style.marginLeft = x + "%";
    player.style.marginTop = y + "%";
};