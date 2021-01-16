@echo off

echo //This will build the exe and Everytime you update the Config, please rebuild the Exe!!!\\
del discord-rpc.exe
pkg .
timeout /t 15 /nobreak
exit
