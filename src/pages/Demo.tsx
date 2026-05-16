import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Circle, 
  Clock, 
  User, 
  DollarSign, 
  Bell,
  Settings,
  MoreVertical,
  PlusCircle,
  LayoutDashboard,
  MessageSquare
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Task {
  id: string;
  title: string;
  assignee: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export default function Demo() {
  const { t } = useLanguage();
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('demo_tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', title: 'Buy groceries for Khmer New Year', assignee: 'Mom', completed: false, priority: 'high' },
      { id: '2', title: 'Pick up kids from school', assignee: 'Dad', completed: true, priority: 'medium' },
      { id: '3', title: 'Clean the living room', assignee: 'Sokha', completed: false, priority: 'low' },
    ];
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');

  React.useEffect(() => {
    localStorage.setItem('demo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      assignee: 'Me',
      completed: false,
      priority: 'medium',
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const dashboardStats = [
    { label: 'Upcoming Events', value: '4', icon: <CalendarIcon className="w-5 h-5" />, color: 'text-blue-500 bg-blue-50' },
    { label: 'Pending Tasks', value: tasks.filter(t => !t.completed).length.toString(), icon: <CheckCircle2 className="w-5 h-5" />, color: 'text-orange-500 bg-orange-50' },
    { label: 'Family Budget', value: '$1,240', icon: <DollarSign className="w-5 h-5" />, color: 'text-green-500 bg-green-50' },
    { label: 'Unread Messages', value: '12', icon: <MessageSquare className="w-5 h-5" />, color: 'text-purple-500 bg-purple-50' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFCFB] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Demo Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D3436] mb-4">{t('demo.title')}</h1>
          <p className="text-[#636E72]">{t('demo.subtitle')}</p>
        </div>

        {/* Dashboard Simulation Container */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-[#E5E1DA] overflow-hidden flex flex-col md:flex-row h-[800px]">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#2D3436] p-6 flex flex-col hidden md:flex">
            <div className="flex items-center gap-3 mb-10 px-2">
              <div className="w-8 h-8 bg-[#FF8A65] rounded-lg" />
              <span className="text-white font-bold">Family Space</span>
            </div>
            
            <nav className="space-y-2">
              {[
                { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', active: true },
                { icon: <CalendarIcon className="w-5 h-5" />, label: 'Calendar' },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Tasks' },
                { icon: <DollarSign className="w-5 h-5" />, label: 'Budget' },
                { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat' },
                { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    item.active ? "bg-[#FF8A65] text-white shadow-lg shadow-orange-900/30" : "text-[#B2BEC3] hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-auto">
               <div className="bg-white/5 rounded-2xl p-4">
                 <p className="text-xs text-[#B2BEC3] mb-2 uppercase tracking-widest font-bold">Family Members</p>
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-[#2D3436]" referrerPolicy="no-referrer" />
                   ))}
                   <button className="w-8 h-8 rounded-full border-2 border-dashed border-[#B2BEC3] flex items-center justify-center text-[#B2BEC3]">
                     <Plus className="w-4 h-4" />
                   </button>
                 </div>
               </div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="flex-1 bg-[#F9FAFB] overflow-y-auto p-4 md:p-8">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-bold text-[#2D3436]">Dashboard</h2>
               <div className="flex items-center gap-4">
                 <button className="p-2 bg-white rounded-xl border border-gray-200 text-gray-500 relative">
                   <Bell className="w-5 h-5" />
                   <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                 </button>
                 <div className="flex items-center gap-3">
                   <img src="https://i.pravatar.cc/100?u=me" className="w-10 h-10 rounded-xl" referrerPolicy="no-referrer" />
                   <div className="hidden sm:block">
                     <div className="text-sm font-bold">Dara Hean</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase">Super Parent</div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {dashboardStats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className={cn("inline-flex p-2 rounded-lg mb-4", stat.color)}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#2D3436] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#636E72] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Task Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                   <div className="flex justify-between items-center mb-6">
                     <h3 className="text-lg font-bold">Family Chore List</h3>
                     <button className="text-[#FF8A65] text-sm font-bold flex items-center gap-1">
                       View All <ArrowRight className="w-4 h-4" />
                     </button>
                   </div>
                   
                   <div className="flex gap-2 mb-6">
                     <input 
                       type="text" 
                       value={newTaskTitle}
                       onChange={(e) => setNewTaskTitle(e.target.value)}
                       onKeyPress={(e) => e.key === 'Enter' && addTask()}
                       placeholder="Add a new chore..." 
                       className="flex-1 bg-gray-50 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-orange-200 transition-all"
                     />
                     <button 
                      onClick={addTask}
                      className="bg-[#FF8A65] text-white px-4 py-2 rounded-xl hover:bg-[#E76F51] transition-all"
                     >
                       <PlusCircle className="w-6 h-6" />
                     </button>
                   </div>

                   <div className="space-y-3">
                     <AnimatePresence mode="popLayout">
                       {tasks.map((task) => (
                         <motion.div
                           key={task.id}
                           layout
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           onClick={() => toggleTask(task.id)}
                           className={cn(
                             "flex items-center justify-between p-4 rounded-xl border group cursor-pointer transition-all",
                             task.completed ? "bg-gray-50 border-gray-100" : "bg-white border-gray-100 hover:border-orange-200"
                           )}
                         >
                           <div className="flex items-center gap-4">
                             {task.completed ? (
                               <CheckCircle2 className="w-5 h-5 text-green-500" />
                             ) : (
                               <Circle className="w-5 h-5 text-gray-300 transition-colors group-hover:text-orange-300" />
                             )}
                             <div>
                               <p className={cn(
                                 "text-sm font-medium transition-all",
                                 task.completed ? "text-gray-400 line-through" : "text-[#2D3436]"
                               )}>{task.title}</p>
                               <div className="flex items-center gap-2 mt-1">
                                 <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-500 font-bold uppercase">{task.assignee}</span>
                                 <span className={cn(
                                   "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase",
                                   task.priority === 'high' ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"
                                 )}>{task.priority}</span>
                               </div>
                             </div>
                           </div>
                           <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-lg transition-all">
                             <MoreVertical className="w-4 h-4 text-gray-400" />
                           </button>
                         </motion.div>
                       ))}
                     </AnimatePresence>
                   </div>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                
                {/* Upcoming Events */}
                <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                   <h3 className="text-lg font-bold mb-6">Upcoming</h3>
                   <div className="space-y-4">
                     {[
                       { color: 'bg-orange-500', title: 'Khmer New Year', time: 'April 14-16', desc: 'Family Vacation' },
                       { color: 'bg-blue-500', title: 'Music Class', time: 'Tomorrow, 4:00 PM', desc: 'Dara & Sopheap' },
                       { color: 'bg-green-500', title: 'Dinner with Grandparents', time: 'Sunday, 6:00 PM', desc: 'Brown Coffee' },
                     ].map((event, i) => (
                       <div key={i} className="flex gap-4">
                         <div className={cn("w-1 h-12 rounded-full", event.color)} />
                         <div>
                           <div className="text-sm font-bold">{event.title}</div>
                           <div className="text-xs text-blue-500 font-medium mb-1">{event.time}</div>
                           <div className="text-xs text-gray-400">{event.desc}</div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Quick Chat Teaser */}
                <div className="bg-gradient-to-br from-[#2D3436] to-[#636E72] p-6 rounded-[24px] text-white">
                   <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold">Chat Activity</h3>
                     <span className="text-[10px] bg-red-500 px-2 py-0.5 rounded-full text-white font-bold uppercase">Live</span>
                   </div>
                   <div className="space-y-4">
                     <div className="flex gap-3">
                       <img src="https://i.pravatar.cc/100?u=mom" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                       <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none">
                         <p className="text-xs">Don't forget to take the keys! 🔑</p>
                       </div>
                     </div>
                   </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        
        {/* Call to Action below Demo */}
        <div className="mt-12 text-center">
           <p className="text-[#636E72] mb-6 font-medium italic">"This interactive demo simulates exactly how the mobile and web app feel."</p>
           <button className="px-10 py-5 bg-[#FF8A65] text-white rounded-full text-lg font-bold hover:bg-[#E76F51] transition-all shadow-xl shadow-orange-200">
             Build your real family account now
           </button>
        </div>

      </div>
    </div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
