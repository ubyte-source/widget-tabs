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
- [window.Tabs](https://github.com/energia-source/widget-tabs/tree/main/lib)
- [window.Tabs.Li](https://github.com/energia-source/widget-tabs/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-tabs/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-tabs/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details