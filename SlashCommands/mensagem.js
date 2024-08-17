const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const configs = require("../configs.js");
const Discord = require("discord.js");

module.exports = {
  name: "mesaj",
  description: "Bir mesaj gönderir.",
  type: 1,

  run: async (client, interaction, args) => {
    if (!configs.owners.includes(interaction.user.id)) {
      interaction.reply({
        content: `Bu komutu kullanma izniniz bulunmamaktadır.`,
        ephemeral: true,
      });
    } else {
      try {
        let embed = new EmbedBuilder()
          .setTitle("DOĞRULAMA")
          .setColor("000000")
          .setDescription(`18 yaşından büyük olduğunuzu ve cinsel içerikli içeriği görüntülemeyi kabul ettiğinizi onaylamak için emojiye tıklayın.\n\nClick on the emoji to confirm that you are over 18 and agree to view sexually explicit content.`)
          .setImage("https://cdn.discordapp.com/attachments/945812190936584233/1089594308543393792/JqoLqSb_1.gif");

        const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel("✅ Verify")
            .setStyle(ButtonStyle.Link)
            .setURL(`${configs.authLink}`)
        );

        await interaction.channel.send({ embeds: [embed], components: [row] });
        interaction.reply({ content: "Mesaj gönderildi!", ephemeral: true });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: "Mesaj gönderilirken bir hata oluştu.",
          ephemeral: true,
        });
      }
    }
  },
};
