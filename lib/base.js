(function (window) {

    'use strict';

    class Li {

        /**
         * *This function returns a string.*
         * @returns The string "hidden-by-tabs"
         */

        static content() {
            return 'hidden-by-tabs';
        }

        /**
         * Returns the string 'active'
         * @returns The string 'active'
         */

        static active() {
            return 'active';
        }

        /**
         * `icon()` returns the icon name for the API
         * @returns The icon function returns the string 'material-icons api'.
         */

        static icon() {
            return 'material-icons api';
        }

        /* This is the constructor function for the Li class. */

        constructor(tabs, content, name) {
            this.tabs = tabs;
            this.name = name;
            this.elements = {};
            this.elements.content = content;

            let title = this.getName();
            this.setText(title);
        };

        /**
         * Get the Tabs object from the current window
         * @returns The tabs property is being returned.
         */

        getTabs() {
            return this.tabs;
        }

        /**
         * Return the value of the name property
         * @returns Return the vale of the name property.
         */

        getName() {
            return this.name;
        }

        /**
         * Get the content element of the page
         * @returns The content of the element.
         */

        getContent() {
            return this.elements.content;
        }

        /**
         * Create a new list item and append it to the list
         * @returns The li element.
         */

        getLI() {
            if (this.elements.hasOwnProperty('li')) return this.elements.li;
            let wrapper = this.getWrapper();
            this.elements.li = document.createElement('li');
            this.elements.li.appendChild(wrapper);
            this.elements.li.setAttribute('data-handle-event', ':show');
            this.elements.li.addEventListener('click', this.getTabs(), false);
            return this.elements.li;
        }

        /**
         * Create a span element with the class name "text" and append it to the wrapper element
         * @returns The text element.
         */

        getText() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = document.createElement('span');
            this.elements.text.className = 'text';
            this.getWrapper().appendChild(this.elements.text);
            return this.elements.text;
        }

        /**
         * Set the text of the title element
         * @param title - The title of the notification.
         * @returns The `setText` method returns the `title` property of the `title` property of the
         * `this` object.
         */

        setText(title) {
            let text = this.getText(), node = document.createTextNode(title);

            text.innerText = '';
            text.appendChild(node);

            return this;
        }

        /**
         * Create a wrapper element if it doesn't exist, and return it
         * @returns The wrapper element.
         */

        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper';
            return this.elements.wrapper;
        }

        /**
         * Get the icon for the tab
         * @returns The icon element.
         */
        
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            let icon = this.constructor.icon(), wrapper = this.getWrapper();
            this.elements.icon = window.Tabs.getIcon(icon);
            wrapper.insertBefore(this.elements.icon, wrapper.firstChild);
            return this.elements.icon;
        }

        /**
         * * Sets the icon of the tab
         * @param type - The type of icon to set.
         * @returns The tab object.
         */
        
        setIcon(type) {
            let node = this.getIcon(), icon = window.Tabs.getIcon(type);
            this.getWrapper().replaceChild(icon, node);
            this.elements.icon = icon;
            return this;
        }

        /**
         * Set the class name of the tab to the given pure class name
         * @param pure - The name of the tab.
         * @returns The tab itself.
         */
        
        setGrid(pure) {
            let status = this.status();
            this.getLI().className = 'tab' + String.fromCharCode(32) + pure;
            if (status === true) this.show();
            return this;
        }

        /**
         * Return the HTML for the list item
         * @returns The getLI() method is being called.
         */
        
        out() {
            return this.getLI();
        }

        /**
         * Show the tab content
         * @returns The current instance of the class.
         */
        
        show() {
            this.getTabs().hide();
            this.getContent().classList.remove(this.constructor.content());
            this.getLI().classList.add(this.constructor.active());
            return this;
        }

        /**
         * Hide the content of the current tab
         * @returns The `hide` method is returning the `this` object.
         */
        
        hide() {
            this.getContent().classList.add(this.constructor.content());
            this.getLI().classList.remove(this.constructor.active());
            return this;
        }

        /**
         * Returns a boolean value indicating whether the current list item is active
         * @returns A boolean value.
         */
        
        status() {
            return true === this.getLI().classList.contains(this.constructor.active());
        }
    }

    class Tabs {

        /**
         * Create a JavaScript object that will contain all the events and elements
         */
        
        constructor() {
            this.events = {};
            this.elements = {};
            this.elements.list = [];
        }

        /**
         * It sets the function that will be called when the event is fired.
         * @param func - The function to be called when the event is triggered.
         * @returns The object itself.
         */
        
        setEventShow(func) {
            this.events.show = func;
            return this;
        }

        /**
         * It returns the show event if it exists.
         * @returns The `getEventShow()` method returns the `show` property of the `events` object.
         */
        
        getEventShow() {
            if (this.events.hasOwnProperty('show')) return this.events.show;
            return null;
        }

        /**
         * It sets the function that will be called when the event is triggered.
         * @param func - The function to be called when the event is triggered.
         * @returns The object itself.
         */
        
        setEventHide(func) {
            this.events.hide = func;
            return this;
        }

        /**
         * Returns the hide event handler if it exists, otherwise returns null
         * @returns The `getEventHide` method returns the `hide` property of the `events` object.
         */
        
        getEventHide() {
            if (this.events.hasOwnProperty('hide')) return this.events.hide;
            return null;
        }

        /**
         * Create a container element for the tabs
         * @returns The container div.
         */
        
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let ul = this.getTabsList();
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'tabs pure-g';
            this.elements.container.appendChild(ul);
            return this.elements.container;
        }

        /**
         * Create a list element if it doesn't exist, and return it
         * @returns The ul element.
         */
        
        getTabsList() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'pure-u-24-24';
            return this.elements.ul;
        }

        /**
         * Get the list of tabs from the browser
         * @returns The list of tabs.
         */
        
        getTabs() {
            return this.elements.list;
        }

        /**
         * Find a tab by name
         * @param name - The name of the tab to find.
         * @returns The tab that matches the name.
         */
        
        findTabName(name) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let tab_name = tabs[item].getName();
                if (tab_name.toString() === name.toString()) return tabs[item];
            }
            return null;
        }

        /**
         * Find the tab that contains the given element
         * @param element - The element to find.
         * @returns The tab element that was clicked.
         */
        
        findTabElement(element) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let out = tabs[item].out();
                if (out === element) return tabs[item];
            }
            return null;
        }

        /**
         * Check if the given element is the content of any tab
         * @param element - The element to check.
         * @returns The return value is a boolean value.
         */
        
        checkTabContent(element) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let content = tabs[item].getContent();
                if (content === element) return true;
            }
            return false;
        }

        /**
         * Remove all tabs from the list and remove the tab list from the DOM
         * @param all - If true, all tabs will be removed. If false, only the current tab will be
         * removed.
         * @returns The object itself.
         */
        
        drop(all) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) this.constructor.removeElementDOM(tabs[item].out());
            if (true === all) this.constructor.removeElementDOM(this.out());
            this.elements.list = [];
            return this;
        }

        /**
         * *This function applies a grid to the Tabs.*
         * 
         * The function is pretty simple, it loops through the Tabs and sets the grid to the
         * pure-u-*size*-24
         * @returns The Tabs object.
         */
        
        applyGrid() {
            let tabs = this.getTabs();
            if (tabs.length == 0) return this;
            try {
                if (tabs.length > 24) throw 'The elements push on Tabs can\'t be more than 24';

                let length = tabs.length - 1;
                while (24 % ++length != 0 && length < 24);

                let grid = 24 / length, difference = 24 - (grid * tabs.length), sizes = [];
                for (let item = 0; item < tabs.length; item++) {
                    let add = item == 0 ? grid + difference : grid;
                    if (add !== 24) sizes.push(add);
                }

                sizes.reverse();
                if (0 === sizes.length) sizes.push(24);
                for (let item in sizes) {
                    let pure = 'pure-u-' + sizes[item].toString() + '-24';
                    tabs[item].setGrid(pure);
                }
            }
            catch (message) {
                let debug = this.getDebug();
                if (debug === true) console.log(message);
            }
            return this;
        }

        /**
         * * Find the tab element that was clicked.
         * * If the tab element is null, return this.
         * * Hide all the tabs.
         * * Show the tab that was clicked.
         * * Call the getEventShow function.
         * * Return this
         * @param event - The event object that was passed to the show() method.
         */
        
        show(event) {
            let element = this.constructor.closestAttribute(event.target, 'data-handle-event', true), tab = this.findTabElement(element);
            if (element === null
                || null === tab) return this;

            this.hide();

            tab.show();

            let show = this.getEventShow();
            if (typeof show === 'function') show.call(this, event);

            return this;
        }

        /**
         * Hide all tabs in the tab group
         * @param event - The event that triggered the hide.
         * @returns The current instance of the object.
         */
        
        hide(event) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) tabs[item].hide();

            let hide = this.getEventHide();
            if (typeof hide === 'function') hide.call(this, event);

            return this;
        }

        /**
         * Returns the active tab
         * @returns The active tab.
         */
        
        active() {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                if (false === tabs[item].status()) continue;
                return tabs[item];
            }
            return null;
        }

        /**
         * Add a new tab to the tabs list
         * @param name - The name of the tab.
         * @param content - The content of the tab.
         * @param icon - The icon to be displayed on the tab.
         * @returns The new tab object.
         */
        
        addItem(name, content, icon) {
            let tabs = this.checkTabContent(content);
            if (tabs === true) return this;

            let tab = new window.Tabs.Li(this, content, name);
            if (typeof icon === 'string'
                && icon.length > 0) tab.setIcon(icon);

            this.getTabsList().appendChild(tab.hide().out());
            this.getTabs().push(tab);
            this.applyGrid();

            return tab;
        }

        /**
         * Get the container for the current cell
         * @returns The container element.
         */
        
        out() {
            return this.getContainer();
        }

        /**
         * If the event target has a data-handle-event attribute, then execute the function that is the
         * value of the attribute
         * @param event - The event object that was passed to the function.
         */
        
        handleEvent(event) {
            let attribute = this.constructor.closestAttribute(event.target, 'data-handle-event');
            if (attribute === null) return;

            let attribute_split = attribute.split(/\s+/);
            for (let item = 0; item < attribute_split.length; item++) {
                let execute = attribute_split[item].split(String.fromCharCode(58));
                if (execute.length !== 2) break;
                if (execute[0] === event.type || 0 === execute[0].length) {
                    if (typeof this[execute[1]] !== 'function') continue;

                    this[execute[1]].call(this, event);
                }
            }
        }

        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
         */
        
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }

        /**
         * Find the closest attribute to the target element
         * @param target - The element to search for the attribute.
         * @param attribute - The attribute to search for.
         * @param html - If true, the attribute is searched for in the HTML code of the page.
         * @returns The closest attribute to the target element.
         */
        
        static closestAttribute(target, attribute, html) {
            if (typeof attribute === 'undefined'
                || !attribute.length) return null;

            let result = null, element = target;

            do {
                let tagname = element.tagName.toLowerCase();
                if (tagname === 'body') return null;

                result = element.getAttribute(attribute);
                if (result !== null) {
                    result = result.toString();
                    if (result.length) break;
                }

                element = element.parentNode;
            } while (element !== null
                || typeof element === 'undefined');

            if (typeof html === 'undefined'
                || html !== true) return result;

            return element;
        }

        /**
         * * Create an HTML element with the class name `name` and return it
         * @param name - The name of the icon.
         * @returns The icon element.
         */
        
        static getIcon(name) {
            if (name === null
                || typeof name !== 'string') name = 'material-icons lens_blur';
            let icon = document.createElement('i'), clean = name.replace(/(material\-icons(\S(\w+))?(\s+))?/, '');

            icon.className = name;
            if (clean === name) return icon;
            let text = document.createTextNode(clean);
            icon.appendChild(text);
            return icon;
        }
    }

    window.Tabs = Tabs;
    window.Tabs.Li = Li;

})(window);
