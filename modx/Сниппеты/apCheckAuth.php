<?php
/**
 * apCheckAuth — Проверка авторизации для приватных страниц кабинета
 *
 * Если пользователь не авторизован — редирект на страницу авторизации.
 * Вызывается в начале шаблонов приватных страниц (dashboard, orders, profile, loyalty).
 *
 * Использование в шаблоне:
 *   [[!apCheckAuth]]
 *
 * Параметры:
 * @var int $loginPageId — ID страницы авторизации (по умолчанию из cabinet_login_page_id)
 */

if ($modx->user->isAuthenticated($modx->context->key)) {
    return '';
}

$loginPageId = $modx->getOption('loginPageId', $scriptProperties, 0);
if (empty($loginPageId)) {
    $loginPageId = $modx->getOption('cabinet_login_page_id', null, $modx->getOption('site_start'));
}

$url = $modx->makeUrl($loginPageId, '', '', 'full');
$modx->sendRedirect($url);

return '';
