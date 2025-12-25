'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Brain, 
  ChevronRight,
  FileText,
  Sparkles,
  Calendar,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';
import { getDemoNotes, getDemoNote, DEMO_NOTES } from '@/lib/demo-data';

export default function DemoPage() {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'summary' | 'flashcards' | 'questions'>('summary');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const notes = getDemoNotes();
  const selectedNote = selectedNoteId ? getDemoNote(selectedNoteId) : null;

  // Flashcard navigation
  const flashcards = selectedNote?.flashcards || [];
  const currentCard = flashcards[currentCardIndex];

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment-50 to-white">
      {/* Header */}
      <header className="border-b border-parchment-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="font-display text-xl text-ink-900">TempoLearn</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Demo Mode
              </span>
              <Link href="/" className="text-ink-600 hover:text-ink-900 text-sm">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Demo Banner */}
        <div className="mb-8 p-4 bg-gradient-to-r from-accent/10 to-purple-100 rounded-xl border border-accent/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent mt-0.5" />
            <div>
              <h2 className="font-medium text-ink-900">Welcome to the Demo!</h2>
              <p className="text-sm text-ink-600 mt-1">
                Explore pre-processed notes with AI-generated summaries, flashcards, and study questions. 
                No account or API key required.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notes List */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-lg text-ink-900 mb-4">Sample Notes</h2>
            <div className="space-y-3">
              {notes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => {
                    setSelectedNoteId(note.id);
                    setActiveTab('summary');
                    setCurrentCardIndex(0);
                    setShowAnswer(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedNoteId === note.id
                      ? 'border-accent bg-accent/5 shadow-sm'
                      : 'border-parchment-200 bg-white hover:border-parchment-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedNoteId === note.id ? 'bg-accent/20' : 'bg-parchment-100'
                    }`}>
                      <FileText className={`w-5 h-5 ${
                        selectedNoteId === note.id ? 'text-accent' : 'text-ink-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-ink-900 truncate">{note.title}</h3>
                      <p className="text-sm text-ink-500 truncate">{note.course_name}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-ink-400">
                        <span className="flex items-center gap-1">
                          <Brain className="w-3 h-3" />
                          {note.flashcards_count} cards
                        </span>
                        <span className="flex items-center gap-1">
                          <HelpCircle className="w-3 h-3" />
                          {note.questions_count} questions
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${
                      selectedNoteId === note.id ? 'text-accent' : 'text-ink-300'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Note Detail */}
          <div className="lg:col-span-2">
            {selectedNote ? (
              <div className="bg-white rounded-xl border border-parchment-200 overflow-hidden">
                {/* Note Header */}
                <div className="p-6 border-b border-parchment-200">
                  <h1 className="font-display text-2xl text-ink-900">{selectedNote.title}</h1>
                  <p className="text-ink-500 mt-1">{selectedNote.course_name}</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-parchment-200">
                  {[
                    { id: 'summary', label: 'Summary', icon: FileText },
                    { id: 'flashcards', label: 'Flashcards', icon: Brain },
                    { id: 'questions', label: 'Questions', icon: HelpCircle },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-accent text-accent'
                          : 'border-transparent text-ink-500 hover:text-ink-700'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'summary' && (
                    <div className="space-y-6">
                      {/* Summary */}
                      <div>
                        <h3 className="font-medium text-ink-900 mb-3">AI Summary</h3>
                        <div className="prose prose-ink max-w-none">
                          {selectedNote.summary.split('\n\n').map((para, i) => (
                            <p key={i} className="text-ink-700 mb-4">{para}</p>
                          ))}
                        </div>
                      </div>

                      {/* Key Concepts */}
                      <div>
                        <h3 className="font-medium text-ink-900 mb-3">Key Concepts</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedNote.key_concepts.map((concept, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Knowledge Gaps */}
                      <div>
                        <h3 className="font-medium text-ink-900 mb-3">Areas to Review</h3>
                        <ul className="space-y-2">
                          {selectedNote.knowledge_gaps.map((gap, i) => (
                            <li key={i} className="flex items-start gap-2 text-ink-600">
                              <span className="text-amber-500 mt-1">•</span>
                              {gap}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Events */}
                      {selectedNote.events.length > 0 && (
                        <div>
                          <h3 className="font-medium text-ink-900 mb-3">Upcoming Events</h3>
                          <div className="space-y-2">
                            {selectedNote.events.map((event) => (
                              <div
                                key={event.id}
                                className="flex items-center gap-3 p-3 bg-parchment-50 rounded-lg"
                              >
                                <Calendar className="w-5 h-5 text-accent" />
                                <div>
                                  <p className="font-medium text-ink-900">{event.title}</p>
                                  <p className="text-sm text-ink-500">
                                    {new Date(event.event_date).toLocaleDateString('en-US', {
                                      weekday: 'long',
                                      month: 'long',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                    })}
                                  </p>
                                </div>
                                <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
                                  event.event_type === 'exam' 
                                    ? 'bg-red-100 text-red-700'
                                    : event.event_type === 'quiz'
                                    ? 'bg-orange-100 text-orange-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {event.event_type}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'flashcards' && currentCard && (
                    <div className="space-y-6">
                      {/* Progress */}
                      <div className="flex items-center justify-between text-sm text-ink-500">
                        <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          currentCard.difficulty === 'easy' 
                            ? 'bg-green-100 text-green-700'
                            : currentCard.difficulty === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {currentCard.difficulty}
                        </span>
                      </div>

                      {/* Flashcard */}
                      <div
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="min-h-[300px] p-8 bg-gradient-to-br from-parchment-50 to-white rounded-xl border-2 border-parchment-200 cursor-pointer hover:shadow-lg transition-all flex flex-col items-center justify-center text-center"
                      >
                        {!showAnswer ? (
                          <>
                            <p className="text-xs text-ink-400 uppercase tracking-wide mb-4">Question</p>
                            <p className="text-xl text-ink-900 font-medium">{currentCard.front}</p>
                            <p className="text-sm text-ink-400 mt-6">Click to reveal answer</p>
                          </>
                        ) : (
                          <>
                            <p className="text-xs text-accent uppercase tracking-wide mb-4">Answer</p>
                            <p className="text-lg text-ink-700">{currentCard.back}</p>
                          </>
                        )}
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={prevCard}
                          className="px-4 py-2 text-ink-600 hover:text-ink-900 transition-colors"
                        >
                          ← Previous
                        </button>
                        <button
                          onClick={nextCard}
                          className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'questions' && (
                    <div className="space-y-6">
                      {selectedNote.study_questions.map((q, i) => (
                        <div key={q.id} className="p-4 bg-parchment-50 rounded-xl">
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-medium">
                              {i + 1}
                            </span>
                            <div className="flex-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                q.question_type === 'conceptual'
                                  ? 'bg-purple-100 text-purple-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {q.question_type}
                              </span>
                              <p className="font-medium text-ink-900 mt-2">{q.question}</p>
                              <details className="mt-3">
                                <summary className="text-sm text-accent cursor-pointer hover:underline">
                                  Show suggested answer
                                </summary>
                                <p className="mt-2 text-ink-600 text-sm pl-4 border-l-2 border-accent/30">
                                  {q.suggested_answer}
                                </p>
                              </details>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-parchment-200 p-12 text-center">
                <BookOpen className="w-16 h-16 text-ink-200 mx-auto mb-4" />
                <h2 className="font-display text-xl text-ink-900 mb-2">Select a Note</h2>
                <p className="text-ink-500">
                  Choose a sample note from the left to explore AI-generated study materials.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-accent/10 to-purple-100 rounded-xl">
          <h2 className="font-display text-2xl text-ink-900 mb-2">Ready to try with your own notes?</h2>
          <p className="text-ink-600 mb-6">Sign up to upload your lecture notes and generate personalized study materials.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            Get Started Free
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}