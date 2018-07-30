module.exports = async ({ message, kickChatMember, replyWithSticker }) => {
  let fullName = member.first_name;
     if (member.last_name) {
        fullName += ` ${member.last_name}`;
      }
  fullName = fullName.toLowerCase();
  const blacklistes = message.new_chat_members.filter((member) => (
    member.is_bot || fullName.includes(`╋vx`)
        || fullName.includes(`(stockcraft at hotmail.com)`)
        || fullName.includes(`we can add 1000+ 10000+`)
        || fullName.includes(`any number real and active members`)
        || fullName.includes(`leave no join alerts,quality and quantity guaranteed`)
  ){
      await kickChatMember(member.id)
    }
    await replyWithSticker('CAADAgADrQADVsXcB3r5IHrTHq6QAg')
                                                      }
  if (blacklistes.length > 0) {
    for (const member of blacklistes) {
      await kickChatMember(member.id)
    }
    await replyWithSticker('CAADAgADrQADVsXcB3r5IHrTHq6QAg')
  }
}
