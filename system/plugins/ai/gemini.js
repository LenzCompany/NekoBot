module.exports = {
  command: "gemini",
  alias: ["gemini"],
  category: ["ai"],
  description: "ask Gemini AI",
  loading: true,
  async run(m, { text, sock, Scraper }) {
    if (!text) throw "> Masukan pernyataan nya";
    let urls = await fetchJson(`${global.APIs.btch}gemini?text=${text}`);
    m.reply(`${urls.result}\n\n> ${m.key.id}`);
  },
};