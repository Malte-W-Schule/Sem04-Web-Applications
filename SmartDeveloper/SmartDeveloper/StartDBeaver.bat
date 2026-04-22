@echo off
REM Setze JAVA_HOME auf dein JDK-25
set JAVA_HOME=C:\SmartDeveloper\software\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

REM Wechsel ins DBeaver-Verzeichnis
cd /d C:\SmartDeveloper\software\dbeaver

REM Starte DBeaver mit eigener Konfiguration
start "" dbeaver.exe -data "C:\SmartDeveloper\software_configuration\dbeaver"
exit