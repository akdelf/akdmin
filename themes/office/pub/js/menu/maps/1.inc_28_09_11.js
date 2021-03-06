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
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Таблойд", "", script + '?admin=tabloid'));
	addMenuItem(new menuItem("-"));
	}
     
  absoluteMenu2 = new jsDOMenu(140, "absolute");
  with (absoluteMenu2) {
    addMenuItem(new menuItem("Аргументы Недели", "", script + '?admin=news'));
	addMenuItem(new menuItem("Аргументы.ру", "", script + '?admin=ar'));
	addMenuItem(new menuItem("АН-онлайн", "", script + '?admin=anonline'));
	addMenuItem(new menuItem("Вся лента", "", script + '?admin=news_lite'));
	
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Таблойд", "", script + '?admin=tabloid'));
	addMenuItem(new menuItem("Афиша", "", script + '?admin=broadcast'));
	addMenuItem(new menuItem("Авторы", "", script + '?admin=authors'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Опросы", "", script + '?admin=poll_news'));
	addMenuItem(new menuItem("Варианты для опросов", "", script + '?admin=votes_news'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Сюжеты", "", script+'?admin=subject'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Фотографии", "", script + '?admin=photes_gallery'));
	addMenuItem(new menuItem("Фотогалереи", "", script + '?admin=photogallery'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Гороскоп", "", script + '?admin=goroskop'));
	/*addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Афоризмы", "", script + '?admin=aforms'));
	addMenuItem(new menuItem("Анекдоты", "", script + '?admin=anekdots'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Блоги", "", script + '?admin=blogs'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Расположение баннеров", "", script + '?admin=banner_locations'));
	addMenuItem(new menuItem("Баннеры", "", script + '?admin=banners'));
	addMenuItem(new menuItem("Месторасположения", "", script + '?admin=locations'));
	addMenuItem(new menuItem("Партнеры", "", script + '?admin=parthers'));*/
    }
  
    
  absoluteMenu3 = new jsDOMenu(140, "absolute");
  with (absoluteMenu3) {
    addMenuItem(new menuItem("Блоки", "", script + '?admin=topics'));
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
	addMenuItem(new menuItem("Комментарии к статьям и новостям", "", script + '?admin=comments_news'));
	addMenuItem(new menuItem("Комментарии к блогам", "", script + '?admin=comments_posts'));
	addMenuItem(new menuItem("Комментарии  к конкурсам", "", script + '?admin=comments_concurs'));
	addMenuItem(new menuItem("Комментарии  к фотографиям", "", script + '?admin=comments_photo'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Пользователи", "",  script + 'admins.php?admin=users'));
    }
  
  
  absoluteMenu5 = new jsDOMenu(140, "absolute");
  with (absoluteMenu5) {
    addMenuItem(new menuItem("Отделы", "", server + "admins.php?admin=regions"));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Регионы", "", server + "admins.php?admin=regions"));
  }
  
  
   absoluteMenu5 = new jsDOMenu(140, "absolute");
	with (absoluteMenu5) {
		addMenuItem(new menuItem("Регистрация он-лайн", "", script + '?admin=online'));
		addMenuItem(new menuItem("Вопросы и ответы", "", script + '?admin=onlinequest'));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("Пресс-конференции", "", script + '?admin=presscenter'));
	

  }
  
  absoluteMenu6 = new jsDOMenu(140, "absolute");
	with (absoluteMenu6) {
		addMenuItem(new menuItem("Пользователи", "", server + "admins.php?admin=users"));
		addMenuItem(new menuItem("Группы", "", server + "admins.php?admin=groupuser"));
		addMenuItem(new menuItem("Пересоздать доступ", "", "http://www.argumenti.ru/passwords/create"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("Регионы", "",script + '?admin=regions'));
		
  }
  
  
 absoluteMenu7 = new jsDOMenu(140, "absolute");
  with (absoluteMenu7) {
    addMenuItem(new menuItem("Региональные статьи", "", script + '?admin=regionpubls'));
	addMenuItem(new menuItem("Региональные новости", "", script + '?admin=rnews'));
	}
  
  
  absoluteMenu8 = new jsDOMenu(140, "absolute");
  with (absoluteMenu8) {
	addMenuItem(new menuItem("Инфомеры", "", script + '?admin=informers'));    
	addMenuItem(new menuItem("Контекстная реклама", "", script + '?admin=contexts'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Баннеры", "",script + '?admin=banners'));
	addMenuItem(new menuItem("Места под баннеры", "",script + '?admin=locations'));
	addMenuItem(new menuItem("-"));
	}
	
	
	absoluteMenu9 = new jsDOMenu(180, "absolute");
  with (absoluteMenu9) {
   addMenuItem(new menuItem("Блоги", "", script+'?admin=blogs'));
    addMenuItem(new menuItem("Посты", "", script+'?admin=posts_admin'));
	}
  
  absoluteMenu3.items.item1.setSubMenu(absoluteMenu3_1);
  //absoluteMenu1.items.item2.setSubMenu(absoluteMenu1_1);
  //absoluteMenu2.items.item4.setSubMenu(absoluteMenu2_1);
 
  
  absoluteMenuBar = new jsDOMenuBar("static", "staticMenuBar");
  with (absoluteMenuBar) {
    addMenuBarItem(new menuBarItem("Каталоги", absoluteMenu1));
    addMenuBarItem(new menuBarItem("Контент", absoluteMenu2));
	addMenuBarItem(new menuBarItem("Интерактив", absoluteMenu4));
	addMenuBarItem(new menuBarItem("Блоги", absoluteMenu9));
    addMenuBarItem(new menuBarItem("Блоки", absoluteMenu3));
	addMenuBarItem(new menuBarItem("Регионы", absoluteMenu7));
	addMenuBarItem(new menuBarItem("Пресс-центр", absoluteMenu5));
	addMenuBarItem(new menuBarItem("Администрирование", absoluteMenu6));
	addMenuBarItem(new menuBarItem("Реклама", absoluteMenu8));
	setActivateMode("over");
  }
}