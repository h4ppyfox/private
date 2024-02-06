module.exports = {
  Client: {
    TOKEN: "", // Your bot's TOKEN. Please use this only in VISUAL STUDIO CODE, not in REPLIT. [OPTIONAL]
    ID: "1204008534132396082" // Your bot's ID. [REQUIRED]
  },

  Handler: {
    GUILD_ID: "1183337618067435530", // Your guild/server ID where you want the mails will be created. [REQUIRED]
    CATEGORY_ID: "1204010093058981888" // Custom category ID where you want the mails will be created on. You can use /setup slash command to create a category without using this variable.
  },

  Modmail: {
    INTERACTION_COMMAND_PERMISSIONS: ['Administrator'], // The permissions for the slash commands that admins/server managers can access only. [REQUIRED]
    MAIL_MANAGER_ROLES: ['1204072317953773568'], // The roles for the category where moderators can manage mails.
    MENTION_MANAGER_ROLES_WHEN_NEW_MAIL_CREATED: true // If this is "true": When a mail created, all the MANAGER_ROLES will be pinged. Else, if "false": It doesn't ping the roles.
  }
};