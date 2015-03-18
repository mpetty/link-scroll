# Link Scroll v1.0.3

Library for animating to an internal link.

## Bower Installation

Add to your project's `bower.json` file, like:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "jquery": "1.11.0",
    "fillselect": "git@github.com:mpetty/link-scroll"
  }
}
```

## Usage

```javascript
$('a').linkScroll(options);
```

## Options available

```javascript
scroll_offset       :   0,      // Offset the scroll. Used to position the scroll above or below the target
scroll_speed        :   300     // Scroll Animation Speed
```
