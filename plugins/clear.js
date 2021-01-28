let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(limpar|excluir)/i.test(command)
  for (let id of chats) {
    if (isexcluir) await conn.modifyChat(id, 'excluir').catch(console.log)
    await conn.modifyChat(id, 'mutar', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' Grupo Aberto!' + (isexcluir ? 'limpo' : 'amanha para sempre'), m)
}
handler.help = ['excluirchat', 'excluirchat grupo', 'mutarchat', 'mutarchat grupo']
handler.tags = ['owner']
handler.command = /^(limpar|delete|mutar)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

