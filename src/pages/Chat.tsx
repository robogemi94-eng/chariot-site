import { useState } from "react";
import { Search, Send, ShieldCheck, User } from "lucide-react";

export default function Chat() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [inputMessage, setInputMessage] = useState("");
  
  const [conversations] = useState([
    { id: 1, name: "Elite Plumbing", unread: 0, preview: "Hi! How can we help you today?", type: "business" },
    { id: 2, name: "Clean & Shine", unread: 2, preview: "Perfect! What time...", type: "business" },
    { id: 3, name: "Pro Landscaping", unread: 0, preview: "Thanks! See you then.", type: "business" }
  ]);

  const [messages, setMessages] = useState([
    { id: 1, sender: "business", text: "Hi! How can we help you today?", time: "10:30 AM" },
    { id: 2, sender: "user", text: "I need someone to fix a leaky faucet.", time: "10:31 AM" },
    { id: 3, sender: "business", text: "No problem! We can help with that. When works best for you?", time: "10:32 AM" }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([...messages, {
      id: Date.now(),
      sender: "user",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    
    setInputMessage("");

    // Simulate auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: "business",
        text: "Thanks for your message! We'll get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex h-[700px] max-h-[80vh]">
          
          {/* Sidebar */}
          <div className={`w-full md:w-80 border-r border-slate-200 flex flex-col bg-white shrink-0 ${activeChat ? 'hidden md:flex' : 'flex'}`}>
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Messages</h2>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search conversations..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {conversations.map(conv => (
                <div 
                  key={conv.id} 
                  onClick={() => setActiveChat(conv.id)}
                  className={`p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors flex items-center gap-3 ${activeChat === conv.id ? 'bg-slate-50' : ''}`}
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-sm font-semibold text-slate-900 truncate">{conv.name}</h3>
                      <span className="text-xs text-slate-400">2m</span>
                    </div>
                    <p className={`text-sm truncate ${conv.unread ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {conv.preview}
                    </p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {conv.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className={`flex-1 flex flex-col bg-slate-50/50 relative ${!activeChat ? 'hidden md:flex' : 'flex'}`}>
            {activeChat ? (
              <>
                <div className="p-4 bg-white border-b border-slate-200 flex items-center gap-3">
                  <button onClick={() => setActiveChat(null)} className="md:hidden text-blue-600 mr-2">
                    &larr; Back
                  </button>
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Elite Plumbing</h2>
                    <p className="text-xs text-green-600">Active now</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none'}`}>
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white border-t border-slate-200">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input 
                      type="text" 
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type a message..." 
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-colors text-sm"
                    />
                    <button 
                      type="submit" 
                      disabled={!inputMessage.trim()}
                      className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <ShieldCheck className="w-16 h-16 text-slate-300 mb-4" />
                <h2 className="text-xl font-bold text-slate-900 mb-2">Your Inbox</h2>
                <p className="text-slate-500 max-w-sm">
                  Select a conversation from the sidebar or find a business to start messaging. Securely chat directly with real local professionals.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}