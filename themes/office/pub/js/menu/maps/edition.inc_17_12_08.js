function createjsDOMenu() {
     
  absoluteMenu1 = new jsDOMenu(180, "absolute");
  with (absoluteMenu1) {
    addMenuItem(new menuItem("Номера", "", script+'?admin=numbers'));
	addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Рубрикация статей", "", script+'?admin=parts'));
	addMenuItem(new menuItem("Рубрикация Правоведа", "", script+'?admin=partspravoved'));
	addMenuItem(new menuItem("Рубрикация вопросов", "", script+'?admin=questparts'));
	addMenuItem(new menuItem("Региональные рубрики", "", script+'?admin=regionparts'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Жанры", "", script+'?admin=genres'));
	addMenuItem(new menuItem("Спецрубрики", "", script+'?admin=specials'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Источники новостей", "", script+'?admin=source'));
	}
     
  absoluteMenu2 = new jsDOMenu(140, "absolute");
  with (absoluteMenu2) {
    addMenuItem(new menuItem("Статьи", "", script + '?admin=publ'));
    addMenuItem(new menuItem("Новости", "", script + '?admin=news'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Региональные новости", "", script + '?admin=rnews'));
	addMenuItem(new menuItem("Анонсы", "", script + '?admin=exportanons'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Реклама", "", script + '?admin=informations'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Авторы", "", script + '?admin=authors'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Даты и люди", "", script + '?admin=dates'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Правовед", "", script + '?admin=pravoved'));
	addMenuItem(new menuItem("Авторы правоведа", "", script + '?admin=prav_authors'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Вопрос-ответ", "", script + '?admin=questions'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Афоризмы", "", script + '?admin=aforms'));
	addMenuItem(new menuItem("Анекдоты", "", script + '?admin=anekdots'));
    }
  
    
  absoluteMenu3 = new jsDOMenu(140, "absolute");
  with (absoluteMenu3) {
    addMenuItem(new menuItem("Анонсы RSS", "item1", ""));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Интерфакс", "", server + 'interfax.php'));
  }

  
  absoluteMenu3_1 = new jsDOMenu(150, "absolute");
  with (absoluteMenu3_1) {
    addMenuItem(new menuItem("Все ленты", "", "http://www.argumenti.ru/rss/all/1"));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("MAIL-RU", "",  "http://www.argumenti.ru/rss/feed/mailru/create/1"));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Наша лента", "",  "http://www.argumenti.ru/rss/feed/argumenti/create/1"));
    addMenuItem(new menuItem("Yandex", "",  "http://www.argumenti.ru/rss/feed/yandex/create/1"));
    addMenuItem(new menuItem("Rambler", "",  "http://www.argumenti.ru/rss/feed/rambler/create/1"));
    addMenuItem(new menuItem("SMI-RU", "", "http://www.argumenti.ru/rss/feed/smiru/create/1"));
	
  }
  
  
   absoluteMenu4 = new jsDOMenu(180, "absolute");
  with (absoluteMenu4) {
    addMenuItem(new menuItem("Ваше мнение: Вопросы", "", server + "admins.php?admin=mnequest"));
	addMenuItem(new menuItem("Ваше мнение: Ответы", "", server + "admins.php?admin=mneanswer"));
    addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Комментарии", "", server + "admins.php?admin=comments"));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Пользователи", "", server + "admins.php?admin=users"));
    }
  
  
  absoluteMenu5 = new jsDOMenu(140, "absolute");
  with (absoluteMenu5) {
    addMenuItem(new menuItem("Отделы", "", server + "admins.php?admin=regions"));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Регионы", "", server + "admins.php?admin=regions"));
  }
  
  
   absoluteMenu5 = new jsDOMenu(140, "absolute");
	with (absoluteMenu5) {
		addMenuItem(new menuItem("Пресс-конференции", "", server + "admins.php?admin=confs"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("Регистрация он-лайн", "", server + "admins.php?admin=onlines"));
		addMenuItem(new menuItem("Вопросы и ответ", "", server + "admins.php?admin=onlinequest"));
  }
  
  
  absoluteMenu3.items.item1.setSubMenu(absoluteMenu3_1);
  //absoluteMenu1.items.item2.setSubMenu(absoluteMenu1_1);
  //absoluteMenu2.items.item4.setSubMenu(absoluteMenu2_1);
 
  
  absoluteMenuBar = new jsDOMenuBar("static", "staticMenuBar");
  with (absoluteMenuBar) {
    addMenuBarItem(new menuBarItem("Каталоги", absoluteMenu1));
    addMenuBarItem(new menuBarItem("Контент", absoluteMenu2));
    addMenuBarItem(new menuBarItem("Экспорт", absoluteMenu3));
	addMenuBarItem(new menuBarItem("Интерактив", absoluteMenu4));
	addMenuBarItem(new menuBarItem("Контакты", absoluteMenu5));
	addMenuBarItem(new menuBarItem("Пресс-центр", absoluteMenu5));
    setActivateMode("over");
  }
}