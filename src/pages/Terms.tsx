import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, Shield } from 'lucide-react';
import scrollBg from '@/assets/scroll-bg.jpg';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-portal relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${scrollBg})` }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30">
            <FileText className="h-3 w-3 mr-1" />
            Legal Documents
          </Badge>
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 shimmer-text">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The sacred scrolls governing your journey through the mystical realm of trading signals.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Last updated: December 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>Version 2.1</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="floating-card border-mystic-purple/30 bg-gradient-to-b from-card/90 to-card/50">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-5"
              style={{ backgroundImage: `url(${scrollBg})` }}
            />
            <CardHeader className="relative z-10">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-mystic rounded-full flex items-center justify-center mystic-glow">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-cinzel font-bold mystic-text-glow">
                  Mystical Trading Agreement
                </h2>
                <p className="text-muted-foreground">
                  By entering our sacred realm, you agree to these terms and conditions.
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-8 font-serif leading-relaxed">
              {/* Section 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  1. Acceptance of Terms
                </h3>
                <p className="text-foreground/90">
                  By accessing and using Mystic Signals (the "Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, you may not use the Platform.
                </p>
                <p className="text-foreground/90">
                  These terms constitute a legally binding agreement between you and Mystic Signals regarding your use of our trading signal services, group buying features, and related functionalities.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  2. Description of Services
                </h3>
                <p className="text-foreground/90">
                  Mystic Signals provides access to trading signals, market analysis, and educational content related to forex, cryptocurrency, and other financial instruments. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Individual channel subscriptions for trading signals</li>
                  <li>Custom bundle creation and management</li>
                  <li>Group buying opportunities for discounted access</li>
                  <li>Dashboard and portfolio tracking tools</li>
                  <li>Community features and support services</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  3. Trading Risks and Disclaimers
                </h3>
                <div className="bg-crimson/10 border border-crimson/30 rounded-lg p-4">
                  <p className="text-crimson font-semibold mb-2">⚠️ Important Risk Warning</p>
                  <p className="text-foreground/90">
                    Trading forex, cryptocurrencies, and other financial instruments involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources.
                  </p>
                </div>
                <p className="text-foreground/90">
                  Mystic Signals does not guarantee profits or success in trading. All signals and analysis provided are for educational and informational purposes only and should not be considered as financial advice. You are solely responsible for your trading decisions and any resulting gains or losses.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  4. User Responsibilities
                </h3>
                <p className="text-foreground/90">
                  As a user of our Platform, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the Platform in compliance with all applicable laws and regulations</li>
                  <li>Not share, redistribute, or resell access to premium signals</li>
                  <li>Respect the intellectual property rights of signal providers</li>
                  <li>Report any suspicious or fraudulent activity</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  5. Payment and Subscription Terms
                </h3>
                <p className="text-foreground/90">
                  Subscription fees are charged monthly unless otherwise specified. You authorize us to charge your payment method for all fees related to your account. Refunds are subject to our refund policy and are generally not provided except in cases of service unavailability.
                </p>
                <p className="text-foreground/90">
                  Group buy payments are held in escrow until the group reaches its target size. If a group buy fails to complete, refunds will be processed within 5-7 business days.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  6. Group Buy Terms
                </h3>
                <p className="text-foreground/90">
                  Group buying features allow multiple users to share the cost of premium signal access. By participating in group buys, you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Access is granted only upon successful completion of the group</li>
                  <li>Group organizers are independent users, not Mystic Signals employees</li>
                  <li>We facilitate but do not guarantee the completion of any group buy</li>
                  <li>Dispute resolution follows our standard support procedures</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  7. Intellectual Property
                </h3>
                <p className="text-foreground/90">
                  All content, signals, analysis, and materials provided through the Platform are protected by intellectual property laws. Users are granted a limited, non-transferable license to access and use these materials for personal trading purposes only.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  8. Limitation of Liability
                </h3>
                <p className="text-foreground/90">
                  Mystic Signals shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to trading losses, loss of profits, or loss of data, arising from your use of the Platform.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  9. Termination
                </h3>
                <p className="text-foreground/90">
                  We reserve the right to terminate or suspend your account and access to the Platform at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  10. Changes to Terms
                </h3>
                <p className="text-foreground/90">
                  We reserve the right to modify these terms at any time. Material changes will be communicated to users via email or platform notifications. Continued use of the Platform after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-accent">Contact Information</h3>
                <p className="text-foreground/90">
                  For questions regarding these terms or our services, please contact us at:
                </p>
                <div className="space-y-1 text-foreground/90">
                  <p><strong>Email:</strong> legal@mysticsignals.com</p>
                  <p><strong>Support:</strong> support@mysticsignals.com</p>
                  <p><strong>Address:</strong> Digital Realm, Mystic Trading Sanctum</p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="text-center pt-8 border-t border-mystic-purple/20">
                <p className="text-muted-foreground text-sm">
                  These terms are effective as of December 1, 2024
                </p>
                <p className="text-muted-foreground text-sm">
                  By using Mystic Signals, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;