# Site Editor Tutorial

The purpose of this WordPress plugin is to help beginners discover and use the many features of the WordPress Site Editor.

The plugin adds clickable "hints" to features, and activating the button opens a modal with information about the feature.
Some tutorial modals only have short information; others have links to the official WordPress user documentation.
The user selects which features they want to learn more about at their own pace (The plugin does not have guided "paths" for the user to follow, but this can be considered in the future).


<img width="1509" alt="Screenshot of the tutorial activated on the Styles screen in the Site Editor" src="https://github.com/carolinan/site-editor-tutorial/assets/7422055/742798ca-04dd-478f-b909-7c7df087d8c5">

## Installation

<b>This plugin requires Gutenberg 18.3+.</b>

This repository already includes the built plugin files, and the plugin can be installed and activated.

In your plugins folder, run `git clone https://github.com/carolinan/site-editor-tutorial`

Activate the plugin, then go to Appearance > Editor.

## Technical stuff

After cloning the repository,
run `npm install` to install dependencies and `npm run start` to watch for changes.

The plugin relies on several WordPress packages and components. 
- Notably, it uses private APIs that need to be unlocked, which is why it requires Gutenberg:
  -   `useLocation`
- It uses [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/) to render the hints and the modals in the Site Editor.
- [Modal component](https://developer.wordpress.org/block-editor/reference-guides/components/modal/)
 
### What the plugin does

The plugin checks if the current URL matches a screen in the Site Editor and whether that screen has any tutorials.
Tutorials are created as separate files with an array of several individual modals.
The data for each modal varies but includes the CSS selector for the element the tutorial is about, the modal content, and whether to display the hint.
The plugin calculates the position of the element and where to display the hint and the modal. The position can be adjusted with an offset.

### Adding new tutorials
To add a tutorial to a new "screen," you need to use the URL as the screen's unique identifier.
You also need to pick a name for the screen that you will use as the name for the file and the exported constant that contains the tutorial content.
In src/page-selector.js, add the new screen as a `case` in the existing `switch`.
In src/tutorials/, duplicate an existing tutorial file, rename it, and update it as needed.
Add the new file to the list of exports in src/tutorials/index.js.
Build the changes and refresh the screen in the Site Editor.




