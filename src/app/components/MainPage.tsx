export default function MainPage() {
    return (
    <div>    
        <div className="flex items-start justify-between gap-16 py-6">
                {/* основное */}
            <div className="flex-1">    
                <div className="mb-12">
                    <a href="#" className="text-gray-400 hover:text-gray-600">Главная / Горячая линия</a>
                </div>
                {/* текст */}
                <h1 className="text-4xl font-bold mb-3 ">Горячая линия по оказанию юридической помощи онлайн</h1>
                <p className="text-lg mb-8">Профессиональная помощь доступна круглосуточно – заявки обрабатываются 
                в любое время дня и ночи. Обращаясь к специалистам «100 Юристов», вы можете 
                рассчитывать на прозрачные, понятные условия сотрудничества</p>
                <div className="flex gap-8 mb-10">
                    <button className="bg-mygreen text-white rounded-xl px-10 py-4 text-lg font-medium hover:bg-emerald-900 transition-colors">Задать вопрос юристу</button>
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl font-bold text-mygreen border-b-2">8 800 302-92-70</span>
                        <span className="text-gray-400 text-xs font-normal">Бесплатный звонок юристу 24/7</span>
                    </div>
                </div>
                <div className="flex gap-10 text-lg">
                    <div className="flex items-center gap-2">
                        <img src="/clock.svg" alt="часы" />
                        <p>Круглосуточно</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/money-square.svg" alt="часы" />
                        <p>Бесплатно</p>
                    </div>
                    <div className="flex items-center gap-2">
                    <img src="/lock.svg" alt="часы" />
                        <p>Конфиденциально</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/flash.svg" alt="часы" />
                        <p>Быстро</p>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
                {/* фото */}
                <img src="Frame 1.svg" alt="мужик" className="w-105 h-auto" />
            </div>
        </div>



        <div className="mt-16">
            {/* юридическая помощь */}
            <h2 className="text-4xl font-bold mb-6" >Юридическая помощь</h2>
            <div className="space-y-4 leading-relaxed text-lg mb-20 w-310">
            <p>Срочно понадобились услуги профессионального юриста или адвоката? Решение есть!
            Наша горячая юридическая линия – возможность оперативно, абсолютно бесплатно получить ответ 
            на любой вопрос. Теперь не нужно записываться на офлайн-прием и тратить время на поездку и 
            очереди перед кабинетом.</p>
            <p> Профессиональная помощь доступна круглосуточно – заявки обрабатываются 
            в любое время дня и ночи. Обращаясь к специалистам «100 Юристов», вы можете рассчитывать на прозрачные, 
            понятные условия сотрудничества.</p>    
            </div>
        </div>

        <div>
            {/* как получить */}
            <h2 className="text-4xl font-bold mb-4">Как получить бесплатную юридическую консультацию?</h2>
            <p className="text-lg mb-10">Задайте вопрос юристу бесплатно круглосуточно и без регистрации</p>

            <div className="grid grid-cols-4 gap-8 mx-auto mb-20">
                <div className="text-left p-6 border border-gray-300 rounded-3xl">
                <img src="/phonegreen.svg" alt="телефон зелени" className="w-7 mb-4" />
                <p className="text-lg mb-4">По телефону горячей линии</p>
                <p className="text-xl font-bold mb-4">8 800 302-92-70</p>
                <button className="text-mygreen text-lg font-semibold">Заказать звонок</button>                    
                </div>
            
            
                <div className="text-left p-6 border border-gray-300 rounded-3xl">
                <img src="/reply.svg" alt="телефон зелени" className="w-7 mb-4" />
                <p className="text-lg mb-4">Задать свой вопрос на сайте и получить ответ онлайн</p>
                <button className="text-mygreen text-lg font-semibold">Задать вопрос</button>                    
                </div>
            
            
                <div className="text-left p-6 border border-gray-300 rounded-3xl">
                <img src="/chat-lines.svg" alt="телефон зелени" className="w-7 mb-4" />
                <p className="text-lg mb-4">Отправить запрос на обратный звонок юриста</p>
                <button className="text-mygreen text-lg font-semibold">Отправить запрос</button>                    
                </div>


                <div className="text-left p-6 border border-gray-300 rounded-3xl">
                <img src="/building.svg" alt="телефон зелени" className="w-7 mb-4" />
                <p className="text-lg mb-4">Записаться на очную консультацию в офис</p>
                <button className="text-mygreen text-lg font-semibold">Записаться</button>                    
                </div>
            </div>
            <img src="/Frame 40.svg" alt="вумен" className="w-350"/>
        </div>

        <div className="py-16">
            {/* специальности наших юристов */}
            <h2 className="text-4xl font-bold mb-12">Специальности наших юристов</h2>
            
            <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/1stroller.svg" alt="fm" className="w-8"/>
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По семейным делам</p>
                    </div>
                    <p className="text-gray-500">Юрист помогает в решении жилищных, образовательных, имущественных, 
                    страховых, земельных и иных споров и вопросов по данному направлению. 
                    В зависимости от ситуации возможно применение досудебного и судебного урегулирования. 
                    Более подробную информацию получите в процессе юридической консультации</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/2ev-plug.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По вопросам ЖКХ</p>
                    </div>
                    <p className="text-gray-500">С каждым годом у граждан России возникает все больше вопросов к структурам 
                    жилищно-коммунального хозяйства. Некоторых интересует, почему они должны каждый 
                    месяц платить за лифт, проживая при этом на первом этаже. А кого-то возмущает, 
                    что коммунальщики вычитывают из заработной платы людей долги по услугам. Вопросов 
                    много. И все они нуждаются в грамотной правовой оценке. Бесплатная помощь наших юристов 
                    – лучший выход из ситуации. Специалисты мгновенно оценят ситуацию, разъяснят непонятные 
                    моменты, подскажут, как правильно оформить претензию/иск и куда ее направить</p>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-8  mb-6">
                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/3city.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По жилищному праву</p>
                    </div>
                    <p className="text-gray-500">Квартирный вопрос из года в год остается камнем преткновения для многих граждан. 
                    Люди чуть ли не на смерть бьются за каждый причитающийся им квадратный метр. И эта 
                    борьба нередко сопровождается серьезными тратами как в виде финансов, так и нервов. 
                    Чтобы максимально защитить себя, оградить от возможных неприятных «сюрпризов» и 
                    сэкономить ресурсы, воспользуйтесь бесплатной юридической помощью. Специалисты 
                    подскажут, на что обратить внимание при покупке недвижимости, как получить разрешение 
                    на установку систем видеонаблюдения, как грамотно подойти к сделке купли-продажи и т.д.</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/4lot-of-cash.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По кредитам</p>
                    </div>
                    <p className="text-gray-500">Данное направление актуально не только для отдельных граждан, но и предпринимателей, 
                    крупных предприятий. Во время бесплатной консультации наши сотрудники подскажут, как 
                    правильно вести переговоры с кредиторами, как обезопасить имущество от возможного ареста. 
                    А также ответят на многие другие вопросы, связанные с кредитованием.</p>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/5pin-alt.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По земельным делам</p>
                    </div>
                    <p className="text-gray-500">На сегодняшний день земля – ценный актив, использовать который можно по-разному. 
                    Например, на ней можно добывать полезные ископаемые (при наличии таковых в недрах), 
                    производить высадку культурных растений, сдавать в аренду и т.д. В процессе 
                    эксплуатации земельных участков возникают разнообразные ситуации, большинство которых 
                    невозможно разрешить без грамотной юридической консультации. Получить ее можно круглосуточно 
                    и бесплатно через наш сервис.</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/6large-suitcase.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По трудовым вопросам</p>
                    </div>
                    <p className="text-gray-500">Права трудящихся, несмотря на наличие соответствующего кодекса, постоянно нарушаются. 
                    Многие сотрудники сталкиваются с незаконными увольнениями, беспричинно лишаются оплаты 
                    отпускных, несут чрезмерную материальную ответственность и пр. Возможны и обратные ситуации, 
                    когда сами предприятия страдают от произвола персонала. Своевременное привлечение к 
                    возникшей проблеме адвоката позволяет с минимальными потерями урегулировать конфликт. 
                    Если вы столкнулись с подобной ситуацией, воспользуйтесь бесплатной юридической консультацией 
                    по телефону от «100 Юристов»</p>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/7bank.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По приставам</p>
                    </div>
                    <p className="text-gray-500">Визит пристава – это практически всегда негативные эмоции. Особенно 
                    неприятно общение, если человек не знает, как правильно себя вести с сотрудниками 
                    службы. В этом случае без консультации не обойтись. Специалисты во время бесплатного 
                    звонка раскрывают нюансы взаимодействия пристава с должником. Например, юристы 
                    расскажут, что сотрудники имеют права беспокоить человека с 6 утра до 10 вечера и т.д.</p>
                </div>

                <div className="p-6 border border-gray-200 rounded-3xl ">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/8group.svg" alt="" className="w-8" />
                        <p className="text-lg font-semibold border-b-1 border-mygreen">По гражданским делам</p>
                    </div>
                    <p className="text-gray-500">Юрист помогает в решении жилищных, образовательных, имущественных, 
                    страховых, земельных и иных споров и вопросов по данному направлению. В 
                    зависимости от ситуации возможно применение досудебного и судебного урегулирования.
                    Более подробную информацию получите в процессе юридической консультации</p>
                </div>
            </div>

            <img src="/Frame 43.svg" alt="ph" className="w-400 mt-25"/>
        </div>

        <div>
            {/* блок для сео текста */}            
        </div>

        <div>
            {/* отзывы наших клиентов */}
        </div>

        <div>
            {/* юристы портала */}
        </div>

        <div>
            {/* темы справочных материалов */}
        </div>



    </div>    
        




        
    )
}