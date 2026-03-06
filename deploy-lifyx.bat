@echo off
setlocal EnableExtensions

set "PROJECT_DIR=C:\Users\shups\Downloads\LifyX Website Development"
set "KEY_PATH=C:\Users\shups\Downloads\lifyx-ec2-key.pem"
set "SERVER_USER=ec2-user"
set "SERVER_HOST=34.234.133.18"
set "REMOTE_TMP=/tmp/lifyx"
set "REMOTE_WEB=/var/www/lifyx"
set "SITE_URL=https://lifyx.ca"

echo.
echo ==========================================
echo   LifyX Deployment Starting
echo ==========================================
echo.

if not exist "%PROJECT_DIR%" (
    echo ERROR: Project directory not found:
    echo %PROJECT_DIR%
    exit /b 1
)

if not exist "%KEY_PATH%" (
    echo ERROR: SSH key not found:
    echo %KEY_PATH%
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo ERROR: npm is not installed or not in PATH.
    exit /b 1
)

where ssh >nul 2>nul
if errorlevel 1 (
    echo ERROR: ssh is not installed or not in PATH.
    exit /b 1
)

where scp >nul 2>nul
if errorlevel 1 (
    echo ERROR: scp is not installed or not in PATH.
    exit /b 1
)

cd /d "%PROJECT_DIR%"
if errorlevel 1 (
    echo ERROR: Failed to enter project directory.
    exit /b 1
)

echo [1/7] Verifying SSH connection...
ssh -i "%KEY_PATH%" -o BatchMode=yes -o ConnectTimeout=10 %SERVER_USER%@%SERVER_HOST% "echo SSH connection successful"
if errorlevel 1 (
    echo ERROR: SSH connection failed.
    exit /b 1
)

echo.
echo [2/7] Installing dependencies if needed...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed.
    exit /b 1
)

echo.
echo [3/7] Building production files...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed.
    exit /b 1
)

if not exist "%PROJECT_DIR%\dist\index.html" (
    echo ERROR: dist\index.html was not found.
    exit /b 1
)

echo.
echo [4/7] Preparing remote temp directory...
ssh -i "%KEY_PATH%" %SERVER_USER%@%SERVER_HOST% "mkdir -p %REMOTE_TMP% && rm -rf %REMOTE_TMP%/*"
if errorlevel 1 (
    echo ERROR: Failed to prepare remote temp directory.
    exit /b 1
)

echo.
echo [5/7] Uploading dist files...
scp -i "%KEY_PATH%" -r dist\* %SERVER_USER%@%SERVER_HOST%:%REMOTE_TMP%/
if errorlevel 1 (
    echo ERROR: Upload failed.
    exit /b 1
)

echo.
echo [6/7] Deploying to live web directory...
ssh -i "%KEY_PATH%" %SERVER_USER%@%SERVER_HOST% "sudo mkdir -p %REMOTE_WEB% && sudo rm -rf %REMOTE_WEB%/* && sudo cp -r %REMOTE_TMP%/* %REMOTE_WEB%/ && sudo chown -R nginx:nginx %REMOTE_WEB% && sudo find %REMOTE_WEB% -type d -exec chmod 755 {} \; && sudo find %REMOTE_WEB% -type f -exec chmod 644 {} \; && sudo nginx -t && sudo systemctl reload nginx"
if errorlevel 1 (
    echo ERROR: Remote deployment failed.
    exit /b 1
)

echo.
echo [7/7] Verifying live site...
curl -Ik %SITE_URL%
if errorlevel 1 (
    echo WARNING: Could not verify site with curl.
    exit /b 1
)

echo.
echo ==========================================
echo   LifyX Deployment Completed Successfully
echo ==========================================
echo.
pause
endlocal