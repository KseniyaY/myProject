var App = App || {};

var qs = function (selector) {
 return document.querySelector(selector);
}

// var members = []; //создаем пустой массив для сохранения отсортированных пользователей, информацию о которых мы получили из jsonobj
var members = [];

var scopes = [];
var filteredMembers = []; 


//функция для возврата из окна профиля на главную страницу + log out
function backHome() {
    window.location.assign("main.html");
}

//объект с основной функцией для формирования динамического контента через переданный код в innerHTML элементов по факту срабатывания событий - кликов по разделам меню
App.navEvents = (function eventListeners() {

		var contentContainer = document.querySelector('.content');
		var goToMyProfile = document.querySelectorAll('.goToMyProfile');
		var profileContainer = document.createElement('div');
		var circlesContainer = document.createElement('div');
		var findMyPeopleContainer = document.createElement('div');
		var underConstruction = document.createElement('div');

		var goToMyCircles = document.querySelectorAll('.goToMyCircles');
		var goToMyMessages = document.querySelectorAll('.goToMyMessages');
		var goTofindMyPeople = document.querySelectorAll('.findMyPeople');
		var goToMySettings = document.querySelectorAll('.goToMySettings');
		// var renderSettings = document.querySelector('.mySettings');


		var profileContent = '<div class="container-fluid myProfile">\
			<section class="row gallery">\
			<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 profilePic">\
							<img class = "mainPic" src="less/img/profile_pics/profile_main_pic_resized.jpg" alt="my_profile_pic" width="174px" height="232px">\
						</div>\
							<div class="col-lg-10 col-md-9 col-sm-9 col-xs-12 picIconsGallery">\
							<div class="row picIconsRow">\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_picIcon.jpg" alt="my pictures" width="145px" height="110px">\
								</div>\
								<div class="col-lg-2 col-md-3 col-sm-3 col-xs-12 picIcon">\
									<img src="less/img/profile_pics/stub_vidIcon.jpg" alt="my video" width="145px" height="110px">\
								</div>\
							</div>\
						</div>\
					</section>\
					<section class="row profileDescr">\
						<div class="col-md-6 col-xs-12 briefInfo">\
							<h2 class="briefInfoTitle">Brief info</h2>\
						<div class="briefInfoItems">\
							<span class="descrQuest"><strong>Gender: </strong></span>\
							<span class="descrReply">Female</span><br>\
							<span class="descrQuest"><strong>Age: </strong></span>\
							<span class="descrReply">34</span><br>\
							<span class="descrQuest"><strong>Location: </strong></span>\
							<span class="descrReply">Ukraine</span><br>\
							<span class="descrQuest"><strong>Education: </strong></span>\
							<span class="descrReply">University degree, MS, major in Marketing</span><br>\
							<span class="descrQuest"><strong>Professional Area: </strong></span>\
							<span class="descrReply">IT, Marketing & Brand 		Management</span><br>\
						</div>\
						</div>\
						<div class="col-md-6 col-xs-12 interests">\
							<h2 class="interestsTitle">Interests</h2>\
							<div class="tags">\
								<div type="button" class="btn btn-primary">Dating & Relationship</div>\
								<div type="button" class="btn btn-primary">Interested in: <span class="fa fa-male"></span></div>\
								<div type="button" class="btn btn-primary">Fitness</div>\
								<div type="button" class="btn btn-primary">Hiking</div>\
								<div type="button" class="btn btn-primary">Learning English</div>\
								<div type="button" class="btn btn-primary">Books</div>\
								<div type="button" class="btn btn-primary">Board Games</div>\
								<div type="button" class="btn btn-primary">Travelling</div>\
								<div type="button" class="btn btn-primary">Foodie</div>\
								<div type="button" class="btn btn-primary">Materialization of thoughts</div>\
								<div type="button" class="btn btn-primary">Hunting dragons</div>\
								<div type="button" class="btn btn-primary">Extraordinary people</div>\
								<div type="button" class="btn btn-primary">Pirates</div>\
								<div type="button" class="btn btn-primary">Seriousness!</div>\
								<div type="button" class="btn btn-primary">Co-working</div>\
								<div type="button" class="btn btn-primary">FrontEnd Dev</div>\
								<div type="button" class="btn btn-primary">etc</div>\
							</div>\
						</div>\
						<div class="col-md-12 col-xs-12 aboutInfo">\
							<div class="col-md-6 col-xs-12 aboutTitle">\
								<h2>About myself</h2>\
							</div>\
							<div class="col-md-12 col-xs-12 aboutText">\
								<p>\
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit.</p>\
								<p>\
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit.</p>\
							</div>\
						</div>\
		</section></div>';

		
		var circlesContent = '<div class="container-fluid myCircles">\
			<section class="row circlesFilter">\
							<div class="col-md-5 searchUsers">\
								<select class="selectScopes" name="scopes" id="scopes">\
									<option value="select">Select scopes</option>\
									<option value="dating">Dating & Relationship</option>\
									<option value="hobbies">Hobbies & Interests</option>\
									<option value="sport">Sport & Activities</option>\
									<option value="friendship">Friendship & Roommates</option>\
									<option value="co-working">Co-working & Start-ups</option>\
								</select>\
							</div>\
							<div class="col-md-4 col-xs-12 foundUsers">\
								<span class="usersNum"></span><span class="fa fa-users"> users are found</span>\
							</div>\
							<div class="col-md-3 col-xs-12 searchReset">\
								<div type="button" class="btn btn-primary">Search reset</div>\
							</div>\
							</section>\
							<section class="row circlesDisplay">\
							</section></div>'
		
				

		for(var i=0; i < goToMyProfile.length; i++) {
			goToMyProfile[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				// profileContainer.setAttribute('class','container-fluid');
				contentContainer.appendChild(profileContainer);
				profileContainer.innerHTML = profileContent;
			})
		}


		for(var i=0; i < goToMyMessages.length; i++) {
			goToMyMessages[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				contentContainer.appendChild(underConstruction);
				underConstruction.setAttribute('class','underConstruction');
				underConstruction.classList.add('container-fluid');
				underConstruction.innerHTML = '<span class="fa fa-cogs"></span>' + "Sorry, this section is under construction";
			})
		}

			
		for(var i=0; i < goTofindMyPeople.length; i++) {	
			goTofindMyPeople[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				//добавить, когда будет готов xml модуль и json объект
				// circlesContainer.setAttribute('class','container-fluid');
				// contentContainer.appendChild(findMyPeopleContainer);
				// findMyPeopleContainer.innerHTML = findPeopleContent;
				contentContainer.appendChild(underConstruction);
				underConstruction.setAttribute('class','underConstruction');
				underConstruction.classList.add('container-fluid');
				underConstruction.innerHTML = '<span class="fa fa-cogs"></span>' + "Sorry, this section is under construction";
			})
		}

		for(var i=0; i < goToMySettings.length; i++) {
			goToMySettings[i].addEventListener('click', function (e) {
				console.log(e);
				contentContainer.innerHTML="";
				contentContainer.appendChild(underConstruction);
				underConstruction.setAttribute('class','underConstruction');
				underConstruction.classList.add('container-fluid');
				underConstruction.innerHTML = '<span class="fa fa-cogs"></span>' + "Sorry, this section is under construction";
			})
		}	

})()



