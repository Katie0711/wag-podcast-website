@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "C:\Users\Lenovo\Documents\thewagpodcast-website"
call npm run dev -- --host --port 4322
