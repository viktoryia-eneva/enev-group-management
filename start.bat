@echo off
cd /d "%~dp0frontend"
set "PATH=%PATH%;C:\Program Files\node.js"
start "" "http://localhost:5173/"
call npm.cmd run dev -- --host localhost --port 5173 --strictPort
pause