//блок с функциями, взаимодейтсвующими с json-объектом
App.jsonobj = (function() {


	//функция по извлечению из джейсон объекта данных о пользователях. Функция содержит коллбек, который рендерит и отрисовывает элементы на страничке в момент вызова функции
	function getAllMembers () {
		xhrModule.getAll("circles", function (membersData) {
			membersData = membersData;
			renderCircles(membersData);
		}, xhrModule.failedRequest);
	};

	function renderCircles (membersData) {
		createMembers(membersData);
	}

	function createMembers (membersData) {
		membersData.forEach(function (obj) {
			//new App.Member(obj) - новый класс конструктора Member, который мы пушим в наш массив members
			members.push(new App.Member(obj));
		});

			//вызов функции, передающей значение с количеством пользователей в меню навигации
			
			navTotalMembers(members);

			//функция подсчета количества пользователей для значка в панели меню
			function navTotalMembers (membersArray) {
				usersTotalNum = document.querySelectorAll('.usersTotalNum');
				for(var i=0; i < usersTotalNum.length; i++) {
					usersTotalNum[i].innerHTML = membersArray.length;
				}
			}

			
			//в переменную filteredMembers кладем массив members для дальнейшей работы с сортировками и фильтрами, не затрагивая основной массив
			filteredMembers = members;
		

	}

	//функция по извлечению из джейсон объекта данных о категориях пользователей. Функция содержит коллбек, который добавляет данные о категориях в наш select в момент вызова функции

	function getAllScopes () {
		xhrModule.getAll("scopes", function (scopesData) {
			scopesData = scopesData;
			renderScopes(scopesData);
		}, xhrModule.failedRequest);
	}

	function renderScopes (scopesData) {
			addScopes(scopesData);
	}

	function addScopes (scopesData) {
	
		var selectScope = document.querySelector(".selectScopes");
		if (!scopes.length) {
			scopesData.forEach(function (val) {  
				scopes.push('<option value="' + val.id + '">' + val.name +'</option>');			
			})
		}
		
		selectScope.innerHTML = scopes.join("");	
	}


 	return {
		getAllMembers: getAllMembers,
		getAllScopes: getAllScopes
	}
})();


