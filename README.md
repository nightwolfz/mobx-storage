# mobx-storage

Observable localStorage interface.

API
--

size

> Returns how many items are currently in the store.

has(key)

> Checks existance of a key.

get(string, defaultValue=string|number|object),

> Gets a key value with an optional default value.

set(string, string|number|object)

> Sets a value.

remove(key)

> Removes a value.

clear()

> Clears all values.

keys()

> Returns all the keys.

values()

> Returns all the values.

entries()

> Returns all the keys and values.

forEach(callback)

> Allows you to loop through each item.

map(callback)

> Allows you to map through each item.
