module.exports = {
    command: "text2img",
    alias: ["t2i"],
    category: ["ai"],
    description: "Generate image from text",
    loading: true,
    async run(m, { text, sock, Scraper }) {
            if (!text) throw "> Masukan pernyataan nya"
            m.reply({
                image: {
                    url: `${global.APIs.btch}ai/text2img?text=${text}` 
                },
                caption: `*${text}*\n\n> ${m.key.id}`
            })
    }
}