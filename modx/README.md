# Animal Park — Личный кабинет (MODX Revolution + Cabinet)

Личный кабинет посетителя контактного зоопарка **Animal Park** на базе
[Cabinet](https://docs.modx.pro/components/cabinet) для MODX Revolution 2.7.

---

## Структура папки `modx/`

```
modx/
├── assets/
│   ├── css/
│   │   └── cabinet.css              # Основные стили кабинета (Animal Park дизайн)
│   └── js/
│       └── cabinet-app.js           # Клиентская логика (вкладки, анимации)
│
├── chunks/
│   ├── cabinet/
│   │   ├── cabinet.auth.html            # Форма авторизации / регистрации / восстановления
│   │   ├── cabinet.auth.wrapper.html    # Обёртка модального окна авторизации
│   │   ├── cabinet.login.html           # Мини-меню (гость / авторизованный)
│   │   ├── cabinet.profile.html         # Форма редактирования профиля
│   │   ├── cabinet.profile.wrapper.html # Обёртка профиля
│   │   ├── cabinet.orders.html          # Список заказов
│   │   ├── cabinet.orders.stats.html    # Статистика заказов
│   │   ├── cabinet.order.details.html   # Детали заказа
│   │   ├── cabinet.shared.order.html    # Расшаренный заказ (публичный)
│   │   ├── cabinet.message.wrapper.html # Обёртка системных сообщений
│   │   ├── cabinet.dashboard.html       # Обзор аккаунта (Dashboard)
│   │   ├── cabinet.dashboard.stats.html # Статистика на Dashboard
│   │   ├── cabinet.dashboard.recent.orders.html # Недавние заказы на Dashboard
│   │   ├── cabinet.loyalty.html         # Программа лояльности
│   │   └── cabinet.ticket.row.html      # Строка билета с QR-кодом
│   │
│   └── layout/
│       ├── head.html                    # Общий <head>
│       ├── sidebar.html                 # Боковое меню кабинета
│       └── footer.html                  # Подвал (скрипты, модальное окно авторизации)
│
├── snippets/
│   ├── snippet.cabinetLogin.call.html       # Вызов cabinetLogin (шапка сайта)
│   ├── snippet.cabinetAuth.call.html        # Вызов cabinetAuth (формы авторизации)
│   ├── snippet.cabinetProfile.call.html     # Вызов cabinetProfile (профиль)
│   ├── snippet.cabinetOrders.call.html      # Вызов cabinetOrders (заказы)
│   ├── snippet.cabinetOrderDetails.call.html    # Вызов cabinetOrderDetails
│   ├── snippet.cabinetOrdersStats.call.html     # Вызов cabinetOrdersStats
│   └── snippet.cabinetSharedOrder.call.html     # Вызов cabinetSharedOrder
│
└── templates/
    ├── tpl.cabinet.auth.html            # Шаблон: страница авторизации
    ├── tpl.cabinet.dashboard.html       # Шаблон: обзор аккаунта (главная)
    ├── tpl.cabinet.loyalty.html         # Шаблон: программа лояльности
    ├── tpl.cabinet.orders.html          # Шаблон: история заказов
    ├── tpl.cabinet.order.details.html   # Шаблон: детали заказа
    ├── tpl.cabinet.profile.html         # Шаблон: персональные данные
    └── tpl.cabinet.shared.order.html    # Шаблон: публичный расшаренный заказ
```

---

## Требования

- MODX Revolution **2.7.x**
- Компонент [Cabinet](https://modstore.pro/packages/users/cabinet)
- (Рекомендуется) [miniShop2](https://modstore.pro/packages/ecommerce/minishop2) — для заказов

---

## Установка

### 1. Установите Cabinet через менеджер пакетов MODX

При установке выберите:
- **Режим регистрации**: E-mail
- **Режим работы**: Стандартные страницы (или Модальное окно)

### 2. Скопируйте ассеты

```
modx/assets/css/cabinet.css  →  assets/css/cabinet.css
modx/assets/js/cabinet-app.js  →  assets/js/cabinet-app.js
```

### 3. Создайте чанки в MODX

В разделе **Элементы → Чанки** создайте чанки, скопировав содержимое файлов
из папки `modx/chunks/`. Имена чанков должны соответствовать именам файлов
(без расширения `.html`):

| Файл | Имя чанка в MODX |
|------|-------------------|
| `cabinet.auth.html` | `cabinet.auth` |
| `cabinet.login.html` | `cabinet.login` |
| `cabinet.profile.html` | `cabinet.profile` |
| `cabinet.profile.wrapper.html` | `cabinet.profile.wrapper` |
| `cabinet.orders.html` | `cabinet.orders` |
| `cabinet.orders.stats.html` | `cabinet.orders.stats` |
| `cabinet.order.details.html` | `cabinet.order.details` |
| `cabinet.shared.order.html` | `cabinet.shared.order` |
| `cabinet.message.wrapper.html` | `cabinet.message.wrapper` |
| `cabinet.auth.wrapper.html` | `cabinet.auth.wrapper` |
| `cabinet.dashboard.html` | `cabinet.dashboard` |
| `cabinet.dashboard.stats.html` | `cabinet.dashboard.stats` |
| `cabinet.dashboard.recent.orders.html` | `cabinet.dashboard.recent.orders` |
| `cabinet.loyalty.html` | `cabinet.loyalty` |
| `cabinet.ticket.row.html` | `cabinet.ticket.row` |
| `head.html` | `head` |
| `sidebar.html` | `sidebar` |
| `footer.html` | `footer` |

### 4. Создайте шаблоны

В **Элементы → Шаблоны** создайте шаблоны, скопировав содержимое из `modx/templates/`.

### 5. Создайте ресурсы (страницы)

| Страница | Шаблон | Alias | Приватная? |
|----------|--------|-------|------------|
| Авторизация | `tpl.cabinet.auth` | `auth` | Нет |
| Личный кабинет (Обзор) | `tpl.cabinet.dashboard` | `cabinet` | Да |
| Программа лояльности | `tpl.cabinet.loyalty` | `loyalty` | Да |
| История заказов | `tpl.cabinet.orders` | `orders` | Да |
| Детали заказа | `tpl.cabinet.order.details` | `order` | Да |
| Персональные данные | `tpl.cabinet.profile` | `profile` | Да |
| Расшаренный заказ | `tpl.cabinet.shared.order` | `shared-order` | Нет |

### 6. Настройте системные настройки Cabinet

В **Система → Системные настройки → Cabinet**:

- `cabinet_home_page_id` — ID страницы «Личный кабинет»
- `cabinet_login_page_id` — ID страницы авторизации
- `cabinet_logout_page_id` — ID страницы после выхода
- `cabinet_order_details_page_id` — ID страницы деталей заказа
- `cabinet_shared_order_page_id` — ID страницы расшаренного заказа

### 7. Добавьте cabinetLogin в шапку основного сайта

В основном шаблоне сайта добавьте вызов:

```
[[!cabinetLogin? &tpl=`cabinet.login` &css=`` &js=``]]
```

---

## Кастомизация

- Все стили — в `assets/css/cabinet.css` (CSS-переменные для быстрой смены темы)
- Чанки — в административной панели MODX (Элементы → Чанки)
- Программа лояльности — плейсхолдеры `[[+loyalty.*]]` заполняются
  кастомным сниппетом или плагином (зависит от реализации бизнес-логики)

---

## Дизайн

Исходные макеты находятся в папке `static/` — они используются как
визуальный эталон. Все чанки и шаблоны стилизованы под этот дизайн:
жёлто-зелёная палитра Animal Park, шрифт Comfortaa, карточки с тенями.
