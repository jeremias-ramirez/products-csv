const compression = require('compression')

const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload');
const cors = require('cors')
const express = require('express');
const http = require('http');

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.use(compression());

app.use(cors({
    origin: '*'
}));

app.set('port', 1337);
app.use(bodyParser.urlencoded({
    extended: true,
    uploadDir: '/tmp/'
}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true
}));



http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


const VALID_ACCESS_TOKEN = "EAAt9IXog9d8BADCvlubXhZAQ6j6cZBr2BHZCQxZAqX3FP3UwPaBdzV9DaUMnEIb1JCkMMa2F7FCKM3I80IajO4qUnCfsMJdLKXQMYoa7dfnF3ZBZAWZBqcB9ZBjO6XMiJ28quAPALugXPn1a1VJUSRfJu8fOEKAGX1p2ZB5NiCciU0owT8K27tUOkF0aOv99ZAuPVRsX8sLydtLyEFl1cVOTCK";
"EAAt9IXog9d8BAAE3A9ZCU5fWQxZClQNln5C1faGlVVysEAVgcR2TobZBa27ilvJANVlYDZCmP4WCJyVOFhg6ZBjFAHcdLODMDPOYwTxu07uHGfyTqwWmG8xlRqNvQTQZBa8dhNwi7uPt21bcQbUp5vgtBIr11EluHZBefZCAWL5TUSOw4FatUFRHHXQJth1rpsZBwmiGxehqz91ReHvunH3O5";
//"67687f20300e0616085d12c25f7b7773"
const VALID_APPSECRET_PROOF = "ce5d094440eb16b69bafc7fd39dc48ac";

const accessToken = VALID_ACCESS_TOKEN;
const appsecret_proof = VALID_APPSECRET_PROOF; //optional
const accountId = "489465796172260";


const bizSdk = require('facebook-nodejs-business-sdk');
const Page = bizSdk.Page;
const PagePost = bizSdk.PagePost;
const ProductCatalog = bizSdk.ProductCatalog;
const ProductFeed = bizSdk.ProductFeed;
const AdAccount = bizSdk.AdAccount;
const AdCreative = bizSdk.AdCreative;

const access_token = "EAAt9IXog9d8BAMsxyWMvSPP32tP4N6fZAmhG8RhA27yITZCV9OVFFtClmVt2eUVjkJYKpCIA5CPmCoNPMQaZALlvZCRfHFqQnw0GMRPZCYYsxhZCB0eW1NlUubZCz2E9Ux0R2XYCZBfj1kqTUfncVTZBFZCKGMZBoapgTXrbATMWTRTU6dS9dzB6ZAOzlWZA9YNprEJQ0pyvXjs9NnEDqABdz6dDM";

const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = "103503175640886";
//const id = "916102749081471"
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
    api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
    console.log(apiCallName);
    if (showDebugingInfo) {
        console.log('Data:' + JSON.stringify(data));
    }
};

let fields, params;
//fields = [
//];
//params = {
//    'message': 'This is a test value',
//
//    "link": "https://torrideuropa.com/",
//};
//const feed = (new Page(id)).createFeed(
//    fields,
//    params
//);
//logApiCallResult('feed api call complete.', feed);

fields = [
];
params = {
    'message': 'Sample Creative 2',
    //"link": "https://torrideuropa.com/",
    "actions": []
    //"name": "torrideuropa"
    //"picture": "https://www.facebook.com/images/fb_icon_325x325.png",
    //'call_to_action': {
    //    'type': 'BUY_NOW',
    //    'value': { 'link': 'https://torrideuropa.com/' }
    //}
    //'object_story_spec': { 'page_id': '<pageID>', 'link_data': { 'call_to_action': { 'type': 'INSTALL_MOBILE_APP', 'value': { 'link': '<appLink>' } }, 'image_hash': '<imageHash>', 'link': '<appLink>', 'message': 'Try it out' } },
};
//const feed = (new Page(id)).createFeed(
//    fields,
//    params
//);
//logApiCallResult('feed api call complete.', feed);


fields = [
];
params = {
    'url': 'https://www.facebook.com/images/fb_icon_325x325.png',
    'published': 'true',
    'caption': '<h4>This is a test value photo</h4><p> text of test</p> ',
    "link": "https://www.google.com"
};
//const photos = (new Page(id)).createPhoto(
//    fields,
//    params
//);
//logApiCallResult('photos api call complete.', photos);

//fields = [
//];
//params = {
//    'message': 'Browse our latest products',
//    'child_attachments': [{ 'link': '<link>', 'name': 'Product 1', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 2', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 3', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 4', 'description': '$4.99', 'image_hash': '<imageHash>' }],
//    'caption': 'WWW.EXAMPLE.COM',
//    'link': 'http://www.example.com/products',
//};
//const postss = (new Page(id)).getPosts(
//    fields,
//    params
//);
//logApiCallResult('postss api call complete.', postss);

//fields = [
//];
//params = {
//    'message': 'Browse our latest products',
//    //'child_attachments': [{ 'link': '<link>', 'name': 'Product 1', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 2', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 3', 'description': '$4.99', 'image_hash': '<imageHash>' }, { 'link': '<link>', 'name': 'Product 4', 'description': '$4.99', 'image_hash': '<imageHash>' }],
//    //'caption': 'WWW.EXAMPLE.COM',
//    //'link': 'https://www.facebook.com/images/fb_icon_325x325.png',
//    //, 'value': { 'link': 'https://www.facebook.com/images/fb_icon_325x325.png', 'app_link': 'https://www.google.com' }
//    'call_to_action': { 'type': 'BUY_NOW' }
//};
//const feed = (new Page(id)).createFeed(
//    fields,
//    params
//);
//logApiCallResult('feed api call complete.', feed);

//fields = [
//];
//params = {
//    'name': 'Test Feed',
//    'schedule': { 'interval': 'DAILY', 'url': 'http://www.example.com/sample_feed.tsv', 'hour': '22' },
//};
//
//const product_feeds = (new ProductCatalog(id)).createProductFeed(
//    fields,
//    params
//);
//logApiCallResult('product_feeds api call complete.', product_feeds);
//
//fields = [
//];
//params = {
//    'message': 'This is a test message 2',
//
//    //"link": "https://www.google.com",
//    'call_to_action': { 'type': 'BUY_NOW', 'value': { 'link': 'https://www.facebook.com/images/fb_icon_325x325.png', 'app_link': 'https://www.google.com' } },
//
//};
//const feed = (new Page(id)).createFeed(
//    fields,
//    params
//);
//logApiCallResult('feed api call complete.', feed);
//const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
//const AdAccount = bizSdk.AdAccount;
//const Campaign = bizSdk.Campaign;
//
//const account = new AdAccount(accountId);
//var campaigns;
//
//account.read([AdAccount.Fields.name])
//    .then((account) => {
//        console.log(account);
//        //return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
//    })
//    //.then((result) => {
//    //    campaigns = result
//    //    campaigns.forEach((campaign) => console.log(campaign.name))
//    //})
//    .catch(console.error);
//




var FB = require('fb'),
    fb = new FB.Facebook();

FB.setAccessToken(access_token);

var body = 'My first post using facebook-node-sdk 7';
const parameters = {
    message: body,
    //link: "https://www.google.com",
    //caption: "caption",
    name: "titulo",
    url: {
        //picture: "https://www.facebook.com/images/fb_icon_325x325.png",
        name: "titulo",
        description: "description"
    }
}

//link: "https://www.google.com"
FB.api('me/feed', 'post', parameters, function (res) {
    if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
    console.log('Post Id: ' + res.id);
});
