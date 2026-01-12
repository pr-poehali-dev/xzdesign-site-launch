import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/Рисунок1.png" 
              alt="Urban Play Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'portfolio', 'services', 'team', 'process', 'blog', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-all hover:text-primary ${
                      activeSection === section ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    {section === 'home' && 'Главная'}
                    {section === 'about' && 'О нас'}
                    {section === 'portfolio' && 'Портфолио'}
                    {section === 'services' && 'Услуги'}
                    {section === 'team' && 'Команда'}
                    {section === 'process' && 'Процесс'}
                    {section === 'blog' && 'Блог'}
                    {section === 'contact' && 'Контакты'}
                  </button>
                )
              )}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="pt-32 pb-20 px-6 min-h-screen flex items-center animate-fade-in"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Креативные решения
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Дизайн, который{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  вдохновляет
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы создаем яркие графические решения для вашего бизнеса: от баннеров до полиграфии.
                Современный подход и актуальные тренды в каждом проекте.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform"
                >
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  Наше портфолио
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/a8412a73-a2c8-4334-9263-ba6d950e170f/files/041ebcc1-e188-42ed-ac8b-a9e0e6366867.jpg"
                alt="Design workspace"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">О нас</Badge>
            <h2 className="text-5xl font-bold mb-4">Кто мы такие</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда креативных профессионалов, создающих визуальные решения мирового уровня
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/a8412a73-a2c8-4334-9263-ba6d950e170f/files/a9842539-edcc-4fa1-93f6-fb3639e78118.jpg"
              alt="Our team"
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Создавать дизайн, который не просто красив, но и эффективен. Мы помогаем брендам
                    выделяться и достигать своих целей через визуальную коммуникацию.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Наш подход</h3>
                  <p className="text-muted-foreground">
                    Мы сочетаем креативность с аналитикой, следим за трендами и создаем уникальные
                    решения для каждого клиента. Ваш успех — наша цель.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Наши ценности</h3>
                  <p className="text-muted-foreground">
                    Качество, инновации и партнерство. Мы гордимся каждым проектом и строим долгосрочные
                    отношения с клиентами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Портфолио</Badge>
            <h2 className="text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проекты, которыми мы гордимся
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Брендинг для стартапа', category: 'Айдентика', color: 'primary' },
              { title: 'Рекламная кампания', category: 'Баннеры', color: 'secondary' },
              { title: 'Корпоративная полиграфия', category: 'Полиграфия', color: 'primary' },
              { title: 'Иллюстрации для блога', category: 'Иллюстрации', color: 'secondary' },
              { title: 'Упаковка продукта', category: 'Дизайн', color: 'primary' },
              { title: 'SMM-графика', category: 'Соцсети', color: 'secondary' },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src="https://cdn.poehali.dev/projects/a8412a73-a2c8-4334-9263-ba6d950e170f/files/d2117d79-7bc9-4d39-95f0-da1601e07e62.jpg"
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <Badge
                      className={`mb-2 bg-${project.color}/10 text-${project.color} border-${project.color}/20`}
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      Креативное решение для современного бренда
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Услуги</Badge>
            <h2 className="text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр графических дизайн-услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Palette',
                title: 'Баннеры и реклама',
                description: 'Яркие баннеры для соцсетей, контекстной рекламы и наружной рекламы',
              },
              {
                icon: 'Pen',
                title: 'Иллюстрации',
                description: 'Уникальные иллюстрации для сайтов, блогов и маркетинговых материалов',
              },
              {
                icon: 'FileText',
                title: 'Полиграфия',
                description: 'Дизайн визиток, буклетов, каталогов и корпоративной документации',
              },
              {
                icon: 'Layout',
                title: 'Брендинг',
                description: 'Разработка фирменного стиля и айдентики с нуля',
              },
              {
                icon: 'Image',
                title: 'SMM-графика',
                description: 'Оформление соцсетей и контент для постов',
              },
              {
                icon: 'Sparkles',
                title: 'Презентации',
                description: 'Дизайн продающих и корпоративных презентаций',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Команда</Badge>
            <h2 className="text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Креативные профессионалы, которые создают магию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Смирнова', role: 'Арт-директор', experience: '8 лет опыта' },
              { name: 'Максим Петров', role: 'Графический дизайнер', experience: '6 лет опыта' },
              { name: 'Елена Васильева', role: 'Иллюстратор', experience: '5 лет опыта' },
            ].map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src="https://cdn.poehali.dev/projects/a8412a73-a2c8-4334-9263-ba6d950e170f/files/a9842539-edcc-4fa1-93f6-fb3639e78118.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Процесс работы
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный процесс от идеи до результата
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Брифинг',
                description: 'Изучаем ваши цели и пожелания',
                icon: 'MessageSquare',
              },
              {
                step: '02',
                title: 'Концепция',
                description: 'Разрабатываем креативные идеи',
                icon: 'Lightbulb',
              },
              {
                step: '03',
                title: 'Дизайн',
                description: 'Создаем финальный продукт',
                icon: 'Palette',
              },
              {
                step: '04',
                title: 'Результат',
                description: 'Передаем готовые файлы',
                icon: 'CheckCircle',
              },
            ].map((step, index) => (
              <div key={index} className="text-center group hover:-translate-y-2 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={step.icon} className="text-white" size={32} />
                </div>
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Блог</Badge>
            <h2 className="text-5xl font-bold mb-4">Наш блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о дизайне и трендах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Тренды графического дизайна 2024',
                date: '15 января 2024',
                category: 'Тренды',
              },
              {
                title: 'Как выбрать цветовую палитру для бренда',
                date: '10 января 2024',
                category: 'Брендинг',
              },
              {
                title: '10 правил эффективного баннера',
                date: '5 января 2024',
                category: 'Реклама',
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src="https://cdn.poehali.dev/projects/a8412a73-a2c8-4334-9263-ba6d950e170f/files/041ebcc1-e188-42ed-ac8b-a9e0e6366867.jpg"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Читать далее →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Контакты
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@xzdesign.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Расскажите о вашем проекте"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/Рисунок1.png" 
                alt="Urban Play Logo" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80">Креативный графический дизайн для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Баннеры</li>
                <li>Иллюстрации</li>
                <li>Полиграфия</li>
                <li>Брендинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Команда</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 Urban Play. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}