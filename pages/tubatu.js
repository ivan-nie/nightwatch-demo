var tubatuCommands = {
    clickCalculateBtn: function () {
        var client = this.api;
        client.url("http://www.to8to.com/yezhu/zxbj.php")
            .maximizeWindow()
            .waitForElementVisible('body');

        client.click('select[id="User_Shen"] option[value="四川"]')
            .click('select[id="User_City"] option[value="成都"]')
            .setValue('#square', "83")
            .click('select[id="shi"] option[value="3"]')
            .click('select[id="ting"] option[value="2"]')
            .setValue('input[name="phone"]', "15680709873")
            .click('#calc_btn');
        return this;
    }
};

module.exports = {
    commands: [tubatuCommands],
    elements: {
        citySelect: {
            selector: 'select[id="User_Shen"] option[value="四川"]'
        },
        siteSelect: {
            selector: '#User_City'
        },
        squareInput: {
            selector: '#square'
        },
        shiSelect: {
            selector: '#shi'
        },
        tingSelect: {
            selector: '#ting'
        },
        phoneInput: {
            selector: 'input[name="phone"]'
        },
        calculateBtn: {
            selector: '#calc_btn'
        }
    }
};