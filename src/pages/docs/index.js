'use client';

import React, { useState, useEffect } from 'react';
import { Search, Book, Code, Cpu, Users, ArrowRight, X } from 'lucide-react';

const DocCategory = ({ icon: Icon, title, description, links, isHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (!Icon) return null;
  
  return (
    <div 
      className={`border border-white/10 rounded-lg p-6 transition-all duration-300 cursor-pointer bg-black/20 h-96
        ${isHovered ? 'transform scale-[1.02] border-white/40 bg-white/5' : ''}
        ${isHighlighted ? 'ring-2 ring-white/40 transform scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-2 rounded-lg bg-white/5 transition-all duration-300 
          ${isHovered ? 'bg-white/10 transform rotate-6' : ''}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/70 mb-4 transition-colors duration-300 
        ${isHovered ? 'text-white/90' : ''}">{description}</p>
      <div className="space-y-2 h-48 overflow-y-auto pr-2 custom-scrollbar">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className="group flex items-center justify-between text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <span className="truncate mr-2">{link.title}</span>
            <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 
              ${isHovered ? 'transform translate-x-1' : ''}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute w-[200%] h-[1px] top-1/4 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-wave-slow" />
      <div className="absolute w-[200%] h-[1px] top-2/4 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-wave-slower" />
      <div className="absolute w-[200%] h-[1px] top-3/4 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-wave" />
      <div className="absolute h-[200%] w-[1px] left-1/4 bg-gradient-to-b from-transparent via-white/80 to-transparent animate-wave-vertical-slow" />
      <div className="absolute h-[200%] w-[1px] left-2/4 bg-gradient-to-b from-transparent via-white/80 to-transparent animate-wave-vertical" />
      <div className="absolute h-[200%] w-[1px] left-3/4 bg-gradient-to-b from-transparent via-white/80 to-transparent animate-wave-vertical-slower" />
    </div>
  );
};

const DocsLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);

  // Rest of the component remains the same...
  const categories = [
    {
      icon: Book,
      title: "Learn",
      description: "Get started with UOMI blockchain and understand the core concepts",
      tags: ["introduction", "basics", "core concepts", "architecture", "consensus"],
      links: [
        { title: "Introduction to UOMI", url: "https://docs.uomi.ai/" },
        { title: "Architecture Overview", url: "https://docs.uomi.ai/learn/architecture" },
        { title: "OPoC Consensus", url: "https://docs.uomi.ai/learn/security/opoc" },
        { title: "Security Model", url: "https://docs.uomi.ai/learn/security" },
        { title: "Agents", url: "https://docs.uomi.ai/learn/infrastructure/agents" }
      ]
    },
    {
      icon: Code,
      title: "Build",
      description: "Develop applications and smart contracts on UOMI",
      tags: ["development", "smart contracts", "wasm", "api", "dapps"],
      links: [
        { title: "EVM Smart Contracts", url: "https://docs.uomi.ai/build/evm-smart-contracts/introduction-to-evm-smart-contracts" },
        { title: "WASM Smart Contracts", url: "https://docs.uomi.ai/build/wasm-smart-contracts" },
      ]
    },
    {
      icon: Cpu,
      title: "Nodes",
      description: "Set up and operate a UOMI blockchain node",
      tags: ["node", "validator", "staking", "operations", "setup"],
      links: [
        { title: "Archive node", url: "https://docs.uomi.ai/build/run-a-node/run-an-archive-node" },
        { title: "Full node", url: "https://docs.uomi.ai/build/run-a-node/run-a-full-node" },
        { title: "Validator node", url: "https://docs.uomi.ai/build/run-a-node/become-a-validator/learn-about-validators" }
      ]
    },
    {
      icon: Users,
      title: "Agents",
      description: "Learn and develop agents for UOMI blockchain",
      tags: ["agents", "agenti", "agents mapping", "setup"],
      links: [
        { title: "Introduction", url: "https://docs.uomi.ai/build/build-an-agent/introduction" },
        { title: "Important notice", url: "https://docs.uomi.ai/build/build-an-agent/development" },
        { title: "WASP", url: "https://docs.uomi.ai/build/build-an-agent/installing-wasp" },
        { title: "Agents API Reference", url: "https://docs.uomi.ai/build/build-an-agent/agents-api-reference" }
      ]
    },
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter(category => {
        const searchLower = searchQuery.toLowerCase();
        return (
          category.title.toLowerCase().includes(searchLower) ||
          category.description.toLowerCase().includes(searchLower) ||
          category.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          category.links.some(link => link.title.toLowerCase().includes(searchLower))
        );
      });
      setFilteredCategories(filtered);
      setShowClearButton(true);
    } else {
      setFilteredCategories(categories);
      setShowClearButton(false);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCategories(categories);
    setShowClearButton(false);
  };

  return (
    <div 
      className="min-h-screen text-white p-8 font-sans bg-black relative overflow-hidden"
      style={{ fontFamily: "Fira Code" }}
    >
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <AnimatedBackground />
   
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-normal mb-6 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
            UOMI DOCUMENTATION
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore our comprehensive documentation to learn about UOMI blockchain technology
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className={`absolute inset-0 bg-white/5 rounded-lg blur-xl transition-all duration-300
            ${isSearchFocused ? 'opacity-100 scale-105' : 'opacity-0'}`} />
          <div className="relative z-20">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-12 
                text-white placeholder-white/40 focus:outline-none focus:border-white/30 
                focus:bg-white/10 transition-all duration-300 relative z-20"
              style={{ fontFamily: "Fira Code" }}
            />
            {showClearButton && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                  text-white/40 hover:text-white/60 transition-colors z-30"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <DocCategory 
              key={index} 
              {...category} 
              isHighlighted={searchQuery && (
                category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                category.description.toLowerCase().includes(searchQuery.toLowerCase())
              )}
            />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center text-white/60 mt-8">
            No results found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default DocsLanding;