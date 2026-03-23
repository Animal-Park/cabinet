const UI = {
    init() {
        this.sidebar = document.querySelector('.sidebar');
        this.contentArea = document.querySelector('.main-content');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.bindEvents();
        this.loadPage('dashboard'); // Дефолтная страница
    },

    bindEvents() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                if (page) this.loadPage(page);
            });
        });
    },

    // Динамическая подгрузка контента без перезагрузки (SPA style)
    async loadPage(pageId) {
        // Подсвечиваем активный пункт
        this.navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Генерируем контент на лету (в реальном проекте тут fetch, тут — рендер)
        let html = '';
        switch(pageId) {
            case 'dashboard':
                html = this.templates.dashboard();
                break;
            case 'loyalty':
                html = this.templates.loyalty();
                break;
            case 'orders':
                html = this.templates.orders();
                break;
            case 'profile':
                html = this.templates.profile();
                break;
        }

        this.contentArea.innerHTML = html;
        this.animateIn();
    },

    animateIn() {
        const cards = this.contentArea.querySelectorAll('.section-card');
        cards.forEach((c, i) => {
            c.style.opacity = '0';
            c.style.transform = 'translateY(20px)';
            setTimeout(() => {
                c.style.transition = 'all 0.5s ease';
                c.style.opacity = '1';
                c.style.transform = 'translateY(0)';
            }, i * 100);
        });
    },

    templates: {
        dashboard() {
            return `
                <div class="fade-in">
                    <h1 class="h1">Обзор аккаунта</h1>
                    <div class="stats-row">
                        <div class="section-card"><b>1,250</b><span>Баллов</span></div>
                        <div class="section-card"><b>12</b><span>Визитов</span></div>
                        <div class="section-card"><b>15%</b><span>Скидка</span></div>
                    </div>
                    <div class="section-card">
                        <h2 class="h2">Недавняя активность</h2>
                        <p style="font-weight:700">Последний визит: 15 февраля 2026</p>
                        <p style="color:#888; font-size:14px">Вы посетили локацию "Лесные тайны". Начислено 15 баллов.</p>
                    </div>
                </div>
            `;
        },
        loyalty() {
            return `
                <div class="fade-in">
                    <h1 class="h1">Программа лояльности</h1>
                    <div class="section-card" style="padding: 50px;">
                        <div style="font-weight: 800; text-transform: uppercase; opacity: 0.6; font-size: 13px; margin-bottom:10px;">Ваш текущий баланс</div>
                        <div style="font-size: 64px; font-weight: 900; margin-bottom: 15px;">1,250 БАЛЛОВ</div>
                        <div style="background: rgba(255,255,255,0.5); display: inline-block; padding: 8px 20px; border-radius: 12px; font-weight: 900; color: #4a7c44;">≈ 12.50 BYN на покупки</div>
                        
                        <div style="margin-top: 40px;">
                            <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 14px; margin-bottom: 15px;">
                                <span>Статус: Друг Животных</span>
                                <span>75% до Опекуна</span>
                            </div>
                            <div style="background: rgba(0,0,0,0.1); height: 14px; border-radius: 10px;">
                                <div style="background: var(--accent-green); width: 75%; height: 100%; border-radius: 10px; box-shadow: 0 0 20px rgba(74, 124, 68, 0.3);"></div>
                            </div>
                        </div>
                    </div>

                    <div class="section-card">
                        <div class="h2">Доступные привилегии</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div style="background: var(--accent-green-light); padding: 25px; border-radius: 20px; border-left: 6px solid var(--accent-green);">
                                <div style="font-weight: 900; margin-bottom: 5px;">Кэшбэк 7%</div>
                                <div style="font-size: 14px; color: #555;">Баллы за каждое посещение.</div>
                            </div>
                            <div style="background: var(--accent-green-light); padding: 25px; border-radius: 20px; border-left: 6px solid var(--accent-green);">
                                <div style="font-weight: 900; margin-bottom: 5px;">Бесплатный чай</div>
                                <div style="font-size: 14px; color: #555;">В любой зоне отдыха парка.</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        },
        orders() {
            return `
                <h1 class="h1">Мои заказы</h1>
                <div class="section-card">
            <table>
                <thead>
                    <tr><th>Заказ</th><th>Состав</th><th>Сумма</th><th>Статус</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12890<br><small style="color:#aaa">15.02.2026</small></td>
                        <td>Билет "Взрослый" x2<br>Корм для животных x1</td>
                        <td>45.00 BYN</td>
                        <td><span class="status">Выполнен</span></td>
                    </tr>
                    <tr>
                        <td>#12875<br><small style="color:#aaa">10.02.2026</small></td>
                        <td>Билет "Детский" x1</td>
                        <td>10.00 BYN</td>
                        <td><span class="status">Выполнен</span></td>
                    </tr>
                </tbody>
            </table>
                </div>
            `;
        },
        profile() {
            return `
                <h1 class="h1">Профиль</h1>
                <div class="section-card">
                    <div class="title">Мои активные билеты</div>
                    <div class="info-msg">Покажите QR-код сотруднику на входе или в зоне услуг.</div>
                    
                    <div class="ticket-card">
                        <div class="qr-mock">QR CODE</div>
                        <div>
                            <div style="font-size: 18px; font-weight: 900;">Входной билет: Лесные тайны</div>
                            <div style="color: #888; font-size: 13px;">Действителен до: 20.02.2026</div>
                            <div style="margin-top: 5px; color: #4a7c44; font-weight: bold;">Статус: Готов к использованию</div>
                        </div>
                    </div>

                    <div class="ticket-card">
                        <div class="qr-mock">QR CODE</div>
                        <div>
                            <div style="font-size: 18px; font-weight: 900;">Свидание с Капибарой</div>
                            <div style="color: #888; font-size: 13px;">Сеанс: 12:30 (16.02.2026)</div>
                            <div style="margin-top: 5px; color: #e67e22; font-weight: bold;">Статус: Ожидание времени</div>
                        </div>
                    </div>
                </div>
                <div class="section-card">
                    <div class="title">Персональные данные</div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                        <div class="form-group">
                            <label>Ваше имя</label>
                            <input type="text" value="Евгений">
                        </div>
                        <div class="form-group">
                            <label>Фамилия</label>
                            <input type="text" value="Администратор">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Электронная почта</label>
                        <input type="email" value="errayse@example.com">
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input type="text" value="+375 (29) 000-00-00">
                    </div>
                    <button class="btn">Сохранить изменения</button>
                </div>
                <div class="section-card">
                    <div class="title">Безопасность и пароль</div>
                    <div class="form-group">
                        <label>Текущий пароль</label>
                        <input type="password" placeholder="••••••••">
                    </div>
                    <div class="form-group">
                        <label>Новый пароль</label>
                        <input type="password" placeholder="Введите новый пароль">
                    </div>
                    <div class="form-group">
                        <label>Повторите новый пароль</label>
                        <input type="password" placeholder="Повторите новый пароль">
                    </div>
                    <button class="btn">Обновить пароль</button>
                </div>
            `;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());
