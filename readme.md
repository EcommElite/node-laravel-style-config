# Node Laravel Style Config

Provides Laravel style config() and env() methods utilizing .env

## Usage

```
import { env } from 'node-laravel-style-config';

let value = env('APP_NAME', 'Default');
// will return the APP_NAME value in .env if present, or "Default"
```

```
import { env, config, setConfig } from 'node-laravel-style-config';

setConfig({
    app: {
        name: env('APP_NAME', 'default'),
    }
});

let value = config('app.name');
// will return the APP_NAME value in .env if present, or "Default"
```

## Setup

The typical setup is to create a config directory, then inside that put a config.js helper
and your config files.

_config.js_
```
import { config, setConfig } from 'node-laravel-style-config';
import app from './app';
import database from './database';

setConfig({

    app,
    database

});

export default config;
```

_app.js_
```
import { env } from 'node-laravel-style-config';

export default {

    name: env('APP_NAME', 'Default App Name')

}
```

_database.js_
```
import { env } from 'node-laravel-style-config';

export default {

    host: env('DATABASE_HOST', '127.0.0.1')
    port: env('DATABASE_PORT', '3306')
    username: env('DATABASE_USERNAME', 'root')
    password: env('DATABASE_PASSWORD', '')

}
```

Which can then get used like this
```
import config from './config/config';

let db_username = config('database.username'); // root
```