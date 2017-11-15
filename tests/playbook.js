module.exports = {
    'click demo': '' + function (client) {
        var demo = client.page.demo();
        demo.clickDemoBtn();
        client.end();
    },
    'find the answer': '' + function (client) {
        var bing = client.page.bing();
        bing.findTheAnswer();
        client.end();
    },
    'tubatu test': function (client) {
        var tubatu = client.page.tubatu();
        tubatu.clickCalculateBtn();
        // client.end();
    },
    // disabled
    'other sample test': '' + function (client) {
        // test code
    }
};