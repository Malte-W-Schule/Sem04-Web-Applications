@echo off
REM Setze JAVA_HOME auf dein JDK-25
set JAVA_HOME=C:\SmartDeveloper\software\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%

REM Wechsel ins NetBeans-Verzeichnis
cd /d C:\SmartDeveloper\software\netbeans\bin

REM Starte NetBeans mit eigener Konfiguration
start "" netbeans.exe --userdir "C:\SmartDeveloper\software_configuration\netbeans"
exit