//добавляем метод объекту App, который будет служить шаблоном структуры блока с информацией о пользователе
App.memberTemplates = {
	memberContent: '<div class="row circleMember">\
	<div class="col-md-3 memberImage">\
			<img src={{image}} alt={{name}}>\
		</div>\
		<div class="col-md-9 memberPanel">\
			<div class="col-md-12 memberName">{{name}}</div>\
			<div class="col-md-5 memberControls">\
				<div type="button" class="btn btn-primary scope">{{scope}}</div>\
			</div>\
			<div class="col-md-5">\
				<div type="button" class="btn btn-primary message">\
					<span class="fa fa-edit"></span>\
					Write a message\
				</div>\
			</div>\
			<div class="col-md-2">\
				<div type="button" class="btn btn-primary del">Bow out?</div>\
			</div>\
	 	</div>\
	 </div>'
}

//добавляем метод, который будет отвечать за срабатывание событий при работе с элементом select, предназначенным для сортировки по соц. группам
App.selectScope = (function () {
	
	var goToMyCircles = document.querySelectorAll('.goToMyCircles');

	
	//функция, инициализирующая событие change по клику на select
	function initListeners (callbackObject) {
		
		for(var i=0; i < goToMyCircles.length; i++) {
				goToMyCircles[i].addEventListener('click', callbackObject.goToCircles);
		}

	}

 
	return {
		initListeners: initListeners
	}

})();


//добавляем в объект новый метод, который отвечает за прохождение циклом по переданным данным в виде jsonobj с возвращением фильтра по id соц.группы, выбранной через select

App.Member = (function () {
	var Member = function (data) {
		for (var i in data) {
			this[i] = data[i];
		}
		this.template = App.memberTemplates.memberContent;
	};

	//к прототипу метода Member добавляем метод  getHTML, для проверки HTML кода, который передан выше в виде контекста App.memberTemplates.memberContent для this.template

	Member.prototype.getHTML= function () {
		var reg = /{{([A-Za-z0-9\+\-\_\,\ ]+)}}/g;
		var self = this;
		return this.template.replace(reg, function (substring) {
   			return self[substring.split(/{|}/).join("")];
		});
	} 

	return Member; //возвращаем результат функции, сохраненной в переменную Member
 
})();

