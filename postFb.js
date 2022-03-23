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

const access_token = "EAAt9IXog9d8BAFlCuU2QJKobqPCGpoEE5moeHCNjnxOYStfZBScVhDZBdiF8U7bF0sclf8NLhEh4GhCPZCGUz8IDp3gOKuumuj3Ctcz7C96mrkYChDHK0EPCqBpBd7qu4pTeBCKZBnXjzyqfCEE0XmlIhpSD5atIJx1hgHTXDHe5TckH4l7awOAmhkCzspDD1Ml927jDLgZDZD";
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
    "link": "https://products-csv.herokuapp.com/post1.html"
};
const feed = (new Page(id)).createFeed(
    fields,
    params
);
logApiCallResult('feed api call complete.', feed);