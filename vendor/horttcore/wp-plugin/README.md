# WorPress Plugin Wrapper

## Usage

* Create a plugin container
* Add a service
* Boot the plugin

## Example
```php
<?php
PluginFactory::create()
    ->addTranslation($textdomain, $pathToDirectory)
    ->addService(Service::class)
    ->boot();
```

## Changelog

### v1.0.1

* Changed: `PluginFactory` returns a new `Plugin` object instead of a shared instance

### v1.0.0

* Initial release