# Playwright Automation Project

<h3 align="center">End-to-End Test Automation using Playwright</h3>

<div align="center">
  <img src="playwright%20framework.png" alt="Playwright Framework Architecture" width="600"/>
</div>

## 📋 Project Overview

This repository contains comprehensive Playwright test automation scripts for end-to-end (E2E) testing. It demonstrates best practices for modern web application testing using Playwright's powerful features including XPath locators, CSS selectors, and advanced interaction patterns.

## 🎯 Project Features

- **Multi-locator Strategy**: Supports XPath, CSS selectors, and Playwright locators
- **Modular Test Structure**: Organized test files for different test scenarios
- **Comprehensive Coverage**: Multiple test suites covering various UI interactions
- **Configuration Management**: Centralized Playwright configuration
- **HTML Reporting**: Automated test report generation

## 📁 Project Structure

```
Playwright Automation/
├── tests/
│   ├── mytest.spec.ts           # Main test suite
│   ├── pwLocator.spec.ts        # Playwright locator examples
│   └── xpathlocator.spec.ts     # XPath locator examples
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies
├── playwright-report/            # Test reports
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/mytest.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# Run tests with specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Viewing Reports

```bash
# Generate and view HTML report
npx playwright show-report
```

## 🛠️ Technologies Used

- **Playwright**: Modern browser automation framework
- **TypeScript**: Type-safe test code
- **Node.js**: JavaScript runtime
- **npm**: Package management

## 📊 Test Locators

The project demonstrates three primary locator strategies:

### 1. XPath Locators (`xpathlocator.spec.ts`)
- Dynamic element selection using XPath expressions
- Complex hierarchical element targeting
- Advanced xpath patterns and strategies

### 2. CSS Selectors (`pwLocator.spec.ts`)
- Fast and reliable CSS-based locators
- Efficient element selection using CSS selectors
- Pseudo-element and pseudo-class usage

### 3. Playwright Locators (`pwLocator.spec.ts`)
- Built-in Playwright locator engine
- Modern locator strategies with automatic waiting
- Improved reliability and maintainability

## 📝 Test Documentation

Refer to included PDF guides:
- `playwright_locators_chart.pdf` - Complete locator reference
- `playwright_cheatsheet.pdf` - Quick reference guide
- `html_aria_roles_table.pdf` - ARIA roles reference

## 🔧 Configuration

The `playwright.config.ts` file contains configuration for:
- Browser types (Chromium, Firefox, WebKit)
- Test timeout and retry settings
- Report generation options
- Base URL and other environment settings

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

Reports are generated in the `playwright-report/` directory.

## 💡 Best Practices

- Use explicit waits and proper locators
- Follow the page object model pattern for complex tests
- Use descriptive test names
- Keep tests independent and isolated
- Regularly update Playwright to latest version

## 👤 Author

**Rahul Shome** - SDET | Test Automation Engineer

- Email: rahulshome828@gmail.com
- LinkedIn: [linkedin.com/in/rahulshome01](https://linkedin.com/in/rahulshome01)
- GitHub: [github.com/rahulshome121345](https://github.com/rahulshome121345)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

**Last Updated**: January 2026
