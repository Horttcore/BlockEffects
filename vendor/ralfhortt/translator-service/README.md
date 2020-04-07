# Translator Service

## Installation

`composer require ralfhortt/translator-service`

## Usage

### Service loader

```php
<?php
use RalfHortt\Plugin\PluginFactory;
use RalfHortt\TranslatorService\Translator;

PluginFactory::create()
    ->addService(Translator::class, 'my-textdomain', dirname(plugin_basename(__FILE__)).'/languages/')
    ->boot();
```

### Standalone

```php
<?php
use RalfHortt\TranslatorService\Translator;

(new Translator('wordpress-plugin-boilerplate', dirname(plugin_basename(__FILE__)).'/languages/'))->register();
```

## Changelog

### v1.0.2 - 2020-01-13

- Bugfix: Wrong variable name

### v1.0.1 - 2019-12-3

- Cleanup

### v1.0.0 - 2019-12-3

- Initial release
