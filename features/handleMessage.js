module.exports = function handleStory(controller) {
  controller.hears(
    // 'Which story did you work on today?',
    /^What story did(.*?)$/i,
    'message,direct_message',
    async (bot, message) => {
      await bot.reply(
        message,
        'Yeah i got a story for you bitch ass you wanna hear it?'
      );
    }
  );
};
