@echo off
title Uninstaller Executor
color a
cd %~dp0
rd /S /Q express-router
call :deleteSelf&exit /b
:deleteSelf
start /b "" cmd /c del "%~f0" && exit
