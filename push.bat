@echo off
REM Check if commit message is provided
IF "%~1"=="" (
    echo  Please provide a commit message.
    exit /b 1
)

git add .
git commit -m "%~1"
git push

echo ✅ Changes pushed with message: %~1
