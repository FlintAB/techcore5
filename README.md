# TechCore5

Адаптивное SPA-приложение для просмотра каталога товаров, разработанное на React и TypeScript.

## Демо - Может потребоваться VPN для входа(используется dummyJSON)

[Открыть приложение](https://techcore5.vercel.app) 

## Функциональность

- авторизация пользователя с валидацией формы;
- просмотр каталога товаров;
- переход на страницу выбранного товара;
- отображение подробной информации о товаре;
- обработка состояний загрузки и ошибок;
- страница для неизвестных маршрутов;
- адаптивный интерфейс для мобильных и десктопных устройств;
- клиентская маршрутизация без перезагрузки страницы.

## Технологии

### Основные зависимости

- React;
- TypeScript;
- React Router DOM;
- Redux Toolkit;
- React Redux;
- React Hook Form;
- Zod;
- Hookform Resolvers.

### Инструменты разработки

- Webpack;
- Webpack Dev Server;
- ESLint;
- Prettier;
- CSS Modules;
- TypeScript Loader;
- Mini CSS Extract Plugin;
- CSS Minimizer Webpack Plugin.

## Требования

- Node.js версии 20 или выше;
- pnpm версии 10.33.0 или совместимой.

## Установка и запуск

Клонируйте репозиторий:

```bash
git clone <https://github.com/FlintAB/techcore5.git>
cd techcore5
```

Установите зависимости:

```bash
pnpm install
```

Запустите приложение в режиме разработки:

```bash
pnpm start
```

После запуска приложение будет доступно по адресу, указанному Webpack Dev Server в терминале.

## Сборка проекта

Создание production-сборки:

```bash
pnpm build
```

## Дополнительные команды

Проверка типов:

```bash
pnpm typecheck
```

Проверка кода с помощью ESLint:

```bash
pnpm lint
```

Автоматическое исправление ошибок ESLint:

```bash
pnpm lint:fix
```

Форматирование файлов:

```bash
pnpm format
```

Проверка форматирования:

```bash
pnpm format:check
```
