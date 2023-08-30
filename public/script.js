const baseApiUrl = 'http://localhost:3000/'

async function fetchData() {
    try {
        const response = await fetch(baseApiUrl + 'api/v1/quotes')

        if (!response.ok) {
            throw new Error('deu erro')
        }

        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length)

        const { music, quote, artist } = data.quotes[randomIndex]

        showElement(music, quote, artist)

    } catch (error) {
        console.log(error)
    }
}

fetchData()

function showElement(music, quote, artist) {

    const musicElement = document.getElementById("music")
    const quoteElement = document.getElementById("quote")
    const artistElement = document.getElementById("artist")

    musicElement.textContent = music;
    quoteElement.textContent = `"${quote}"`;
    artistElement.textContent = `- ${artist}`;
    
}



