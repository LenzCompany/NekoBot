module.exports = {
    command: "blackbox",
    alias: ["blackbox"],
    category: ["ai"],
    description: "ask blackbox AI",
    loading: true,
    async run(m, { text, sock, Scraper }) {
        if (!text) throw "> Masukan pernyataan nya"
        let urls = await fetchJson(`${global.APIs.btch}blackbox?text=${text}`)
        m.reply(`${urls.result}\n\n> ${m.key.id}`)
    }
}