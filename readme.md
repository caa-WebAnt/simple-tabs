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

### Use and call

```javascript
    const links = document.querySelectorAll('.tabs-links a')
    new SimpleTabs(links)
````