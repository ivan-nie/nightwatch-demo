const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
    src_folders: ["tests"],
    output_folder: "reports",
    custom_commands_path: "",
    page_objects_path: "pages",
    custom_assertions_path: "",
    globals_path: "./globals.js",
    live_output: true,
    disable_colors: true,
    detailed_output: true,

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: "",
        port: 4444,
        cli_args: {
            "webdriver.chrome.driver": chromedriver.path
        }
    },
    test_workers: {
        enabled: true,
        workers: "auto"
    },
    test_settings: {
        default: {
            launch_url: "http://localhost",
            selenium_port: 4444,
            selenium_host: "127.0.0.1",
            silent: true,
            /*
            screenshots: {
              enabled: true,
              on_failure: true,
              on_error: false,
              path: "./logs/"
            },
            */
            // /*
            screenshots: {
                enabled: false,
                path: ""
            },
            // */
            globals: {
                waitForConditionTimeout: 10000 // timeout after wating for 10 seconds
            },
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ["headless", "no-sandbox", "disable-gpu", "disable-popup-blocking", "window-size=1920,1080"]
                }
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ["headless", "no-sandbox", "disable-gpu", "disable-popup-blocking"]
                }
            },
            selenium: {
                cli_args: {
                    "webdriver.chrome.driver": chromedriver.path
                }
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                marionette: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        },
        phantomjs: {
            desiredCapabilities: {
                browserName: "phantomjs",
                javascriptEnabled: true,
                acceptSslCerts: true,
                "phantomjs.binary.path": phantomjs.path,
                "phantomjs.cli.args": ["--ignore-ssl-errors=true", "--web-security-false"]
            }
        }
    }
};
