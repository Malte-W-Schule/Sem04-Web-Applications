@ECHO ON
REM The script sets environment variables helpful for PostgreSQL
@SET PATH="%~dp0\software\pgsql\bin";%PATH%
@SET PGDATA=%~dp0\databases\\pgsql
@SET PGDATABASE=smartmonitoring_test
@SET PGUSER=smartmonitoring_test
@SET PGPORT=5432
@SET PGLOCALEDIR=%~dp0\databases\pqsql\share\locale
"%~dp0\software\pgsql\bin\initdb" -U smartmonitoring_test -A trust
"%~dp0\software\pgsql\bin\pg_ctl" -D "%~dp0\databases\pgsql" -l "software_logs\pgsql\log.txt" start
"%~dp0\software\pgsql\bin\createdb" -E UTF8 -T template0 smartmonitoring_test
"%~dp0\software\pgsql\bin\psql" -c "CREATE EXTENSION postgis;" smartmonitoring_test
"%~dp0\software\pgsql\bin\psql" -c "CREATE EXTENSION postgis_sfcgal;" smartmonitoring_test
"%~dp0\software\pgsql\bin\pg_ctl" -D "%~dp0\databases\pgsql" stop
pause