const printHelp = () => {
  console.log(`
Usage:
  node script.js [command] [minutes]

Commands:
  t        Lock screen after N minutes
  s        Shutdown after N minutes
  tw       Lock screen and turn WiFi off after N minutes
  c        Cancel scheduled shutdown
  d        Lock screen, turn off YouTube player and WiFi after N minutes

Examples:
  node index.js t 5        # Lock screen in 5 minutes
  node index.js s 5        # Shutdown in 5 minutes
  node index.js tw 5       # Lock screen + WiFi off in 5 minutes
  node index.js c          # Cancel shutdown
  node index.js d 5        # Lock screen, turn off YouTube player and WiFi in 5 minutes
`);
};

module.exports = printHelp;