//создаем метод управления разделом странички, отображающей наших пользователей
App.manageCircles = (function () {

	
	var currentSort = "Name"; //сохраняем в переменную признак, по которому будет произведена сортировка по умолчанию
	
	var contentContainer = document.querySelector('.content');
	var circlesContainer = document.createElement('div');


	//вызываем функцию, которая будет срабатывать пока только на событие change при выборе значения из select элемента
	App.selectScope.initListeners({
		goToCircles: goToCircles,
	});

	// вызываем функцию getAllMembers для отрисовки пользователей
	App.jsonobj.getAllMembers();

	
	
	//непосредственно функция, вызываемая при клике на раздел "Мои круги" в панелю меню
	function goToCircles () {

		filteredMembers = members;
			
		var circlesContent = '<div class="container-fluid myCircles">\
				<section class="row circlesFilter">\
				<div class="col-md-5 searchUsers">\
				<select class="selectScopes" name="scopes" id="scopes">\
					</select>\
				</div>\
				<div class="col-md-4 col-xs-12 foundUsers">\
					<span class="usersNum"></span><span class="fa fa-users"> users are found</span>\
				</div>\
				<div class="col-md-3 col-xs-12 searchReset">\
					<div type="button" class="btn btn-primary">Search reset</div>\
				</div>\
				</section>\
				<section class="row circlesDisplay">\
				</section></div>'

		contentContainer.innerHTML="";
		contentContainer.appendChild(circlesContainer);
		circlesContainer.innerHTML = circlesContent;

		//вызов функции сортировки значений переданных в массив filteredMembers после вызова getAllMembers с коллбек-функцией createMembers
		
		sortBy(currentSort);

		//вызов функции построения HTML-структуры для переданных данных из массива filteredMembers
		renderMembers(members);

		//вызов функции подсчета количества пользователей в кругах, переданных в массив members

		countMembers(members);
	
		//вызов функции добавления в select наименований категорий пользователей из App.jsonobj
		App.jsonobj.getAllScopes();
		
		//инициируем и декларируем переменные для наших DOM-элементов для навешивания событий с функциями, описанными ниже
		var selectScope = document.querySelector(".selectScopes"); //select
		resetSearch = qs('.searchReset'); //кнопка для сброса фильтров

		selectScope.addEventListener("change", scopeChange);
		resetSearch.addEventListener("click", resetFilter);
	}
	
 	
	//создаем функцию для формирования HTML-структуры для наполнения нашей страницы контентом о каждом пользователе. В качестве аргумента будем передавать один из массивом с информацией о пользователях 
	function renderMembers (membersArray) {
	  	var circlesDisplay = qs('.circlesDisplay');
	  	var html = ""; //сохраняем в переменную пустой string, чтобы через вызов следующей функции можно было добавлять в innerHTML нашего div всегда новый HTML-фрагмент, содержащий свойства объекта jsonobj.circles, полученный посредством вызова функции getHTML для каждого элемента массива
	   
	  	//по массиву membersArray проходимся методом forEach и выводим при каждой итерации контент в наш div с классом circlesDisplay
	  	membersArray.forEach(function (member) {
	   		html+= member.getHTML();
	  	});
	  	circlesDisplay.innerHTML = html;
	}


	//функция для подсчета количества пользователей, в том числе отфильтрованного по select/ по определенной категории
	function countMembers (membersArray) {
		var usersNum = qs('.usersNum');
		usersNum.innerHTML = membersArray.length;
	}

	
	//прописываю функцию сортировки с аргументом, переданным в виде val
	function sortBy (val) {
		//на даннм этапе применяю только сортироку по признаку name
	  	var sorters = {
	    	"Name": function (val1, val2) {
	     		var a = val1.name;
	    		var b = val2.name;
	     		return a === b ? 0 : a < b ? -1 : 1;
	    	}
		};
	
		filteredMembers.sort(sorters[val]); //и уже отфильтрованный массив сортирую по интересующему признаку
	}
	
	//функция, которая непосредственно отвечает за фильтрацию данных массива members по значению, выбранному из select
	function scopeChange (data) {
	  	var val = this.value; // сохраняем в переменную текущее значение value по факту срабатывания события change при выборе опции из элемента select

	 	//в массив filteredMembers перезаписываем результат, полученный после применения метода filter к массиву members. Метод фильтр вернет нам значение из массива members, которое будет равно значению текущей переменной val

	  	filteredMembers = members.filter(function (member) {
	   		return member.scopeId === parseInt(val);
	 	});

	 	//после этого отфильтрованный по такому значению массив с данными будет отсроен в новый HTML-фрагмент через вызов функции renderMembers
		sortBy(currentSort);
		renderMembers(filteredMembers);
		countMembers(filteredMembers); //подсчет пользователей, но уже с учетом отфильтрованных данных, сохраненных в массив filteredMembers
	}

	//функция для сброса счетчика пользователей и фильтров при нажатии на кнопку сброса фильтра/поиска

	function resetFilter () {
		var selectScope = qs('.selectScopes');
		selectScope.innerHTML = scopes.join("");
		renderMembers(members);
		countMembers(members); //подсчет общего числа пользователей, доступных через джейсон объект
	}

})();

