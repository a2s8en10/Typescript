@echo off
setlocal

rem Set the directory path where the JavaScript files are located
set "directory=D:\Hosting\Typescript"

rem Delete all JavaScript files in the specified directory
del /s /q "%directory%\*.js"

echo JavaScript files deleted successfully.
pause