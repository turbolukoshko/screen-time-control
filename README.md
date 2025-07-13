# Screen Time Control CLI

A simple Node.js CLI utility for managing your Mac's screen time - lock the screen, turn off WiFi, pause YouTube videos, or shut down your machine after a specified delay.

---

## Features

- 🔒 Lock screen after a delay  
- 📴 Turn off WiFi  
- ⏸️ Pause YouTube or any playing media in Chrome  
- 💻 Schedule a shutdown  
- ❌ Cancel a scheduled shutdown  

---

## Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/screen-time-control.git
cd screen-time-control

2. Make the script executable (optional):

```bash
chmod +x index.js

3. Run the script:
```
./index.js [command] [minutes]

Or with Node.js:

```bash
node index.js [command] [minutes]

## Usage

```bash
node index.js [command] [minutes]

| Command          | Description                                                            
| ---------------- | ---------------------------------------------------------------------- 
| `t`              | 🔒 Lock screen after *N* minutes                                       
| `s`              | 💻 Shutdown the computer after *N* minutes                             
| `tw`             | 🔒 Lock screen & 📴 turn off WiFi after *N* minutes                    
| `d`              | 🔒 Lock screen, 📴 turn off WiFi, ⏸️ pause Chrome media after *N* mins 
| `c`              | ❌ Cancel any scheduled shutdown                                        
| `--help` or `-h` | 📘 Show help message                                                   

## Examples

node index.js t 5     # 🔒 Lock screen in 5 minutes
node index.js s 10    # 💻 Shutdown in 10 minutes
node index.js tw 3    # 🔒 Lock screen + 📴 turn off WiFi in 3 minutes
node index.js d 2     # 🔒 + 📴 + ⏸️ in 2 minutes
node index.js c       # ❌ Cancel shutdown

## Requirements

- macOS
- Node.js installed
- Google Chrome (for media pause functionality)

## Notes

Uses osascript (AppleScript) to control Chrome tabs.

sudo may be required for shutdown commands.

## License

Let me know if you'd like to:

- 🎯 Add real GitHub repo links
- 🧪 Include test coverage badges
- 📝 Add a changelog section

I'm happy to expand it further!
