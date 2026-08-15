import { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, HelpCircle } from 'lucide-react';

export default function CreativeTerminal({ toggleTheme, playSound }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      command: 'welcome',
      output: '👋 Welcome to the Interactive Portfolio Terminal v2.5!\nType "help" to see available commands or click the action chips below.',
    },
  ]);
  const [matrixMode, setMatrixMode] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    playSound?.();
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = '';

    switch (cleanCmd) {
      case 'help':
        output =
          'Available Commands:\n' +
          '• help     : Show list of commands\n' +
          '• about    : Display developer bio\n' +
          '• skills   : List technical stack\n' +
          '• projects : View highlighted projects\n' +
          '• contact  : Show contact details\n' +
          '• theme    : Toggle Dark / Light mode\n' +
          '• matrix   : Toggle matrix digital rain effect\n' +
          '• clear    : Clear terminal screen';
        break;
      case 'about':
        output = '👨‍💻 Creative Full-Stack React Engineer with 5+ years of experience crafting modern glassmorphic web apps.';
        break;
      case 'skills':
        output = '⚡ Core Stack: React 19, Vite, TypeScript, Next.js, Node.js, CSS3 Design Systems, Canvas API, REST/GraphQL.';
        break;
      case 'projects':
        output = '🚀 Nexus AI Hub | Aetheria Web3 Portal | PinterArt Canvas | DevPulse Snippets | VibeStream Audio.';
        break;
      case 'contact':
        output = '📧 Email: alex.dev@example.com\n🌐 GitHub: github.com\n💼 LinkedIn: linkedin.com';
        break;
      case 'theme':
        toggleTheme();
        output = '🎨 Theme toggled successfully!';
        break;
      case 'matrix':
        setMatrixMode(!matrixMode);
        output = matrixMode ? '🔴 Matrix rain disabled.' : '🟢 Matrix rain mode activated!';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo':
        output = '🔒 Permission denied: User is not in the sudoers file. This incident will be reported!';
        break;
      case 'quote':
        output = '💡 "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra';
        break;
      default:
        output = `Command not recognized: "${cleanCmd}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="section-container">
      <h2 className="section-title">
        Interactive <span className="gradient-text">Terminal CLI</span>
      </h2>
      <p className="section-subtitle">
        Type commands directly to explore my background, stack, and easter eggs interactively.
      </p>

      <div className={`terminal-wrapper ${matrixMode ? 'matrix-active' : ''}`}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="terminal-title">
            <Terminal size={14} style={{ display: 'inline', marginRight: '6px' }} />
            guest@portfolio-cli: ~
          </div>
          <button
            className="icon-btn"
            style={{ width: '28px', height: '28px' }}
            onClick={() => handleCommand('clear')}
            title="Clear Terminal"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="terminal-body">
          {history.map((item, index) => (
            <div key={index} className="terminal-line">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="prompt-symbol">guest@dev:~$</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{item.command}</span>
              </div>
              {item.output && (
                <div
                  className="terminal-output"
                  style={{ color: matrixMode ? '#00ff66' : 'var(--accent-cyan)' }}
                >
                  {item.output}
                </div>
              )}
            </div>
          ))}

          <form onSubmit={onSubmit} className="terminal-input-form">
            <span className="prompt-symbol">guest@dev:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'skills', 'matrix')..."
              className="terminal-input"
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Chips */}
        <div className="quick-chips">
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', alignSelf: 'center', marginRight: '4px' }}>
            Quick run:
          </span>
          {['help', 'about', 'skills', 'projects', 'contact', 'matrix', 'quote', 'clear'].map((cmd) => (
            <button key={cmd} className="chip-btn" onClick={() => handleCommand(cmd)}>
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
