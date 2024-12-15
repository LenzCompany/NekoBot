const { fetchJson } = require("../../../lib/function")

module.exports = {
    command: "gptgo",
    alias: ["gpt-3"],
    category: ["ai"],
    description: "ask gpt go",
    loading: true,
    async run(m, { text, sock, Scraper }) {
        if (!text) throw "> Masukan pernyataan nya"
        let urls = await fetchJson(`${global.APIs.btch}gptgo?text=${text}`)
        m.reply(`${urls.result}\n\n> ${m.key.id}`)
    }
}