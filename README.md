# tweeker-js

> Simple a/b and multivariate testing in Javascript ES6.

A simple javascript library to embed [Tweeker](https://tweeker.io) on your site.

If you're using React, check out our [React specific library](https://github.com/tweeker-io/react-tweeker-js).

## Installation

To use, first sign up for an account on [https://tweeker.io](https://tweeker.io)

Then in your javascript install the module using `npm` or `yarn`.

`npm install tweeker-js`
or
`yarn add tweeker-js`

## Usage

`import { embedTweeker } from "tweeker-js"`

Finally, make sure this function runs on every page of your app:

```
embedTweeker({
  businessId: YOUR_BUSINESS_ID,
  embedVersion: YOUR_EMBED_VERSION
})
```

Also make sure you replace the arguments `YOUR_BUSINESS_ID` and `YOUR_EMBED_VERSION` with your accounts values. You can get these values at [https://app.tweeker.io/embed](https://app.tweeker.io/embed)