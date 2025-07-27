import { Link } from 'react-router-dom';
import { Zap, Mail, MessageCircle, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-mystic-purple/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="mystic-glow rounded-lg p-2 bg-gradient-mystic">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-cinzel text-lg font-bold mystic-text-glow">
                Mystic Signals
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unlock the forbidden signals and master the art of Forex trading with our mystical platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Channels', path: '/channels' },
                { name: 'Group Buy', path: '/group-buy' },
                { name: 'Dashboard', path: '/dashboard' },
                { name: 'Support', path: '/support' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-mystic-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-mystic-purple transition-colors text-sm flex items-center space-x-1"
                >
                  <FileText className="h-3 w-3" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-mystic-purple transition-colors text-sm flex items-center space-x-1"
                >
                  <Shield className="h-3 w-3" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get mystical insights and trading updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
              />
              <Button size="sm" className="w-full mystic-glow bg-gradient-mystic">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-mystic-purple/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Mystic Signals. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};