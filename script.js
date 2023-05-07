
    const openTrailerButton = document.querySelector('#open-trailer-button');
    const videoTrailerOverlay = document.querySelector('#video-trailer-overlay');
    const closeButton = document.querySelector('#close-button');
    openTrailerButton.addEventListener('click', () => {
      videoTrailerOverlay.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
      videoTrailerOverlay.style.display = 'none';
    });
