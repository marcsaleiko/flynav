# Flynav
Display a flying navigation.

## Installation

Install via npm `npm install @marcsaleiko/flynav --save`. Depends on jQuery.

## Usage
Include file in your script file and run `Flynav.init();`. You may use the options below to 
override the base settings.

Further documentation will be added.

### Options

You may provide additional options and overrides via an object passed to the `init({})` 
method. Here is a list of all available options and their default values:

```javascript
Flynav.init({
    // Trigger selector fo the flynav
    flynavSelector: '.js-flynav',
    // Trigger the flynav open when the reference scroll top
    // reaches the windows scroll top.
    // If you choose cloneSource this reference will be cloned
    // into the flynav container (append)
    flynavReferenceSelector: '.js-flynav-reference',
    // Selector on which we place the flynavOpenClass
    stateToggleSelector: 'body',
    // Do you want to clone the flynav reference or cloneFindSelector
    // into the flynav container?
    cloneSource: false,
    // Clone just a part of the flynav container.
    // If you do not wish to clone the reference, you can
    // clone a subpart of the flynav here. We use the reference
    // if this is false
    flynavCloneFindSelector: false,
    // Classname we should place on the stateToggleSelector
    flynavOpenClass: 'flynav--open',
    // After how many pixels offset should the flynav open toggle
    flynavOffset: 1,
    // Shall we use the offset or fire immediately when the
    // reference comes into view
    useOffset: true,
});
```