const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'pray',
        categorie: 'loryse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = ' https://telegra.ph/file/37b10f9e2a9c9a0349e85.jpg';
            const msg = `Salutation✨ a tous!!!
Ici Leroi du chaos absolu Le_*ꪶ࿋྄ིᤢꫂ๖🔯ℛɨᎮ昇ⅅᎯℛᏦ ᏦℐℕᎶ⛓️
Attristé par la démance de ce monde nous sommes dans l'obligation de lancé une new vague de purification dans les ténèbres du ꪶ࿋྄ིᤢꫂ๖ۣۜB₳Č₭ M࿋❂྄྄ིᤢꫂ₦🌑 plus destructrice ke le first. En tant que la 1er section du 𓆩†★ ⛩E_M_P_I_R_E🎴OF🎴TOMAN ⛩ 𓆩†★ la futur plus grand organisation de purge je vous donne la chance d'être les Hôtes de cette grande catastrophe et non les victimes . trainer en bas ou devenir une légende ?
ꪶ࿋྄ིᤢꫂ๖ۣۜB₳Č₭ M࿋❂྄྄ིᤢꫂ₦🌑 recrute 👉https://chat.whatsapp.com/GhP9QNwUIwg9kLnlAEgA2V`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
