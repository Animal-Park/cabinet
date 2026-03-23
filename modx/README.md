# Animal Park — Личный кабинет (MODX Revolution 2.7 + Cabinet)

Полноценный личный кабинет посетителя контактного зоопарка **Animal Park**
на базе компонента [Cabinet](https://docs.modx.pro/components/cabinet).

---

## Архитектура

Проект использует **стандартные чанки и сниппеты Cabinet** без изменений.
Кастомизация — только через собственные шаблоны, чанки и CSS-стили.

```
Стандартные (Cabinet — не трогать):
├── cabinet.auth              — Формы входа / регистрации / восстановления
├── cabinet.auth.wrapper      — Обёртка (модальное окно / страничный режим)
├── cabinet.login             — Мини-меню гость/юзер
├── cabinet.profile           — Редактирование профиля + аватар + пароль
├── cabinet.profile.wrapper   — Обёртка профиля
├── cabinet.orders            — Список заказов + фильтр
├── cabinet.orders.stats      — Статистика заказов
├── cabinet.order.details     — Детали заказа
├── cabinet.shared.order      — Публичный расшаренный заказ
├── cabinet.message.wrapper   — Системные сообщения
├── cabinet.email             — Шаблон email
└── cabinetAuth / cabinetLogin / cabinetProfile / cabinetOrders /
    cabinetOrderDetails / cabinetOrdersStats / cabinetSharedOrder (сниппеты PHP)

Кастомные (Animal Park — этот репозиторий):
├── Шаблоны/                  — 7 шаблонов MODX
├── Чанки/                    — 7 кастомных чанков
├── Сниппеты/                 — 2 PHP-сниппета
└── assets/                   — CSS + JS
```

---

## Структура файлов

### Шаблоны (7 шт.)

| Файл | Имя в MODX | Назначение |
|------|-----------|------------|
| `tpl.AnimalPark.Auth.html` | `tpl.AnimalPark.Auth` | Страница авторизации (публичная) |
| `tpl.AnimalPark.Cabinet.html` | `tpl.AnimalPark.Cabinet` | Dashboard — обзор аккаунта |
| `tpl.AnimalPark.Cabinet.Orders.html` | `tpl.AnimalPark.Cabinet.Orders` | История заказов |
| `tpl.AnimalPark.Cabinet.OrderDetails.html` | `tpl.AnimalPark.Cabinet.OrderDetails` | Детали заказа |
| `tpl.AnimalPark.Cabinet.Profile.html` | `tpl.AnimalPark.Cabinet.Profile` | Персональные данные |
| `tpl.AnimalPark.Cabinet.Loyalty.html` | `tpl.AnimalPark.Cabinet.Loyalty` | Программа лояльности |
| `tpl.AnimalPark.Cabinet.SharedOrder.html` | `tpl.AnimalPark.Cabinet.SharedOrder` | Расшаренный заказ (публичный) |

### Чанки (7 шт.)

| Файл | Имя в MODX | Назначение |
|------|-----------|------------|
| `ap.head.html` | `ap.head` | `<head>` — шрифты, Bootstrap, Cabinet CSS, кастомный CSS |
| `ap.sidebar.html` | `ap.sidebar` | Боковая навигация с иконками |
| `ap.footer.html` | `ap.footer` | Bootstrap JS + кастомный JS |
| `ap.dashboard.html` | `ap.dashboard` | Содержимое Dashboard (статистика, заказы, быстрые действия) |
| `ap.loyalty.html` | `ap.loyalty` | Содержимое страницы лояльности (баллы, уровни, привилегии) |
| `ap.tier.current.badge.html` | `ap.tier.current.badge` | Бейдж «Текущий статус» для карточки уровня |

### Сниппеты (2 шт.)

| Файл | Имя в MODX | Назначение |
|------|-----------|------------|
| `apLoyalty.php` | `apLoyalty` | Данные программы лояльности из extended-полей профиля |
| `apCheckAuth.php` | `apCheckAuth` | Проверка авторизации + редирект для приватных страниц |

### Ассеты

| Файл | Куда копировать |
|------|----------------|
| `assets/css/animal-park.css` | `assets/css/animal-park.css` |
| `assets/js/animal-park.js` | `assets/js/animal-park.js` |

---

## Установка

### 1. Требования

- MODX Revolution **2.7.x**
- Компонент **Cabinet** (установить из modstore.pro)
- Компонент **miniShop2** (для заказов)
- Компонент **pdoTools** (используется Cabinet)

### 2. Установка Cabinet

В менеджере пакетов MODX установите Cabinet. При установке:
- **Режим регистрации**: E-mail
- **Режим работы**: Стандартные страницы (рекомендуется)

### 3. Копирование ассетов

```bash
cp modx/assets/css/animal-park.css  /path/to/modx/assets/css/
cp modx/assets/js/animal-park.js    /path/to/modx/assets/js/
```

### 4. Создание сниппетов

В **Элементы → Сниппеты** создайте:

- **apLoyalty** — содержимое файла `Сниппеты/apLoyalty.php`
- **apCheckAuth** — содержимое файла `Сниппеты/apCheckAuth.php`

### 5. Создание чанков

В **Элементы → Чанки** создайте чанки, скопировав содержимое файлов из `Чанки/`:

| Файл | Имя чанка |
|------|-----------|
| `ap.head.html` | `ap.head` |
| `ap.sidebar.html` | `ap.sidebar` |
| `ap.footer.html` | `ap.footer` |
| `ap.dashboard.html` | `ap.dashboard` |
| `ap.loyalty.html` | `ap.loyalty` |
| `ap.tier.current.badge.html` | `ap.tier.current.badge` |

### 6. Создание шаблонов

В **Элементы → Шаблоны** создайте шаблоны из папки `Шаблоны/`.

### 7. Создание ресурсов (страниц)

| Ресурс | Шаблон | Alias | Родитель | Приватная |
|--------|--------|-------|----------|-----------|
| Авторизация | `tpl.AnimalPark.Auth` | `auth` | корень | Нет |
| Кабинет | `tpl.AnimalPark.Cabinet` | `cabinet` | корень | Да |
| История заказов | `tpl.AnimalPark.Cabinet.Orders` | `orders` | Кабинет | Да |
| Детали заказа | `tpl.AnimalPark.Cabinet.OrderDetails` | `order` | Кабинет | Да |
| Профиль | `tpl.AnimalPark.Cabinet.Profile` | `profile` | Кабинет | Да |
| Лояльность | `tpl.AnimalPark.Cabinet.Loyalty` | `loyalty` | Кабинет | Да |
| Расшаренный заказ | `tpl.AnimalPark.Cabinet.SharedOrder` | `shared-order` | корень | Нет |

### 8. Системные настройки

В **Система → Системные настройки** создайте / настройте:

| Ключ | Значение |
|------|----------|
| `cabinet_home_page_id` | ID ресурса «Кабинет» |
| `cabinet_login_page_id` | ID ресурса «Авторизация» |
| `cabinet_logout_page_id` | ID ресурса «Авторизация» |
| `cabinet_orders_page_id` | ID ресурса «История заказов» |
| `cabinet_order_details_page_id` | ID ресурса «Детали заказа» |
| `cabinet_shared_order_page_id` | ID ресурса «Расшаренный заказ» |
| `cabinet_profile_page_id` | ID ресурса «Профиль» |
| `cabinet_loyalty_page_id` | ID ресурса «Лояльность» |

> `cabinet_loyalty_page_id` и `cabinet_profile_page_id` / `cabinet_orders_page_id` — 
> кастомные настройки, создайте вручную в пространстве `cabinet`.

### 9. Добавьте cabinetLogin в шапку основного сайта

```
[[!cabinetLogin?
    &tpl=`cabinet.login`
    &css=``
    &js=``
]]
```

---

## Программа лояльности

Данные хранятся в `extended`-полях профиля MODX:

```json
{
    "loyalty": {
        "points": 1250,
        "tier": "friend",
        "visits": 12
    }
}
```

Уровни:
| Код | Название | Кэшбэк | Порог баллов |
|-----|---------|---------|-------------|
| `beginner` | Новичок | 3% | 0 |
| `friend` | Друг Животных | 7% | 1000 |
| `patron` | Опекун | 12% | 1500 |

Начисление баллов реализуется через плагины MODX на события miniShop2
(например, `msOnChangeOrderStatus`) — добавьте по вашей бизнес-логике.

---

## Макеты

Папка `static/` содержит оригинальные HTML-макеты дизайна (визуальный эталон).
Папки `static/chunk/` и `static/snipets/` — стандартные чанки и сниппеты Cabinet
для справки (на MODX они уже загружены компонентом).
