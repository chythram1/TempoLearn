// frontend/src/lib/demo-data.ts

export const DEMO_NOTES = [
  {
    id: "demo-1",
    title: "Introduction to Machine Learning",
    course_name: "CS 229 - Machine Learning",
    status: "completed",
    uploaded_at: "2024-01-15T10:30:00Z",
    summary: `Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. This comprehensive introduction covers the fundamental concepts that form the foundation of modern ML systems.

The field is broadly divided into three main paradigms: supervised learning, unsupervised learning, and reinforcement learning. Supervised learning involves training models on labeled data, where the algorithm learns to map inputs to known outputs. Common applications include image classification, spam detection, and price prediction.

Unsupervised learning works with unlabeled data, discovering hidden patterns and structures. Clustering algorithms like K-means and hierarchical clustering group similar data points, while dimensionality reduction techniques like PCA help visualize high-dimensional data.

Key concepts include the bias-variance tradeoff, which balances model simplicity against its ability to capture complex patterns. Overfitting occurs when a model memorizes training data rather than learning generalizable patterns, while underfitting happens when the model is too simple to capture the underlying structure.`,
    key_concepts: [
      "Supervised vs Unsupervised Learning",
      "Bias-Variance Tradeoff",
      "Overfitting and Underfitting",
      "Gradient Descent Optimization",
      "Cross-Validation Techniques",
      "Feature Engineering"
    ],
    knowledge_gaps: [
      "Mathematical foundations of backpropagation",
      "Practical hyperparameter tuning strategies",
      "When to choose different model architectures"
    ],
    flashcards: [
      {
        id: "fc-1",
        front: "What is the main difference between supervised and unsupervised learning?",
        back: "Supervised learning uses labeled data with known outputs to train models, while unsupervised learning finds patterns in unlabeled data without predefined outputs.",
        difficulty: "easy"
      },
      {
        id: "fc-2",
        front: "What is overfitting and how can it be prevented?",
        back: "Overfitting occurs when a model memorizes training data instead of learning general patterns. Prevention methods include: cross-validation, regularization (L1/L2), dropout, early stopping, and using more training data.",
        difficulty: "medium"
      },
      {
        id: "fc-3",
        front: "Explain the bias-variance tradeoff.",
        back: "Bias is error from oversimplified models (underfitting). Variance is error from over-sensitive models (overfitting). The tradeoff means reducing one often increases the other. Goal: find the sweet spot that minimizes total error.",
        difficulty: "hard"
      },
      {
        id: "fc-4",
        front: "What is gradient descent?",
        back: "An optimization algorithm that iteratively adjusts model parameters by moving in the direction of steepest descent of the loss function. Learning rate controls step size. Variants include batch, stochastic (SGD), and mini-batch gradient descent.",
        difficulty: "medium"
      },
      {
        id: "fc-5",
        front: "What is cross-validation and why is it used?",
        back: "A technique to assess model performance by splitting data into multiple train/test folds. K-fold CV trains K models, each using a different fold as test set. It provides a more reliable estimate of model performance than a single train/test split.",
        difficulty: "medium"
      }
    ],
    study_questions: [
      {
        id: "sq-1",
        question: "Compare and contrast L1 and L2 regularization techniques.",
        suggested_answer: "L1 (Lasso) adds absolute value of weights to loss, promoting sparsity by driving some weights to zero - useful for feature selection. L2 (Ridge) adds squared weights, shrinking all weights but rarely to zero - better for preventing overfitting when all features are relevant.",
        question_type: "conceptual"
      },
      {
        id: "sq-2",
        question: "Design a machine learning pipeline for predicting house prices.",
        suggested_answer: "1) Data collection & cleaning, 2) EDA & feature engineering (size, location, age), 3) Split data (train/val/test), 4) Try multiple models (linear regression, random forest, XGBoost), 5) Cross-validate & tune hyperparameters, 6) Evaluate on test set using RMSE/MAE, 7) Deploy best model.",
        question_type: "application"
      }
    ],
    events: [
      {
        id: "ev-1",
        title: "ML Midterm Exam",
        event_type: "exam",
        event_date: "2025-02-15T14:00:00Z"
      },
      {
        id: "ev-2",
        title: "ML Problem Set 3 Due",
        event_type: "assignment",
        event_date: "2025-01-28T23:59:00Z"
      }
    ]
  },
  {
    id: "demo-2",
    title: "Organic Chemistry: Reaction Mechanisms",
    course_name: "CHEM 251 - Organic Chemistry",
    status: "completed",
    uploaded_at: "2024-01-14T14:20:00Z",
    summary: `Organic reaction mechanisms describe the step-by-step process by which chemical reactions occur at the molecular level. Understanding these mechanisms is crucial for predicting reaction outcomes and designing synthetic pathways.

Nucleophilic substitution reactions are among the most fundamental. SN1 reactions proceed through a carbocation intermediate and favor tertiary substrates, while SN2 reactions occur in a single concerted step and favor primary substrates. The choice of mechanism depends on substrate structure, nucleophile strength, solvent, and leaving group ability.

Elimination reactions (E1 and E2) compete with substitution reactions. E2 reactions require anti-periplanar geometry and strong bases, while E1 reactions share the carbocation intermediate with SN1. Zaitsev's rule predicts the more substituted alkene as the major product.

Addition reactions to alkenes and alkynes follow Markovnikov's rule for unsymmetrical substrates, with the electrophile adding to the less substituted carbon. Anti-Markovnikov additions occur under specific conditions like hydroboration-oxidation.`,
    key_concepts: [
      "SN1 vs SN2 Mechanisms",
      "E1 vs E2 Elimination",
      "Carbocation Stability",
      "Markovnikov's Rule",
      "Nucleophilicity vs Basicity",
      "Stereochemistry of Reactions"
    ],
    knowledge_gaps: [
      "Predicting major products in competing reactions",
      "Multi-step synthesis planning",
      "Resonance effects on reactivity"
    ],
    flashcards: [
      {
        id: "fc-6",
        front: "What factors favor SN2 over SN1?",
        back: "SN2 favored by: 1) Primary/methyl substrates (less steric hindrance), 2) Strong nucleophiles, 3) Polar aprotic solvents, 4) Good leaving groups. SN2 is bimolecular with inversion of configuration.",
        difficulty: "medium"
      },
      {
        id: "fc-7",
        front: "State Markovnikov's Rule and give an example.",
        back: "In addition of HX to unsymmetrical alkenes, H adds to the carbon with MORE hydrogens, X adds to the carbon with FEWER hydrogens. Example: propene + HBr → 2-bromopropane (not 1-bromopropane).",
        difficulty: "easy"
      },
      {
        id: "fc-8",
        front: "What is the order of carbocation stability?",
        back: "Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl. Stability increases with more alkyl groups due to hyperconjugation and inductive electron donation. Resonance-stabilized carbocations (allylic, benzylic) are even more stable.",
        difficulty: "medium"
      },
      {
        id: "fc-9",
        front: "How do you distinguish between E1 and E2 mechanisms?",
        back: "E2: Strong base, concerted (one step), anti-periplanar geometry required, rate = k[substrate][base]. E1: Weak base, two steps via carbocation, rate = k[substrate] only, competes with SN1.",
        difficulty: "hard"
      }
    ],
    study_questions: [
      {
        id: "sq-3",
        question: "Predict the products when 2-bromobutane reacts with sodium ethoxide in ethanol.",
        suggested_answer: "Competition between E2 elimination and SN2 substitution. Major product: but-2-ene (E2, Zaitsev product). Minor products: but-1-ene (E2, Hofmann) and 2-ethoxybutane (SN2). Strong base favors elimination.",
        question_type: "application"
      }
    ],
    events: [
      {
        id: "ev-3",
        title: "Organic Chemistry Quiz 4",
        event_type: "quiz",
        event_date: "2025-01-22T09:00:00Z"
      }
    ]
  },
  {
    id: "demo-3",
    title: "Macroeconomics: Monetary Policy",
    course_name: "ECON 102 - Macroeconomics",
    status: "completed",
    uploaded_at: "2024-01-13T09:15:00Z",
    summary: `Monetary policy refers to the actions taken by a central bank to manage the money supply and interest rates to achieve macroeconomic objectives like price stability, full employment, and economic growth.

The Federal Reserve uses several tools to implement monetary policy. Open market operations involve buying or selling government securities to influence the federal funds rate. When the Fed buys securities, it injects money into the banking system, lowering interest rates. The discount rate is the interest rate charged to commercial banks for borrowing from the Fed.

Expansionary monetary policy aims to stimulate economic growth during recessions by lowering interest rates and increasing the money supply. Contractionary policy combats inflation by raising rates and reducing money supply. The Taylor Rule provides a formula for setting interest rates based on inflation and output gaps.

The transmission mechanism describes how monetary policy affects the real economy. Lower interest rates encourage borrowing, investment, and consumption while making saving less attractive. This increases aggregate demand, potentially raising output and employment.`,
    key_concepts: [
      "Federal Reserve Tools",
      "Expansionary vs Contractionary Policy",
      "Interest Rate Transmission",
      "Money Multiplier Effect",
      "Taylor Rule",
      "Quantitative Easing"
    ],
    knowledge_gaps: [
      "International effects of monetary policy",
      "Limitations of monetary policy at zero lower bound",
      "Coordination with fiscal policy"
    ],
    flashcards: [
      {
        id: "fc-10",
        front: "What are the three main tools of monetary policy?",
        back: "1) Open Market Operations - buying/selling government securities. 2) Discount Rate - interest rate for bank borrowing from Fed. 3) Reserve Requirements - minimum reserves banks must hold. The Fed also uses forward guidance and quantitative easing.",
        difficulty: "easy"
      },
      {
        id: "fc-11",
        front: "Explain the money multiplier effect.",
        back: "When the Fed injects money into the banking system, banks lend out excess reserves, which get deposited in other banks, creating more loans. Multiplier = 1/reserve ratio. If reserve ratio is 10%, multiplier is 10, so $1 injection can create up to $10 in new money.",
        difficulty: "medium"
      },
      {
        id: "fc-12",
        front: "What is the Taylor Rule?",
        back: "A formula suggesting how central banks should set interest rates: i = r* + π + 0.5(π - π*) + 0.5(y - y*). Where i = nominal rate, r* = real equilibrium rate, π = inflation, π* = target inflation, y-y* = output gap.",
        difficulty: "hard"
      }
    ],
    study_questions: [
      {
        id: "sq-4",
        question: "Explain how expansionary monetary policy might help during a recession.",
        suggested_answer: "Fed lowers interest rates through open market purchases. Lower rates: 1) Reduce borrowing costs for businesses (more investment), 2) Make mortgages/car loans cheaper (more consumption), 3) Decrease returns on saving (shift to spending), 4) Depreciate currency (boost exports). This increases aggregate demand, raising output and employment.",
        question_type: "conceptual"
      }
    ],
    events: [
      {
        id: "ev-4",
        title: "Econ Final Exam",
        event_type: "exam",
        event_date: "2025-03-10T13:00:00Z"
      }
    ]
  }
];

export const getDemoNotes = () => {
  return DEMO_NOTES.map(note => ({
    id: note.id,
    title: note.title,
    course_name: note.course_name,
    status: note.status,
    uploaded_at: note.uploaded_at,
    summary_preview: note.summary.substring(0, 200) + "...",
    flashcards_count: note.flashcards.length,
    questions_count: note.study_questions.length,
    events_count: note.events.length
  }));
};

export const getDemoNote = (noteId: string) => {
  return DEMO_NOTES.find(note => note.id === noteId) || null;
};

export const getDemoFlashcards = () => {
  return DEMO_NOTES.flatMap(note => 
    note.flashcards.map(fc => ({
      ...fc,
      note_id: note.id,
      note_title: note.title
    }))
  );
};