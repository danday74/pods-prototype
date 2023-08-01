#!/usr/bin/env bash

# https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

ng build --base-href "https://danday74.github.io/pods-prototype/"
npx angular-cli-ghpages --dir=dist/pods
