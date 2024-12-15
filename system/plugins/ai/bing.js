module.exports = {
    command: "bing",
    alias: ["bing"],
    category: ["ai"],
    description: "ask bing",
    loading: true,
    async run(m, { text, sock, Scraper }) {
        if (!text) throw "> Masukan pernyataan nya"
        let urls = await fetchJson(`${global.APIs.btch}bingai?text=${text}`)
        m.reply(`${urls.result}\n\n> ${m.key.id}`)
    }
}