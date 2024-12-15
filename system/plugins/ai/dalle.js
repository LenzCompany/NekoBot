module.exports = {
    command: "dalle",
    alias: ["dall-e"],
    category: ["ai"],
    description: "Generate image from text",
    loading: true,
    async run(m, { text, sock, Scraper }) {
        if (!text) throw "> Masukan pernyataan nya"
        m.reply({
            image: {
                url: `${global.APIs.btch}dalle?text=${encodeURIComponent(text)}`
            },
            caption: `DALLE IMAGE\n\n> ${m.key.id}`
        })
    }
}