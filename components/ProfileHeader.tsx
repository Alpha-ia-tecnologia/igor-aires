import React from 'react';
import { motion } from 'framer-motion';
import { ProfileData } from '../types';
import { MapPin, CheckCircle2 } from 'lucide-react';

interface ProfileHeaderProps {
  profile: ProfileData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center text-center relative z-10 mb-8 pt-6">
      {/* Avatar Container with Glow */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative group mb-5"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative w-32 h-32 rounded-full p-1 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl">
           <img 
            src={profile.avatarUrl} 
            alt={profile.name}
            width={128}
            height={128}
            fetchPriority="high"
            className="w-full h-full object-cover rounded-full"
           />
        </div>
      </motion.div>

      {/* Name, Role and Online Badge Group */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 relative">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {profile.name}
            </h1>
            <CheckCircle2 size={20} className="text-primary-500" fill="currentColor" color="#000" />
            
            {/* New Position for Online Badge - Floating next to name */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Online</span>
            </div>
        </div>
        
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
          {profile.role}
        </p>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs mx-auto pt-2 leading-relaxed">
          {profile.bio}
        </p>
      </motion.div>

      {/* Mini location badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-500 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full"
      >
        <MapPin size={10} />
        <span>{profile.location.city}</span>
      </motion.div>
    </div>
  );
};

export default ProfileHeader;