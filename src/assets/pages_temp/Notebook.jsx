import React from 'react';

const Notebook = () => {
  const categories = [
    {
      name: 'Dev',
      notes: [
        {
          title: 'Ultimate guide to the App Router in Next.js 13',
          date: '17th Jul 2023',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'React Server Components Explained',
          date: '5th Aug 2023',
          readTime: '5 min read',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    },
    {
      name: 'Design',
      notes: [
        {
          title: 'Creating Accessible Color Systems',
          date: '12th Jun 2023',
          readTime: '6 min read',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
        }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans">
      {/* Categories */}
      <div className="space-y-8">
        <h1 className="text-5xl font-bold mb-2">Notebook</h1>
        <p className="text-gray-500 text-lg mb-12">My thoughts, insights, and reflections</p>
        {categories.map((category) => (
          <div key={category.name} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0 last:pb-0">
            {/* Category Header */}
            <div className="flex justify-between items-baseline mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h1>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {category.notes.length} note{category.notes.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Notes List */}
            <div className="space-y-8">
              {category.notes.length > 0 ? (
                category.notes.map((note, index) => (
                  <div key={index} className="group">
                    {/* Image - Now above text */}
                    <div className="w-full h-48 rounded-md overflow-hidden mb-4 border border-gray-200 dark:border-gray-700">
                      <img
                        src={note.image}
                        alt={note.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Content - Below image */}
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {note.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {note.date} — {note.readTime}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">No notes yet</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notebook;