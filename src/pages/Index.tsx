import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Cross" className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">MedCommunity</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#forum" className="text-gray-600 hover:text-blue-600 transition-colors">Форум</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">Курсы</a>
            <a href="#certification" className="text-gray-600 hover:text-blue-600 transition-colors">Сертификация</a>
            <a href="#monetization" className="text-gray-600 hover:text-blue-600 transition-colors">Монетизация</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Вход</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Профессиональное сообщество
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Платформа для врачей и <br />
            <span className="text-blue-600">нутрициологов</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональное развитие, обмен опытом и дополнительный доход 
            в одной современной экосистеме
          </p>
          <div className="flex justify-center items-center space-x-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              Присоединиться
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Узнать больше
            </Button>
          </div>
          <img 
            src="/img/7fd360c8-1673-4ef1-b9af-33ed3f228165.jpg" 
            alt="Medical Professional Platform" 
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
              <div className="text-gray-600">Специалистов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Курсов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Удовлетворённость</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">₽2.5М</div>
              <div className="text-gray-600">Заработано</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Всё необходимое для профессионального роста и развития карьеры
            </p>
          </div>

          <Tabs defaultValue="forum" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="forum">Форум</TabsTrigger>
              <TabsTrigger value="courses">Курсы</TabsTrigger>
              <TabsTrigger value="certification">Сертификация</TabsTrigger>
              <TabsTrigger value="monetization">Монетизация</TabsTrigger>
            </TabsList>

            <TabsContent value="forum" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Профессиональный форум
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Обменивайтесь опытом, обсуждайте сложные случаи и находите коллег 
                    для совместной работы
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="MessageSquare" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Тематические дискуссии</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Профессиональные группы</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Search" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Поиск экспертов</span>
                    </div>
                  </div>
                </div>
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarFallback>ДИ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-sm">Доктор Иванов</span>
                          <Badge variant="secondary" className="text-xs">Кардиолог</Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Коллеги, поделитесь опытом лечения аритмии у пожилых пациентов...
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>2 часа назад</span>
                          <span>15 ответов</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Нутрициология 2024</CardTitle>
                    <CardDescription>Современные подходы к питанию</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>65% завершено</span>
                        <span>12/18 модулей</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">40 часов</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Обучающие курсы
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Актуальные знания от ведущих экспертов с получением 
                    официальных сертификатов
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="GraduationCap" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Сертифицированные программы</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Video" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Интерактивные лекции</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Trophy" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Практические задания</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="certification" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Система сертификации
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Подтвердите свою квалификацию и получите признание 
                    в профессиональном сообществе
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Официальные сертификаты</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Аккредитация специалистов</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Star" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Система рейтингов</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <Icon name="Award" className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Эксперт</h4>
                    <p className="text-sm text-gray-600">Высшая категория</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Icon name="Star" className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Специалист</h4>
                    <p className="text-sm text-gray-600">Подтверждённый</p>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="monetization" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Консультации</h4>
                        <p className="text-sm text-gray-600">Онлайн-приёмы</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₽85,000</div>
                        <div className="text-xs text-gray-500">в месяц</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Курсы</h4>
                        <p className="text-sm text-gray-600">Авторские программы</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₽45,000</div>
                        <div className="text-xs text-gray-500">в месяц</div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Инструменты заработка
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Монетизируйте свои знания и опыт с помощью 
                    встроенных инструментов платформы
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="DollarSign" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Платные консультации</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="BookOpen" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Продажа курсов</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Группы по подписке</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ведущие специалисты
            </h2>
            <p className="text-xl text-gray-600">
              Эксперты с многолетним опытом и высокими рейтингами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Доктор Петрова", specialty: "Кардиолог", rating: 4.9, consultations: 1250 },
              { name: "Доктор Сидоров", specialty: "Нутрициолог", rating: 4.8, consultations: 890 },
              { name: "Доктор Морозова", specialty: "Эндокринолог", rating: 5.0, consultations: 670 }
            ].map((doctor, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg">
                    {doctor.name.split(' ')[1].slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 mb-3">{doctor.specialty}</p>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{doctor.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{doctor.consultations} консультаций</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Готовы присоединиться к сообществу?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Начните развивать карьеру и зарабатывать на своих знаниях уже сегодня
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Button size="lg" variant="secondary" className="px-8">
              Создать аккаунт
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cross" className="h-6 w-6" />
                <span className="text-xl font-bold">MedCommunity</span>
              </div>
              <p className="text-gray-400">
                Профессиональная платформа для врачей и нутрициологов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <div className="space-y-2 text-gray-400">
                <div>Форум</div>
                <div>Курсы</div>
                <div>Сертификация</div>
                <div>Монетизация</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-gray-400">
                <div>Помощь</div>
                <div>Документация</div>
                <div>Контакты</div>
                <div>FAQ</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>hello@medcommunity.ru</div>
                <div>+7 (495) 123-45-67</div>
                <div>Москва, Россия</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedCommunity. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;