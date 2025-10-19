export default function Navigation() {
    return (
        <nav className="flex items-center justify-between py-4 text-lg">
            <div className="flex  gap-4"> 
                <button className="flex gap-2 px-4 py-2 border border-gray-200 rounded-lg
                hover:bg-gray-50 transition-colors">
                    <img src="/phone.svg" alt="телефон" className="w-6"/>
                    <span>Заказать звонок</span>
                </button>
                <button className="flex gap-2 px-4 py-2 border border-gray-200 rounded-lg
                hover:bg-gray-50 transition-colors">
                    <img src="/telegram.svg" alt="телеграм" className="w-7"/>
                    <span>Telegram</span>
                </button>
            </div>
            <div className="flex gap-8">
                <a href="#" className="hover:text-gray-600 transition-colors">Отзывы</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Вопросы</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Наши юристы</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Статьи</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Контакты</a>
            </div>
            <div className="flex gap-2">
                <img src="/user.svg" alt="юзер" className="w-7"/>
                <a href="#">Вход / Регистрация</a>
            </div>
        </nav>

        
    )
}