import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2 } from 'lucide-react';
import { findBestMatch } from './qaDatabase';
import { useTranslation } from './translations';

const AIChatbot = ({ userRole = 'student', language = 'en' }) => {
    const { t } = useTranslation(language);
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [position, setPosition] = useState({ x: window.innerWidth - 420, y: window.innerHeight - 650 });
    const [size, setSize] = useState({ width: 384, height: 600 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: t('chatWelcome'),
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const chatboxRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Dragging functionality
    const handleMouseDown = (e) => {
        if (e.target.closest('.chat-header')) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    const quickReplies = [
        t('quickReply1'),
        t('quickReply2'),
        t('quickReply3'),
        t('quickReply4')
    ];

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            type: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            // Build conversation context
            const conversationHistory = messages.slice(-5).map(m => `${m.type === 'user' ? 'User' : 'Bot'}: ${m.text}`).join('\n');

            // Check for greetings
            const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'bonjour', 'salut'];
            const isGreeting = greetings.some(g => currentInput.toLowerCase().includes(g));

            // Check for meta questions
            const metaQuestions = ['what did i ask', 'what was my question', 'what did i say', 'previous question', 'my last question'];
            const isMetaQuestion = metaQuestions.some(q => currentInput.toLowerCase().includes(q));

            let botResponse;

            if (isGreeting) {
                botResponse = {
                    type: 'bot',
                    text: t('chatGreeting'),
                    timestamp: new Date()
                };
            } else if (isMetaQuestion) {
                const lastUserMessage = messages.filter(m => m.type === 'user').slice(-1)[0];
                botResponse = {
                    type: 'bot',
                    text: lastUserMessage
                        ? t('chatMetaResponse').replace('{question}', lastUserMessage.text)
                        : t('chatMetaFirst'),
                    timestamp: new Date()
                };
            } else {
                // Try Q&A database
                const match = findBestMatch(currentInput, userRole);

                if (match) {
                    botResponse = {
                        type: 'bot',
                        text: match.a + `\n\n💡 ${t('chatAnythingElse')}`,
                        relatedQuestion: match.q,
                        timestamp: new Date()
                    };
                } else {
                    // Intelligent fallback
                    const topics = {
                        'cost': t('topicFinancialAid'),
                        'money': t('topicMoney'),
                        'class': t('topicClass'),
                        'live': t('topicLive'),
                        'dorm': t('topicDorm'),
                        'food': t('topicFood'),
                        'job': t('topicJob'),
                        'work': t('topicWork'),
                        'club': t('topicClub'),
                        'sport': t('topicSport'),
                        'health': t('topicHealth'),
                        'wifi': t('topicWifi'),
                        'library': t('topicLibrary'),
                        'parking': t('topicParking')
                    };

                    let suggestedTopic = null;
                    for (const [keyword, topic] of Object.entries(topics)) {
                        if (currentInput.toLowerCase().includes(keyword)) {
                            suggestedTopic = topic;
                            break;
                        }
                    }

                    botResponse = {
                        type: 'bot',
                        text: suggestedTopic
                            ? t('chatFallbackWithTopic').replace('{topic}', suggestedTopic).replace('{question}', currentInput)
                            : t('chatFallbackGeneral').replace('{question}', currentInput),
                        timestamp: new Date()
                    };
                }
            }

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleQuickReply = (reply) => {
        setInputValue(reply);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-[1000]"
                aria-label="Open chat"
            >
                <MessageCircle className="w-6 h-6" />
            </button>
        );
    }

    if (isMinimized) {
        return (
            <div
                className="fixed bg-white rounded-lg shadow-xl z-[1000] cursor-move"
                style={{ left: `${position.x}px`, top: `${position.y}px`, width: '320px' }}
                onMouseDown={handleMouseDown}
            >
                <div className="chat-header flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg cursor-move">
                    <div className="flex items-center space-x-2">
                        <Bot className="w-5 h-5" />
                        <span className="font-semibold">{t('chatbotTitle')}</span>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => setIsMinimized(false)} className="hover:bg-blue-700 p-1 rounded">
                            <Maximize2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={chatboxRef}
            className="fixed bg-white rounded-lg shadow-2xl z-[1000] flex flex-col resize overflow-hidden"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                minWidth: '320px',
                minHeight: '400px',
                maxWidth: '600px',
                maxHeight: '800px'
            }}
        >
            {/* Header */}
            <div
                className="chat-header flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg cursor-move"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center space-x-2">
                    <Bot className="w-6 h-6" />
                    <div>
                        <div className="font-semibold">{t('chatbotTitle')}</div>
                        <div className="text-xs text-blue-100">{t('poweredByAI')} • {userRole.charAt(0).toUpperCase() + userRole.slice(1)} {userRole === 'student' ? t('studentMode').replace('Mode ', '') : t('adminMode').replace('Mode ', '')}</div>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button onClick={() => setIsMinimized(true)} className="hover:bg-blue-800 p-1 rounded transition">
                        <Minimize2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded transition">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`p-2 rounded-full ${msg.type === 'user' ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-700" />}
                            </div>
                            <div>
                                <div className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'}`}>
                                    {msg.relatedQuestion && (
                                        <div className="text-xs font-semibold mb-1 text-blue-600">Re: {msg.relatedQuestion}</div>
                                    )}
                                    <div className="text-sm whitespace-pre-line">{msg.text}</div>
                                </div>
                                <div className="text-xs text-gray-400 mt-1 px-1">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                            <div className="p-2 rounded-full bg-gray-300">
                                <Bot className="w-4 h-4 text-gray-700" />
                            </div>
                            <div className="bg-white border border-gray-200 p-3 rounded-lg">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-gray-200 bg-white">
                    <div className="text-xs text-gray-500 mb-2">{t('quickQuestions')}</div>
                    <div className="flex flex-wrap gap-2">
                        {quickReplies.map((reply, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickReply(reply)}
                                className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={t('askAnything')}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-xs text-gray-400 mt-2 text-center">
                    {t('poweredByAIFooter')}
                </div>
            </div>
        </div>
    );
};

export default AIChatbot;
