import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  MessageCircle, 
  Mail, 
  AlertTriangle, 
  HelpCircle, 
  Clock,
  CheckCircle,
  Send,
  BookOpen,
  Zap
} from 'lucide-react';
import scrollBg from '@/assets/scroll-bg.jpg';

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium',
  });

  const faqs = [
    {
      question: "How do I access my purchased signals?",
      answer: "Once payment is confirmed, you'll receive immediate access to all purchased channels via our dashboard. You'll also get invitation links to the respective Telegram/Discord channels.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments. All transactions are secured with 256-bit SSL encryption.",
    },
    {
      question: "How do group buys work?",
      answer: "Group buys allow multiple traders to split the cost of premium channels. Once a group reaches its target number of participants, everyone gets access at the discounted rate.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your dashboard. You'll continue to have access until the end of your current billing period.",
    },
    {
      question: "What if a signal doesn't perform as expected?",
      answer: "While we track all channel performance transparently, trading always involves risk. We recommend proper risk management and never trading more than you can afford to lose.",
    },
    {
      question: "How do I report a problematic signal?",
      answer: "Use the 'Report Signal' feature in your dashboard or contact our support team with the signal details. We investigate all reports promptly.",
    },
  ];

  const supportStats = [
    { label: "Avg Response Time", value: "< 2 hours", icon: Clock },
    { label: "Resolution Rate", value: "98.5%", icon: CheckCircle },
    { label: "Satisfaction Score", value: "4.9/5", icon: HelpCircle },
  ];

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Support form submitted:', contactForm);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-portal relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${scrollBg})` }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30">
            <HelpCircle className="h-3 w-3 mr-1" />
            Support Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 shimmer-text">
            We're Here to Help
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get assistance with your trading journey. Our mystic support guardians are ready to guide you.
          </p>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportStats.map((stat) => (
              <Card key={stat.label} className="floating-card border-mystic-purple/30 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-mystic rounded-lg flex items-center justify-center mystic-glow">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold mystic-text-glow mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="contact" className="space-y-8">
            <TabsList className="grid w-full md:w-fit grid-cols-3 bg-card border border-mystic-purple/30">
              <TabsTrigger value="contact" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>FAQ</span>
              </TabsTrigger>
              <TabsTrigger value="report" className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Report Signal</span>
              </TabsTrigger>
            </TabsList>

            {/* Contact Form */}
            <TabsContent value="contact" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="floating-card border-mystic-purple/30">
                    <CardHeader>
                      <h3 className="text-2xl font-bold mystic-text-glow">Send us a Message</h3>
                      <p className="text-muted-foreground">
                        Our support mystics will respond within 2 hours during business hours.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              value={contactForm.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple mystic-glow"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={contactForm.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple mystic-glow"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            value={contactForm.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple mystic-glow"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority</Label>
                          <select
                            id="priority"
                            value={contactForm.priority}
                            onChange={(e) => handleInputChange('priority', e.target.value)}
                            className="w-full p-3 bg-background/50 border border-mystic-purple/30 rounded-md focus:border-mystic-purple mystic-glow"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            value={contactForm.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple mystic-glow min-h-[120px]"
                            placeholder="Describe your issue or question in detail..."
                            required
                          />
                        </div>

                        <Button type="submit" className="mystic-glow bg-gradient-mystic hover:bg-mystic-purple-dark">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <Card className="floating-card border-accent/30 bg-gradient-to-b from-card to-accent/5">
                    <CardHeader>
                      <h3 className="font-bold text-lg flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2 text-accent" />
                        Live Chat
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Get instant help from our support team via live chat.
                      </p>
                      <Button className="w-full gold-glow bg-gradient-gold text-black hover:bg-gold-dark">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Start Live Chat
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="floating-card border-mystic-purple/30">
                    <CardHeader>
                      <h3 className="font-bold text-lg">Contact Info</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">support@mysticsignals.com</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Response Time</p>
                        <p className="font-medium">Within 2 hours</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Availability</p>
                        <p className="font-medium">24/7 Support</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* FAQ */}
            <TabsContent value="faq" className="space-y-8">
              <Card className="floating-card border-mystic-purple/30">
                <CardHeader>
                  <h3 className="text-2xl font-bold mystic-text-glow">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground">
                    Find answers to common questions about our mystical trading platform.
                  </p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-mystic-purple/20">
                        <AccordionTrigger className="text-left hover:text-mystic-purple">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Report Signal */}
            <TabsContent value="report" className="space-y-8">
              <Card className="floating-card border-crimson/30 bg-gradient-to-b from-card to-crimson/5">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-crimson flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Report a Signal Issue
                  </h3>
                  <p className="text-muted-foreground">
                    Help us maintain quality by reporting problematic signals or performance issues.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="channel">Channel Name</Label>
                        <Input
                          id="channel"
                          placeholder="e.g., Dragon's Eye"
                          className="bg-background/50 border-crimson/30 focus:border-crimson"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signal-date">Signal Date</Label>
                        <Input
                          id="signal-date"
                          type="date"
                          className="bg-background/50 border-crimson/30 focus:border-crimson"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signal-details">Signal Details</Label>
                      <Input
                        id="signal-details"
                        placeholder="e.g., XAU/USD BUY @ 1950"
                        className="bg-background/50 border-crimson/30 focus:border-crimson"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-type">Issue Type</Label>
                      <select
                        id="issue-type"
                        className="w-full p-3 bg-background/50 border border-crimson/30 rounded-md focus:border-crimson"
                        required
                      >
                        <option value="">Select issue type</option>
                        <option value="incorrect-info">Incorrect Information</option>
                        <option value="delayed-signal">Delayed Signal</option>
                        <option value="poor-performance">Poor Performance</option>
                        <option value="technical-issue">Technical Issue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="report-description">Description</Label>
                      <Textarea
                        id="report-description"
                        className="bg-background/50 border-crimson/30 focus:border-crimson min-h-[120px]"
                        placeholder="Please provide detailed information about the issue..."
                        required
                      />
                    </div>

                    <Button type="submit" className="crimson-glow bg-gradient-crimson hover:bg-crimson">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Submit Report
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;