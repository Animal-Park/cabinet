# К загрузке

Шаблоны и чанки для ресурсов кабинета MODX.
Используют готовые CSS/JS из `static/` и стандартные чанки/сниппеты Cabinet.

## Файлы на сервер (уже должны быть)

- `assets/css/styles.min.css` — основные стили сайта
- `assets/css/style.css` — стили кабинета из `static/css/style.css`
- `assets/js/app.js` — JS анимации из `static/js/app.js`

## Чанки

| Файл | Имя чанка |
|------|-----------|
| `ap.head.html` | `ap.head` |
| `ap.sidebar.html` | `ap.sidebar` |

## Шаблоны → Ресурсы

| ID  | Ресурс | Шаблон |
|-----|--------|--------|
| 484 | Кабинет | `tpl.Cabinet` |
| 485 | Заказы | `tpl.Cabinet.Orders` |
| 486 | Детали заказа | `tpl.Cabinet.OrderDetails` |
| 487 | Публичный заказ | `tpl.Cabinet.SharedOrder` |
| 488 | Избранное | `tpl.Cabinet.Favorites` |
| 489 | История Посещений | `tpl.Cabinet.Visits` |

## Системные настройки

```
cabinet_home_page_id = 484
cabinet_order_details_page_id = 486
cabinet_shared_order_page_id = 487
```
