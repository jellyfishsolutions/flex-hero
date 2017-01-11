# Flex Hero #
**Flex Hero** is a simple CSS library to exploit flexbox layouts.

This is **NOT** a grid layout system or a complete CSS framework. On contrary,
**Flex Hero** can be used with any other CSS framework, like Bootstrap.

## Documentations ##
Each class of the *Flex Hero* library starts with the `fh-` prefix.

### `fh-container` ###
This class shall be used as a layout container.
It enables the `display: flex` property.

### `fh-container-inline` ###
Same as `fh-container`, but as an inline container.

### `fh-fill` ###
Expands the element to a 100% in width and height.

### `fh-row` ###
Sets the direction of elements inside a container to row. It shall be applied
to a container.

### `fh-column` ###
Sets the direction of elements inside a container to column. It shall be applied to a container.

### `fh-row-reverse` ###
Same as `fh-row`, but using a reverse order.

### `fh-column-reverse` ###
Same as `fh-column`, but using a reverse order.

### `fh-wrap` ###
Allows the container to use multiple lines to allocate space for the items (left to right).

### `fh-nowrap` ###
(default) Forces the container to use a single line to allocate space for the items.

### `fh-wrap-reverse` ###
Allows the container to use multiple lines to allocate space for the items (right to left).

### `fh-content-start` ###
Defines the alignment along the main axis such as the items are packed toward the start line.

### `fh-content-end` ###
Defines the alignment along the main axis such as the items are packed toward the end line.

### `fh-content-center` ###
Defines the alignment along the main axis such as the items are centered along the line.

### `fh-content-space-between` ###
Defines the alignment along the main axis such as the items are evenly distributed in the line; first item is on the start line, last item on the end line.

### `fh-content-space-around` ###
Defines the alignment along the main axis such as the items are evenly distributed in the line with equal space around them.

### `fh-align-stretch` ###
Each item will stretch in hight if the class `fh-row` is present or in width if the class `fh-column` is present.

### `fh-align-start` ###
Cross-start margin edge of the items is placed on the cross-start line.

### `fh-align-end` ###
Cross-end margin edge of the items is placed on the cross-end line.

### `fh-align-center` ###
Items are centered in the cross-axis.

### `fh-align-baseline` ###
Items are aligned such as their baselines align.

### `fh-item-align-stretch` ###
Same as `fh-align-stretch`, this class can be applied to a single item, in order to override the container behavior.

### `fh-item-align-start` ###
Same as `fh-align-start`, this class can be applied to a single item, in order to override the container behavior.

### `fh-item-align-end` ###
Same as `fh-align-end`, this class can be applied to a single item, in order to override the container behavior.

### `fh-item-align-center` ###
Same as `fh-align-center`, this class can be applied to a single item, in order to override the container behavior.

### `fh-item-align-baseline` ###
Same as `fh-align-baseline`, this class can be applied to a single item, in order to override the container behavior.

### `fh-flex` ###
This class can be allied to an item, and it will set the `flex` property to 1.

### `fh-flex-1` ###
This class set the size of the element to 1.

### `fh-flex-2` ###
This class set the size of the element to 2.

### `fh-flex-3` ###
This class set the size of the element to 3.

### `fh-flex-4` ###
This class set the size of the element to 4.

### `fh-flex-5` ###
This class set the size of the element to 5.

### `fh-flex-6` ###
This class set the size of the element to 6.

### `fh-flex-7` ###
This class set the size of the element to 7.

### `fh-flex-8` ###
This class set the size of the element to 8.

### `fh-margin` ###
This class adds margins to the element.
