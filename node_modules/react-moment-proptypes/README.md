# react-moment-proptypes

[![Build
Status](https://travis-ci.org/CalebMorris/react-moment-proptypes.svg?branch=master)](https://travis-ci.org/CalebMorris/react-moment-proptypes)
[![Coverage Status](https://coveralls.io/repos/CalebMorris/react-moment-proptypes/badge.svg?branch=master&service=github)](https://coveralls.io/github/CalebMorris/react-moment-proptypes?branch=master)

A React Proptype Validator to check if passed prop is a moment.js construct

# Example

``` jsx
var momentPropTypes = require('react-moment-proptypes');

var TestClass = React.createClass({
  propTypes : {
    dateThing : momentPropTypes.momentObj,
    dateThingWithPredicate : momentPropTypes.momentObj.withPredicate(
      function isUTC(momentObject) {
        return momentObject.isUTC();
      }
    ),
    stringThing : momentPropTypes.momentString,
    durationThing: momentPropTypes.momentDurationObj,
  },

  render : function() {
    return null
  },
});

// Class Use
<TestClass dateThing={moment()}
           dateThingWithPredicate={moment.utc()}
           stringThing={'12-12-2014'}
           durationThing={moment.duration(3, 'hours')}/>

```

# Tests

Tests were approached with `jsdom` and React's test utility renderer

- `npm test` for running unit tests
- `npm run coverage` for current test coverage

## Moment Versions

- `npm run test-all` to test against tested moment version (1.6.0, 1.7.0, current)

If there is a desire for varying moment legacy support I'm willing to add it, but will stick to YAGNI until then.
