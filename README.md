# 🎨 Osaka Solarized Pro

[![Downloads](https://img.shields.io/vscode-marketplace/d/AashishKumar-3002.osaka-solarized-pro.svg)](https://marketplace.visualstudio.com/items?itemName=AashishKumar-3002.osaka-solarized-pro)

A **beautiful collection** of Solarized-inspired themes for Visual Studio Code, featuring three distinct variants: the classic Dark and Light themes, plus a stunning new **Monokai Storm** variant. Originally ported from [craftzdog's Solarized Osaka](https://github.com/craftzdog/solarized-osaka.nvim) Neovim theme by Takuya Matsuyama.

## ✨ Features

- 🌙 **Osaka Solarized Pro Dark** - The classic, eye-friendly dark theme
- ☀️ **Osaka Solarized Pro Light** - Clean and bright for daytime coding
- ⚡ **Osaka Solarized Pro Monokai Storm** - Modern, minimalist dark theme with vibrant accents
- 🎯 **Optimized for readability** - Carefully balanced contrast ratios
- 🚀 **Modern VS Code integration** - Seamless UI theming
- 💻 **Multi-language support** - Comprehensive syntax highlighting
- 🔧 **Professional grade** - Perfect for long coding sessions

## 🚀 Quick Start

### Installation from VS Code Marketplace
1. Open **Visual Studio Code**
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for **"Osaka Solarized Pro"**
4. Click **Install**
5. Press `Ctrl+K Ctrl+T` to open theme selector
6. Choose your preferred theme:
   - **Osaka Solarized Dark**
   - **Osaka Solarized Light** 
   - **Osaka Solarized Monokai Storm**

### Manual Installation
1. Download the latest `.vsix` from [GitHub Releases](https://github.com/AashishKumar-3002/osaka-solarized-pro-vscode/releases)
2. Open VS Code and press `Ctrl+Shift+P`
3. Type `Extensions: Install from VSIX` and select it
4. Choose the downloaded `.vsix` file
5. Reload VS Code when prompted

## 🎯 Theme Showcase

### 🌙 Solarized Osaka Dark
*Perfect for late-night coding sessions*

![Osaka Solarized Dark Theme](https://raw.githubusercontent.com/AashishKumar-3002/osaka-solarized-pro-vscode/main/screenshots/osaka-solarized-pro-dark.png)

**Key Features:**
- Deep blue-gray backgrounds (`#002731`, `#003f4a`)
- Warm cyan accents (`#2aa198`)
- Excellent contrast for reduced eye strain
- Classic Solarized color harmony

---

### ☀️ Solarized Osaka Light  
*Bright and clean for daytime productivity*

![Osaka Solarized Light Theme](https://raw.githubusercontent.com/AashishKumar-3002/osaka-solarized-pro-vscode/main/screenshots/osaka-solarized-pro-light.png)

**Key Features:**
- Warm cream backgrounds (`#fdf6e3`)
- Subtle gray text (`#657b83`)
- High readability in bright environments
- Maintains Solarized's signature balance

---

### ⚡ Solarized Osaka Monokai Storm
*Modern, minimalist, and vibrant*

![Osaka Solarized Monokai Storm Theme](https://raw.githubusercontent.com/AashishKumar-3002/osaka-solarized-pro-vscode/main/screenshots/osaka-solarized-pro-monokai-storm.png)

**Key Features:**
- Ultra-dark backgrounds (`#181825`, `#1e1e2e`)
- Vibrant green primary accent (`#a9dc76`)
- Modern color palette inspired by Catppuccin and Monokai
- Perfect for contemporary development workflows

## 🎨 Color Palettes

### 🌙 Solarized Dark/Light
| Color | Dark Hex | Light Hex | Usage |
|-------|----------|-----------|--------|
| Background | `#002731` | `#fdf6e3` | Editor background |
| Foreground | `#a5b4b9` | `#657b83` | Main text |
| Cyan | `#2aa198` | `#2aa198` | Strings, selections |
| Blue | `#268bd2` | `#268bd2` | Functions, keywords |
| Green | `#859900` | `#859900` | Comments, markup |
| Yellow | `#b58900` | `#b58900` | Warnings, search |
| Orange | `#cb4b16` | `#cb4b16` | Variables, constants |
| Red | `#dc322f` | `#dc322f` | Errors, deletion |
| Magenta | `#d33682` | `#d33682` | Keywords, regex |
| Violet | `#6c71c4` | `#6c71c4` | Special syntax |

### ⚡ Monokai Storm
| Color | Hex | Usage |
|-------|-----|--------|
| Background | `#181825` / `#1e1e2e` | Editor / UI background |
| Foreground | `#cdd6f4` | Main text |
| Green | `#a9dc76` | Primary accent, strings |
| Orange | `#fab387` | Secondary accent, warnings |
| Blue | `#89b4fa` | Functions, properties |
| Purple | `#cba6f7` | Keywords, storage |
| Pink | `#f38ba8` | Errors, tags |
| Yellow | `#f9e2af` | Constants, support |
| Teal | `#74c7ec` | Links, info |

## 🛠️ Supported Languages

This theme provides enhanced syntax highlighting for:

- **Web Technologies**: HTML, CSS, JavaScript, TypeScript, React, Vue, Angular
- **Backend**: Python, Java, C#, Go, Rust, PHP, Ruby
- **Data & Config**: JSON, YAML, XML, TOML, INI
- **DevOps**: Docker, Kubernetes, Terraform, Shell scripts
- **Databases**: SQL, MongoDB, PostgreSQL
- **Documentation**: Markdown, reStructuredText
- **And many more...**

## ⚙️ Customization

Want to customize the theme? You can override specific colors in your `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Solarized Osaka Monokai Storm]": {
      "editor.background": "#1a1a2e",
      "sideBar.background": "#16213e"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Solarized Osaka Monokai Storm]": {
      "comments": "#6272a4"
    }
  }
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🐛 Report Issues**: Found a bug or have a suggestion? [Open an issue](https://github.com/AashishKumar-3002/osaka-solarized-pro-vscode/issues)
2. **🎨 Improve Colors**: Suggest better color combinations or contrast improvements
3. **📝 Documentation**: Help improve our documentation
4. **🔧 Code**: Submit pull requests for improvements

### Development Setup
```bash
# Clone the repository
git clone https://github.com/AashishKumar-3002/osaka-solarized-pro-vscode.git
cd osaka-solarized-pro-vscode

# Install dependencies (if any)
npm install

# Package the extension
vsce package

# Test locally
code --install-extension osaka-solarized-pro-1.0.0.vsix
```

## 🙏 Credits & Inspiration

- **Original Solarized**: [Ethan Schoonover](https://ethanschoonover.com/solarized/) for the foundational color science
- **Solarized Osaka Neovim**: [Takuya Matsuyama (craftzdog)](https://github.com/craftzdog/solarized-osaka.nvim) for the beautiful Neovim adaptation
- **VS Code Port**: [AashishKumar-3002](https://github.com/AashishKumar-3002) for the VS Code implementation and Monokai Storm variant
- **Catppuccin**: Inspiration for the Monokai Storm variant's modern aesthetic
- **VS Code Community**: For feedback and suggestions

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 📊 Stats & Recognition

- ⭐ **GitHub Stars**: [View on GitHub](https://github.com/AashishKumar-3002/osaka-solarized-pro-vscode)
- 📦 **Downloads**: Growing community of developers
- 🏆 **Featured**: Trending in VS Code theme collections

---

## 📋 Changelog

### 1.0.0 - Initial Release
- ✨ **Three beautiful theme variants**
  - 🌙 Solarized Osaka Dark - Classic eye-friendly dark theme
  - ☀️ Solarized Osaka Light - Clean bright theme for daytime coding  
  - ⚡ Solarized Osaka Monokai Storm - Modern minimalist dark theme
- 🎨 **Comprehensive syntax highlighting** for 20+ programming languages
- 🔧 **Complete VS Code UI theming** with consistent color schemes
- 📱 **Optimized for modern displays** with improved contrast ratios
- 🚀 **Professional-grade theming** suitable for enterprise development
- 📚 **Extensive documentation** with usage guides and customization options

---

**Made with ❤️ by [AashishKumar-3002](https://github.com/AashishKumar-3002)**

*If you enjoy using Osaka Solarized Pro, please consider giving it a ⭐ on [GitHub](https://github.com/AashishKumar-3002/osaka-solarized-pro-vscode) and leaving a review on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=AashishKumar-3002.osaka-solarized-pro)!*
