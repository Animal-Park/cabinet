<?php
/**
 * apLoyalty — Сниппет для получения данных программы лояльности Animal Park
 *
 * Возвращает данные бонусной программы для текущего авторизованного пользователя.
 * Данные хранятся в расширенных полях профиля (extended) пользователя MODX.
 *
 * Использование:
 *   [[!apLoyalty? &field=`points`]]
 *   [[!apLoyalty? &field=`tier_name` &default=`Новичок`]]
 *   [[!apLoyalty? &field=`tier` &eq=`friend` &then=`current`]]
 *   [[!apLoyalty? &field=`tier` &eq=`friend` &thenChunk=`ap.tier.current.badge`]]
 *
 * Параметры:
 * @var string $field       — Поле данных лояльности (points, equivalent, progress, tier, tier_name,
 *                             next_tier_message, visits, cashback)
 * @var string $default     — Значение по умолчанию, если поле пустое
 * @var string $eq          — Значение для сравнения (опционально)
 * @var string $then        — Строка, возвращаемая при совпадении с $eq
 * @var string $thenChunk   — Чанк, выводимый при совпадении с $eq
 *
 * Структура extended-полей профиля:
 *   loyalty.points     — Количество баллов (int)
 *   loyalty.tier       — Код уровня: beginner | friend | patron
 *   loyalty.visits     — Количество визитов (int)
 */

if (!$modx->user->isAuthenticated($modx->context->key)) {
    return $modx->getOption('default', $scriptProperties, '');
}

$field = $modx->getOption('field', $scriptProperties, '');
$default = $modx->getOption('default', $scriptProperties, '');
$eq = $modx->getOption('eq', $scriptProperties, '');
$then = $modx->getOption('then', $scriptProperties, '');
$thenChunk = $modx->getOption('thenChunk', $scriptProperties, '');

if (empty($field)) {
    return $default;
}

$profile = $modx->user->getOne('Profile');
if (!$profile) {
    return $default;
}

$extended = $profile->get('extended');
if (!is_array($extended)) {
    $extended = [];
}

$loyalty = isset($extended['loyalty']) && is_array($extended['loyalty']) ? $extended['loyalty'] : [];

$tiers = [
    'beginner' => ['name' => 'Новичок', 'cashback' => '3%', 'threshold' => 0],
    'friend'   => ['name' => 'Друг Животных', 'cashback' => '7%', 'threshold' => 1000],
    'patron'   => ['name' => 'Опекун', 'cashback' => '12%', 'threshold' => 1500],
];

$points  = isset($loyalty['points']) ? (int) $loyalty['points'] : 0;
$tier    = isset($loyalty['tier']) && isset($tiers[$loyalty['tier']]) ? $loyalty['tier'] : 'beginner';
$visits  = isset($loyalty['visits']) ? (int) $loyalty['visits'] : 0;

$tierKeys = array_keys($tiers);
$currentTierIndex = array_search($tier, $tierKeys);
$nextTierKey = isset($tierKeys[$currentTierIndex + 1]) ? $tierKeys[$currentTierIndex + 1] : null;

$progress = 0;
$nextTierMessage = '';
if ($nextTierKey) {
    $nextThreshold = $tiers[$nextTierKey]['threshold'];
    $currentThreshold = $tiers[$tier]['threshold'];
    $range = $nextThreshold - $currentThreshold;
    $progress = $range > 0 ? min(100, round(($points - $currentThreshold) / $range * 100)) : 0;
    $remaining = max(0, $nextThreshold - $points);
    $nextTierMessage = 'Накопите ещё ' . $remaining . ' баллов для перехода на уровень «' . $tiers[$nextTierKey]['name'] . '»';
} else {
    $progress = 100;
    $nextTierMessage = 'Вы достигли максимального уровня!';
}

$equivalent = number_format($points * 0.01, 2, '.', '');

$values = [
    'points'            => $points,
    'equivalent'        => $equivalent,
    'progress'          => $progress,
    'tier'              => $tier,
    'tier_name'         => $tiers[$tier]['name'],
    'next_tier_message' => $nextTierMessage,
    'visits'            => $visits,
    'cashback'          => $tiers[$tier]['cashback'],
];

$value = isset($values[$field]) ? $values[$field] : $default;

if (!empty($eq)) {
    if ((string) $value === (string) $eq) {
        if (!empty($thenChunk)) {
            return $modx->getChunk($thenChunk);
        }
        return $then;
    }
    return '';
}

return !empty($value) || $value === '0' || $value === 0 ? $value : $default;
