# How to clone

- Run `git clone git@github.com:O-clock-Curie/projet-25-meet-a-volunteer-back.git`
- Run `composer install`
- Create a database user (e.g. Using adminer)
- Create `.env.local` file
- Put `DATABASE_URL="mysql://username:password@127.0.0.1:3306/database?serverVersion=mariadb-10.3.25&charset=utf8mb4"` in your `.env.local` and edit the username, the password and the database name
- Run `php bin/console doctrine:database:create`
- Run `php bin/console doctrine:migrations:migrate`
- Run `php bin/console doctrine:fixtures:load`
- Run `php bin/console lexik:jwt:generate-keypair`
- To start the server, run `php -S localhost:8000 -t public` 🚀
