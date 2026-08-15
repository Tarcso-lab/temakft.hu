@echo off
chcp 65001 >nul
cd /d "%~dp0"

rem A Node.js teljes eleresi uttal indul, igy akkor is mukodik,
rem ha a PATH-ban meg nem szerepel (pl. regen megnyitott parancssorban).
set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=node"

if not exist "node_modules" (
  echo Fuggosegek telepitese... ez elso alkalommal 1-2 percig tart.
  "%ProgramFiles%\nodejs\npm.cmd" install
)

echo.
echo ==========================================================
echo   TEMA weboldal - fejlesztoi szerver indul
echo.
echo   Nyisd meg a bongeszoben:  http://localhost:3000
echo   Leallitas:                Ctrl + C
echo ==========================================================
echo.

"%NODE_EXE%" node_modules\next\dist\bin\next dev

echo.
echo A szerver leallt. Nyomj meg egy billentyut a bezarashoz.
pause >nul
