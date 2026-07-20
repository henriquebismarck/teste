"use client";

import { useState } from "react";
import { Book, Library, Users, Globe, BarChart3, BookOpen, Target, Smartphone, Clock, CheckCircle, Star, LibraryIcon, FileText, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { showSuccess, showError } from "@/utils/toast";

const Index = () => {
  const goToPurchase = () => {
    window.location.href = "https://pay.kiwify.com.br/hM8XPfb";
  };

  const handleGetContent = () => {
    // Scroll to content section
    document.getElementById('conteudo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: Book, text: "Compreenda a origem do conservadorismo" },
    { icon: LibraryIcon, text: "Conheça a evolução histórica da direita" },
    { icon: Globe, text: "Entenda diferentes experiências internacionais" },
    { icon: BookOpen, text: "Aprenda conceitos fundamentais" },
    { icon: BarChart3, text: "Desenvolva pensamento crítico" },
    { icon: FileText, text: "Conteúdo organizado em linguagem simples" },
    { icon: Target, text: "Leitura prática" },
    { icon: Smartphone, text: "Acesso imediato" },
  ];

  const whatYouWillLearn = [
    "Origem histórica do conservadorismo",
    "Principais pensadores",
    "Evolução da direita ao longo da história",
    "Liberalismo e conservadorismo",
    "Democracia representativa",
    "Economia de mercado",
    "Instituições políticas",
    "História política do Brasil",
    "História política mundial",
    "Correntes contemporâneas",
  ];

  const chapters = [
    {
      title: "As origens do pensamento conservador",
      description: "Explore as raízes filosóficas e históricas que deu origem ao pensamento conservador, desde as tradições medievais até as primeiras obras modernas."
    },
    {
      title: "Grandes filósofos e intelectuais",
      description: "Conheça os pensadores fundamentais que moldaram o conservadorismo, de Edmund Burke a filósofos contemporâneos."
    },
    {
      title: "O desenvolvimento do conservadorismo moderno",
      description: "Acompanhe a evolução das ideias conservadoras no século XIX e XX, com foco nas transformações políticas e sociais."
    },
    {
      title: "A direita política em diferentes países",
      description: "Estudo comparativo da trajetória do conservadorismo em diferentes contextos históricos e culturais."
    },
    {
      title: "História política do Brasil",
      description: "Análise específica da evolução das ideias conservadoras no Brasil, do período colonial até os dias atuais."
    },
    {
      title: "Desafios contemporâneos",
      description: "Reflexões sobre como o pensamento conservador se adapta às realidades do mundo moderno e globalizado."
    },
    {
      title: "Reflexões para o futuro",
      description: "Considerações sobre o papel do conservadorismo na política contemporânea e suas possíveis trajetórias."
    },
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Estudante de História",
      rating: 5,
      comment: "O conteúdo é extremamente claro e bem estruturado. Aprendi muito sobre a história do pensamento conservador de forma acessível."
    },
    {
      name: "Ana Sofia",
      role: "Professora de Ciência Política",
      rating: 5,
      comment: "Excelente material didático. A organização dos capítulos facilita o estudo e a compreensão dos conceitos."
    },
    {
      name: "Roberto Lima",
      role: "Pesquisador",
      rating: 5,
      comment: "Uma obra que equilibra rigor acadêmico com linguagem acessível. Muito útil para profissionais da área."
    },
    {
      name: "Mariana Costa",
      role: "Universitária",
      rating: 5,
      comment: "Ótimo para quem quer entender o contexto histórico das ideias políticas sem se perder em jargões excessivos."
    },
  ];

  const faqs = [
    {
      question: "O eBook é digital?",
      answer: "Sim, o eBook é entregue no formato digital PDF, que pode ser lido em qualquer dispositivo com ou sem internet após o download."
    },
    {
      question: "Como recebo?",
      answer: "Após a compra, você receberá um e-mail com o link de download do eBook imediatamente."
    },
    {
      question: "Posso ler no celular?",
      answer: "Sim! O formato PDF é compatível com smartphones, tablets e computadores. Você pode baixar o arquivo e ler offline."
    },
    {
      question: "Preciso de internet para ler?",
      answer: "Não, após baixar o arquivo você pode lê-lo offline. A internet é necessária apenas para o download inicial."
    },
    {
      question: "Há atualizações futuras?",
      answer: "Sim, caso haja atualizações ou novas edições, você receberá notificações por e-mail com os novos conteúdos."
    },
    {
      question: "Quanto tempo leva para receber?",
      answer: "O acesso ao eBook é imediato após a confirmação da compra. O e-mail com o link de download chega em poucos minutos."
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">A Direita</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#conteudo" className="hover:text-primary transition-colors">Conteúdo</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544941149-6e6b4e25c6c9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Book className="h-4 w-4 mr-2" /> eBook Digital
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Entenda a História e os Princípios</span> do Conservadorismo de Forma Clara e Organizada
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Descubra como surgiram as principais ideias do pensamento conservador, sua evolução histórica e sua influência em diferentes países por meio de um conteúdo acessível e bem estruturado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="px-8 py-4 text-base font-semibold" onClick={goToPurchase}>
                QUERO MEU EBOOK AGORA
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold" onClick={handleGetContent}>
                VER O CONTEÚDO
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Download Imediato</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Leitura em Qualquer Dispositivo</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Conteúdo Atualizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Este Ebook */}
      <section className="py-20 bg-background" id="sobre">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Para Quem É Este Ebook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma ferramenta essencial para compreensão do pensamento conservador e da história política
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Estudantes</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Para complementar estudos em história e ciência política</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Library className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Universitários</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Material de apoio para pesquisas e trabalhos acadêmicos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Book className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Professores</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Didática complementar para disciplinas de humanidades</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Pesquisadores</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Referência bibliográfica atualizada e fundamentada</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted" id="beneficios">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefícios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Descubra o que você ganha ao estudar este material</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-3">
                  <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-20 bg-background" id="conteudo">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Conceitos fundamentais e evolução histórica do pensamento conservador</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouWillLearn.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sumário do Ebook */}
      <section className="py-20 bg-muted" id="sumario">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sumário do Ebook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Estrutura completa do conteúdo</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary font-bold">Capítulo {index + 1}</span>
                      <span>{chapter.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{chapter.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background" id="diferenciais">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O que torna este material único</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Linguagem clara</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Acessível e sem jargões excessivos</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Conteúdo organizado</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Estrutura lógica e progressiva</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Base histórica</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Fundamentado em fontes primárias</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Referências bibliográficas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Indicado para aprofundamento</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Leitura objetiva</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Abordagem neutra e crítica</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Material digital</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Acesso imediato após compra</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background" id="depoimentos">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O que nossos leitores dizem sobre o conteúdo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-muted" id="como-funciona">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O processo simples de aquisição do eBook</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Faça sua compra", desc: "Clique no botão e complete a aquisição" },
                  { step: "2", title: "Receba acesso imediato", desc: "Link de download enviado por e-mail" },
                  { step: "3", title: "Baixe o eBook", desc: "Formato PDF pronto para download" },
                  { step: "4", title: "Leia no seu ritmo", desc: "Acesse em qualquer dispositivo" },
                  { step: "5", title: "Aplique o conhecimento", desc: "Use o material para seus estudos" },
                ].map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-background" id="bonus">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bônus Exclusivos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Conteúdo adicional para sua experiência completa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Glossário de termos políticos</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Definições claras de conceitos fundamentais</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Linha do tempo histórica</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Cronologia dos principais eventos</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Mapa das correntes políticas</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Visualização das diferentes vertentes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground" id="oferta">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Oferta Especial</h2>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>eBook completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Download imediato</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Formato PDF</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Compatível com celular, tablet e computador</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Atualizações (caso disponíveis)</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="px-12 py-4 text-xl font-bold" onClick={goToPurchase}>
                COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background" id="faq">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tudo o que você precisa saber</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-muted">
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background" id="cta-final">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Comece Hoje Mesmo a Expandir Seus Conhecimentos em História Política</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tenha acesso a um material organizado, com linguagem acessível e foco em contexto histórico, filosofia política e pensamento conservador.
          </p>
          <Button size="lg" className="px-8 py-4 text-base font-semibold" onClick={goToPurchase}>
            QUERO LER O EBOOK
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">A Direita</h3>
              <p className="text-sm text-muted-foreground">
                Um guia essencial para compreender a história e os princípios do pensamento conservador.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Produtos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">eBook</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Bônus</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Aviso Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            <p>
              © 2024 A Direita. Todos os direitos reservados.
            </p>
            <p className="mt-2">
              Esta página participa de programas de afiliados. Caso você realize uma compra por meio dos links apresentados, poderemos receber uma comissão, sem custo adicional para você.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;