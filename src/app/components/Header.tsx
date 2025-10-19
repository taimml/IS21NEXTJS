export default function Header() {
    return (
        <header className="flex items-center justify-between py-3">
            <img src="/Frame.svg" alt="лого" className="h-10" />
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Я хочу найти..." 
                    className="w-110 border-none text-lg bg-gray-50 rounded-xl px-4 py-2.5 pl-6 pr-10" 
                />
                <img src="/search.svg" alt="поиск"  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"/>                
            </div>



            <button className="bg-mygreen text-white px-6 py-2.5 rounded-xl border-none text-lg
            hover:bg-emerald-900 transition-colors flex items-center">
                <img src="chat-bubble-question.svg" alt="вопрос" className="w-5 h-5 mr-2" />Задать вопрос</button>

            <div className="flex flex-col">
                <span className="font-bold text-xl">8 800 302-92-70</span>
                <span className="text-gray-400 text-base">Бесплатный звонок юристу 24/7</span>
            </div>
        </header>
    )
}