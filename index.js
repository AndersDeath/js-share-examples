const mockText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const mockUrl = "https://google.com";

const buildTelegramLink = (url, text) => {
    return `https://t.me/share/url?url=${url}&text=${text}`;
}

const buildWhatsappLink = (text) => {
    return `https://wa.me?text=${text}`
}

document.addEventListener('DOMContentLoaded', () => {
    const longTextTextarea = document.getElementById('textarea')
    longTextTextarea.innerText = mockText;

    const urlInput = document.getElementById('url');
    urlInput.value = mockUrl;

    document.getElementById('shareTelegram').addEventListener('click', () => {
        window.open(buildTelegramLink(urlInput.value, longTextTextarea.value));
    });

    document.getElementById('shareWhatsapp').addEventListener('click', () => {
        window.open(buildWhatsappLink(longTextTextarea.value));
    });

});