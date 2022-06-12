# Run JavaScript in the Console 🛶
- Rather than typing `document.querySelector()` to select an element, you can type `$()`.This syntax is inspired by jQuery, but it's not actually jQuery. It's just an alias for `document.querySelector()`. You can read [more...](https://developer.chrome.com/docs/devtools/console/javascript/)

# Watch JavaScript values in real-time with Live Expressions 🚁

> If you find yourself typing the same JavaScript expression in the Console repeatedly, you might find it easier to create a Live Expression. With Live Expressions, you type an expression once and then pin it to the top of your Console. The value of the expression updates in near real-time. You can read [more...](https://developer.chrome.com/docs/devtools/console/live-expressions/)

# Console features reference 🚄
## Clear the Console

You can use any of the following workflows to clear the Console:

-   Click  **Clear Console**  ![Clear Console](https://wd.imgix.net/image/admin/PleTkKOHeF03hC4BxBvM.png?auto=format).
-   Right-click a message and then select  **Clear Console**.
-   Type  `clear()`  in the Console and then press  Enter.
-   Call  `console.clear()`  from your webpage's JavaScript.
-   Press  Control+L  while the Console is in focus. You can read [more](https://developer.chrome.com/docs/devtools/console/reference/)

# Console API reference ✈️
---
`console.assert(expression, object)`
> Writes an error to the console when expression evaluates to false.
---
`console.clear()` 
> Clears the console. If Preserve Log is enabled, `console.clear()` is disabled.
---
`console.count([label])` 
> Writes the number of times that `count()` has been invoked at the same line and with the same label. Call `console.countReset([label])` to reset the count.
---
`console.debug(object [, object, ...])` 
> Identical to `console.log(object [, object, ...])` except different log level.
---
`console.dir(object)` 
> Prints a JSON representation of the specified object.
---
`console.dirxml(node)` 
> Prints an XML representation of the descendants of `node`.
---
`console.error(object [, object, ...])` 
> Prints object to the Console, formats it as an error, and includes a stack trace.
---
`console.group(label)` 
> Visually groups messages together until `console.groupEnd(label)` is called. Use `console.groupCollapsed(label)` to collapse the group when it's initially logged to the Console.
---
`console.info(object [, object, ...])` 
> Identical to `console.log(object [, object, ...])`.
---
`console.log(object [, object, ...])` 
> Prints a message to the Console..
---
`console.table(array)` 
> Logs an array of objects as a table.
---
`console.time([label])` 
> Starts a new timer. Call `console.timeEnd([label])` to stop the timer and print the elapsed time to the Console.
---
`console.warn(object [, object, ...])` 
> Prints a warning to the Console.
---
