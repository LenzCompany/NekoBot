module.exports = {
  command: "bard",
  alias: ["bard"],
  category: ["ai"],
  description: "ask bard AI",
  loading: true,
  async run(m, { text, sock, Scraper }) {
    if (!text) throw "> Masukan pernyataan nya";
    let urls = await fetchJson(`${global.APIs.btch}bard?text=${text}`);
    m.reply(`${urls.result}\n\n> ${m.key.id}`);
  },
};