import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const PHONE = '+233 53 554 8408';
const WHATSAPP = '+233 53 554 8408';

// Minimal FAQ matcher: keyword → precise answer
const useFaq = () => {
  return useMemo(
    () => [
      {
        q: ['services', 'what services', 'offer'],
        a: 'We offer residential, commercial, event, post‑construction, fumigation and more on the Services page.',
        link: '/services'
      },
      {
        q: ['price', 'pricing', 'cost', 'charge', 'charges', 'rate'],
        a: 'Pricing depends on space and scope. Tell us your space and frequency and we’ll quote quickly.'
      },
      {
        q: ['book', 'booking', 'schedule', 'appoint', 'request'],
        a: 'You can book from the Contact page or call/WhatsApp us. We respond fast.',
        link: '/contact'
      },
      {
        q: ['contact', 'phone', 'call'],
        a: `Call us on ${PHONE}.`
      },
      {
        q: ['whatsapp', 'chat'],
        a: `Chat with us on WhatsApp ${WHATSAPP}.`
      },
      {
        q: ['portfolio', 'video', 'before', 'after'],
        a: 'See our before & after videos on the Portfolio page.',
        link: '/portfolio'
      },
      {
        q: ['location', 'where', 'address'],
        a: 'Weija Gbawe, Demargo Contractors, HM8Q+XJR, Gbawe, Accra – Ghana.'
      },
      {
        q: ['hours', 'time', 'open'],
        a: 'We schedule 7 days a week. Earliest 7am, latest 7pm, by appointment.'
      },
      {
        q: ['eco', 'products', 'safe', 'chemical'],
        a: 'We use safe, effective and eco‑friendly products on request.'
      },
    ],
    []
  );
};

const normalize = (s) => s.toLowerCase();

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I’m here to help. Ask about services, pricing, booking, or contacts.' }
  ]);
  const faq = useFaq();
  const endRef = useRef(null);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const answer = (question) => {
    const qn = normalize(question);
    const hit =
      faq.find((f) => f.q.some((kw) => qn.includes(kw))) ||
      null;
    if (!hit) {
      return 'Thanks! I didn’t catch that. Ask about services, pricing, booking, or contacts.';
    }
    if (hit.link) {
      return `${hit.a}`;
    }
    return hit.a;
  };

  const onSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    const reply = answer(text);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 150);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          aria-label="Open chat"
          className="fixed z-50 bottom-6 right-6 rounded-full bg-primary-600 text-white p-4 shadow-lg hover:bg-primary-700 transition-colors"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed z-50 bottom-6 right-6 w-[90vw] max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          role="dialog"
          aria-label="Website Assistant Chat"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
            <div className="font-semibold">AMB 360 Assistant</div>
            <button
              type="button"
              aria-label="Close chat"
              className="text-white/90 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'bot' ? 'text-sm bg-gray-100 rounded-xl px-3 py-2 w-fit max-w-[90%]' : 'text-sm bg-primary-50 text-gray-900 rounded-xl px-3 py-2 w-fit ml-auto max-w-[90%]'}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={onSend} className="p-3 border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something…"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-300"
              aria-label="Chat message"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary-600 text-white px-3 py-2 hover:bg-primary-700 transition-colors"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="px-4 pb-3 text-xs text-gray-500">
            Quick links: <a className="text-primary-600 hover:underline" href="/services">Services</a> · <a className="text-primary-600 hover:underline" href="/contact">Contact</a> · <a className="text-primary-600 hover:underline" href="/portfolio">Portfolio</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;






