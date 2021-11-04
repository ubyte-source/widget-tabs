(function (window) {

    'use strict';

    class Li {

        static content() {
            return 'hidden-by-tabs';
        }
        static active() {
            return 'active';
        }
        static icon() {
            return 'material-icons api';
        }

        constructor(tabs, content, name) {
            this.tabs = tabs;
            this.name = name;
            this.elements = {};
            this.elements.content = content;

            let title = this.getName();
            this.setText(title);
        };

        getTabs() {
            return this.tabs;
        }
        getName() {
            return this.name;
        }
        getContent() {
            return this.elements.content;
        }
        getLI() {
            if (this.elements.hasOwnProperty('li')) return this.elements.li;
            let wrapper = this.getWrapper();
            this.elements.li = document.createElement('li');
            this.elements.li.appendChild(wrapper);
            this.elements.li.setAttribute('data-handle-event', ':show');
            this.elements.li.addEventListener('click', this.getTabs(), false);
            return this.elements.li;
        }
        getText() {
            if (this.elements.hasOwnProperty('text')) return this.elements.text;
            this.elements.text = document.createElement('span');
            this.elements.text.className = 'text';
            this.getWrapper().appendChild(this.elements.text);
            return this.elements.text;
        }
        setText(title) {
            let text = this.getText(), node = document.createTextNode(title);

            text.innerText = '';
            text.appendChild(node);

            return this;
        }
        getWrapper() {
            if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
            this.elements.wrapper = document.createElement('div');
            this.elements.wrapper.className = 'wrapper';
            return this.elements.wrapper;
        }
        getIcon() {
            if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
            let icon = this.constructor.icon(), wrapper = this.getWrapper();
            this.elements.icon = Tabs.getIcon(icon);
            wrapper.insertBefore(this.elements.icon, wrapper.firstChild);
            return this.elements.icon;
        }
        setIcon(type) {
            let node = this.getIcon(), icon = Tabs.getIcon(type);
            this.getWrapper().replaceChild(icon, node);
            this.elements.icon = icon;
            return this;
        }
        setGrid(pure) {
            let status = this.status();
            this.getLI().className = 'tab' + String.fromCharCode(32) + pure;
            if (status === true) this.show();
            return this;
        }
        out() {
            return this.getLI();
        }
        show() {
            this.getTabs().hide();
            this.getContent().classList.remove(this.constructor.content());
            this.getLI().classList.add(this.constructor.active());
            return this;
        }
        hide() {
            this.getContent().classList.add(this.constructor.content());
            this.getLI().classList.remove(this.constructor.active());
            return this;
        }
        status() {
            return true === this.getLI().classList.contains(this.constructor.active());
        }
    }

    class Tabs {

        constructor() {
            this.events = {};
            this.elements = {};
            this.elements.list = [];
        }

        setEventShow(func) {
            this.events.show = func;
            return this;
        }
        getEventShow() {
            if (this.events.hasOwnProperty('show')) return this.events.show;
            return null;
        }
        setEventHide(func) {
            this.events.hide = func;
            return this;
        }
        getEventHide() {
            if (this.events.hasOwnProperty('hide')) return this.events.hide;
            return null;
        }
        getContainer() {
            if (this.elements.hasOwnProperty('container')) return this.elements.container;
            let ul = this.getTabsList();
            this.elements.container = document.createElement('div');
            this.elements.container.className = 'tabs pure-g';
            this.elements.container.appendChild(ul);
            return this.elements.container;
        }
        getTabsList() {
            if (this.elements.hasOwnProperty('ul')) return this.elements.ul;
            this.elements.ul = document.createElement('ul');
            this.elements.ul.className = 'pure-u-24-24';
            return this.elements.ul;
        }
        getTabs() {
            return this.elements.list;
        }
        findTabName(name) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let tab_name = tabs[item].getName();
                if (tab_name.toString() === name.toString()) return tabs[item];
            }
            return null;
        }
        findTabElement(element) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let out = tabs[item].out();
                if (out === element) return tabs[item];
            }
            return null;
        }
        checkTabContent(element) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                let content = tabs[item].getContent();
                if (content === element) return true;
            }
            return false;
        }
        drop(all) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) this.constructor.removeElementDOM(tabs[item].out());
            if (true === all) this.constructor.removeElementDOM(this.out());
            this.elements.list = [];
            return this;
        }
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
        hide(event) {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) tabs[item].hide();

            let hide = this.getEventHide();
            if (typeof hide === 'function') hide.call(this, event);

            return this;
        }
        active() {
            for (let item = 0, tabs = this.getTabs(); item < tabs.length; item++) {
                if (false === tabs[item].status()) continue;
                return tabs[item];
            }
            return null;
        }
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
        out() {
            return this.getContainer();
        }
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
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }
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