# Actual Size Gatsby Starter

This is the default starter template for Actual Size's Gatsby websites. 

## Tooling

* Gatsby
* React
* Typescript
* yarn
* asdf
* Node.js LTS
* Tailwind CSS
* Emotion
* twin.macro

Generally, we host static sites on Netlify. (Include the Netlify badge in your project's README.)

## Actual Size Marker.io Integration
* Go to [app.marker.io](https://app.marker.io) and login with Cal. The credentials are in 1Password.
* Click the `Add destination` button in the top right corner.
* Select a `Space` and a `List` within that space. Make sure they're the correct space and list for the project you're working on. *If you're not sure, ask someone!*

* Once you've created your destination, select `Installation` under the `Widget` section of the side navigation.

* As of 04/21/2022, Marker.io only supports vanilla JS and Vue.

* Select `Install code manually` from the list of options provided after navigating to widget installation. In the code snippet provided by Marker, you'll see a destination ID:
![Destination ID](https://i.imgur.com/tKCTmJK.png)

* Go to the `Layout.tsx` component in this repository and replace the `UNIQUE DESTINATION ID` text with the destination ID from the step above.

* On [app.marker.io](https://app.marker.io), under the destination you just created, navigate to the general settings. Add your staging/development sites to the `Website domains` section. Make sure to include `http://localhost:8000`, too!

* Fire up your development server and check to see if the widget was integrated successfully.

* Customize your button/form/guest form as needed under the widget menu.

Kick off your project with this starter; it ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1. **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the starter
    gatsby new my-project https://github.com/actualsize/gatsby-starter
    ```

1. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    gatsby develop
    ```

1. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link:_`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.