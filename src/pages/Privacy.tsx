import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import scrollBg from '@/assets/scroll-bg.jpg';

const Privacy = () => {
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
            <Shield className="h-3 w-3 mr-1" />
            Privacy & Security
          </Badge>
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 shimmer-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your privacy is sacred. Learn how we protect and handle your mystical trading data.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Lock className="h-4 w-4" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
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
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-cinzel font-bold mystic-text-glow">
                  Sacred Privacy Covenant
                </h2>
                <p className="text-muted-foreground">
                  We guard your personal information with the same dedication we bring to trading signals.
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-8 font-serif leading-relaxed">
              {/* Section 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  1. Information We Collect
                </h3>
                <p className="text-foreground/90">
                  To provide our mystical trading services, we collect the following types of information:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-mystic-purple/20">
                    <h4 className="font-semibold text-mystic-purple mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Payment and billing information (processed securely via third-party providers)</li>
                      <li>Account preferences and subscription choices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-mystic-purple/20">
                    <h4 className="font-semibold text-mystic-purple mb-2">Usage Information</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 ml-4">
                      <li>Platform usage patterns and feature interactions</li>
                      <li>Trading signal engagement and performance tracking</li>
                      <li>Device information and IP addresses</li>
                      <li>Browser type and operating system details</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2 flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  2. How We Use Your Information
                </h3>
                <p className="text-foreground/90">
                  Your information powers our mystical services in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li><strong>Service Delivery:</strong> Provide access to trading signals and platform features</li>
                  <li><strong>Account Management:</strong> Process subscriptions, payments, and user preferences</li>
                  <li><strong>Personalization:</strong> Customize your experience and recommend relevant signals</li>
                  <li><strong>Communication:</strong> Send important updates, notifications, and support responses</li>
                  <li><strong>Analytics:</strong> Improve our services through usage analysis and performance monitoring</li>
                  <li><strong>Security:</strong> Protect against fraud, abuse, and unauthorized access</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  3. Information Sharing and Disclosure
                </h3>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">🛡️ Our Commitment</p>
                  <p className="text-foreground/90">
                    We never sell, rent, or trade your personal information to third parties for marketing purposes. Your data remains under our mystical protection.
                  </p>
                </div>
                <p className="text-foreground/90">
                  We may share information only in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li><strong>Service Providers:</strong> Trusted partners who help us operate the platform (payment processors, hosting services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly authorize us to share specific information</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  4. Data Security
                </h3>
                <p className="text-foreground/90">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-mystic-purple/20">
                    <h4 className="font-semibold text-mystic-purple mb-2">Technical Safeguards</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 text-sm">
                      <li>256-bit SSL encryption for data transmission</li>
                      <li>Encrypted data storage and backups</li>
                      <li>Regular security audits and monitoring</li>
                      <li>Multi-factor authentication support</li>
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-mystic-purple/20">
                    <h4 className="font-semibold text-mystic-purple mb-2">Administrative Controls</h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/90 text-sm">
                      <li>Limited access to personal data</li>
                      <li>Employee training on data protection</li>
                      <li>Incident response procedures</li>
                      <li>Regular security policy updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  5. Your Privacy Rights
                </h3>
                <p className="text-foreground/90">
                  You have the following rights regarding your personal information:
                </p>
                <div className="space-y-3">
                  {[
                    { title: "Access", desc: "Request a copy of the personal information we hold about you" },
                    { title: "Correction", desc: "Update or correct inaccurate personal information" },
                    { title: "Deletion", desc: "Request deletion of your personal information (subject to legal requirements)" },
                    { title: "Portability", desc: "Receive your data in a portable format" },
                    { title: "Opt-out", desc: "Unsubscribe from marketing communications" },
                    { title: "Restriction", desc: "Limit how we process your information" },
                  ].map((right, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-background/50 rounded-lg border border-mystic-purple/10">
                      <div className="w-2 h-2 bg-mystic-purple rounded-full mt-2"></div>
                      <div>
                        <span className="font-semibold text-mystic-purple">{right.title}:</span>
                        <span className="text-foreground/90 ml-2">{right.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  6. Cookies and Tracking
                </h3>
                <p className="text-foreground/90">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how you use our services</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics:</strong> Provide insights into platform usage and performance</li>
                </ul>
                <p className="text-foreground/90">
                  You can control cookie preferences through your browser settings or our cookie preferences center.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  7. Data Retention
                </h3>
                <p className="text-foreground/90">
                  We retain your information only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Account information: Retained while your account is active</li>
                  <li>Transaction records: Kept for 7 years for financial compliance</li>
                  <li>Usage data: Typically deleted after 2 years</li>
                  <li>Marketing data: Removed upon unsubscribe request</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  8. International Data Transfers
                </h3>
                <p className="text-foreground/90">
                  Our services may involve international data transfers. We ensure adequate protection through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Standard contractual clauses approved by data protection authorities</li>
                  <li>Adequacy decisions for transfers to approved countries</li>
                  <li>Additional safeguards where required by law</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-mystic-purple border-b border-mystic-purple/30 pb-2">
                  9. Changes to This Policy
                </h3>
                <p className="text-foreground/90">
                  We may update this privacy policy to reflect changes in our practices or legal requirements. Material changes will be communicated through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                  <li>Email notifications to registered users</li>
                  <li>Prominent notices on our platform</li>
                  <li>Updated policy posting with revision date</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold text-accent flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Privacy Contact Information
                </h3>
                <p className="text-foreground/90">
                  For privacy-related questions or to exercise your rights, contact us at:
                </p>
                <div className="space-y-1 text-foreground/90">
                  <p><strong>Privacy Email:</strong> privacy@mysticsignals.com</p>
                  <p><strong>Data Protection Officer:</strong> dpo@mysticsignals.com</p>
                  <p><strong>Support:</strong> support@mysticsignals.com</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  We will respond to all privacy requests within 30 days or as required by applicable law.
                </p>
              </div>

              {/* Effective Date */}
              <div className="text-center pt-8 border-t border-mystic-purple/20">
                <p className="text-muted-foreground text-sm">
                  This privacy policy is effective as of December 1, 2024
                </p>
                <p className="text-muted-foreground text-sm">
                  By using Mystic Signals, you acknowledge that you have read and understood this privacy policy.
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

export default Privacy;