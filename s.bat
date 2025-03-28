@echo off
setlocal ENABLEEXTENSIONS

echo Creating folders and files in current directory...

:: Use mkdir with 2>nul to suppress errors if folders already exist
mkdir markdown\notes 2>nul
mkdir markdown\blog-posts 2>nul
mkdir markdown\updates 2>nul

mkdir templates 2>nul
mkdir chatbot\knowledge 2>nul
mkdir api 2>nul

:: Use echo without parentheses to avoid syntax issues

if not exist css\style.css echo /* Global styles (optional) */>css\style.css
if not exist js\menu.js echo // Menu toggle script placeholder>js\menu.js
if not exist js\loadContent.js echo // Load content from JSON>js\loadContent.js

if not exist data\notes.json echo [ ]>data\notes.json
if not exist data\projects.json echo [ ]>data\projects.json
if not exist data\videos.json echo [ ]>data\videos.json
if not exist data\blog.json echo [ ]>data\blog.json
if not exist data\updates.json echo [ ]>data\updates.json

if not exist templates\header.html echo <!-- Header -->>templates\header.html
if not exist templates\footer.html echo <!-- Footer -->>templates\footer.html

if not exist chatbot\rag.py echo # RAG chatbot backend (Gemini)>chatbot\rag.py
if not exist api\app.py echo # Flask or FastAPI app>api\app.py

:: Optional .html and docs
if not exist about.html echo.>about.html
if not exist notes.html echo.>notes.html
if not exist projects.html echo.>projects.html
if not exist videos.html echo.>videos.html
if not exist blog.html echo.>blog.html
if not exist updates.html echo.>updates.html
if not exist README.md echo # Everything App>README.md
if not exist LICENSE echo MIT License>LICENSE

echo ✅ Structure setup complete.
pause
