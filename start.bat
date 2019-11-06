@echo off
color a
title Start Script
cls
choice /C 12 /M "Start ExpressRouter? [1 = Yes, 2 = No]


:: E
IF ERRORLEVEL 2 exit
IF ERRORLEVEL 1 GOTO Start

:Start
node index.js
