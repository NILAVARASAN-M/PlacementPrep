// Core User Interface
interface User {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    role: 'student' | 'recruiter' | 'faculty' | 'admin';
    college: string;
    department?: string;
    batch?: string;
    registrationDate: Date;
    lastActive: Date;
    isVerified: boolean;
    contact: ContactInfo;
    preferences: UserPreferences;
    notifications: Notification[];
  }
  // Student-specific Interface
  interface Student extends User {
    role: 'student';
    rollNumber: string;
    batch: string;
    department: string;
    cgpa: number;
    educationDetails: EducationDetails;
    skills: Skill[];
    resume: Resume;
    applicationHistory: JobApplication[];
    problemSolvingStats: ProblemSolvingStats;
    learningPath: LearningPath;
    achievements: Achievement[];
    certifications: Certification[];
    interviewPreparation: InterviewPreparation;
    eligibility: EligibilityStatus;
  }
  // Recruiter-specific Interface
  interface Recruiter extends User {
    role: 'recruiter';
    company: Company;
    designation: string;
    jobPostings: JobPosting[];
    hiringChallenges: HiringChallenge[];
    candidateSelections: CandidateSelection[];
  }
  // Faculty-specific Interface
  interface Faculty extends User {
    role: 'faculty';
    department: string;
    designation: string;
    specialization: string[];
    studentsAssigned: string[]; // IDs of students mentored
    recruitmentResponsibilities?: string[];
  }
  // Contact Information
  interface ContactInfo {
    email: string;
    phone: string;
    alternatePhone?: string;
    address: Address;
    socialProfiles?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
      portfolio?: string;
      leetcode?: string;
      hackerrank?: string;
      codechef?: string;
    };
  }
  interface Address {
    street?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  }
  // User Preferences
  interface UserPreferences {
    theme: 'light' | 'dark' | 'system';
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    language: string;
    accessibility: {
      highContrast: boolean;
      largeText: boolean;
      screenReader: boolean;
    };
    privacy: {
      profileVisibility: 'public' | 'college' | 'recruiters' | 'private';
      resumeVisibility: 'public' | 'college' | 'recruiters' | 'private';
      achievementsVisibility: 'public' | 'college' | 'recruiters' | 'private';
    };
  }
  // Notification System
  interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: 'job' | 'application' | 'system' | 'achievement' | 'reminder';
    isRead: boolean;
    createdAt: Date;
    action?: {
      type: 'link' | 'button';
      text: string;
      url?: string;
      callback?: string;
    };
  }
  // Education Details
  interface EducationDetails {
    highSchool?: {
      name: string;
      board: string;
      percentage: number;
      yearOfCompletion: number;
    };
    intermediateSchool?: {
      name: string;
      board: string;
      percentage: number;
      yearOfCompletion: number;
    };
    undergraduate: {
      institution: string;
      degree: string;
      specialization: string;
      startYear: number;
      endYear: number;
      cgpa: number;
      currentSemester?: number;
      backlogCount?: number;
    };
    postgraduate?: {
      institution: string;
      degree: string;
      specialization: string;
      startYear: number;
      endYear: number;
      cgpa: number;
    };
    otherQualifications?: {
      title: string;
      institution: string;
      year: number;
      score?: number;
      details?: string;
    }[];
  }
  // Skills
  interface Skill {
    id: string;
    name: string;
    category: 'technical' | 'soft' | 'domain' | 'language' | 'tool';
    proficiencyLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    yearsOfExperience?: number;
    isVerified: boolean;
    endorsements?: number;
    relatedProjects?: string[];
  }
  // Resume
  interface Resume {
    id: string;
    userId: string;
    version: number;
    lastUpdated: Date;
    fileUrl: string;
    fileName: string;
    aiScore?: ResumeAIScore;
    feedback?: ResumeFeedback[];
    isApproved?: boolean;
    approvedBy?: string;
  }
  interface ResumeAIScore {
    overallScore: number;
    contentScore: number;
    formatScore: number;
    relevanceScore: number;
    areaWiseScores: {
      education: number;
      experience: number;
      skills: number;
      projects: number;
      achievements: number;
    };
    suggestedImprovements: string[];
    industryFit: {
      [industry: string]: number; // Score out of 100 for different industries
    };
    roleSpecificScores: {
      [role: string]: number; // Score out of 100 for different roles
    };
  }
  interface ResumeFeedback {
    id: string;
    providerId: string; // User ID of who provided feedback
    providerRole: 'ai' | 'faculty' | 'recruiter' | 'peer';
    date: Date;
    rating: number;
    comments: string;
    sections: {
      section: string;
      feedback: string;
      suggestions: string[];
    }[];
  }
  // Job Application
  interface JobApplication {
    id: string;
    studentId: string;
    jobId: string;
    companyId: string;
    appliedDate: Date;
    status: 'applied' | 'underReview' | 'shortlisted' | 'rejected' | 'selected' | 'onHold';
    resumeVersion: number; // References Resume.version
    coverLetter?: string;
    submittedDocuments: {
      documentType: string;
      documentUrl: string;
      uploadDate: Date;
    }[];
    applicationFeedback?: string;
    interviewSchedules?: InterviewSchedule[];
    eligibilityCheck: {
      isEligible: boolean;
      reasons?: string[];
    };
    timeline: {
      stage: string;
      timestamp: Date;
      notes?: string;
    }[];
  }
  interface InterviewSchedule {
    id: string;
    applicationId: string;
    round: number;
    roundName: string;
    date: Date;
    duration: number; // in minutes
    location?: string;
    meetingLink?: string;
    interviewers?: string[];
    status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
    feedback?: InterviewFeedback;
  }
  interface InterviewFeedback {
    id: string;
    interviewScheduleId: string;
    providerId: string;
    rating: number;
    technicalScore?: number;
    communicationScore?: number;
    problemSolvingScore?: number;
    attitudeScore?: number;
    strengths: string[];
    areasOfImprovement: string[];
    recommendationForNextRound: boolean;
    comments: string;
  }
  // Problem Solving Statistics
  interface ProblemSolvingStats {
    totalProblemsSolved: number;
    problemsByDifficulty: {
      easy: number;
      medium: number;
      hard: number;
    };
    problemsByTopic: {
      [topic: string]: number;
    };
    streakData: {
      currentStreak: number;
      longestStreak: number;
      lastActive: Date;
    };
    weeklyActivity: {
      [week: string]: number;
    };
    averageTimePerProblem: {
      overall: number; // in minutes
      byDifficulty: {
        easy: number;
        medium: number;
        hard: number;
      };
    };
    performanceMetrics: {
      consistencyScore: number;
      efficiencyScore: number;
      improvementRate: number;
    };
    competitiveRanking?: {
      platform: string;
      rank: number;
      percentile?: number;
    }[];
  }
  // Learning Path
  interface LearningPath {
    id: string;
    userId: string;
    targetRole: string;
    progress: number; // 0-100%
    modules: LearningModule[];
    recommendedSkills: Skill[];
    startDate: Date;
    estimatedCompletionDate: Date;
    completedDate?: Date;
  }
  interface LearningModule {
    id: string;
    title: string;
    description: string;
    category: string;
    progress: number; // 0-100%
    topics: {
      id: string;
      title: string;
      isCompleted: boolean;
      resources: {
        type: 'video' | 'article' | 'problem' | 'quiz';
        title: string;
        url: string;
        isCompleted: boolean;
        completedDate?: Date;
      }[];
    }[];
  }
  // Achievements & Certifications
  interface Achievement {
    id: string;
    userId: string;
    title: string;
    description: string;
    date: Date;
    category: 'academic' | 'technical' | 'extracurricular' | 'professional';
    issuer?: string;
    proofUrl?: string;
    isVerified: boolean;
  }
  interface Certification {
    id: string;
    userId: string;
    name: string;
    issuingOrganization: string;
    issueDate: Date;
    expiryDate?: Date;
    credentialId?: string;
    credentialUrl?: string;
    skills: string[];
    isVerified: boolean;
  }
  // Interview Preparation
  interface InterviewPreparation {
    id: string;
    userId: string;
    technicalPreparation: {
      topics: {
        name: string;
        confidence: number; // 0-100%
        resources: string[];
        notes: string;
      }[];
      mockInterviews: {
        date: Date;
        interviewer?: string;
        feedback: string;
        strongAreas: string[];
        improvementAreas: string[];
        rating: number;
      }[];
    };
    hrPreparation: {
      commonQuestions: {
        question: string;
        answer: string;
        confidence: number; // 0-100%
      }[];
      company: {
        companyName: string;
        research: string;
        questions: {
          question: string;
          suggestedAnswer: string;
        }[];
      }[];
    };
  }
  // Eligibility Status
  interface EligibilityStatus {
    academicCriteria: {
      cgpa: {
        required: number;
        actual: number;
        isEligible: boolean;
      };
      backlogCount: {
        maximumAllowed?: number;
        actual: number;
        isEligible: boolean;
      };
    };
    technicalCriteria?: {
      requiredSkills: {
        skill: string;
        isPresent: boolean;
      }[];
      overallEligibility: boolean;
    };
    additionalCriteria?: {
      [criterion: string]: {
        required: any;
        actual: any;
        isEligible: boolean;
      };
    };
    overallEligibility: boolean;
  }
  // Company Interface
  interface Company {
    id: string;
    name: string;
    logo: string;
    industry: string[];
    description: string;
    website: string;
    headquarters: string;
    companySize: string;
    foundedYear: number;
    contact: ContactInfo;
    hiringHistory: {
      year: number;
      college: string;
      studentsHired: number;
      averagePackage: number;
      highestPackage: number;
      departments: string[];
    }[];
    currentOpenings: string[]; // Job IDs
    recruitmentProcess: {
      stages: string[];
      averageDuration: number; // in days
      selectionCriteria: string;
    };
    reviews?: CompanyReview[];
  }
  interface CompanyReview {
    id: string;
    userId: string;
    rating: number;
    pros: string;
    cons: string;
    interviewExperience?: string;
    workCulture?: string;
    careerGrowth?: string;
    compensation?: string;
    isVerified: boolean;
    postedDate: Date;
  }
  // Job Posting
  interface JobPosting {
    id: string;
    companyId: string;
    title: string;
    description: string;
    jobType: 'fullTime' | 'internship' | 'partTime' | 'contract';
    location: string;
    isRemote: boolean;
    department: string;
    skills: string[];
    experience: {
      minimum: number;
      maximum?: number;
    };
    qualification: string[];
    salary: {
      minimum: number;
      maximum?: number;
      currency: string;
    };
    perks: string[];
    applicationDeadline: Date;
    startDate?: Date;
    eligibilityCriteria: {
      cgpa: number;
      backlogsAllowed: number;
      departments: string[];
      batch: string[];
      additionalRequirements?: string;
    };
    applicationProcess: {
      stages: string[];
      currentStage: string;
    };
    createdAt: Date;
    updatedAt: Date;
    status: 'active' | 'closed' | 'draft' | 'upcoming';
    applicantCount: number;
    selectedCandidates?: string[];
  }
  // Hiring Challenge
  interface HiringChallenge {
    id: string;
    companyId: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    eligibility: {
      departments: string[];
      batches: string[];
      cgpa: number;
    };
    rounds: {
      roundNumber: number;
      title: string;
      description: string;
      type: 'coding' | 'aptitude' | 'interview' | 'casestudy';
      duration: number; // in minutes
      problems?: string[]; // Problem IDs
    }[];
    prizes?: {
      rank: number;
      description: string;
      value?: number;
    }[];
    registrations: {
      userId: string;
      registrationDate: Date;
      status: 'registered' | 'participated' | 'qualified' | 'disqualified';
    }[];
    jobRole?: string;
    relatedJobPosting?: string; // Job ID
  }
  // Candidate Selection
  interface CandidateSelection {
    id: string;
    jobId: string;
    companyId: string;
    studentId: string;
    selectionDate: Date;
    status: 'offered' | 'accepted' | 'declined' | 'onboarded';
    offerDetails: {
      role: string;
      package: number;
      currency: string;
      joiningDate?: Date;
      location: string;
      additionalBenefits?: string[];
    };
    feedback?: string;
  }
  // Problem Interface (for coding challenges)
  interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    timeLimit: number; // in milliseconds
    memoryLimit: number; // in KB
    tags: string[];
    companies: string[]; // Companies that have asked this
    acceptanceRate: number;
    constraints: string;
    examples: {
      input: string;
      output: string;
      explanation?: string;
    }[];
    hints?: string[];
    solution?: {
      approach: string;
      timeComplexity: string;
      spaceComplexity: string;
      code: {
        language: string;
        implementation: string;
      }[];
    };
    testCases: {
      input: string;
      output: string;
      isHidden: boolean;
    }[];
    userSubmissions?: {
      userId: string;
      submissionDate: Date;
      language: string;
      code: string;
      status: 'accepted' | 'wrong' | 'tle' | 'mle' | 'error';
      executionTime?: number;
      memoryUsed?: number;
    }[];
  }
  // Blog Post
  interface BlogPost {
    id: string;
    authorId: string;
    title: string;
    content: string;
    tags: string[];
    category: 'interview-experience' | 'problem-solution' | 'placement-tips' | 'technology' | 'company-insights';
    publishDate: Date;
    lastUpdated: Date;
    status: 'draft' | 'published' | 'archived';
    featuredImage?: string;
    views: number;
    likes: number;
    comments: {
      userId: string;
      comment: string;
      date: Date;
      likes: number;
    }[];
    isVerified: boolean;
    relatedResources?: {
      type: 'problem' | 'company' | 'job' | 'blog';
      id: string;
    }[];
  }
  // AI Assistant Interactions
  interface AIAssistant {
    id: string;
    userId: string;
    conversations: {
      id: string;
      title: string;
      createdAt: Date;
      lastUpdated: Date;
      messages: {
        sender: 'user' | 'assistant';
        content: string;
        timestamp: Date;
        attachments?: {
          type: string;
          url: string;
        }[];
      }[];
      context?: {
        problemId?: string;
        pageLocation?: string;
        previousInteractions?: string[];
      };
    }[];
    preferences: {
      assistantModel: 'gemini' | 'llama3' | 'auto';
      responseLength: 'concise' | 'detailed';
      codeExplanations: boolean;
      suggestionsEnabled: boolean;
    };
    savedResponses: {
      id: string;
      title: string;
      response: string;
      category: string;
      savedDate: Date;
    }[];
  }
  // Analytics
  interface Analytics {
    collegeWideStats: {
      totalPlacements: number;
      averagePackage: number;
      highestPackage: number;
      placementPercentage: number;
      departmentWiseStats: {
        [department: string]: {
          totalStudents: number;
          placedStudents: number;
          averagePackage: number;
          highestPackage: number;
        };
      };
      yearWiseTrends: {
        [year: string]: {
          totalPlacements: number;
          averagePackage: number;
          highestPackage: number;
          placementPercentage: number;
        };
      };
      topRecruiters: {
        companyId: string;
        hiringCount: number;
        averagePackage: number;
      }[];
    };
    
    studentAnalytics: {
      userId: string;
      performanceMetrics: {
        problemSolvingScore: number;
        consistencyScore: number;
        technicalReadiness: number;
        interviewReadiness: number;
        overallReadiness: number;
      };
      skillGaps: {
        skill: string;
        importance: number;
        currentLevel: number;
        targetLevel: number;
      }[];
      recommendations: {
        type: 'skill' | 'problem' | 'company' | 'resource';
        title: string;
        reason: string;
        priority: number;
      }[];
      comparativeAnalysis: {
        percentile: number;
        strongAreas: string[];
        improvementAreas: string[];
      };
    };
    
    companyAnalytics: {
      companyId: string;
      hiringTrends: {
        [year: string]: {
          hiringCount: number;
          averagePackage: number;
          departmentsHired: {
            [department: string]: number;
          };
        };
      };
      skillDemand: {
        skill: string;
        demandScore: number;
        trend: 'increasing' | 'decreasing' | 'stable';
      }[];
      selectionRatios: {
        appliedCount: number;
        shortlistedCount: number;
        selectedCount: number;
      };
    };
  }
  // User Activity Log
  interface ActivityLog {
    id: string;
    userId: string;
    action: string;
    timestamp: Date;
    details: {
      page?: string;
      resource?: {
        type: string;
        id: string;
      };
      duration?: number; // In seconds
      result?: any;
    };
    ipAddress?: string;
    deviceInfo?: string;
  }