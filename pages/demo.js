var demoCommands = {
    clickDemoBtn: function () {
        var client = this.api;
        client.url("http://cdc-d-ivann:8082/index.html")
            .maximizeWindow()
            .waitForElementVisible('body');

        client.click('#btn');
        client.pause(600);
        client.getValue('#txt', function (d) {
            console.log(d);
        });

        return this;
    }
};

module.exports = {
    commands: [demoCommands],
    elements: {
        clickBtn: {
            selector: '#btn'
        }
    }
};