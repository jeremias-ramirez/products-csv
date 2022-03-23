/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Page = bizSdk.Page;
const PagePost = bizSdk.PagePost;

const access_token = "EAAt9IXog9d8BAPDRrJcm1Q6yGsneLjY8JehZChRpNFZCi03st9RzAGFc76O8RNQqd53YOuMA6oE255kL7ZCbCJuYudRoeZBgmbZBmzT1PZBxtS55fioGdOPrtfvQz6R0Gcqs0GLNnN90HDAiasiDkTo1nLtkW5uKtH8vodcP3IdO9tW9iVjZBbb3k9EMPFHep1EmSkpe8OE0QZDZD";

const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';

const id = "105694002075350";
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
fields = [
];
params = {
    'message': 'This is a test value2',
    "url": "https://products-csv.herokuapp.com/post1.html"
};
const feed = (new Page(id)).createFeed(
    fields,
    params
);
logApiCallResult('feed api call complete.', feed);