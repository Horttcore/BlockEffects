# Service Contract

## Usage

```php
<?php
use RalfHortt\ServiceContracts\ServiceContract;

class MyService implements ServiceContract
{
    public function register(): void
    {
        // …
    }
}
```

## Changelog

### v1.0.1 - 2019-12-03

- Remove required args for register

### v1.0 - 2019-12-03

- Initial release
