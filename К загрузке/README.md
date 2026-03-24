# К загрузке — Animal Park Cabinet

Файлы для загрузки в MODX Revolution 2.7.
Работает поверх стандартных чанков и сниппетов **Cabinet** (не изменены).

## Ресурсы MODX

| ID  | Ресурс | Шаблон | Примечание |
|-----|--------|--------|------------|
| 484 | Кабинет | `tpl.Cabinet` | Главная кабинета (dashboard) |
| 485 | Заказы | `tpl.Cabinet.Orders` | Заказы + профиль |
| 486 | Детали заказа | `tpl.Cabinet.OrderDetails` | Дочерний от 485 |
| 487 | Публичный заказ | `tpl.Cabinet.SharedOrder` | Без авторизации |
| 488 | Избранное | `tpl.Cabinet.Favorites` | MyFavorites |
| 489 | История Посещений | `tpl.Cabinet.Visits` | Визиты + лояльность |

## Загрузка

### 1. Файлы → сервер
```
assets/css/animal-park-cabinet.css → assets/css/
assets/js/animal-park-cabinet.js   → assets/js/
```

### 2. Чанки → Элементы → Чанки
| Файл | Имя чанка |
|------|-----------|
| `ap.head.html` | `ap.head` |
| `ap.sidebar.html` | `ap.sidebar` |
| `ap.footer.html` | `ap.footer` |

### 3. Шаблоны → Элементы → Шаблоны
| Файл | Имя шаблона | Ресурс |
|------|-------------|--------|
| `tpl.Cabinet.html` | `tpl.Cabinet` | 484 |
| `tpl.Cabinet.Orders.html` | `tpl.Cabinet.Orders` | 485 |
| `tpl.Cabinet.OrderDetails.html` | `tpl.Cabinet.OrderDetails` | 486 |
| `tpl.Cabinet.SharedOrder.html` | `tpl.Cabinet.SharedOrder` | 487 |
| `tpl.Cabinet.Favorites.html` | `tpl.Cabinet.Favorites` | 488 |
| `tpl.Cabinet.Visits.html` | `tpl.Cabinet.Visits` | 489 |

### 4. Системные настройки
```
cabinet_home_page_id = 484
cabinet_login_page_id = (ID страницы авторизации)
cabinet_logout_page_id = (ID страницы авторизации)
cabinet_order_details_page_id = 486
cabinet_shared_order_page_id = 487
```
