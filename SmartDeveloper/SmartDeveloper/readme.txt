SmartMonitoringDeveloper (Version 1.9.2 / 16.04.2026)

Voraussetzungen:
- Keine laufende Instanz eines postgreSQL Servers auf dem Host
  -> Da sonst Konflikte durch belegte Ports möglich
- Windows Betriebssystem (Hinweise für Linux Nutzer am Ende der readme)
- SmartDeveloper muss unter C:\ abgelegt werden
  -> Weil einige Vorkonfigurationen nur mit Absoluten Pfaden möglich waren

Starten der SQL-Datenbank
1. Bei erstmaliger Nutzung InitPostgreSQL.bat starten.
2. Zum starten StartPostgreSQL.bat ausführen.
3. Konsole wartet auf Eingabe und beendet den Server nach Eingabe von Enter.

Starten des Datenbanktools:
1. StartDBeaver.bat ausführen

Starten von Netbeans
1. StartNetbeans.bat ausführen

(Bitte die Programme nur über die Batch Dateien starten, da sonnst das Konfigurationsverzeichnis nicht genutzt wird.)

Starten des Payara-Servers
1. Starten sie den Payara über die Funktion in NetBeans

Starten von Insomnia (Postman Alternative)
1. StartInsomnia.bat ausführen

----------------------------------------
Payara Web- und Full-Profile

Seit Version 1.4 wird standardmäßig der Payara im WebProfile verwendet, um eine Entwicklung kompatibel zum MicroService Konzept zu unterstützen.
Seit Version 1.6 wird der Payara im Full-Profile nicht mehr mit ausgeliefert und muss bei Bedarf selbst hinzugefügt werden.
Seit Version 1.7 entfällt der Support für JavaEE8 und JakartaEE10 wird supported
Seit Version 1.9 wird JavaEE11 supported (JavaEE10 Anwendungen sind weitgehend kompatibel)

----------------------------------------
MANUELLE ANPASSUNGEN: (Wenn Sie SMD in einem anderen Ordner liegen haben wollen)

Einrichten von Netbeans
1. StartNetbeans.bat ausführen
2. Services klicken -> Servers Rechtsklick -> Add Server
3. Payara Server auswählen -> Name des Servers in Payara ändern -> Next
4. Bei Pfad "payara7" eintragen -> Next -> (Domain: domain1 , Host: localhost)

----------------------------------------
TOOLS

postgres 18.1 (Datenbank)
postgis 3.6.1 (Geodaten-Datenbankerweiterung)
dbeaver 26.0.1 (Datenbankmanagementtool)
payara 7.2025.2 (web - Web Profile)
netbeans 29.0 (Entwicklungsumgebung)
openJDK 21.0.1
insomnia 8.5.1 (API- und HTTP-Testtool)
----------------------------------------
VORKONFIGURIERT

postgres Datenbank "smartmonitoring_test"
- Mit aktivierter Erweiterung "postgis" und "postgis_sfcgal"
netbeans Entwicklungsumgebung
- Mit voreingestellter payara-Anbindung
- Mit ausgecheckten Projekten zum SmartMonitoring (inkl. git-Anbindung)
  - Backend Projekte liegen im Verzeichnis C:\SmartDeveloper\projects
    -> war-Dateien zum Deploy werden standardmäßig in den Ordner "dist" des jeweiligen Projekts gebaut
  - Frontend-Projekte liegen im Verzeichnis C:\SmartDeveloper\software\payara7\glassfish\domains\domain1\docroot
    -> Alle Änderungen am Code sind sofort live über den Payara verfügbar
payara Werver
- Mit eingerichteten ConnectionPools zur lokalen smartmonitoring-Datenbank

----------------------------------------
Datenbankzugangsdaten für Zugriff mit anderen Tools:
URL:		jdbc:postgresql://localhost:5432/smartmonitoring_test
Benutzername:	smartmonitoring_test
Passwort:	smartmonitoring_test

Weitere Datenbanken:
Weitere aktuelle Projektdatenbanken sind je nach ihrem Bedarf als Exporte vom HSBI Server enthalten.
Benutzername und Passwort sind immer identisch zum Namen der Datenbank.

---------------------------------------
NUTZUNG UNTER LINUX

1. Kopieren Sie SmartDeveloper in ihr Home-Verzeichnis (z.B. /home/username/SmartDevleoper)
2. Machen Sie die Linux-Startdatei ausführbar
   chmod +x netbeans.sh
3. Starten Sie Netbeans
4. Services klicken -> Servers Rechtsklick -> Add Server
5. Payara Server auswählen -> Name des Servers in Payara ändern -> Next
6. Bei Pfad "payara7" eintragen -> Next -> (Domain: domain1 , Host: localhost)


Folgende Software müssen Sie zusätzlich passend zu ihrer Linux Distribution installieren:
- JavaDevelomentKit (JDK in Version 21.x - Keine anderen Hauptversionen!)
- Dbeaver
  https://dbeaver.io/download/
- Insomnia (oder ein ähnliches Tool wie postman)
- Postgresql
