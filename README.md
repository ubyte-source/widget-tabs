# Documentation widget-tabs

Widget Javascript Tab is a library used to create tabs in a web page.

## Usage

So the basic setup looks something like this:

```

let tabs = new Tabs();

tabs.name = 'data-tab-name';
tabs.setEventShow(function (ev) {
    let name = Tabs.closestAttribute(ev.target, tabs.name);
    if (name === null) return;

    // Some code
});
document.appendChild(tabs.out());

```

The procedure to add an element to the tab is the following:

```

let div = document.createElement('div');
// tabs.addItem('Tab name 0', div, 'icon-class').out();
document.appendChild(div);

let p = document.createElement('p');
// tabs.addItem('Tab name 1', p, 'icon-class').out().show(); // call method show to mark this as default tab 
document.appendChild(p);

```

## Structure

library:
    - [window.Tabs](https://github.com/energia-source/widget-tabs#class-windowtabs-usable-methods)
    - [window.Tabs.Li](https://github.com/energia-source/widget-tabs#class-windowtabsli-usable-methods)

<br>

#### ***Class window.Tabs usable methods***

##### `constructor()`

Create a JavaScript object that will contain all the events and elements

##### `setEventShow(func)`

It sets the function that will be called when the event is fired.

 * **Parameters:** `func` — The function to be called when the event is triggered.
 * **Returns:** The object itself.

##### `getEventShow()`

It returns the show event if it exists.

 * **Returns:** The `getEventShow()` method returns the `show` property of the `events` object.

##### `setEventHide(func)`

It sets the function that will be called when the event is triggered.

 * **Parameters:** `func` — The function to be called when the event is triggered.
 * **Returns:** The object itself.

##### `getEventHide()`

Returns the hide event handler if it exists, otherwise returns null

 * **Returns:** The `getEventHide` method returns the `hide` property of the `events` object.

##### `getContainer()`

Create a container element for the tabs

 * **Returns:** The container div.

##### `getTabsList()`

Create a list element if it doesn't exist, and return it

 * **Returns:** The ul element.

##### `getTabs()`

Get the list of tabs from the browser

 * **Returns:** The list of tabs.

##### `findTabName(name)`

Find a tab by name

 * **Parameters:** `name` — The name of the tab to find.
 * **Returns:** The tab that matches the name.

##### `findTabElement(element)`

Find the tab that contains the given element

 * **Parameters:** `element` — The element to find.
 * **Returns:** The tab element that was clicked.

##### `checkTabContent(element)`

Check if the given element is the content of any tab

 * **Parameters:** `element` — The element to check.
 * **Returns:** The return value is a boolean value.

##### `drop(all)`

Remove all tabs from the list and remove the tab list from the DOM

 * **Parameters:** `all` — If true, all tabs will be removed. If false, only the current tab will be

     removed.
 * **Returns:** The object itself.

##### `applyGrid()`

*This function applies a grid to the Tabs.*



The function is pretty simple, it loops through the Tabs and sets the grid to the pure-u-*size*-24

 * **Returns:** The Tabs object.

##### `show(event)`

* Find the tab element that was clicked. * If the tab element is null, return this. * Hide all the tabs. * Show the tab that was clicked. * Call the getEventShow function. * Return this

 * **Parameters:** `event` — The event object that was passed to the show() method.

##### `hide(event)`

Hide all tabs in the tab group

 * **Parameters:** `event` — The event that triggered the hide.
 * **Returns:** The current instance of the object.

##### `active()`

Returns the active tab

 * **Returns:** The active tab.

##### `addItem(name, content, icon)`

Add a new tab to the tabs list

 * **Parameters:**
   * `name` — The name of the tab.
   * `content` — The content of the tab.
   * `icon` — The icon to be displayed on the tab.
 * **Returns:** The new tab object.

##### `out()`

Get the container for the current cell

 * **Returns:** The container element.

##### `handleEvent(event)`

If the event target has a data-handle-event attribute, then execute the function that is the value of the attribute

 * **Parameters:** `event` — The event object that was passed to the function.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML code of the page.
 * **Returns:** The closest attribute to the target element.

##### `static getIcon(name)`

* Create an HTML element with the class name `name` and return it

 * **Parameters:** `name` — The name of the icon.
 * **Returns:** The icon element.

<br>

#### ***Class window.Tabs.Li usable methods***

##### `static content()`

*This function returns a string.*

 * **Returns:** The string "hidden-by-tabs"

##### `static active()`

Returns the string 'active'

 * **Returns:** The string 'active'

##### `static icon()`

`icon()` returns the icon name for the API

 * **Returns:** The icon function returns the string 'material-icons api'.

##### `getTabs()`

Get the Tabs object from the current window

 * **Returns:** The tabs property is being returned.

##### `getName()`

Return the value of the name property

 * **Returns:** `etur` — the vale of the name property.

##### `getContent()`

Get the content element of the page

 * **Returns:** The content of the element.

##### `getLI()`

Create a new list item and append it to the list

 * **Returns:** The li element.

##### `getText()`

Create a span element with the class name "text" and append it to the wrapper element

 * **Returns:** The text element.

##### `setText(title)`

Set the text of the title element

 * **Parameters:** `title` — The title of the notification.
 * **Returns:** The `setText` method returns the `title` property of the `title` property of the

     `this` object.

##### `getWrapper()`

Create a wrapper element if it doesn't exist, and return it

 * **Returns:** The wrapper element.

##### `getIcon()`

Get the icon for the tab

 * **Returns:** The icon element.

##### `setIcon(type)`

* Sets the icon of the tab

 * **Parameters:** `type` — The type of icon to set.
 * **Returns:** The tab object.

##### `setGrid(pure)`

Set the class name of the tab to the given pure class name

 * **Parameters:** `pure` — The name of the tab.
 * **Returns:** The tab itself.

##### `out()`

Return the HTML for the list item

 * **Returns:** The getLI() method is being called.

##### `show()`

Show the tab content

 * **Returns:** The current instance of the class.

##### `hide()`

Hide the content of the current tab

 * **Returns:** The `hide` method is returning the `this` object.

##### `status()`

Returns a boolean value indicating whether the current list item is active

 * **Returns:** A boolean value.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-tabs/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-tabs/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details