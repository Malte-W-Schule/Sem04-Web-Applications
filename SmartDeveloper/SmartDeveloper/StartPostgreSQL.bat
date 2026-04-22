echo off
software\pgsql\bin\pg_ctl start -D databases\pgsql -l software_logs\pgsql\log.txt
echo "Zum Beenden des PostgreSQL-Servers Enter druecken"
pause >nul
software\pgsql\bin\pg_ctl stop -D databases\pgsql