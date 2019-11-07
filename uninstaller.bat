@echo off
color a
title Uninstaller
cd %~dp0
cls
choice /C 12 /M "Are you sure you want to uninstall ExpressRouter? [1 = Yes; 2 = No]"

:: E
IF ERRORLEVEL 2 exit
IF ERRORLEVEL 1 GOTO Dropper

:Dropper
move src\exec-uninstall.bat %~dp0\..
start %~dp0\..\exec-uninstall.bat
