#!/bin/bash

# Test Script for Osaka Solarized Pro VS Code Theme

echo "🏯 Testing     </div>
 VS Code Theme"
echo "========================================"

# Check if vsce is installed
if ! command -v vsce &> /dev/null; then
    echo "❌ vsce is not installed. Please install it with: npm install -g vsce"
    exit 1
fi

echo "✅ vsce is installed"

# Package the extension
echo "📦 Packaging extension..."
vsce package

# Check if package was created
if [ -f *.vsix ]; then
    echo "✅ Extension packaged successfully"
    echo "📝 You can now install it locally with:"
    echo "   code --install-extension $(ls *.vsix | head -n1)"
    echo ""
    echo "🚀 To publish to marketplace:"
    echo "   1. Create a publisher account at https://marketplace.visualstudio.com/manage"
    echo "   2. Get a Personal Access Token from Azure DevOps"
    echo "   3. Run: vsce login <publisher-name>"
    echo "   4. Run: vsce publish"
else
    echo "❌ Failed to package extension"
    exit 1
fi
