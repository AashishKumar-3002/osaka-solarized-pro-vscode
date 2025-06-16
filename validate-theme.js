#!/usr/bin/env node

// Theme Validation Script for Osaka Solarized Pro
const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Osaka Solarized Pro Theme Extension');
console.log('==============================================\n');

// Check package.json
console.log('📋 Checking package.json...');
try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check required fields
    if (!packageJson.name) console.log('❌ Missing: name');
    else console.log('✅ name:', packageJson.name);
    
    if (!packageJson.displayName) console.log('❌ Missing: displayName');
    else console.log('✅ displayName:', packageJson.displayName);
    
    if (!packageJson.version) console.log('❌ Missing: version');
    else console.log('✅ version:', packageJson.version);
    
    if (!packageJson.engines || !packageJson.engines.vscode) {
        console.log('❌ Missing: engines.vscode');
    } else {
        console.log('✅ engines.vscode:', packageJson.engines.vscode);
    }
    
    if (!packageJson.categories || !packageJson.categories.includes('Themes')) {
        console.log('❌ Missing or incorrect: categories (should include "Themes")');
    } else {
        console.log('✅ categories include "Themes"');
    }
    
    // Check theme contributions
    if (!packageJson.contributes || !packageJson.contributes.themes) {
        console.log('❌ Missing: contributes.themes');
    } else {
        console.log('✅ Found', packageJson.contributes.themes.length, 'theme(s)');
        
        packageJson.contributes.themes.forEach((theme, index) => {
            console.log(`   Theme ${index + 1}:`);
            console.log(`     - label: ${theme.label}`);
            console.log(`     - uiTheme: ${theme.uiTheme}`);
            console.log(`     - path: ${theme.path}`);
            
            // Check if theme file exists
            const themePath = path.resolve(theme.path);
            if (fs.existsSync(themePath)) {
                console.log(`     ✅ Theme file exists`);
                
                // Validate JSON
                try {
                    const themeContent = JSON.parse(fs.readFileSync(themePath, 'utf8'));
                    console.log(`     ✅ Valid JSON`);
                    
                    // Check required theme properties
                    if (!themeContent.name) console.log(`     ⚠️  Missing theme name`);
                    if (!themeContent.type) console.log(`     ⚠️  Missing theme type`);
                    if (!themeContent.colors) console.log(`     ❌ Missing colors object`);
                    if (!themeContent.tokenColors) console.log(`     ❌ Missing tokenColors array`);
                    
                    if (themeContent.colors && themeContent.tokenColors) {
                        console.log(`     ✅ Has colors (${Object.keys(themeContent.colors).length}) and tokenColors (${themeContent.tokenColors.length})`);
                    }
                    
                } catch (err) {
                    console.log(`     ❌ Invalid JSON:`, err.message);
                }
            } else {
                console.log(`     ❌ Theme file not found: ${themePath}`);
            }
        });
    }
    
} catch (err) {
    console.log('❌ Error reading package.json:', err.message);
}

console.log('\n🔧 Troubleshooting Tips:');
console.log('========================');
console.log('1. Make sure the extension is properly installed');
console.log('2. Restart VS Code after installing the extension');
console.log('3. Check if the extension appears in the Extensions panel');
console.log('4. Try uninstalling and reinstalling the extension');
console.log('5. Check the Developer Console (Help > Toggle Developer Tools) for errors');

console.log('\n📝 Installation Commands:');
console.log('=========================');
console.log('To install locally:');
console.log('  code --install-extension osaka-solarized-pro-1.0.0.vsix');
console.log('\nTo uninstall:');
console.log('  code --uninstall-extension your-publisher-name.osaka-solarized-pro');
console.log('\nTo package:');
console.log('  vsce package');
