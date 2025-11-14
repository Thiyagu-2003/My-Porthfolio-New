import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCw } from 'lucide-react';

const AIDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'image'>('chat');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{role: 'user' | 'ai', message: string}>>([
    {role: 'ai', message: "Hello! I'm an AI assistant. How can I help you today?"}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatInput.trim()) return;
    
    // Add user message to chat history
    setChatHistory([...chatHistory, {role: 'user', message: chatInput}]);
    
    // Simulate AI response
    setIsLoading(true);
    
    setTimeout(() => {
      const responses = [
        "I've analyzed the data and found some interesting patterns.",
        "Based on my understanding, here's what I think about your question.",
        "That's an interesting challenge. Let me propose a solution.",
        "I've processed your request and here are my findings.",
        "According to my training, the answer to your question is complex but I can explain it.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setChatHistory(prev => [...prev, {role: 'ai', message: randomResponse}]);
      setChatInput('');
      setIsLoading(false);
    }, 1500);
  };
  
  const handleImageGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imagePrompt.trim()) return;
    
    // Simulate image generation
    setImageLoading(true);
    
    setTimeout(() => {
      // Using a placeholder image from Pexels
      const placeholderImages = [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/13458329/pexels-photo-13458329.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];
      
      const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
      setGeneratedImage(randomImage);
      setImageLoading(false);
    }, 2000);
  };
  
  const resetDemo = () => {
    if (activeDemo === 'chat') {
      setChatHistory([{role: 'ai', message: "Hello! I'm an AI assistant. How can I help you today?"}]);
      setChatInput('');
    } else {
      setImagePrompt('');
      setGeneratedImage('');
    }
  };
  
  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI in Action</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the power of AI with these interactive demonstrations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeDemo === 'chat' 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveDemo('chat')}
            >
              AI Assistant
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-center font-medium ${
                activeDemo === 'image' 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveDemo('image')}
            >
              Image Generation
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {activeDemo === 'chat' ? 'AI Chat Assistant' : 'AI Image Generation'}
              </h3>
              <button 
                onClick={resetDemo}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                title="Reset Demo"
              >
                <RotateCw size={18} />
              </button>
            </div>
            
            {activeDemo === 'chat' ? (
              <div className="chat-demo">
                <div className="chat-messages bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-80 overflow-y-auto mb-4">
                  {chatHistory.map((msg, index) => (
                    <div 
                      key={index}
                      className={`mb-4 ${
                        msg.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div 
                        className={`inline-block rounded-lg px-4 py-2 max-w-xs sm:max-w-md ${
                          msg.role === 'user' 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow'
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="text-left mb-4">
                      <div className="inline-block rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input 
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask the AI something..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 disabled:bg-indigo-400"
                    disabled={isLoading || !chatInput.trim()}
                  >
                    Send
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  This is a simulated demo. No actual AI model is being used.
                </p>
              </div>
            ) : (
              <div className="image-demo">
                <form onSubmit={handleImageGenerate} className="mb-6">
                  <div className="mb-4">
                    <label htmlFor="imagePrompt" className="block text-sm font-medium mb-2">
                      Describe the image you want to generate
                    </label>
                    <textarea
                      id="imagePrompt"
                      rows={3}
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      placeholder="A futuristic city with flying cars and tall skyscrapers..."
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      disabled={imageLoading}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 disabled:bg-indigo-400 flex items-center justify-center"
                    disabled={imageLoading || !imagePrompt.trim()}
                  >
                    {imageLoading ? (
                      <>
                        <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </>
                    ) : 'Generate Image'}
                  </button>
                </form>
                
                <div className="generated-image-container">
                  {generatedImage ? (
                    <div className="text-center">
                      <div className="rounded-lg overflow-hidden shadow-md mb-4">
                        <img 
                          src={generatedImage} 
                          alt="AI Generated" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Generated based on your prompt: "{imagePrompt}"
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                      {imageLoading ? (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p>Creating your image...</p>
                        </div>
                      ) : (
                        <p>Enter a prompt and click Generate to create an image</p>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  This is a simulated demo. No actual image generation model is being used.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;