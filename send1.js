const Nexmo = require('nexmo');


const nexmo = new Nexmo({
    apiKey: '9bb7afd9',
    apiSecret: 'q4djRFn2uUEggyfQ',
});

const from = "Vonage APIs";
const to = "$numer1";
const text = "$text1";

nexmo.message.sendSms(from, to, text);