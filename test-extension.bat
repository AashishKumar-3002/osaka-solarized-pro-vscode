@echo off
echo 🏯 Testing Osaka Solarized Pro VS Code Theme
echo ========================================

REM Check if vsce is installed
where vsce >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ vsce is not installed. Please install it with: npm install -g vsce
    exit /b 1
)

echo ✅ vsce is installed

REM Package the extension
echo 📦 Packaging extension...
vsce package

REM Check if package was created
if exist *.vsix (
    echo ✅ Extension packaged successfully
    echo 📝 You can now install it locally with:
    for %%f in (*.vsix) do echo    code --install-extension %%f
    echo.
    echo 🚀 To publish to marketplace:
    echo    1. Create a publisher account at https://marketplace.visualstudio.com/manage
    echo    2. Get a Personal Access Token from Azure DevOps
    echo    3. Run: vsce login ^<publisher-name^>
    echo    4. Run: vsce publish
) else (
    echo ❌ Failed to package extension
    exit /b 1
)
