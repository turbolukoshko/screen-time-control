#!/usr/bin/env node
const { exec } = require("child_process");
const printHelp = require("./printHelp");
const getCommandMap = require("./config");

const commandKey = process.argv.slice(2)[0];
const timeInMinutes = parseInt(process.argv.slice(3)[0]) || 0;
const timeInSeconds = timeInMinutes * 60;

const run = () => {
  const config = getCommandMap(timeInMinutes, timeInSeconds)[commandKey];
  console.log(config)
  const { command, logMessage } = config || {};
  if (commandKey === "--help" || commandKey === "-h") {
    printHelp();
    process.exit(0);
  }

  if (!config) {
    console.log(
      "❌ Invalid option. Please use one of: t, s, tw, c or use --help to see options."
    );
    process.exit(1);
  }

  exec(command(), (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error executing command:", error);
      return;
    }
    if (stderr) {
      console.error("⚠️ stderr:", stderr);
    }
    console.log("✅ stdout:", stdout);
  });
};

run();
