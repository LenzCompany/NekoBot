module.exports = {
    command: "bingimg",
    alias: ["bing"],
    category: ["ai"],
    description: "get image from bing",
    loading: true,
    async run(m, { text, sock, Scraper }) {
    if (!text) throw "> Masukan pernyataan nya" 
    let urls = await fetchJson(`${global.APIs.btch}bingimg?text=${text}`)
    urls.result.forEach(hasil => {
        m.reply({
            image: {
                url: hasil
            },
            caption: `Bing Image\n\n> ${m.key.id}`
        })
    });
        }
    }   