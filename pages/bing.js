var bingCommands = {
    findTheAnswer: function () {
        /*
         *  In this case, we will open bing.com and search "what is microsoft" and take a screenshot to save our answers.
         */

        const searchInput = '#sb_form_q';
        const searchBtn = '#sb_form_go';
        const question = 'what is microsoft';
        var client = this.api;

        // Launch browser and open bing.com.
        client.url('http://bing.com').maximizeWindow();

        // Make sure both "body" and search input are available.
        client.expect.element('body').to.be.present;
        client.expect.element(searchInput).to.be.visible;
        client.pause(2000); // Just wait 2s.

        // Type "what is microsoft" in searching input and submit.
        client.setValue(searchInput, question);
        client.click(searchBtn);
        client.pause(2000);

        // Let's save these answers to a screenshot.
        client.expect.element('body').to.be.present;
        client.saveScreenshot('reports/answers.png'); // Take a screenshot and save to "reports/answer.png".

        return this;
    }
};

module.exports = {
    commands: [bingCommands],
    elements: {
    }
};