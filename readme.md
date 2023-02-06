![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)


# Vanilla JavaScript Tabs

## Prepare HTML 

```html
    <div class="tabs">
        <ul class="tabs-links">
            <li><a href="#tab-1">tab-1</a></li>
            <li><a href="#tab-2">tab-2</a></li>
            <li><a href="#tab-3">tab-3</a></li>
        </ul>
        <div class="tabs-content">
            <div id="tab-1">Content of first tab</div>
            <div id="tab-2">Content of second tab</div>
            <div id="tab-3">Content of third tab</div>
        </div>
    </div>
```

## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string |         | HTML links of the tabs in the HTML markup.
open | number |     0   | Opens this tab initially.

## Usage example

```javascript
    const tabs = new SimpleTabs({
        links : '.tabs-links a',
        open : 3
    })
````

## License

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.