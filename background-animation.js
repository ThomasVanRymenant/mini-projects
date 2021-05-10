const blocksContainer = document.querySelector('.section2');
const blocks = document.getElementsByClassName('blocks');

// controls start
const amountOfBlocks = 400;
const minDelay = 0;
const maxDelay = 12;
// controls end

blocks[0].style.animationDelay = (Math.random() * (maxDelay - minDelay) + minDelay) + 's';
for (var i = 1; i < amountOfBlocks; i++) {
    blocksContainer.innerHTML += '<div class="blocks"></div>';
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;
    blocks[i].style.animationDelay = delay + 's';
    // make each consecutive block have a larger z-index so  the box-shadow gets rendered correctly (in case it needs to)
    blocks[i].style.zIndex = delay;
}