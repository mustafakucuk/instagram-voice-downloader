const downloadButtonText = 'Download';
const downloadButtonStyle = document.createElement('style');
const downloadButtonAddedTo = document.querySelector('script');
downloadButtonStyle.innerHTML = `.download-button{background-color: #000; padding:10px; color: #fff !important; text-align:center;}`;
downloadButtonAddedTo.parentNode.insertBefore(downloadButtonStyle, downloadButtonAddedTo);

setInterval(() => {
    const selectAudioElements = document.querySelectorAll('audio');
    selectAudioElements.forEach((audio) => {
        const audioSource = audio.firstElementChild.getAttribute('src');
        const addedClassName = 'added-download-button';
        let parent = audio.closest('[role="button"]');
        if (!parent.classList.contains((addedClassName))) {
            const downloadButton = document.createElement("a");
            downloadButton.setAttribute('href', audioSource);
            downloadButton.setAttribute('target', '_blank');
            downloadButton.setAttribute('download', 'true');
            downloadButton.setAttribute('class', 'download-button');
            downloadButton.textContent = downloadButtonText;
            parent.append(downloadButton);
            parent.classList.add(addedClassName);
        }
    });
}, 1500);