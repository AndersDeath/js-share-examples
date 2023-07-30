const mockText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const mockUrl = "https://google.com";

const buildLink = (url, params) => {
    let inputUrl = new URL(url);
    let inputParams = inputUrl.searchParams;
    Object.entries(params).forEach((value) => {
        inputParams.set(value[0], value[1]);
    })
    inputUrl.search = inputParams.toString();
    return inputUrl.toString();
}

const buildTelegramLink = (url, text) => {
    return buildLink('https://t.me/share/url', {
        url: url || '',
        text
    });
}

const buildWhatsappLink = (text) => {
    return buildLink('https://wa.me', {
        text
    });
}

const buildTwitterLink = (text) => {
    return buildLink('https://twitter.com/intent/tweet', {
        text
    });
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

    document.getElementById('shareTwitter').addEventListener('click', () => {
        window.open(buildTwitterLink(longTextTextarea.value));
    });

});