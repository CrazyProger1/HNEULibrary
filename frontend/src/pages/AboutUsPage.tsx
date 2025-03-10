import about from "/assets/about.jpg";

const AboutUsPage = () => {
    return (
        <div className={"my-8"}>
            <div className={"flex justify-center font-phil text-4xl"}>
                Про нас
            </div>
            <div className={"flex mx-5 justify-center gap-20 mt-7"}>
                <div className={"flex flex-col gap-y-3 font-phil text-xl"}>
                    <div className={""}>
                        Ласкаво просимо до нашої бібліотеки – місця, де книги оживають, а кожен читач знаходить свою
                        історію. Ми віримо, що книги – це не просто джерело знань, а справжні портали в інші світи,
                        можливість мандрувати крізь епохи та відкривати нові горизонти.
                    </div>
                    <div>
                        Наша бібліотека створена для всіх, хто цінує силу слова та прагне до пізнання. Тут ви знайдете
                        широкий вибір літератури – від класики до сучасних бестселерів, від наукової фантастики до глибоких
                        філософських творів. Ми пропонуємо зручний сервіс оренди книг, що дозволяє вам читати улюблені твори
                        в комфортний для вас час і місце.
                    </div>
                    <div>
                        Ми прагнемо не просто надавати книги в оренду, а створювати спільноту однодумців, які поділяють
                        любов до читання. Тому в нашій бібліотеці регулярно проходять літературні заходи, зустрічі з
                        авторами, тематичні дискусії та клуби за інтересами.
                    </div>
                    <div>
                        Запрошуємо вас приєднатися до нашої читацької родини та разом відкривати світ, сторінка за
                        сторінкою!
                    </div>
                </div>

                <img src={about} alt={"About us"} className={"w-md h-auto"}/>
            </div>
        </div>
    );
};

export default AboutUsPage;