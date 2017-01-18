# Hack the Gender Pay Gap

[![Dependency Status](https://gemnasium.com/badges/github.com/presidential-innovation-fellows/hack-the-paygap.svg)](https://gemnasium.com/github.com/presidential-innovation-fellows/hack-the-paygap)
[![security](https://hakiri.io/github/presidential-innovation-fellows/hack-the-paygap/master.svg)](https://hakiri.io/github/presidential-innovation-fellows/hack-the-paygap/master)
[![Code Climate](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap/badges/gpa.svg)](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap)
[![Test Coverage](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap/badges/coverage.svg)](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap/coverage)
[![Issue Count](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap/badges/issue_count.svg)](https://codeclimate.com/github/presidential-innovation-fellows/hack-the-paygap)

[![Slack Status](https://paygap-slack.pif.gov/badge.svg)](https://paygap-slack.pif.gov/)

Reducing the gender pay gap using data

http://paygap.pif.gov

## Deploying

This app is deployed using [Federalist](https://federalist.18f.gov/).

This also depends on an instance of [slackin](https://github.com/rauchg/slackin). This is currently deployed into [cloud.gov](https://cloud.gov) in the `gsa-pif-paygap` organization. To redeploy, follow these steps:

* Check out https://github.com/rauchg/slackin
* Run `npm install` to install dependencies
* Create the following `manifest.yml` (get the Slack API token from an administrator of the #hackthepaygap Slack organization):
```
---
applications:
- buildpack: https://github.com/cloudfoundry/buildpack-nodejs.git
  disk_quota: 1024M
  instances: 2
  memory: 256M
  name: slack-paygap
  env:
    SLACK_SUBDOMAIN: hackthepaygap
    SLACK_API_TOKEN: <API_TOKEN> 
```
* Run `cf push -f manifest.yml`

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
