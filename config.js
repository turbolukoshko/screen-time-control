const pauseChromeMediaCmd = 
`osascript -e 'tell application "Google Chrome"' -e 'set js to "var media = document.querySelector(\\"video, audio\\"); if(media) { media.pause(); }"' -e 'repeat with w in windows' -e 'repeat with t in tabs of w' -e 'try' -e 'tell t to execute javascript js' -e 'end try' -e 'end repeat' -e 'end repeat' -e 'end tell'`;

const getShellCommandList = (timeInMinutes, timeInSeconds) => {
  const lockScreen = "pmset sleepnow && echo Screen locked";
  const wifiOffCmd = `networksetup -setairportpower en0 off && echo "WiFi turned off"`;
  return {
    sleep: () => `sleep ${timeInSeconds} && ${lockScreen}`,
    default: () =>
      `sleep ${timeInSeconds} && ${pauseChromeMediaCmd} && ${wifiOffCmd} && ${lockScreen}`,
    shutdown: () => `sudo shutdown -h +${timeInMinutes}`,
    cancellShutdown: () => `sudo shutdown -c && echo "Shutdown cancelled"`,
    sleepWithWifiOff: () =>
      `sleep ${timeInSeconds} && ${wifiOffCmd} && pmset displaysleepnow && echo "Screen locked and WiFi turned off"`,
  };
};

const getCommandMap = (timeInMinutes, timeInSeconds) => ({
  s: {
    command: getShellCommandList(timeInMinutes, timeInSeconds).sleep,
    logMessage: `Locking screen in ${timeInMinutes} minutes`,
  },
  t: {
    command: getShellCommandList(timeInMinutes, timeInSeconds).shutdown,
    logMessage: `Shutting down in ${timeInMinutes} minutes`,
  },
  tw: {
    command: getShellCommandList(timeInMinutes, timeInSeconds).sleepWithWifiOff,
    logMessage: `Locking screen and turning WiFi off in ${timeInMinutes} minutes`,
  },
  c: {
    command: getShellCommandList(timeInMinutes, timeInSeconds).cancellShutdown,
    logMessage: `Cancelling shutdown`,
  },
  d: {
    command: getShellCommandList(timeInMinutes, timeInSeconds).default,
    logMessage: `Locking screen and turning off YouTube player and WiFi in ${timeInMinutes} minutes`,
  },
});

module.exports = getCommandMap;
