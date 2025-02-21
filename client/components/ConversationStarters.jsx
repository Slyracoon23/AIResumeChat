import React from 'react';

const ConversationStarters = ({ sendTextMessage }) => {
  const conversationTopics = [
    {
      title: "Technical Skills",
      questions: [
        "Tell me about a challenging technical problem you've solved recently.",
        "What's your experience with cloud technologies?",
        "How do you approach learning new technologies?"
      ]
    },
    {
      title: "Work Experience",
      questions: [
        "What was your most successful project?",
        "How do you handle project deadlines?",
        "Describe your experience with agile methodologies."
      ]
    },
    {
      title: "Soft Skills",
      questions: [
        "How do you handle conflicts in a team?",
        "Tell me about a time you demonstrated leadership.",
        "How do you prioritize your work?"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Conversation Topics</h2>
      </div>
      
      <div className="space-y-6">
        {conversationTopics.map((topic, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-medium text-gray-800">{topic.title}</h3>
            <div className="space-y-2">
              {topic.questions.map((question, qIndex) => (
                <button
                  key={qIndex}
                  onClick={() => sendTextMessage(question)}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationStarters; 