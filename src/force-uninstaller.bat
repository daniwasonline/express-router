@echo off
color a
title Uninstaller
cd %~dp0
cls
move %~dp0\exec-uninstall.bat %~dp0\..\..
start %~dp0\..\..\exec-uninstall.bat
